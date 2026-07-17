import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { N as Nav, P as PageHero, C as CrossLink, F as Footer } from "./Primitives-DwaFkoMK.mjs";
import { d as design } from "./design-CJWwRsMp.mjs";
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
const experience = "/assets/Hospitality-BsUpDMdM.png";
const benefits = [["Private Drives", "Track and road days at proving grounds and circuits across the UK and Europe."], ["Studio Visits", "Behind-the-scenes access at DMC, Mahle and Coventry Metalcraft."], ["Exhibitions", "Show appearances at curated automotive, art and design events."], ["Digital Twin", "Quarterly updates from the build, delivered in full 3D fidelity."], ["Custodianship Calendar", "Scheduled access to the finished car, by arrangement."], ["Members' Dinners", "Private hospitality alongside the build partners and engineering team."]];
function ExperiencePage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "bg-background text-foreground min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "04 / The Experience", title: "Ownership,", italic: "reimagined.", intro: "Twenty-five custodians. One car. A year-round programme of access, hospitality and shared craftsmanship — engineered with the same care as the build itself." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-[1500px] mx-auto px-6 md:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-px bg-white/10", children: benefits.map(([t, b], i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-black p-10 md:p-12 group hover:bg-white hover:text-black transition-colors duration-500", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[11px] uppercase tracking-[0.22em] opacity-50", children: String(i + 1).padStart(2, "0") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display uppercase text-2xl md:text-3xl mt-6", children: t }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 text-sm opacity-70 leading-relaxed", children: b })
    ] }, t)) }) }) }),
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
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-7", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: experience, alt: "Hospitality", className: "w-full grayscale aspect-[4/3] object-cover" }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 md:py-32 border-t border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1500px] mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-12 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-7", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: design, alt: "Digital twin", className: "w-full grayscale aspect-[4/3] object-cover" }) }),
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
export {
  ExperiencePage as component
};
