export interface SeoData {
  title?: string;
  description?: string;
  og_title?: string;
  og_description?: string;
  og_image?: string;
  og_url?: string;
  og_type?: string;
  twitter_card?: string;
  twitter_title?: string;
  twitter_description?: string;
  twitter_image?: string;
  keywords?: string;
  robots?: string;
  canonical?: string;
  author?: string;
}

export interface ContactData {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  message: string;
}

export interface TeamMemberData {
  name: string;
  position: string;
  image?: string;
  bio?: string;
  email?: string;
  linkedin_url?: string;
  sort_order?: number;
}

export interface PartnerData {
  name: string;
  role?: string;
  body?: string;
  logo?: string;
  href?: string;
}

export interface FaqData {
  title: string; // Question
  description: string; // Answer
}

/**
 * Fetch SEO metadata for a specific slug/page (using static fallback)
 */
export async function fetchSeoMetadata(slug: string, fallback: SeoData): Promise<SeoData> {
  return fallback;
}

/**
 * Maps SeoData structure to TanStack Start head meta format
 */
export function mapSeoToMeta(seo: SeoData) {
  const metaTags: any[] = [];
  if (seo.title) metaTags.push({ title: seo.title });
  if (seo.description) metaTags.push({ name: "description", content: seo.description });
  if (seo.keywords) metaTags.push({ name: "keywords", content: seo.keywords });
  if (seo.robots) metaTags.push({ name: "robots", content: seo.robots });
  if (seo.author) metaTags.push({ name: "author", content: seo.author });
  
  if (seo.og_title) metaTags.push({ property: "og:title", content: seo.og_title });
  if (seo.og_description) metaTags.push({ property: "og:description", content: seo.og_description });
  if (seo.og_image) metaTags.push({ property: "og:image", content: seo.og_image });
  if (seo.og_url) metaTags.push({ property: "og:url", content: seo.og_url });
  if (seo.og_type) metaTags.push({ property: "og:type", content: seo.og_type });

  if (seo.twitter_card) metaTags.push({ name: "twitter:card", content: seo.twitter_card });
  if (seo.twitter_title) metaTags.push({ name: "twitter:title", content: seo.twitter_title });
  if (seo.twitter_description) metaTags.push({ name: "twitter:description", content: seo.twitter_description });
  if (seo.twitter_image) metaTags.push({ name: "twitter:image", content: seo.twitter_image });

  return metaTags;
}

/**
 * Submit contact form details.
 * Submits directly to the Vision API endpoint. Otherwise, it stores submissions locally.
 */
export async function sendContactForm(data: ContactData): Promise<{ success: boolean; message?: string }> {
  console.info("Submitting contact form data:", data);

  const apiUrl = (typeof process !== "undefined" && process.env.VITE_API_URL)
    || (import.meta.env.VITE_API_URL || "http://localhost:8000/api/v1/cms");

  try {
    // 1. Authenticate with CMS
    const loginRes = await fetch(`${apiUrl}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
        email: (typeof process !== "undefined" && process.env.CMS_AUTH_EMAIL) || "",
        password: (typeof process !== "undefined" && process.env.CMS_AUTH_PASSWORD) || "",
      }),
    });

    let token = "";
    if (loginRes.ok) {
      const loginJson = await loginRes.json();
      if ((loginJson.status || loginJson.success) && loginJson.data && loginJson.data.token) {
        token = loginJson.data.token;
      }
    } else {
      console.warn("Failed to login to Vision API:", loginRes.status, await loginRes.text());
    }

    // 2. Submit Contact Form
    const response = await fetch(`${apiUrl}/contacts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        ...(token ? { "Authorization": `Bearer ${token}` } : {}),
      },
      body: JSON.stringify({
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        phone: data.phone || "",
        message: data.message,
        subject: "Contact Form Submission",
        source: "vision148",
      }),
    });

    const result = await response.json();
    if (response.ok && (result.status || result.success)) {
      return { success: true, message: "Email sent successfully!" };
    }
    throw new Error(result.message || "Failed to send email");
  } catch (error: any) {
    console.error("Vision API submission failed, falling back to local storage:", error.message);
  }

  // Local/Offline Fallback (localStorage)
  try {
    if (typeof window !== "undefined" && window.localStorage) {
      const submissions = JSON.parse(window.localStorage.getItem("contact_submissions") || "[]");
      submissions.push({
        ...data,
        submitted_at: new Date().toISOString(),
      });
      window.localStorage.setItem("contact_submissions", JSON.stringify(submissions));
    }
  } catch (localStorageError) {
    console.error("Failed to save submission to localStorage:", localStorageError);
  }
  return { success: true, message: "Saved to local storage" };
}

