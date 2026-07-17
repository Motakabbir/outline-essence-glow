import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { N as Nav, P as PageHero, C as CrossLink, F as Footer } from "./Primitives-DHBnMrOH.mjs";
import { a as Route$7, d as chassisVideo } from "./router-C21SdIMQ.mjs";
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
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "./api-Dbo41vAU.mjs";
function FAQPage() {
  const {
    groups
  } = Route$7.useLoaderData();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "bg-background text-foreground min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "07 / FAQ", title: "Questions,", italic: "answered.", intro: "If something isn't covered here, the studio answers personally — write to us at hello@vision148.com.", video: chassisVideo }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-[1100px] mx-auto px-6 md:px-10 space-y-20", children: groups.map((g, gi) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
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
function FAQItem({
  q,
  a
}) {
  const [open, setOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setOpen((v) => !v), className: "w-full text-left border-b border-white/15 py-8 group block", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline justify-between gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display uppercase text-2xl md:text-3xl tracking-tight group-hover:opacity-70 transition-opacity", children: q }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `font-mono text-2xl transition-transform duration-300 ${open ? "rotate-45" : ""}`, children: "+" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `overflow-hidden transition-all duration-500 ${open ? "max-h-96 mt-6 opacity-100" : "max-h-0 opacity-0"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/70 leading-relaxed max-w-2xl", children: a }) })
  ] });
}
export {
  FAQPage as component
};
