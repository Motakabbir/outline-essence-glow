import { a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, c as createFileRoute, b as createRouter } from "../_libs/tanstack__react-router.mjs";
import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { h as createServerFn } from "../_libs/tanstack__start-client-core.mjs";
import { o as objectType, s as stringType } from "../_libs/zod.mjs";
import { F as notFound } from "../_libs/tanstack__router-core.mjs";
import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__start-fn-stubs.mjs";
import "../_libs/@tanstack/start-storage-context+[...].mjs";
import "node:async_hooks";
import "../_libs/seroval.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/seroval-plugins.mjs";
import "../_libs/cookie-es.mjs";
import "node:stream/web";
const appCss = "/assets/styles-BTGW7T3T.css";
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router = useRouter();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$c = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Vision148 — RS500 Genesis Build" },
      { name: "description", content: "A one-of-one syndicated build of the Ford Sierra RS500 Cosworth. Heritage coachbuilding meets digital manufacturing." },
      { name: "author", content: "Vision148" },
      { property: "og:title", content: "Vision148 — RS500 Genesis Build" },
      { property: "og:description", content: "A one-of-one syndicated build of the Ford Sierra RS500 Cosworth." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&family=Instrument+Serif:ital@0;1&display=swap"
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$c.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) });
}
const logo = "/assets/vision148-logo-Dbu8HTfX.jpg";
const links = [
  { to: "/the-car", label: "The Car" },
  { to: "/process", label: "Process" },
  { to: "/partners", label: "Partners" },
  { to: "/experience", label: "Experience" },
  { to: "/journal", label: "Journal" },
  { to: "/about", label: "About" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" }
];
function Nav() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "header",
    {
      className: `fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "bg-black/70 backdrop-blur-xl border-b border-white/10" : "bg-transparent border-b border-transparent"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1500px] mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { id: "nav-logo", to: "/", className: "flex items-center gap-3 group", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, alt: "Vision148", className: "h-9 w-9 object-contain transition-transform duration-500 group-hover:rotate-[8deg]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-sm tracking-[0.4em] uppercase hidden sm:block", children: [
              "Vision ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-serif-italic normal-case tracking-normal", children: "one-forty-eight" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden md:flex items-center gap-10 text-[11px] font-mono uppercase tracking-[0.24em]", children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              id: `nav-link-${l.label.toLowerCase().replace(/\s+/g, "-")}`,
              to: l.to,
              className: "link-underline",
              activeProps: { className: "opacity-100" },
              inactiveProps: { className: "opacity-70 hover:opacity-100" },
              children: l.label
            },
            l.to
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                id: "nav-apply-btn",
                to: "/apply",
                className: "hidden sm:inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.24em] border border-white/40 px-4 py-2.5 hover:bg-white hover:text-black transition-colors duration-300",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-white animate-pulse" }),
                  " Apply"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                id: "nav-mobile-toggle",
                "aria-label": "Menu",
                onClick: () => setOpen((v) => !v),
                className: "md:hidden h-10 w-10 flex flex-col items-center justify-center gap-1.5",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `h-px w-5 bg-white transition-transform ${open ? "translate-y-[3px] rotate-45" : ""}` }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `h-px w-5 bg-white transition-transform ${open ? "-translate-y-[3px] -rotate-45" : ""}` })
                ]
              }
            )
          ] })
        ] }),
        open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:hidden border-t border-white/10 bg-black/95 backdrop-blur-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "px-6 py-8 flex flex-col gap-5 text-sm font-mono uppercase tracking-[0.24em]", children: [
          links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: l.to, onClick: () => setOpen(false), className: "hover:opacity-60", children: l.label }, l.to)),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/apply", onClick: () => setOpen(false), className: "border border-white/40 px-4 py-3 text-center mt-2", children: "Apply" })
        ] }) })
      ]
    }
  );
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "border-t border-white/10 pt-24 pb-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1500px] mx-auto px-6 md:px-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display uppercase text-[14vw] md:text-[10vw] leading-[0.85] tracking-tight opacity-90", children: [
      "Vision",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-serif-italic opacity-60", children: "148" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hairline mt-12" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-12 gap-10 mt-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-4 flex items-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, alt: "Vision148", className: "h-12 w-12" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display uppercase tracking-[0.3em] text-sm", children: "Vision 148" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-mono uppercase tracking-[0.22em] text-white/40 mt-1", children: "A Sarthe Cars Programme · Est. 2024" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-5 grid grid-cols-3 gap-6 text-[11px] font-mono uppercase tracking-[0.22em]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white/40", children: "Explore" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/the-car", className: "block hover:opacity-60", children: "The Car" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/process", className: "block hover:opacity-60", children: "Process" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/partners", className: "block hover:opacity-60", children: "Partners" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/experience", className: "block hover:opacity-60", children: "Experience" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white/40", children: "Studio" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/about", className: "block hover:opacity-60", children: "About" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/journal", className: "block hover:opacity-60", children: "Journal" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/faq", className: "block hover:opacity-60", children: "FAQ" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "block hover:opacity-60", children: "Contact" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/apply", className: "block hover:opacity-60", children: "Apply" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white/40", children: "Connect" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "block hover:opacity-60", children: "Instagram" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "block hover:opacity-60", children: "LinkedIn" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "block hover:opacity-60", children: "YouTube" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:hello@vision148.com", className: "block hover:opacity-60", children: "Email" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-3 text-[10px] font-mono uppercase tracking-[0.22em] text-white/40 md:text-right", children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Vision 148.",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "All rights reserved.",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block mt-4", children: "Coventry · Silverstone · London" })
      ] })
    ] })
  ] }) });
}
function SectionLabel({ n, title }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 eyebrow", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: n }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-10 bg-hairline" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: title })
  ] });
}
function classesFor(variant) {
  const base = "group inline-flex items-center gap-3 px-7 py-4 text-[11px] font-mono tracking-[0.24em] uppercase transition-all duration-300";
  const styles = variant === "solid" ? "bg-white text-black hover:bg-white/85" : "border border-white/40 text-white hover:border-white hover:bg-white hover:text-black";
  return `${base} ${styles}`;
}
function PillLink({
  to,
  children,
  variant = "solid"
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to, className: classesFor(variant), children: [
    children,
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block transition-transform duration-300 group-hover:translate-x-1", children: "→" })
  ] });
}
function PageHero({
  eyebrow,
  title,
  italic,
  intro,
  video,
  img
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "pt-40 md:pt-52 pb-20 md:pb-28 border-b border-white/10 relative grain overflow-hidden", children: [
    video ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      "video",
      {
        src: video,
        autoPlay: true,
        muted: true,
        loop: true,
        playsInline: true,
        className: "absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none mix-blend-screen"
      }
    ) : img ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: img,
        alt: "",
        className: "absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none grayscale mix-blend-screen"
      }
    ) : null,
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1500px] mx-auto px-6 md:px-10 reveal relative z-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow", children: eyebrow }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-8 font-display uppercase leading-[0.88] text-[14vw] md:text-[8.5vw] tracking-tight", children: [
        title,
        italic && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-serif-italic normal-case opacity-70", children: italic })
        ] })
      ] }),
      intro && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-10 max-w-2xl text-white/70 text-base md:text-lg leading-relaxed", children: intro })
    ] })
  ] });
}
function CrossLink({
  to,
  eyebrow,
  title
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Link,
    {
      to,
      className: "group block border-t border-white/15 py-10 md:py-14 transition-colors hover:bg-white/5",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1500px] mx-auto px-6 md:px-10 flex items-center justify-between gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow", children: eyebrow }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 font-display uppercase text-3xl md:text-5xl tracking-tight", children: title })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-3xl md:text-4xl transition-transform duration-500 group-hover:translate-x-3", children: "→" })
      ] })
    }
  );
}
const workshop = "/assets/workshop-DP3ouAaE.jpg";
const engine$2 = "/assets/ENGINE-BDR4qXPc.png";
const theCar$1 = "/assets/the-car-IRvns5Xa.jpg";
const design$2 = "/assets/design-Dc-ZZXQQ.jpg";
const processVideo = "/assets/process-Wn1o6mEh.mp4";
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
const Route$b = createFileRoute("/the-car")({
  loader: async () => {
    const seo = await fetchSeoMetadata("the-car", {
      title: "The Car — Vision148 RS500",
      description: "Car #148 of 500 RS500 Cosworths — reborn through digital manufacturing and motorsport-grade engineering.",
      og_title: "The Car — Vision148 RS500",
      og_description: "Car #148 of 500 RS500 Cosworths — reborn through digital manufacturing."
    });
    return { seo };
  },
  head: ({ loaderData }) => ({
    meta: mapSeoToMeta(loaderData?.seo || {
      title: "The Car — Vision148 RS500",
      description: "Car #148 of 500 RS500 Cosworths — reborn through digital manufacturing and motorsport-grade engineering.",
      og_title: "The Car — Vision148 RS500",
      og_description: "Car #148 of 500 RS500 Cosworths — reborn through digital manufacturing."
    })
  }),
  component: TheCarPage
});
const specs = [
  ["Chassis", "#148 of 500 — original RS500 Cosworth"],
  ["Engine", "Cosworth YB, rebuilt by Mahle"],
  ["Body", "Blended steel & aluminium coachwork"],
  ["Interior", "3D-printed dashboard, bespoke trim"],
  ["Documentation", "Full digital twin · build ledger"],
  ["Custodians", "Syndicate of 25"]
];
function TheCarPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "bg-background text-foreground min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHero,
      {
        eyebrow: "01 / The Car",
        title: "Car №148.",
        italic: "Reborn.",
        intro: "Acquired in 2024 after fifteen years in storage. Dismantled with archaeological care, scanned, catalogued and reborn through additive manufacture, classic coachbuilding and motorsport-grade engineering.",
        video: processVideo
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1500px] mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-7 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: theCar$1, alt: "Silver Ford Sierra RS500", className: "w-full grayscale" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-5 md:pt-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { n: "02", title: "THE VISION" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-4xl md:text-5xl uppercase leading-[0.95] mt-8", children: [
          "A documented",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-serif-italic normal-case opacity-70", children: "lineage." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 text-white/70 leading-relaxed", children: "The greatest cars are never designed by committee. They begin with one vision, one pencil, and the courage to challenge convention. Vision148 RS500 is our modern interpretation of that philosophy, inspired by Al Yasid's unmistakable design language and the legendary houses of Pininfarina, Bertone and Zagato. This isn't retro. It's the next chapter." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-white/55 text-sm leading-relaxed", children: "Working alongside Al Yasid, we're developing Vision148 RS500 with the same philosophy that made the world's greatest coach builders legendary." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "paper", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1500px] mx-auto px-6 md:px-10 py-24 md:py-32", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 font-mono text-[0.7rem] tracking-[0.22em] uppercase text-black/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "03" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-10 bg-black/30" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Specification" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-5xl md:text-6xl uppercase leading-[0.95] mt-8", children: [
        "Built like",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-serif-italic normal-case opacity-70", children: "a monograph." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid md:grid-cols-2 gap-x-16", children: specs.map(([k, v], i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex justify-between gap-6 py-6 border-t border-black/15 ${i === specs.length - 1 || i === specs.length - 2 ? "md:border-b" : ""}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[11px] uppercase tracking-[0.22em] opacity-60", children: k }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display uppercase text-lg md:text-xl text-right", children: v })
      ] }, k)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 md:py-32 border-t border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1500px] mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-12 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { n: "04", title: "Engine" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-4xl md:text-5xl uppercase leading-[0.95] mt-8", children: [
          "Cosworth ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-serif-italic normal-case opacity-70", children: "YB," }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "by Mahle."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 text-white/70 leading-relaxed", children: "Stripped to bare castings. Re-machined. Re-balanced. Reassembled to motorsport tolerance by Mahle's UK engine programme." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-7 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: engine$2, alt: "Engine", className: "w-full grayscale aspect-[4/3] object-cover" }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 md:py-32 border-t border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1500px] mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-12 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-7 overflow-hidden order-2 md:order-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: workshop, alt: "Workshop", className: "w-full grayscale aspect-[4/3] object-cover" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-5 order-1 md:order-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { n: "05", title: "Coachwork" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-4xl md:text-5xl uppercase leading-[0.95] mt-8", children: [
          "COACH BUILT",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-serif-italic normal-case opacity-70", children: "Alluminium." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 text-white/70 leading-relaxed", children: "Unique tooling & coach built aluminium body panels by Coventry Metalcraft complemented by composite aero parts by BAMD and 3D printed interior dashboard and switchgear by DMC, Silverstone." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(PillLink, { to: "/process", variant: "ghost", children: "The Process" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(PillLink, { to: "/apply", children: "Apply" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "h-[45vh] md:h-[65vh] relative overflow-hidden border-t border-b border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute inset-0 bg-fixed bg-cover bg-center grayscale opacity-60 parallax-bg",
        style: { backgroundImage: `url(${design$2})` }
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CrossLink, { to: "/process", eyebrow: "Next", title: "The Process →" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
const engine$1 = "/assets/Vision_To_the_road%20-4RKVkAdB.jpg";
const design$1 = "/assets/Bare_Shell_Disamantling-DFLSKoly.jpg";
const Route$a = createFileRoute("/process")({
  loader: async () => {
    const seo = await fetchSeoMetadata("process", {
      title: "The Process — Vision148",
      description: "Three phases. Eighteen months. From archaeological dismantle to the first drive.",
      og_title: "The Process — Vision148",
      og_description: "Three phases. Eighteen months. The Vision148 build process."
    });
    return { seo };
  },
  head: ({ loaderData }) => ({
    meta: mapSeoToMeta(loaderData?.seo || {
      title: "The Process — Vision148",
      description: "Three phases. Eighteen months. From archaeological dismantle to the first drive.",
      og_title: "The Process — Vision148",
      og_description: "Three phases. Eighteen months. The Vision148 build process."
    })
  }),
  component: ProcessPage
});
const phases = [
  {
    n: "Phase I",
    status: "Complete",
    title: "Dismantle & Scan",
    body: "Donor car fully dismantled by classic-RS specialists. Every part catalogued, photographed, and scanned. A complete 3D digital twin created with T3DMC.",
    deliverables: ["Build ledger", "Component archive", "Digital twin v1"]
  },
  {
    n: "Phase II",
    status: "In progress",
    title: "Baseline & Design",
    body: "Chassis aligned and prepared by Coventry Metalcraft. Composite tooling, CAD surfacing, aero simulation. Engine rebuild commences at Mahle.",
    deliverables: ["Surfacing CAD", "Aero CFD package", "Tooling production"]
  },
  {
    n: "Phase III",
    status: "Upcoming",
    title: "Assembly & Drive",
    body: "Final assembly at the Digital Manufacturing Centre, Silverstone. Trim, electronics, calibration. First drive. Hand-over to the syndicate.",
    deliverables: ["Final assembly", "Shake-down testing", "Hand-over event"]
  }
];
function ProcessPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "bg-background text-foreground min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHero,
      {
        eyebrow: "02 / The Process",
        title: "FROM MODELLING",
        italic: "to road.",
        intro: "A process of design iteration and modelling to define the design language needed to make the car unique yet respectful to this icons DNA.",
        video: processVideo
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-[1500px] mx-auto px-6 md:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-3 left-0 right-0 h-px bg-white/15 hidden md:block" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-12", children: phases.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `relative md:pt-10 reveal stagger-${i + 1}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block absolute top-0 left-0 w-2 h-2 rounded-full bg-white" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-baseline", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-xs uppercase tracking-[0.25em]", children: p.n }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] uppercase tracking-[0.25em] text-white/40", children: p.status })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-3xl md:text-4xl uppercase mt-6", children: p.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-white/60 text-sm leading-relaxed", children: p.body }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 space-y-2", children: p.deliverables.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3 text-[11px] font-mono uppercase tracking-[0.2em] text-white/55", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-4 bg-white/30" }),
          d
        ] }, d)) })
      ] }, p.n)) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "paper", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1500px] mx-auto px-6 md:px-10 py-24 md:py-32 grid md:grid-cols-12 gap-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 font-mono text-[0.7rem] tracking-[0.22em] uppercase text-black/50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "03" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-10 bg-black/30" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Methodology" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-5xl md:text-6xl uppercase leading-[0.95] mt-8", children: [
          "Built with",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-serif-italic normal-case opacity-70", children: "discipline." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-7", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "space-y-8", children: [
        ["Catalogue", "Every component photographed, weighed, scanned and assigned a unique identifier."],
        ["Decide", "Restore, replace or remanufacture — assessed by an independent technical committee."],
        ["Document", "Decisions written into the build ledger and shared quarterly with custodians."],
        ["Drive", "The finished car is tested, validated and handed over with a full provenance dossier."]
      ].map(([t, b], i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: `flex gap-6 border-t border-black/15 pt-6 reveal stagger-${i + 1}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-xs tracking-[0.2em] opacity-50 mt-1 w-10", children: [
          "0",
          i + 1
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display uppercase text-2xl tracking-tight", children: t }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-black/65 mt-2 max-w-md", children: b })
        ] })
      ] }, t)) }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 md:py-32 border-t border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1500px] mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden aspect-[4/3] relative reveal", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: design$1, alt: "CAD", className: "w-full h-full grayscale object-cover zoom-hover" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden aspect-[4/3] relative reveal stagger-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: engine$1, alt: "Engine", className: "w-full h-full grayscale object-cover zoom-hover" }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CrossLink, { to: "/partners", eyebrow: "Next", title: "The Partners →" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
const partnerVideo = "/assets/partner-OoUrGRph.mp4";
const partners = [
  { name: "DMC", role: "Digital Manufacturing", body: "The Digital Manufacturing Centre at Silverstone — host facility for final assembly and additive manufacture." },
  { name: "Mahle", role: "Engine Engineering", body: "Engine rebuild and validation. Motorsport-grade tolerances. UK engine programme." },
  { name: "Coventry Metalcraft", role: "Coachbuilding", body: "Hand-formed steel and aluminium panel work. Heritage techniques, modern measurement." },
  { name: "T3DMC", role: "Scanning & Twin", body: "Component-level 3D scanning and the live digital twin of the entire build." },
  { name: "ASM AUTORECYCLING ", role: "Dismantling specialists", body: "RS500 #148 dismantle and part catalogue and storage" },
  { name: "BAMD", role: "Composite specialists", body: "Composite partner for trim and interior" },
  { name: "Cornerstone", role: "non-structural repair specialists", body: "Glass removal and specialist repairs" },
  { name: "HGL", role: "Membership Program", body: "Technology providers for the project companion membership platform, Autovision.club" }
];
const Route$9 = createFileRoute("/partners")({
  loader: async () => {
    const seoPromise = fetchSeoMetadata("partners", {
      title: "Partners — Vision148",
      description: "A curated consortium — DMC, Mahle, Coventry Metalcraft, T3DMC, ASM, BAMD.",
      og_title: "Partners — Vision148",
      og_description: "A curated consortium of motorsport and manufacturing partners."
    });
    const partnersPromise = fetchPartners(partners);
    const [seo, dynamicPartners] = await Promise.all([seoPromise, partnersPromise]);
    return { seo, partners: dynamicPartners };
  },
  head: ({ loaderData }) => ({
    meta: mapSeoToMeta(loaderData?.seo || {
      title: "Partners — Vision148",
      description: "A curated consortium — DMC, Mahle, Coventry Metalcraft, T3DMC, ASM, BAMD.",
      og_title: "Partners — Vision148",
      og_description: "A curated consortium of motorsport and manufacturing partners."
    })
  }),
  component: PartnersPage
});
function PartnersPage() {
  const { partners: dynamicPartners } = Route$9.useLoaderData();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "bg-background text-foreground min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHero,
      {
        eyebrow: "03 / Partners",
        title: "A curated",
        italic: "consortium.",
        intro: "Each partner is best-in-class — additive manufacturing, coachbuilding, composites, engine engineering. Selected to elevate the technical and commercial credibility of a one-of-one, investment-grade build.",
        video: partnerVideo
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 md:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-[1500px] mx-auto px-6 md:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 border-t border-l border-white/15", children: dynamicPartners.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: `border-b border-r border-white/15 aspect-[3/1] flex items-center justify-center px-4 group transition-colors hover:bg-white hover:text-black reveal stagger-${i % 4 + 1}`,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display uppercase tracking-[0.18em] text-lg md:text-xl text-center", children: p.name })
      },
      p.name
    )) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "paper", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1500px] mx-auto px-6 md:px-10 py-24 md:py-32", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 font-mono text-[0.7rem] tracking-[0.22em] uppercase text-black/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "04" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-10 bg-black/30" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Roster" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-5xl md:text-6xl uppercase leading-[0.95] mt-8 max-w-3xl", children: [
        "Named hands. ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-serif-italic normal-case opacity-70", children: "Named houses." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 divide-y divide-black/15 border-y border-black/15", children: dynamicPartners.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `grid md:grid-cols-12 gap-6 py-10 group reveal stagger-${i % 4 + 1}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-1 font-mono text-[11px] uppercase tracking-[0.22em] opacity-50", children: String(i + 1).padStart(2, "0") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-4 font-display uppercase text-3xl md:text-4xl tracking-tight", children: p.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-3 font-mono text-[11px] uppercase tracking-[0.22em] opacity-60", children: p.role }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-4 text-sm text-black/70 leading-relaxed", children: p.body })
      ] }, p.name)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CrossLink, { to: "/experience", eyebrow: "Next", title: "The Experience →" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
const Route$8 = createFileRoute("/journal")({
  head: () => ({
    meta: [
      { title: "Journal — Vision148" },
      { name: "description", content: "Build notes, partner profiles and dispatches from the Vision148 studio." },
      { property: "og:title", content: "Journal — Vision148" },
      { property: "og:description", content: "Dispatches from the build floor." }
    ]
  }),
  component: Outlet
});
const chassisVideo = "/assets/chassis-DzkiDE7p.mp4";
const groups = [
  {
    title: "The Programme",
    items: [
      ["How many seats are available?", "Twenty-five. When they're gone, the syndicate closes. There is no waitlist beyond the first round."],
      ["Is this a fractional ownership scheme?", "No. Custodians do not own the car. They fund and accompany its build, and share scheduled access to the finished object."],
      ["What is the duration of the programme?", "Approximately three years from kickoff to handover, with a five-year custodianship period after completion."]
    ]
  },
  {
    title: "The Car",
    items: [
      ["Is the donor shell genuine?", "Yes. A matching-numbers RS500 shell, fully documented, acquired in 2023. Provenance is published to custodians."],
      ["What is being changed?", "Nothing visible. Beneath the skin: modern metallurgy, refreshed electronics, and a Mahle-built powertrain to original spec."],
      ["Will it be road-legal?", "Yes. UK registered, MOT-exempt as a historic vehicle, fully usable on public roads."]
    ]
  },
  {
    title: "Custodianship",
    items: [
      ["What do custodians actually get?", "Studio access during build, quarterly digital-twin updates, private drives, exhibitions, dinners, and a place in the provenance ledger of the finished car."],
      ["Can I drive the car?", "Yes. Scheduled drive days are part of the programme — track and road, in the UK and Europe."],
      ["What happens after five years?", "The car enters its long-term custodianship phase. The original twenty-five retain first right of access in perpetuity."]
    ]
  },
  {
    title: "Application",
    items: [
      ["How do I apply?", "Submit an enquiry through the Apply page. We respond personally within two working days."],
      ["Is there a selection process?", "Yes. The studio meets every prospective custodian before a seat is offered. Fit matters as much as funding."],
      ["What are the costs?", "Disclosed in the prospectus, on request, after an initial conversation."]
    ]
  }
];
function groupFaqs(faqs) {
  const map = {};
  for (const f of faqs) {
    const cat = f.categoryName || "General";
    if (!map[cat]) map[cat] = [];
    map[cat].push([f.title, f.description]);
  }
  return Object.entries(map).map(([title, items]) => ({
    title,
    items
  }));
}
const Route$7 = createFileRoute("/faq")({
  loader: async () => {
    const seoPromise = fetchSeoMetadata("faq", {
      title: "FAQ — Vision148",
      description: "Answers about the Vision148 syndicate, the RS500 build, costs, timelines and custodianship.",
      og_title: "FAQ — Vision148",
      og_description: "Everything custodians ask, in one place."
    });
    const fallbackFlat = groups.flatMap(
      (g) => g.items.map(([q, a]) => ({
        title: q,
        description: a,
        categoryName: g.title
      }))
    );
    const faqsPromise = fetchFaqs(fallbackFlat);
    const [seo, flatFaqs] = await Promise.all([seoPromise, faqsPromise]);
    const grouped = groupFaqs(flatFaqs);
    return { seo, groups: grouped };
  },
  head: ({ loaderData }) => ({
    meta: mapSeoToMeta(loaderData?.seo || {
      title: "FAQ — Vision148",
      description: "Answers about the Vision148 syndicate, the RS500 build, costs, timelines and custodianship.",
      og_title: "FAQ — Vision148",
      og_description: "Everything custodians ask, in one place."
    })
  }),
  component: FAQPage
});
function FAQPage() {
  const { groups: groups2 } = Route$7.useLoaderData();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "bg-background text-foreground min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHero,
      {
        eyebrow: "07 / FAQ",
        title: "Questions,",
        italic: "answered.",
        intro: "If something isn't covered here, the studio answers personally — write to us at hello@vision148.com.",
        video: chassisVideo
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-[1100px] mx-auto px-6 md:px-10 space-y-20", children: groups2.map((g, gi) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 font-mono text-[0.7rem] tracking-[0.22em] uppercase text-white/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: String(gi + 1).padStart(2, "0") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-10 bg-white/20" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: g.title })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 border-t border-white/15", children: g.items.map(([q, a]) => /* @__PURE__ */ jsxRuntimeExports.jsx(FAQItem, { q, a }, q)) })
    ] }, g.title)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CrossLink, { to: "/apply", eyebrow: "Ready?", title: "Apply for a seat →" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
function FAQItem({ q, a }) {
  const [open, setOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      onClick: () => setOpen((v) => !v),
      className: "w-full text-left border-b border-white/15 py-8 group block",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline justify-between gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display uppercase text-2xl md:text-3xl tracking-tight group-hover:opacity-70 transition-opacity", children: q }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `font-mono text-2xl transition-transform duration-300 ${open ? "rotate-45" : ""}`, children: "+" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: `overflow-hidden transition-all duration-500 ${open ? "max-h-96 mt-6 opacity-100" : "max-h-0 opacity-0"}`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/70 leading-relaxed max-w-2xl", children: a })
          }
        )
      ]
    }
  );
}
const experience$1 = "/assets/Hospitality-BsUpDMdM.png";
const Route$6 = createFileRoute("/experience")({
  loader: async () => {
    const seo = await fetchSeoMetadata("experience", {
      title: "The Experience — Vision148",
      description: "Private drives, studio visits, exhibitions and the quarterly digital twin.",
      og_title: "The Experience — Vision148",
      og_description: "Custodianship designed around the finished car."
    });
    return { seo };
  },
  head: ({ loaderData }) => ({
    meta: mapSeoToMeta(loaderData?.seo || {
      title: "The Experience — Vision148",
      description: "Private drives, studio visits, exhibitions and the quarterly digital twin.",
      og_title: "The Experience — Vision148",
      og_description: "Custodianship designed around the finished car."
    })
  }),
  component: ExperiencePage
});
const benefits = [
  ["Private Drives", "Track and road days at proving grounds and circuits across the UK and Europe."],
  ["Studio Visits", "Behind-the-scenes access at DMC, Mahle and Coventry Metalcraft."],
  ["Exhibitions", "Show appearances at curated automotive, art and design events."],
  ["Digital Twin", "Quarterly updates from the build, delivered in full 3D fidelity."],
  ["Custodianship Calendar", "Scheduled access to the finished car, by arrangement."],
  ["Members' Dinners", "Private hospitality alongside the build partners and engineering team."]
];
function ExperiencePage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "bg-background text-foreground min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHero,
      {
        eyebrow: "04 / The Experience",
        title: "Ownership,",
        italic: "reimagined.",
        intro: "Twenty-five custodians. One car. A year-round programme of access, hospitality and shared craftsmanship — engineered with the same care as the build itself.",
        video: partnerVideo
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-[1500px] mx-auto px-6 md:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-px bg-white/10", children: benefits.map(([t, b], i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: `bg-black p-10 md:p-12 group hover:bg-white hover:text-black transition-colors duration-500 reveal stagger-${i % 3 + 1}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[11px] uppercase tracking-[0.22em] opacity-50", children: String(i + 1).padStart(2, "0") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display uppercase text-2xl md:text-3xl mt-6", children: t }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 text-sm opacity-70 leading-relaxed", children: b })
        ]
      },
      t
    )) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "paper", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1500px] mx-auto px-6 md:px-10 py-24 md:py-32 grid md:grid-cols-12 gap-12 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 font-mono text-[0.7rem] tracking-[0.22em] uppercase text-black/50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "02" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-10 bg-black/30" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Hospitality" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-5xl md:text-6xl uppercase leading-[0.95] mt-8", children: [
          "Curated, not",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-serif-italic normal-case opacity-70", children: "corporate." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 text-black/70 leading-relaxed max-w-xl", children: "In conjunction with our partners TheCarCrowd each event will be shaped around the people in the syndicate, small numbers, intimate access, real workshops, No badges and no branding." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-7 overflow-hidden reveal aspect-[4/3] relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: experience$1, alt: "Hospitality", className: "w-full h-full grayscale object-cover zoom-hover" }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 md:py-32 border-t border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1500px] mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-12 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-7 overflow-hidden reveal aspect-[4/3] relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: design$2, alt: "Digital twin", className: "w-full h-full grayscale object-cover zoom-hover" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow", children: "03 / Digital Twin" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-5xl md:text-6xl uppercase leading-[0.95] mt-8", children: [
          "Witness the",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-serif-italic normal-case opacity-70", children: "build, live." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 text-white/70 leading-relaxed max-w-xl", children: "A quarterly 3D update — explorable in browser. Every new component, every decision, every piece of provenance attached to its place on the car." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CrossLink, { to: "/apply", eyebrow: "Next", title: "Apply for a seat →" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
const journalVideo = "/assets/journal-CSqD8jW1.mp4";
const Route$5 = createFileRoute("/contact")({
  loader: async () => {
    const seo = await fetchSeoMetadata("contact", {
      title: "Contact — Vision148",
      description: "Speak with the Vision148 studio about the RS500 Genesis Build, partnerships, or press.",
      og_title: "Contact — Vision148",
      og_description: "Reach the Vision148 studio directly."
    });
    return { seo };
  },
  head: ({ loaderData }) => ({
    meta: mapSeoToMeta(loaderData?.seo || {
      title: "Contact — Vision148",
      description: "Speak with the Vision148 studio about the RS500 Genesis Build, partnerships, or press.",
      og_title: "Contact — Vision148",
      og_description: "Reach the Vision148 studio directly."
    })
  }),
  component: ContactPage
});
createServerFn({ method: "POST" }).inputValidator(
  objectType({
    first_name: stringType(),
    last_name: stringType(),
    email: stringType().email(),
    phone: stringType(),
    message: stringType()
  })
).handler(async ({ data }) => {
  console.info("Server received contact submission:", data);
  return await sendContactForm(data);
});
const channels = [
  ["Custodianship", "syndicate@vision148.com", "For seat enquiries and applications."],
  ["Partnerships", "studio@vision148.com", "Suppliers, collaborators and patrons."],
  ["Press", "press@vision148.com", "Editorial, features and image requests."]
];
const locations = [
  ["Studio", "Coventry, UK", "By appointment only."],
  ["Engineering", "Silverstone, UK", "ASM Performance facility."],
  ["Office", "London, UK", "Mayfair — by introduction."]
];
function ContactPage() {
  const [sent, setSent] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "bg-background text-foreground min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHero,
      {
        eyebrow: "06 / Contact",
        title: "Get in",
        italic: "touch.",
        intro: "The studio answers personally. Most messages receive a reply within two working days.",
        video: journalVideo
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-[1500px] mx-auto px-6 md:px-10 grid md:grid-cols-3 gap-px bg-white/10", children: channels.map(([t, email, b]) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "a",
      {
        href: `mailto:${email}`,
        className: "bg-black p-10 md:p-12 group hover:bg-white hover:text-black transition-colors duration-500",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[11px] uppercase tracking-[0.22em] opacity-50", children: t }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display uppercase text-2xl md:text-3xl mt-6 break-words", children: email }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 text-sm opacity-70 leading-relaxed", children: b }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 text-xs font-mono uppercase tracking-[0.24em] opacity-60 group-hover:opacity-100", children: "Write →" })
        ]
      },
      email
    )) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "paper py-24 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1500px] mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 font-mono text-[0.7rem] tracking-[0.22em] uppercase text-black/50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "02" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-10 bg-black/30" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Send a note" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-5xl md:text-6xl uppercase leading-[0.95] mt-8 text-black", children: [
          "Or write",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-serif-italic normal-case opacity-70", children: "to us here." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 text-black/70 leading-relaxed max-w-md", children: "A short message is fine. Tell us who you are and what you'd like to discuss." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-7", children: sent ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-black/20 p-12 text-black", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[11px] uppercase tracking-[0.22em] opacity-60", children: "Received" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 font-display uppercase text-3xl", children: "Thank you." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-black/70", children: "We'll be in touch shortly." })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "form",
        {
          onSubmit: async (e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            const data = {
              first_name: formData.get("first_name"),
              last_name: formData.get("last_name"),
              email: formData.get("email"),
              phone: formData.get("phone"),
              message: formData.get("message")
            };
            try {
              const res = await sendContactForm(data);
              if (res.success) {
                setSent(true);
              } else {
                console.error("Failed to submit form:", res.message);
              }
            } catch (err) {
              console.error("Failed to submit form:", err);
            }
          },
          className: "space-y-6 text-black",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "First Name", name: "first_name" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Last Name", name: "last_name" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email", name: "email", type: "email" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Phone", name: "phone", type: "tel" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Message", name: "message", textarea: true }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "submit",
                className: "inline-flex items-center gap-3 px-7 py-4 text-[11px] font-mono tracking-[0.24em] uppercase bg-black text-white hover:bg-black/85 transition-colors",
                children: [
                  "Send message ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "→" })
                ]
              }
            )
          ]
        }
      ) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 md:py-32 border-t border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1500px] mx-auto px-6 md:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow", children: "03 / Locations" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-px bg-white/10 mt-12", children: locations.map(([t, place, note]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-black p-10 md:p-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[11px] uppercase tracking-[0.22em] opacity-50", children: t }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display uppercase text-3xl mt-6", children: place }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 text-sm opacity-60", children: note })
      ] }, t)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CrossLink, { to: "/faq", eyebrow: "Next", title: "Frequently asked →" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
function Field({
  label,
  name,
  type = "text",
  textarea = false
}) {
  const cls = "w-full bg-transparent border-b border-black/30 focus:border-black outline-none py-3 text-base placeholder:text-black/30";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-[0.24em] text-black/50", children: label }),
    textarea ? /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { name, required: true, rows: 5, className: `${cls} mt-2 resize-none` }) : /* @__PURE__ */ jsxRuntimeExports.jsx("input", { name, type, required: true, className: `${cls} mt-2` })
  ] });
}
const Route$4 = createFileRoute("/apply")({
  loader: async () => {
    const seo = await fetchSeoMetadata("apply", {
      title: "Apply — Vision148",
      description: "Register interest in the Vision148 syndicate. Twenty-five seats. One car.",
      og_title: "Apply — Vision148",
      og_description: "Register interest in the Vision148 syndicate."
    });
    return { seo };
  },
  head: ({ loaderData }) => ({
    meta: mapSeoToMeta(loaderData?.seo || {
      title: "Apply — Vision148",
      description: "Register interest in the Vision148 syndicate. Twenty-five seats. One car.",
      og_title: "Apply — Vision148",
      og_description: "Register interest in the Vision148 syndicate."
    })
  }),
  component: ApplyPage
});
createServerFn({ method: "POST" }).inputValidator(
  objectType({
    name: stringType(),
    email: stringType().email(),
    phone: stringType().optional(),
    intro: stringType().optional(),
    message: stringType().optional()
  })
).handler(async ({ data }) => {
  console.info("Server received syndicate application:", data);
  return { success: true };
});
function ApplyPage() {
  const [submitted, setSubmitted] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "bg-background text-foreground min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHero,
      {
        eyebrow: "05 / Apply",
        title: "Take a seat",
        italic: "in history.",
        intro: "Syndicate places are limited and reviewed individually. Share a few details and the Vision148 team will be in touch with the full prospectus."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 md:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1500px] mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "md:col-span-4 space-y-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow", children: "Seats" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-6xl mt-4", children: "25" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white/55 text-sm mt-2", children: "Phase II — open" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow", children: "Contact" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:hello@vision148.com", className: "block mt-4 link-underline font-display text-2xl", children: "hello@vision148.com" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white/55 text-sm mt-2", children: "Coventry · Silverstone · London" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow", children: "Confidentiality" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm text-white/60 leading-relaxed max-w-sm", children: "All interest is treated in confidence. Prospectus released on request, under NDA where appropriate." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-8", children: submitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-white/15 p-10 md:p-16 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow", children: "Received" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display uppercase text-4xl md:text-5xl mt-6", children: "Thank you." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-white/65 max-w-md mx-auto", children: "A member of the Vision148 team will be in touch within five working days with the full prospectus." })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "form",
        {
          onSubmit: async (e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            const data = {
              name: formData.get("name"),
              email: formData.get("email"),
              phone: formData.get("phone") || void 0,
              intro: formData.get("intro") || void 0,
              message: formData.get("message") || void 0
            };
            try {
              const res = await sendApplyForm(data);
              if (res.success) {
                setSubmitted(true);
              }
            } catch (err) {
              console.error("Failed to submit application:", err);
            }
          },
          className: "space-y-10",
          children: [
            [
              { id: "name", label: "Full name", type: "text", required: true },
              { id: "email", label: "Email address", type: "email", required: true },
              { id: "phone", label: "Phone (optional)", type: "tel", required: false },
              { id: "intro", label: "How did you hear of Vision148?", type: "text", required: false }
            ].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-white/20 pb-4 focus-within:border-white transition-colors", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: f.id, className: "block eyebrow mb-3", children: f.label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  id: f.id,
                  name: f.id,
                  type: f.type,
                  required: f.required,
                  className: "w-full bg-transparent text-xl md:text-2xl font-display tracking-tight placeholder:opacity-30 outline-none",
                  placeholder: "—"
                }
              )
            ] }, f.id)),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-white/20 pb-4 focus-within:border-white transition-colors", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "message", className: "block eyebrow mb-3", children: "Notes (optional)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "textarea",
                {
                  id: "message",
                  name: "message",
                  rows: 4,
                  className: "w-full bg-transparent text-lg leading-relaxed placeholder:opacity-30 outline-none resize-none",
                  placeholder: "Anything we should know"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-6 pt-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "submit",
                  className: "group inline-flex items-center gap-3 bg-white text-black px-8 py-4 text-[11px] font-mono uppercase tracking-[0.24em] hover:bg-white/85 transition",
                  children: [
                    "Register Interest",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block transition-transform duration-300 group-hover:translate-x-1", children: "→" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-mono uppercase tracking-[0.22em] text-white/40", children: "We will respond within five working days" })
            ] })
          ]
        }
      ) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
