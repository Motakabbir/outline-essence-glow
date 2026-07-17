import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { N as Nav, P as PageHero, F as Footer } from "./Primitives-DwaFkoMK.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
function ApplyPage() {
  const [submitted, setSubmitted] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "bg-background text-foreground min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "05 / Apply", title: "Take a seat", italic: "in history.", intro: "Syndicate places are limited and reviewed individually. Share a few details and the Vision148 team will be in touch with the full prospectus." }),
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
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: (e) => {
        e.preventDefault();
        setSubmitted(true);
      }, className: "space-y-10", children: [
        [{
          id: "name",
          label: "Full name",
          type: "text",
          required: true
        }, {
          id: "email",
          label: "Email address",
          type: "email",
          required: true
        }, {
          id: "phone",
          label: "Phone (optional)",
          type: "tel",
          required: false
        }, {
          id: "intro",
          label: "How did you hear of Vision148?",
          type: "text",
          required: false
        }].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-white/20 pb-4 focus-within:border-white transition-colors", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: f.id, className: "block eyebrow mb-3", children: f.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: f.id, type: f.type, required: f.required, className: "w-full bg-transparent text-xl md:text-2xl font-display tracking-tight placeholder:opacity-30 outline-none", placeholder: "—" })
        ] }, f.id)),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-white/20 pb-4 focus-within:border-white transition-colors", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "message", className: "block eyebrow mb-3", children: "Notes (optional)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { id: "message", rows: 4, className: "w-full bg-transparent text-lg leading-relaxed placeholder:opacity-30 outline-none resize-none", placeholder: "Anything we should know" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-6 pt-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", className: "group inline-flex items-center gap-3 bg-white text-black px-8 py-4 text-[11px] font-mono uppercase tracking-[0.24em] hover:bg-white/85 transition", children: [
            "Register Interest",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block transition-transform duration-300 group-hover:translate-x-1", children: "→" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-mono uppercase tracking-[0.22em] text-white/40", children: "We will respond within five working days" })
        ] })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  ApplyPage as component
};
