import { jsxs, jsx } from "react/jsx-runtime";
import { N as Nav, P as PageHero, C as CrossLink, F as Footer } from "./Primitives-DHBnMrOH.js";
import { p as partnerVideo } from "./partner-GufV5oeM.js";
import { R as Route } from "./router-Cy05bNZC.js";
import "@tanstack/react-router";
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
function PartnersPage() {
  const {
    partners: dynamicPartners
  } = Route.useLoaderData();
  return /* @__PURE__ */ jsxs("main", { className: "bg-background text-foreground min-h-screen", children: [
    /* @__PURE__ */ jsx(Nav, {}),
    /* @__PURE__ */ jsx(PageHero, { eyebrow: "03 / Partners", title: "A curated", italic: "consortium.", intro: "Each partner is best-in-class — additive manufacturing, coachbuilding, composites, engine engineering. Selected to elevate the technical and commercial credibility of a one-of-one, investment-grade build.", video: partnerVideo }),
    /* @__PURE__ */ jsx("section", { className: "py-20 md:py-28", children: /* @__PURE__ */ jsx("div", { className: "max-w-[1500px] mx-auto px-6 md:px-10", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 border-t border-l border-white/15", children: dynamicPartners.map((p, i) => /* @__PURE__ */ jsx("div", { className: `border-b border-r border-white/15 aspect-[3/1] flex items-center justify-center px-4 group transition-colors hover:bg-white hover:text-black reveal stagger-${i % 4 + 1}`, children: /* @__PURE__ */ jsx("span", { className: "font-display uppercase tracking-[0.18em] text-lg md:text-xl text-center", children: p.name }) }, p.name)) }) }) }),
    /* @__PURE__ */ jsx("section", { className: "paper", children: /* @__PURE__ */ jsxs("div", { className: "max-w-[1500px] mx-auto px-6 md:px-10 py-24 md:py-32", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 font-mono text-[0.7rem] tracking-[0.22em] uppercase text-black/50", children: [
        /* @__PURE__ */ jsx("span", { children: "04" }),
        /* @__PURE__ */ jsx("span", { className: "h-px w-10 bg-black/30" }),
        /* @__PURE__ */ jsx("span", { children: "Roster" })
      ] }),
      /* @__PURE__ */ jsxs("h2", { className: "font-display text-5xl md:text-6xl uppercase leading-[0.95] mt-8 max-w-3xl", children: [
        "Named hands. ",
        /* @__PURE__ */ jsx("span", { className: "font-serif-italic normal-case opacity-70", children: "Named houses." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-16 divide-y divide-black/15 border-y border-black/15", children: dynamicPartners.map((p, i) => /* @__PURE__ */ jsxs("div", { className: `grid md:grid-cols-12 gap-6 py-10 group reveal stagger-${i % 4 + 1}`, children: [
        /* @__PURE__ */ jsx("div", { className: "md:col-span-1 font-mono text-[11px] uppercase tracking-[0.22em] opacity-50", children: String(i + 1).padStart(2, "0") }),
        /* @__PURE__ */ jsx("div", { className: "md:col-span-4 font-display uppercase text-3xl md:text-4xl tracking-tight", children: p.name }),
        /* @__PURE__ */ jsx("div", { className: "md:col-span-3 font-mono text-[11px] uppercase tracking-[0.22em] opacity-60", children: p.role }),
        /* @__PURE__ */ jsx("div", { className: "md:col-span-4 text-sm text-black/70 leading-relaxed", children: p.body })
      ] }, p.name)) })
    ] }) }),
    /* @__PURE__ */ jsx(CrossLink, { to: "/experience", eyebrow: "Next", title: "The Experience →" }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  PartnersPage as component
};