const ianHoweImg = "/assets/Ian-Howe-DEhh2UC5.png";
const stuartPeachImg = "/assets/Stuart-Peach-CH7eWYnA.png";
const alYasidImg = "/assets/Al-Yasid-Bm-z5K-a.png";
const simonKwImg = "/assets/Simon-Kw-BG0ASdJj.png";
const brendanImg = "/assets/Brendan-D8B1ZMVt.png";
const kieronImg = "/assets/KIERON_SALTER-Cbik1S_v.png";
const team = [
  {
    role: "Ian Howe FOUNDER & BUILD DIRECTOR 30 years experience in automotive & fintech Business",
    name: "Ian Howe",
    image: ianHoweImg
  },
  {
    role: "Stuart Peach PROJECT CO FOUNDER Partner in the vision148 project and original custodian of #148",
    name: "Stuart Peach",
    image: stuartPeachImg
  },
  {
    role: "Al Yasid Oozeear DIGITAL VISUALISOR & DESIGNER Independent Automotive designer specialising in bespoke car design",
    name: "Al Yasid Oozeear",
    image: alYasidImg
  },
  {
    role: "Simon Kiero Watson COMMERCIAL & FINANCE OVERSIGHT Highly experiencedCorporate Finance and Exchange Expert.",
    name: "Simon Kiero Watson",
    image: simonKwImg
  },
  {
    role: "Brendan OToole CEO of Coventry Metalcraft Ltd.",
    name: "Brendan OToole",
    image: brendanImg
  },
  {
    role: "Kieron Salter CEO Digital Manufacturing Centre Ltd (DMC) Silverstone",
    name: "Kieron Salter",
    image: kieronImg
  }
];
const Route$3 = createFileRoute("/about")({
  loader: async () => {
    const seoPromise = fetchSeoMetadata("about", {
      title: "About — Vision148",
      description: "The story, the people, and the philosophy behind the Vision148 RS500 Genesis Build.",
      og_title: "About — Vision148",
      og_description: "Heritage coachbuilding meets digital manufacturing."
    });
    const fallbackTeam = team.map((t) => ({
      name: t.name,
      position: t.role,
      image: t.image
    }));
    const teamMembersPromise = fetchTeamMembers(fallbackTeam);
    const [seo, teamMembers] = await Promise.all([seoPromise, teamMembersPromise]);
    return { seo, teamMembers };
  },
  head: ({ loaderData }) => ({
    meta: mapSeoToMeta(loaderData?.seo || {
      title: "About — Vision148",
      description: "The story, the people, and the philosophy behind the Vision148 RS500 Genesis Build.",
      og_title: "About — Vision148",
      og_description: "Heritage coachbuilding meets digital manufacturing."
    })
  }),
  component: AboutPage
});
const principles = [
  ["Heritage", "We treat the RS500 as a cultural artefact — preserved, not modernised away."],
  ["Craft", "Every panel, every weld, every fastener is documented, dated and signed."],
  ["Transparency", "Custodians see the build as it happens. No press release surprises."],
  ["Restraint", "Twenty-five seats. One car. No spin-offs. No tiers."]
];
function AboutPage() {
  const { teamMembers } = Route$3.useLoaderData();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "bg-background text-foreground min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHero,
      {
        eyebrow: "05 / About",
        title: "A small studio",
        italic: "with one obsession.",
        intro: "Vision148 was founded to build a single car — a definitive Ford Sierra RS500 Cosworth — and to share its making with twenty-five custodians who care as deeply as we do.",
        video: journalVideo
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 md:py-32 paper", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1500px] mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-12 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 font-mono text-[0.7rem] tracking-[0.22em] uppercase text-black/50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "01" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-10 bg-black/30" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Origin" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-5xl md:text-6xl uppercase leading-[0.95] mt-8", children: [
          "STARTED WITH A PASSION",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-serif-italic normal-case opacity-70", children: "to reimagine" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 text-black/70 leading-relaxed", children: "The origin story of the Vision148 is inspired through exposure to some of the leading figures in UK automotive and motorsport  and a collective passion to identify icons of the road and deploy artisan and bleeding edge technology manufacturing and materials into a unique showpiece." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-black/70 leading-relaxed", children: "The mission has never been to recreate the RS500. It's to imagine what it would have become if its bloodline had continued uninterrupted into 2026. With Al Yasid's vision blending heritage with modern design language, creating a silhouette that feels both inevitable and completely new. This is how legends evolve" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-7 h-[300px] md:h-[450px] overflow-hidden relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute inset-0 bg-fixed bg-cover bg-center grayscale opacity-80 parallax-bg",
          style: { backgroundImage: `url(${workshop})` }
        }
      ) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1500px] mx-auto px-6 md:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow", children: "02 / Principles" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-6 font-display uppercase text-5xl md:text-7xl leading-[0.9]", children: "What we believe." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-px bg-white/10 mt-16", children: principles.map(([t, b], i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `bg-black p-10 md:p-14 reveal stagger-${i % 2 + 1}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[11px] uppercase tracking-[0.22em] opacity-50", children: String(i + 1).padStart(2, "0") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display uppercase text-3xl md:text-4xl mt-6", children: t }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 text-sm opacity-70 leading-relaxed", children: b })
      ] }, t)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 md:py-32 border-t border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1500px] mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-12 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-5 sticky top-32", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow", children: "03 / The Roster" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-6 font-display uppercase text-5xl md:text-6xl leading-[0.95]", children: [
          "People",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-serif-italic normal-case opacity-70", children: "behind it." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 text-white/70 leading-relaxed max-w-md", children: "The primary architects of the Vision148 project have been supported by unique collaborations from automotive and Motorsport with a singular mission to deliver and showcase the very best in coach building and bleeding edge technology manufacturing." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-7 border-t border-white/10 mt-12 md:mt-0", children: teamMembers.map(({ position, name, image }, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `group flex flex-col md:flex-row items-start md:items-center justify-between gap-8 py-6 md:py-8 border-b border-white/10 hover:bg-white/5 transition-colors cursor-default md:-mx-6 md:px-6 rounded-2xl reveal stagger-${i % 5 + 1}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-xs md:text-sm uppercase tracking-widest text-white/70 group-hover:text-white transition-colors md:w-2/3 leading-loose pr-8", children: position && position.startsWith(name) ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-white text-black font-semibold px-2 py-0.5 mr-2", children: name }),
          position.slice(name.length).trim()
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-white text-black font-semibold px-2 py-0.5 mr-2", children: name }),
          position
        ] }) }),
        image && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-start md:justify-end md:w-1/3 w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: image,
            alt: name,
            className: "w-20 h-20 md:w-28 md:h-28 shrink-0 object-cover rounded-full grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105 border border-white/10"
          }
        ) })
      ] }, name)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "paper py-24 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1500px] mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-12 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-7", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: design$2, alt: "Design", className: "w-full grayscale aspect-[4/3] object-cover" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 font-mono text-[0.7rem] tracking-[0.22em] uppercase text-black/50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "04" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-10 bg-black/30" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Vision" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-5xl md:text-6xl uppercase leading-[0.95] mt-8", children: [
          "Not a brand.",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-serif-italic normal-case opacity-70", children: "An experience" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 text-black/70 leading-relaxed", children: "But, the true benefactors of this project will be a limited few who will be have the unique privilege of experiencing driving the completed car through an unique syndicate of individuals." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CrossLink, { to: "/contact", eyebrow: "Next", title: "Contact the studio →" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
function Marquee({ items }) {
  const row = [...items, ...items];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-y border-white/10 py-6 overflow-hidden marquee-mask", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex animate-marquee whitespace-nowrap", children: row.map((it, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "span",
    {
      className: "font-display uppercase text-3xl md:text-5xl tracking-tight mx-10 inline-flex items-center gap-10",
      children: [
        it,
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/30 font-serif-italic text-2xl", children: "·" })
      ]
    },
    i
  )) }) });
}
const heroCar = "/assets/hero-car-D7AYmz0K.jpg";
const heroVideo = "/assets/video-CEQfNafy.mp4";
const Route$2 = createFileRoute("/")({
  loader: async () => {
    const seo = await fetchSeoMetadata("home", {
      title: "Vision148 — RS500 Genesis Build",
      description: "Vision148 — a one-of-one syndicated build of the Ford Sierra RS500 Cosworth. Heritage coachbuilding meets digital manufacturing.",
      og_title: "Vision148 — RS500 Genesis Build",
      og_description: "A one-of-one syndicated build of the Ford Sierra RS500 Cosworth.",
      og_image: "/og.jpg"
    });
    return { seo };
  },
  head: ({ loaderData }) => ({
    meta: mapSeoToMeta(loaderData?.seo || {
      title: "Vision148 — RS500 Genesis Build",
      description: "Vision148 — a one-of-one syndicated build of the Ford Sierra RS500 Cosworth. Heritage coachbuilding meets digital manufacturing.",
      og_title: "Vision148 — RS500 Genesis Build",
      og_description: "A one-of-one syndicated build of the Ford Sierra RS500 Cosworth.",
      og_image: "/og.jpg"
    })
  }),
  component: Home
});
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "top", className: "relative min-h-screen flex items-end overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "video",
      {
        src: heroVideo,
        poster: heroCar,
        autoPlay: true,
        muted: true,
        loop: true,
        playsInline: true,
        className: "absolute inset-0 w-full h-full object-cover opacity-70 grayscale scale-[1.04]"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/80" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grain pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-[1500px] mx-auto px-6 md:px-10 pb-20 md:pb-28 w-full reveal", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 eyebrow mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full bg-white animate-pulse" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "A Sarthe Cars Programme" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-10 bg-white/30" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Est. 2024" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display uppercase leading-[0.84] text-[18vw] md:text-[10.5vw] tracking-tight", children: [
        "One ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-serif-italic normal-case font-normal opacity-90", children: "of" }),
        " One.",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "opacity-50", children: "RS500" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 grid md:grid-cols-12 gap-8 items-end", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "md:col-span-7 text-base md:text-lg text-white/70 max-w-2xl leading-relaxed", children: "The reimagination and re-engineering of car #148 of the original 500 Ford Sierra RS500 Cosworths — reimagined through digital manufacturing, artisan coachbuilding, and a private syndicate of twenty-five." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-5 flex flex-wrap gap-3 md:justify-end", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(PillLink, { to: "/apply", children: "Join the Syndicate" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(PillLink, { to: "/the-car", variant: "ghost", children: "The Car" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-mono uppercase tracking-[0.4em] text-white/50 animate-pulse", children: "Scroll" })
  ] });
}
function Manifesto() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-32 md:py-48 border-t border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1500px] mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { n: "01", title: "Manifesto" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display uppercase text-3xl md:text-5xl leading-[1.05] tracking-tight", children: [
        "A modern ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-serif-italic normal-case opacity-80", children: "homage" }),
        ", built once. A digital twin. A private ledger of provenance. Twenty-five custodians of a singular automotive ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-serif-italic normal-case opacity-80", children: "artefact" }),
        "."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid grid-cols-3 gap-6 max-w-xl", children: [
        ["500", "Original cars"],
        ["1 / 1", "Genesis build"],
        ["25", "Syndicate seats"]
      ].map(([k, v], i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `border-t border-white/20 pt-4 reveal stagger-${i + 1}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-3xl md:text-4xl", children: k }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] mt-2 font-mono uppercase tracking-[0.2em] text-white/50", children: v })
      ] }, v)) })
    ] })
  ] }) });
}
function Pillars() {
  const items = [
    { n: "I", title: "One of One", body: "A singular build derived from chassis #148 — never duplicated, never replicated." },
    { n: "II", title: "World-Class Partners", body: "DMC, Mahle, Coventry Metalcraft, T3DMC, BAMD, ASM — embedded throughout." },
    { n: "III", title: "Exclusive Access", body: "Private drives, factory visits, and curated experiences with the finished car." }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "paper", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-[1500px] mx-auto px-6 md:px-10 py-24 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-0 border-t border-b border-black/15 overflow-hidden", children: items.map((it, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: `p-10 md:p-14 group transition-colors hover:bg-black hover:text-white reveal stagger-${i + 1} ${i > 0 ? "md:border-l border-black/15 border-t md:border-t-0" : ""}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-xs tracking-[0.3em] opacity-60", children: it.n }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-3xl md:text-4xl uppercase mt-8 leading-tight", children: it.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-sm leading-relaxed opacity-70 max-w-xs", children: it.body })
      ]
    },
    it.title
  )) }) }) });
}
function HighlightCar() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-28 md:py-40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1500px] mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-7 overflow-hidden reveal aspect-[4/3] bg-white/5 relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "video",
      {
        src: chassisVideo,
        autoPlay: true,
        muted: true,
        loop: true,
        playsInline: true,
        className: "w-full h-full object-cover grayscale zoom-hover"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-5 md:pt-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { n: "02", title: "The Car" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-5xl md:text-6xl uppercase leading-[0.95] mt-8", children: [
        "Vision148",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-serif-italic normal-case opacity-70", children: "RS500." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 text-white/70 leading-relaxed", children: "Car #148 — stored for fifteen years, acquired in 2024, now reborn. Dismantled with archaeological care, every component catalogued, scanned and assessed for restoration, replacement or additive remanufacture." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PillLink, { to: "/the-car", variant: "ghost", children: "Read the Specification" }) })
    ] })
  ] }) });
}
function HighlightProcess() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-28 md:py-40 border-t border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1500px] mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-12 items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { n: "03", title: "Process" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-5xl md:text-6xl uppercase leading-[0.95] mt-8", children: [
        "From chassis",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-serif-italic normal-case opacity-70", children: "to road." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 text-white/70 leading-relaxed max-w-xl", children: "Three phases. Eighteen months. Documented in full digital fidelity. From the archaeological dismantle through to the first turn of the key." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PillLink, { to: "/process", variant: "ghost", children: "The Build Process" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-7 overflow-hidden reveal aspect-[4/3] bg-white/5 relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "video",
      {
        src: processVideo,
        autoPlay: true,
        muted: true,
        loop: true,
        playsInline: true,
        className: "w-full h-full object-cover grayscale zoom-hover"
      }
    ) })
  ] }) });
}
function HighlightExperience() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "paper", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1500px] mx-auto px-6 md:px-10 py-28 md:py-40 grid md:grid-cols-12 gap-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-7 overflow-hidden reveal aspect-[4/3] bg-white/5 relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "video",
      {
        src: partnerVideo,
        autoPlay: true,
        muted: true,
        loop: true,
        playsInline: true,
        className: "w-full h-full object-cover grayscale zoom-hover"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-5 md:pt-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 font-mono text-[0.7rem] tracking-[0.22em] uppercase text-black/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "04" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-10 bg-black/30" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "The Experience" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-5xl md:text-6xl uppercase leading-[0.95] mt-8", children: [
        "Ownership,",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-serif-italic normal-case opacity-70", children: "reimagined." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 text-black/70 leading-relaxed", children: "Private drives. Studio visits. Curated exhibitions. A custodianship calendar designed around the finished car and the people who built it." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: "/experience",
          className: "inline-flex items-center gap-3 text-[11px] font-mono uppercase tracking-[0.24em] border border-black/40 px-7 py-4 hover:bg-black hover:text-white transition-colors",
          children: [
            "The Experience ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "→" })
          ]
        }
      ) })
    ] })
  ] }) });
}
function Scarcity() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-28 md:py-40 border-t border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1500px] mx-auto px-6 md:px-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline justify-between gap-8 flex-wrap", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow", children: "05 / Scarcity" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow", children: "One build · Twenty-five custodians" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 font-display uppercase leading-[0.82] text-[34vw] md:text-[22vw] tracking-tight text-center", children: [
      "1",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-serif-italic normal-case opacity-60", children: "4" }),
      "8"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 max-w-2xl mx-auto text-center text-white/65 leading-relaxed", children: "The 148th of 500 RS500 Cosworths ever built. Reborn once. Then never again." })
  ] }) });
}
function FinalCTA() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-32 md:py-48 border-t border-white/10 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1500px] mx-auto px-6 md:px-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow", children: "Apply" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display uppercase text-6xl md:text-8xl leading-[0.9] tracking-tight mt-8", children: [
      "Take a seat",
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-serif-italic normal-case opacity-70", children: "in history." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-10 max-w-xl mx-auto text-white/60 leading-relaxed", children: "Syndicate places are limited and reviewed individually. Register interest to receive the full prospectus and an introduction from the Vision148 team." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 flex flex-wrap gap-4 justify-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(PillLink, { to: "/apply", children: "Register Interest" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(PillLink, { to: "/partners", variant: "ghost", children: "Meet the Partners" })
    ] })
  ] }) });
}
function Home() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "bg-background text-foreground min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Marquee, { items: ["One of One", "RS500 Cosworth", "Genesis Build", "Digital Twin", "25 Custodians", "Est. 2024"] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Manifesto, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Pillars, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(HighlightCar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(HighlightProcess, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(HighlightExperience, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Scarcity, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FinalCTA, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CrossLink, { to: "/apply", eyebrow: "Next", title: "Apply for a seat →" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
const engine = "/assets/engine-BAsbs6x4.jpg";
const design = "/assets/scanning-Zqz__a3f.jpg";
const experience = "/assets/dismantle-DDyiDgC6.jpg";
const theCar = "/assets/the_car_crowd-BrIp2JeP.jpg";
const posts = [
  {
    slug: "bare-shell",
    date: "May 2026",
    category: "Build Note",
    title: "BARE SHELL, STRIPPED & SCANNED",
    excerpt: "Together with our partners at ASM, 148 has been completely stripped and prepared for ICE blasting, repair, alignment and painting and further scanned to create our unique digital datum.",
    video: chassisVideo,
    img: workshop,
    content: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "In the painstaking process of reviving #148, the initial dismantling phase proved crucial. Working alongside our dedicated partners at ASM, we meticulously stripped the vehicle down to its barest essentials. Every component, no matter how minute, was carefully cataloged and preserved for the ensuing steps." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "The journey from a complete car to a bare metal chassis is not merely about taking things apart—it is about establishing a flawless foundation. Once stripped, the shell was prepared for an intensive ICE blasting process. This state-of-the-art cleaning technique ensures that decades of road wear, old paint, and accumulated debris are removed without compromising the integrity of the underlying steel." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Digital Precision Meets Analog Craft" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Perhaps the most vital step in this phase was the comprehensive 3D scanning of the bare shell. This scan provides us with an absolute, uncompromising digital datum—a perfect blueprint against which every subsequent repair, alignment, and modification will be measured. It bridges the gap between historical coachbuilding techniques and cutting-edge additive manufacturing, ensuring that when #148 returns to the road, it does so with a precision that was unimaginable in 1987." })
    ] })
  },
  {
    slug: "mahle-powertrain",
    date: "APR 2025",
    category: "Al Yasid Design",
    title: "COLLABORATING WITH TALENTED VISUALISER AL YASID DESIGN",
    excerpt: "Identifying talent is something that the project is keen to deliver. The Al Yasid Design language accelerated the project potential from initial sketches to tuned visuals to reinterpret this icon.",
    img: engine,
    content: /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Detailed build notes regarding the Mahle Powertrain process will go here. A deep dive into the engineering required to rebirth the iconic YBD block." }) })
  },
  {
    slug: "digital-twin",
    date: "Mar 2026",
    category: "Digital Twin",
    title: "Why we model every component before we touch it.",
    excerpt: "Each component has been digitally scanned with our partners T3DMC to create a unique digital datum for this build. 148 is the most digitally documented RS500 in existence.",
    img: design,
    content: /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Detailed notes regarding the digital twin modelling process will go here. Every single component is meticulously rendered before physical work begins." }) })
  },
  {
    slug: "first-dinner",
    date: "Feb 2026",
    category: "DISMANTLE",
    title: "A first DISMANTLING 148  with the syndicate.",
    excerpt: "Total care and attention from partners ASM Autorecycling to  respectfully dismantle 148 and to catalogue each part to assess repair, replace or remanufacture components for the build.",
    img: experience,
    content: /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Detailed notes regarding the first syndicate dinner will go here, highlighting the community aspect of the Vision148 project." }) })
  },
  {
    slug: "provenance",
    date: "apr 2026",
    category: "SYNDICATE BIRTH",
    title: "THE BIRTH OF A SYNDICATE",
    excerpt: "in collaboration with TheCarCrowd the creation of an exclusive Syndicate will allow members the opportunity to become a part of this project and to ultimately experience driving the RS500 #148.",
    img: theCar,
    content: /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Detailed notes regarding the extraordinary chain of custody for the donor car will go here, tracing its history back to 1987." }) })
  }
];
const Route$1 = createFileRoute("/journal/")({
  loader: async () => {
    const seo = await fetchSeoMetadata("journal", {
      title: "Journal — Vision148",
      description: "A curated in-depth record from acquisition to completion of #148 RS500.",
      og_title: "Journal — Vision148",
      og_description: "A curated in-depth record from acquisition to completion of #148 RS500."
    });
    return { seo };
  },
  head: ({ loaderData }) => ({
    meta: mapSeoToMeta(loaderData?.seo || {
      title: "Journal — Vision148",
      description: "A curated in-depth record from acquisition to completion of #148 RS500.",
      og_title: "Journal — Vision148",
      og_description: "A curated in-depth record from acquisition to completion of #148 RS500."
    })
  }),
  component: JournalIndexPage
});
function JournalIndexPage() {
  const [lead, ...rest] = posts;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "bg-background text-foreground min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHero,
      {
        eyebrow: "08 / Journal",
        title: "Dispatches",
        italic: "from the floor.",
        intro: "A curated in-depth record from acquisition to completion of #148 RS500. This will be a unique insight into the artisan skills of coach building to the bleeding edge additive manufacturing usually reserved for the word of hypercar and motorsport.",
        video: journalVideo
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 md:py-28 border-b border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-[1500px] mx-auto px-6 md:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/journal/$slug", params: { slug: lead.slug }, className: "group grid md:grid-cols-12 gap-10 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-7 overflow-hidden", children: lead.video ? /* @__PURE__ */ jsxRuntimeExports.jsx("video", { src: lead.video, autoPlay: true, muted: true, loop: true, playsInline: true, className: "w-full aspect-[16/10] object-cover grayscale transition-transform duration-700 group-hover:scale-[1.03]" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: lead.img,
          alt: lead.title,
          className: "w-full aspect-[16/10] object-cover grayscale transition-transform duration-700 group-hover:scale-[1.03]"
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 font-mono text-[10px] tracking-[0.24em] uppercase text-white/50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: lead.date }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-8 bg-white/30" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: lead.category })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-6 font-display uppercase text-4xl md:text-6xl leading-[0.95]", children: lead.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-white/70 leading-relaxed max-w-md", children: lead.excerpt }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 text-xs font-mono uppercase tracking-[0.24em] link-underline inline-block", children: "Read the entry →" })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1500px] mx-auto px-6 md:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow mb-12", children: "Archive" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-px bg-white/10", children: rest.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: "/journal/$slug",
          params: { slug: p.slug },
          className: "group bg-black p-8 md:p-10 hover:bg-white hover:text-black transition-colors duration-500",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden", children: p.video ? /* @__PURE__ */ jsxRuntimeExports.jsx("video", { src: p.video, autoPlay: true, muted: true, loop: true, playsInline: true, className: "w-full aspect-[16/10] object-cover grayscale group-hover:scale-105 transition-transform duration-700" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.img, alt: p.title, className: "w-full aspect-[16/10] object-cover grayscale group-hover:scale-105 transition-transform duration-700" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-center gap-4 font-mono text-[10px] tracking-[0.24em] uppercase opacity-60", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: p.date }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "·" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: p.category })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 font-display uppercase text-2xl md:text-3xl leading-tight", children: p.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 text-sm opacity-70 leading-relaxed", children: p.excerpt })
          ]
        },
        p.title
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CrossLink, { to: "/about", eyebrow: "Behind it", title: "About the studio →" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
const Route = createFileRoute("/journal/$slug")({
  component: JournalPost,
  loader: ({ params }) => {
    const post = posts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { slug: post.slug };
  },
  head: ({ loaderData }) => {
    const post = posts.find((p) => p.slug === loaderData?.slug);
    return {
      meta: [
        { title: `${post ? post.title : "Post"} — Vision148` },
        { name: "description", content: post ? post.excerpt : "Vision148 RS500 Genesis Build dispatch." },
        { property: "og:title", content: post ? post.title : "Vision148 Dispatch" },
        { property: "og:description", content: post ? post.excerpt : "Vision148 RS500 Genesis Build dispatch." }
      ]
    };
  }
});
function JournalPost() {
  const { slug } = Route.useLoaderData();
  const post = posts.find((p) => p.slug === slug);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "bg-background text-foreground min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHero,
      {
        eyebrow: `JOURNAL — ${post.date} — ${post.category}`,
        title: post.title,
        intro: post.excerpt,
        video: post.video,
        img: post.img
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("article", { className: "py-20 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-[800px] mx-auto px-6 md:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "prose prose-invert prose-lg font-sans leading-loose text-white/80", children: post.content }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CrossLink, { to: "/journal", eyebrow: "Archive", title: "More Dispatches →" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
const TheCarRoute = Route$b.update({
  id: "/the-car",
  path: "/the-car",
  getParentRoute: () => Route$c
});
const ProcessRoute = Route$a.update({
  id: "/process",
  path: "/process",
  getParentRoute: () => Route$c
});
const PartnersRoute = Route$9.update({
  id: "/partners",
  path: "/partners",
  getParentRoute: () => Route$c
});
const JournalRoute = Route$8.update({
  id: "/journal",
  path: "/journal",
  getParentRoute: () => Route$c
});
const FaqRoute = Route$7.update({
  id: "/faq",
  path: "/faq",
  getParentRoute: () => Route$c
});
const ExperienceRoute = Route$6.update({
  id: "/experience",
  path: "/experience",
  getParentRoute: () => Route$c
});
const ContactRoute = Route$5.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$c
});
const ApplyRoute = Route$4.update({
  id: "/apply",
  path: "/apply",
  getParentRoute: () => Route$c
});
const AboutRoute = Route$3.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$c
});
const IndexRoute = Route$2.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$c
});
const JournalIndexRoute = Route$1.update({
  id: "/",
  path: "/",
  getParentRoute: () => JournalRoute
});
const JournalSlugRoute = Route.update({
  id: "/$slug",
  path: "/$slug",
  getParentRoute: () => JournalRoute
});
const JournalRouteChildren = {
  JournalSlugRoute,
  JournalIndexRoute
};
const JournalRouteWithChildren = JournalRoute._addFileChildren(JournalRouteChildren);
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  ApplyRoute,
  ContactRoute,
  ExperienceRoute,
  FaqRoute,
  JournalRoute: JournalRouteWithChildren,
  PartnersRoute,
  ProcessRoute,
  TheCarRoute
};
const routeTree = Route$c._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router;
};
export {
  getRouter
};
