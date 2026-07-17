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
 * If VITE_WEB3FORMS_ACCESS_KEY is defined in .env, it submits directly to the free
 * Web3Forms API to send an email to your inbox. Otherwise, it stores submissions locally.
 */
export async function sendContactForm(data: ContactData): Promise<{ success: boolean; message?: string }> {
  console.info("Submitting contact form data:", data);

  const web3FormsKey = typeof process !== "undefined"
    ? process.env.VITE_WEB3FORMS_ACCESS_KEY
    : (import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "");

  if (web3FormsKey && web3FormsKey !== "YOUR_ACCESS_KEY_HERE") {
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          access_key: web3FormsKey,
          name: `${data.first_name} ${data.last_name}`,
          email: data.email,
          phone: data.phone,
          message: data.message,
          subject: `Vision148 Contact Form - ${data.first_name} ${data.last_name}`,
          from_name: "Vision148 Website",
        }),
      });

      const result = await response.json();
      if (response.ok && result.success) {
        return { success: true, message: "Email sent successfully!" };
      }
      throw new Error(result.message || "Failed to send email");
    } catch (error) {
      console.error("Web3Forms submission failed, falling back to local storage:", error);
    }
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
