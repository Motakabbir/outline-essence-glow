import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { N as Nav, P as PageHero, C as CrossLink, F as Footer } from "./Primitives-DHBnMrOH.mjs";
import { p as posts } from "./router-C21SdIMQ.mjs";
import { j as journalVideo } from "./journal-Dn1zTfAK.mjs";
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
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "./api-Dbo41vAU.mjs";
function JournalIndexPage() {
  const [lead, ...rest] = posts;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "bg-background text-foreground min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "08 / Journal", title: "Dispatches", italic: "from the floor.", intro: "A curated in-depth record from acquisition to completion of #148 RS500. This will be a unique insight into the artisan skills of coach building to the bleeding edge additive manufacturing usually reserved for the word of hypercar and motorsport.", video: journalVideo }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 md:py-28 border-b border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-[1500px] mx-auto px-6 md:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/journal/$slug", params: {
      slug: lead.slug
    }, className: "group grid md:grid-cols-12 gap-10 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-7 overflow-hidden", children: lead.video ? /* @__PURE__ */ jsxRuntimeExports.jsx("video", { src: lead.video, autoPlay: true, muted: true, loop: true, playsInline: true, className: "w-full aspect-[16/10] object-cover grayscale transition-transform duration-700 group-hover:scale-[1.03]" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: lead.img, alt: lead.title, className: "w-full aspect-[16/10] object-cover grayscale transition-transform duration-700 group-hover:scale-[1.03]" }) }),
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
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-px bg-white/10", children: rest.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/journal/$slug", params: {
        slug: p.slug
      }, className: "group bg-black p-8 md:p-10 hover:bg-white hover:text-black transition-colors duration-500", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden", children: p.video ? /* @__PURE__ */ jsxRuntimeExports.jsx("video", { src: p.video, autoPlay: true, muted: true, loop: true, playsInline: true, className: "w-full aspect-[16/10] object-cover grayscale group-hover:scale-105 transition-transform duration-700" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.img, alt: p.title, className: "w-full aspect-[16/10] object-cover grayscale group-hover:scale-105 transition-transform duration-700" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-center gap-4 font-mono text-[10px] tracking-[0.24em] uppercase opacity-60", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: p.date }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "·" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: p.category })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 font-display uppercase text-2xl md:text-3xl leading-tight", children: p.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 text-sm opacity-70 leading-relaxed", children: p.excerpt })
      ] }, p.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CrossLink, { to: "/about", eyebrow: "Behind it", title: "About the studio →" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  JournalIndexPage as component
};
