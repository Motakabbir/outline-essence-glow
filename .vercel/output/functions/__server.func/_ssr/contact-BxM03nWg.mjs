import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { e as createSsrRpc } from "./router-DYMhSVNV.mjs";
import { a as createServerFn } from "./server-C1mmbbAp.mjs";
import { N as Nav, P as PageHero, C as CrossLink, F as Footer } from "./Primitives-DHBnMrOH.mjs";
import { j as journalVideo } from "./journal-Dn1zTfAK.mjs";
import { d as sendContactForm } from "./api-Drrs5acz.mjs";
import "../_libs/seroval.mjs";
import { o as objectType, s as stringType } from "../_libs/zod.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
createServerFn({
  method: "POST"
}).inputValidator(objectType({
  first_name: stringType(),
  last_name: stringType(),
  email: stringType().email(),
  phone: stringType(),
  message: stringType()
})).handler(createSsrRpc("c3804d43ea11a75535ebb5ae9e76d1efb9734c08a9487988e3b78f015fb81075"));
const channels = [["Custodianship", "syndicate@vision148.com", "For seat enquiries and applications."], ["Partnerships", "studio@vision148.com", "Suppliers, collaborators and patrons."], ["Press", "press@vision148.com", "Editorial, features and image requests."]];
const locations = [["Studio", "Coventry, UK", "By appointment only."], ["Engineering", "Silverstone, UK", "ASM Performance facility."], ["Office", "London, UK", "Mayfair — by introduction."]];
function ContactPage() {
  const [sent, setSent] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "bg-background text-foreground min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "06 / Contact", title: "Get in", italic: "touch.", intro: "The studio answers personally. Most messages receive a reply within two working days.", video: journalVideo }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-[1500px] mx-auto px-6 md:px-10 grid md:grid-cols-3 gap-px bg-white/10", children: channels.map(([t, email, b]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `mailto:${email}`, className: "bg-black p-10 md:p-12 group hover:bg-white hover:text-black transition-colors duration-500", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[11px] uppercase tracking-[0.22em] opacity-50", children: t }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display uppercase text-2xl md:text-3xl mt-6 break-words", children: email }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 text-sm opacity-70 leading-relaxed", children: b }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 text-xs font-mono uppercase tracking-[0.24em] opacity-60 group-hover:opacity-100", children: "Write →" })
    ] }, email)) }) }),
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
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: async (e) => {
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
      }, className: "space-y-6 text-black", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "First Name", name: "first_name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Last Name", name: "last_name" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email", name: "email", type: "email" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Phone", name: "phone", type: "tel" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Message", name: "message", textarea: true }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", className: "inline-flex items-center gap-3 px-7 py-4 text-[11px] font-mono tracking-[0.24em] uppercase bg-black text-white hover:bg-black/85 transition-colors", children: [
          "Send message ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "→" })
        ] })
      ] }) })
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
export {
  ContactPage as component
};
