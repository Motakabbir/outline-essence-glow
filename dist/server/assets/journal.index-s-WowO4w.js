import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { N as Nav, P as PageHero, C as CrossLink, F as Footer } from "./Primitives-DHBnMrOH.js";
import { p as posts } from "./router-Cy05bNZC.js";
import { j as journalVideo } from "./journal-Dn1zTfAK.js";
import "react";
import "@tanstack/react-query";
import "./api-Drrs5acz.js";
import "./server-Ci16uXs1.js";
import "node:async_hooks";
import "h3-v2";
import "@tanstack/router-core";
import "seroval";
import "@tanstack/history";
import "@tanstack/router-core/ssr/client";
import "@tanstack/router-core/ssr/server";
import "@tanstack/react-router/ssr/server";
import "zod";
function JournalIndexPage() {
  const [lead, ...rest] = posts;
  return /* @__PURE__ */ jsxs("main", { className: "bg-background text-foreground min-h-screen", children: [
    /* @__PURE__ */ jsx(Nav, {}),
    /* @__PURE__ */ jsx(PageHero, { eyebrow: "08 / Journal", title: "Dispatches", italic: "from the floor.", intro: "A curated in-depth record from acquisition to completion of #148 RS500. This will be a unique insight into the artisan skills of coach building to the bleeding edge additive manufacturing usually reserved for the word of hypercar and motorsport.", video: journalVideo }),
    /* @__PURE__ */ jsx("section", { className: "py-20 md:py-28 border-b border-white/10", children: /* @__PURE__ */ jsx("div", { className: "max-w-[1500px] mx-auto px-6 md:px-10", children: /* @__PURE__ */ jsxs(Link, { to: "/journal/$slug", params: {
      slug: lead.slug
    }, className: "group grid md:grid-cols-12 gap-10 items-center", children: [
      /* @__PURE__ */ jsx("div", { className: "md:col-span-7 overflow-hidden", children: lead.video ? /* @__PURE__ */ jsx("video", { src: lead.video, autoPlay: true, muted: true, loop: true, playsInline: true, className: "w-full aspect-[16/10] object-cover grayscale transition-transform duration-700 group-hover:scale-[1.03]" }) : /* @__PURE__ */ jsx("img", { src: lead.img, alt: lead.title, className: "w-full aspect-[16/10] object-cover grayscale transition-transform duration-700 group-hover:scale-[1.03]" }) }),
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-5", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 font-mono text-[10px] tracking-[0.24em] uppercase text-white/50", children: [
          /* @__PURE__ */ jsx("span", { children: lead.date }),
          /* @__PURE__ */ jsx("span", { className: "h-px w-8 bg-white/30" }),
          /* @__PURE__ */ jsx("span", { children: lead.category })
        ] }),
        /* @__PURE__ */ jsx("h2", { className: "mt-6 font-display uppercase text-4xl md:text-6xl leading-[0.95]", children: lead.title }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-white/70 leading-relaxed max-w-md", children: lead.excerpt }),
        /* @__PURE__ */ jsx("div", { className: "mt-8 text-xs font-mono uppercase tracking-[0.24em] link-underline inline-block", children: "Read the entry →" })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-24 md:py-32", children: /* @__PURE__ */ jsxs("div", { className: "max-w-[1500px] mx-auto px-6 md:px-10", children: [
      /* @__PURE__ */ jsx("div", { className: "eyebrow mb-12", children: "Archive" }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-px bg-white/10", children: rest.map((p) => /* @__PURE__ */ jsxs(Link, { to: "/journal/$slug", params: {
        slug: p.slug
      }, className: "group bg-black p-8 md:p-10 hover:bg-white hover:text-black transition-colors duration-500", children: [
        /* @__PURE__ */ jsx("div", { className: "overflow-hidden", children: p.video ? /* @__PURE__ */ jsx("video", { src: p.video, autoPlay: true, muted: true, loop: true, playsInline: true, className: "w-full aspect-[16/10] object-cover grayscale group-hover:scale-105 transition-transform duration-700" }) : /* @__PURE__ */ jsx("img", { src: p.img, alt: p.title, className: "w-full aspect-[16/10] object-cover grayscale group-hover:scale-105 transition-transform duration-700" }) }),
        /* @__PURE__ */ jsxs("div", { className: "mt-6 flex items-center gap-4 font-mono text-[10px] tracking-[0.24em] uppercase opacity-60", children: [
          /* @__PURE__ */ jsx("span", { children: p.date }),
          /* @__PURE__ */ jsx("span", { children: "·" }),
          /* @__PURE__ */ jsx("span", { children: p.category })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-3 font-display uppercase text-2xl md:text-3xl leading-tight", children: p.title }),
        /* @__PURE__ */ jsx("div", { className: "mt-4 text-sm opacity-70 leading-relaxed", children: p.excerpt })
      ] }, p.title)) })
    ] }) }),
    /* @__PURE__ */ jsx(CrossLink, { to: "/about", eyebrow: "Behind it", title: "About the studio →" }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  JournalIndexPage as component
};
