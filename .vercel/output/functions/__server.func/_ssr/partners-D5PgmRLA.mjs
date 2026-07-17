import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { N as Nav, P as PageHero, C as CrossLink, F as Footer } from "./Primitives-BHEdI8CK.mjs";
import { p as partnerVideo } from "./partner-GufV5oeM.mjs";
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
const partners = [{
  name: "DMC",
  role: "Digital Manufacturing",
  body: "The Digital Manufacturing Centre at Silverstone — host facility for final assembly and additive manufacture."
}, {
  name: "Mahle",
  role: "Engine Engineering",
  body: "Engine rebuild and validation. Motorsport-grade tolerances. UK engine programme."
}, {
  name: "Coventry Metalcraft",
  role: "Coachbuilding",
  body: "Hand-formed steel and aluminium panel work. Heritage techniques, modern measurement."
}, {
  name: "T3DMC",
  role: "Scanning & Twin",
  body: "Component-level 3D scanning and the live digital twin of the entire build."
}, {
  name: "ASM AUTORECYCLING ",
  role: "Dismantling specialists",
  body: "RS500 #148 dismantle and part catalogue and storage"
}, {
  name: "BAMD",
  role: "Composite specialists",
  body: "Composite partner for trim and interior"
}, {
  name: "Cornerstone",
  role: "non-structural repair specialists",
  body: "Glass removal and specialist repairs"
}, {
  name: "HGL",
  role: "Membership Program",
  body: "Technology providers for the project companion membership platform, Autovision.club"
}];
function PartnersPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "bg-background text-foreground min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "03 / Partners", title: "A curated", italic: "consortium.", intro: "Each partner is best-in-class — additive manufacturing, coachbuilding, composites, engine engineering. Selected to elevate the technical and commercial credibility of a one-of-one, investment-grade build.", video: partnerVideo }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 md:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-[1500px] mx-auto px-6 md:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 border-t border-l border-white/15", children: partners.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-r border-white/15 aspect-[3/1] flex items-center justify-center px-4 group transition-colors hover:bg-white hover:text-black", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display uppercase tracking-[0.18em] text-lg md:text-xl text-center", children: p.name }) }, p.name)) }) }) }),
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
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 divide-y divide-black/15 border-y border-black/15", children: partners.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-12 gap-6 py-10 group", children: [
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
export {
  PartnersPage as component
};
