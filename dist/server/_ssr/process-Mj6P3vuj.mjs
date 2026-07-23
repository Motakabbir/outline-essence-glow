import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { N as Nav, P as PageHero, C as CrossLink, F as Footer } from "./Primitives-DHBnMrOH.mjs";
import { p as processVideo } from "./process-rFchNS1r.mjs";

import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/unenv.mjs";


import "../_libs/seroval-plugins.mjs";


import "../_libs/react-dom.mjs";
import "../_libs/isbot.mjs";
const engine = "/assets/Vision_To_the_road%20-4RKVkAdB.jpg";
const design = "/assets/Bare_Shell_Disamantling-DFLSKoly.jpg";
const phases = [{
  n: "Phase I",
  status: "Complete",
  title: "Dismantle & Scan",
  body: "Donor car fully dismantled by classic-RS specialists. Every part catalogued, photographed, and scanned. A complete 3D digital twin created with T3DMC.",
  deliverables: ["Build ledger", "Component archive", "Digital twin v1"]
}, {
  n: "Phase II",
  status: "In progress",
  title: "Baseline & Design",
  body: "Chassis aligned and prepared by Coventry Metalcraft. Composite tooling, CAD surfacing, aero simulation. Engine rebuild commences at Mahle.",
  deliverables: ["Surfacing CAD", "Aero CFD package", "Tooling production"]
}, {
  n: "Phase III",
  status: "Upcoming",
  title: "Assembly & Drive",
  body: "Final assembly at the Digital Manufacturing Centre, Silverstone. Trim, electronics, calibration. First drive. Hand-over to the syndicate.",
  deliverables: ["Final assembly", "Shake-down testing", "Hand-over event"]
}];
function ProcessPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "bg-background text-foreground min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "02 / The Process", title: "FROM MODELLING", italic: "to road.", intro: "A process of design iteration and modelling to define the design language needed to make the car unique yet respectful to this icons DNA.", video: processVideo }),
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
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-7", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "space-y-8", children: [["Catalogue", "Every component photographed, weighed, scanned and assigned a unique identifier."], ["Decide", "Restore, replace or remanufacture — assessed by an independent technical committee."], ["Document", "Decisions written into the build ledger and shared quarterly with custodians."], ["Drive", "The finished car is tested, validated and handed over with a full provenance dossier."]].map(([t, b], i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: `flex gap-6 border-t border-black/15 pt-6 reveal stagger-${i + 1}`, children: [
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
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden aspect-[4/3] relative reveal", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: design, alt: "CAD", className: "w-full h-full grayscale object-cover zoom-hover" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden aspect-[4/3] relative reveal stagger-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: engine, alt: "Engine", className: "w-full h-full grayscale object-cover zoom-hover" }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CrossLink, { to: "/partners", eyebrow: "Next", title: "The Partners →" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  ProcessPage as component
};