export interface ApplyData {
  name: string;
  email: string;
  phone?: string;
  intro?: string;
  message?: string;
}

/**
 * Submit syndicate application details.
 * Submits directly to the Vision API endpoint. Otherwise, it stores submissions locally.
 */
export async function sendApplyForm(data: ApplyData): Promise<{ success: boolean; message?: string }> {
  console.info("Submitting syndicate application data:", data);

  const nameParts = data.name.trim().split(/\s+/);
  const firstName = nameParts[0] || "";
  const lastName = nameParts.slice(1).join(" ") || "";

  const formattedMessage = `Intro: ${data.intro || "N/A"}

Message:
${data.message || "N/A"}`;

  const apiUrl = (typeof process !== "undefined" && process.env.VITE_API_URL)
    || (import.meta.env.VITE_API_URL || "http://localhost:8000/api/v1/cms");

  try {
    // 1. Authenticate with CMS
    const loginRes = await fetch(`${apiUrl}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
        email: (typeof process !== "undefined" && process.env.CMS_AUTH_EMAIL) || "",
        password: (typeof process !== "undefined" && process.env.CMS_AUTH_PASSWORD) || "",
      }),
    });

    let token = "";
    if (loginRes.ok) {
      const loginJson = await loginRes.json();
      if ((loginJson.status || loginJson.success) && loginJson.data && loginJson.data.token) {
        token = loginJson.data.token;
      }
    } else {
      console.warn("Failed to login to Vision API:", loginRes.status, await loginRes.text());
    }

    // 2. Submit Application Form
    const response = await fetch(`${apiUrl}/contacts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        ...(token ? { "Authorization": `Bearer ${token}` } : {}),
      },
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        email: data.email,
        phone: data.phone || "",
        message: formattedMessage,
        subject: "Register Your Interest",
        source: "vision148",
      }),
    });

    const result = await response.json();
    if (response.ok && (result.status || result.success)) {
      return { success: true, message: "Application sent successfully!" };
    }
    throw new Error(result.message || "Failed to send application");
  } catch (error: any) {
    console.error("Vision API application submission failed, falling back to local storage:", error.message);
  }

  // Local/Offline Fallback (localStorage)
  try {
    if (typeof window !== "undefined" && window.localStorage) {
      const submissions = JSON.parse(window.localStorage.getItem("apply_submissions") || "[]");
      submissions.push({
        ...data,
        submitted_at: new Date().toISOString(),
      });
      window.localStorage.setItem("apply_submissions", JSON.stringify(submissions));
    }
  } catch (localStorageError) {
    console.error("Failed to save submission to localStorage:", localStorageError);
  }
  return { success: true, message: "Saved to local storage" };
}


/**
 * Fetch team members list (using static fallback)
 */
export async function fetchTeamMembers(fallback: TeamMemberData[]): Promise<TeamMemberData[]> {
  return fallback;
}

/**
 * Fetch partners list (using static fallback)
 */
export async function fetchPartners(fallback: PartnerData[]): Promise<PartnerData[]> {
  return fallback;
}

/**
 * Fetch FAQ items (using static fallback)
 */
export async function fetchFaqs(fallback: FaqData[]): Promise<FaqData[]> {
  return fallback;
}
