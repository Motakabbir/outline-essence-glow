async function fetchSeoMetadata(slug, fallback) {
  return fallback;
}
function mapSeoToMeta(seo) {
  const metaTags = [];
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
async function sendContactForm(data) {
  console.info("Submitting contact form data:", data);
  const web3FormsKey = typeof process !== "undefined" ? process.env.VITE_WEB3FORMS_ACCESS_KEY : "1a3e189d-9153-486a-9b27-ffb622cfc3e6";
  if (web3FormsKey && web3FormsKey !== "YOUR_ACCESS_KEY_HERE") {
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          access_key: web3FormsKey,
          name: `${data.first_name} ${data.last_name}`,
          email: data.email,
          phone: data.phone,
          message: data.message,
          subject: `Vision148 Contact Form - ${data.first_name} ${data.last_name}`,
          from_name: "Vision148 Website"
        })
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
  try {
    if (typeof window !== "undefined" && window.localStorage) {
      const submissions = JSON.parse(window.localStorage.getItem("contact_submissions") || "[]");
      submissions.push({
        ...data,
        submitted_at: (/* @__PURE__ */ new Date()).toISOString()
      });
      window.localStorage.setItem("contact_submissions", JSON.stringify(submissions));
    }
  } catch (localStorageError) {
    console.error("Failed to save submission to localStorage:", localStorageError);
  }
  return { success: true, message: "Saved to local storage" };
}
async function sendApplyForm(data) {
  console.info("Submitting syndicate application data:", data);
  const web3FormsKey = typeof process !== "undefined" ? process.env.VITE_WEB3FORMS_ACCESS_KEY : "1a3e189d-9153-486a-9b27-ffb622cfc3e6";
  if (web3FormsKey && web3FormsKey !== "YOUR_ACCESS_KEY_HERE") {
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          access_key: web3FormsKey,
          name: data.name,
          email: data.email,
          phone: data.phone,
          intro: data.intro,
          message: data.message,
          subject: `Vision148 Syndicate Application - ${data.name}`,
          from_name: "Vision148 Website"
        })
      });
      const result = await response.json();
      if (response.ok && result.success) {
        return { success: true, message: "Application sent successfully!" };
      }
      throw new Error(result.message || "Failed to send application");
    } catch (error) {
      console.error("Web3Forms application submission failed, falling back to local storage:", error);
    }
  }
  try {
    if (typeof window !== "undefined" && window.localStorage) {
      const submissions = JSON.parse(window.localStorage.getItem("apply_submissions") || "[]");
      submissions.push({
        ...data,
        submitted_at: (/* @__PURE__ */ new Date()).toISOString()
      });
      window.localStorage.setItem("apply_submissions", JSON.stringify(submissions));
    }
  } catch (localStorageError) {
    console.error("Failed to save submission to localStorage:", localStorageError);
  }
  return { success: true, message: "Saved to local storage" };
}
async function fetchTeamMembers(fallback) {
  return fallback;
}
async function fetchPartners(fallback) {
  return fallback;
}
async function fetchFaqs(fallback) {
  return fallback;
}
export {
  fetchPartners as a,
  fetchSeoMetadata as b,
  fetchTeamMembers as c,
  sendContactForm as d,
  fetchFaqs as f,
  mapSeoToMeta as m,
  sendApplyForm as s
};
