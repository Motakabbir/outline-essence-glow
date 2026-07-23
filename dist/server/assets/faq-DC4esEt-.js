import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { N as Nav, P as PageHero, C as CrossLink, F as Footer } from "./Primitives-DHBnMrOH.js";
import { a as Route, d as chassisVideo } from "./router-Cy05bNZC.js";
import "@tanstack/react-router";
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
function FAQPage() {
  const {
    groups
  } = Route.useLoaderData();
  return /* @__PURE__ */ jsxs("main", { className: "bg-background text-foreground min-h-screen", children: [
    /* @__PURE__ */ jsx(Nav, {}),
    /* @__PURE__ */ jsx(PageHero, { eyebrow: "07 / FAQ", title: "Questions,", italic: "answered.", intro: "If something isn't covered here, the studio answers personally — write to us at hello@vision148.com.", video: chassisVideo }),
    /* @__PURE__ */ jsx("section", { className: "py-24 md:py-32", children: /* @__PURE__ */ jsx("div", { className: "max-w-[1100px] mx-auto px-6 md:px-10 space-y-20", children: groups.map((g, gi) => /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 font-mono text-[0.7rem] tracking-[0.22em] uppercase text-white/50", children: [
        /* @__PURE__ */ jsx("span", { children: String(gi + 1).padStart(2, "0") }),
        /* @__PURE__ */ jsx("span", { className: "h-px w-10 bg-white/20" }),
        /* @__PURE__ */ jsx("span", { children: g.title })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-8 border-t border-white/15", children: g.items.map(([q, a]) => /* @__PURE__ */ jsx(FAQItem, { q, a }, q)) })
    ] }, g.title)) }) }),
    /* @__PURE__ */ jsx(CrossLink, { to: "/apply", eyebrow: "Ready?", title: "Apply for a seat →" }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
function FAQItem({
  q,
  a
}) {
  const [open, setOpen] = useState(false);
  return /* @__PURE__ */ jsxs("button", { onClick: () => setOpen((v) => !v), className: "w-full text-left border-b border-white/15 py-8 group block", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-baseline justify-between gap-6", children: [
      /* @__PURE__ */ jsx("div", { className: "font-display uppercase text-2xl md:text-3xl tracking-tight group-hover:opacity-70 transition-opacity", children: q }),
      /* @__PURE__ */ jsx("div", { className: `font-mono text-2xl transition-transform duration-300 ${open ? "rotate-45" : ""}`, children: "+" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: `overflow-hidden transition-all duration-500 ${open ? "max-h-96 mt-6 opacity-100" : "max-h-0 opacity-0"}`, children: /* @__PURE__ */ jsx("p", { className: "text-white/70 leading-relaxed max-w-2xl", children: a }) })
  ] });
}
export {
  FAQPage as component
};
