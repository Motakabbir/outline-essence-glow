import { jsxs, jsx } from "react/jsx-runtime";
import { N as Nav, P as PageHero, S as SectionLabel, a as PillLink, C as CrossLink, F as Footer } from "./Primitives-DHBnMrOH.js";
import { w as workshop } from "./router-Cy05bNZC.js";
import { d as design } from "./design-CJWwRsMp.js";
import { p as processVideo } from "./process-rFchNS1r.js";
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
const engine = "/assets/ENGINE-BDR4qXPc.png";
const theCar = "/assets/the-car-IRvns5Xa.jpg";
const specs = [["Chassis", "#148 of 500 — original RS500 Cosworth"], ["Engine", "Cosworth YB, rebuilt by Mahle"], ["Body", "Blended steel & aluminium coachwork"], ["Interior", "3D-printed dashboard, bespoke trim"], ["Documentation", "Full digital twin · build ledger"], ["Custodians", "Syndicate of 25"]];
function TheCarPage() {
  return /* @__PURE__ */ jsxs("main", { className: "bg-background text-foreground min-h-screen", children: [
    /* @__PURE__ */ jsx(Nav, {}),
    /* @__PURE__ */ jsx(PageHero, { eyebrow: "01 / The Car", title: "Car №148.", italic: "Reborn.", intro: "Acquired in 2024 after fifteen years in storage. Dismantled with archaeological care, scanned, catalogued and reborn through additive manufacture, classic coachbuilding and motorsport-grade engineering.", video: processVideo }),
    /* @__PURE__ */ jsx("section", { className: "py-24 md:py-32", children: /* @__PURE__ */ jsxs("div", { className: "max-w-[1500px] mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-12", children: [
      /* @__PURE__ */ jsx("div", { className: "md:col-span-7 overflow-hidden", children: /* @__PURE__ */ jsx("img", { src: theCar, alt: "Silver Ford Sierra RS500", className: "w-full grayscale" }) }),
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-5 md:pt-6", children: [
        /* @__PURE__ */ jsx(SectionLabel, { n: "02", title: "THE VISION" }),
        /* @__PURE__ */ jsxs("h2", { className: "font-display text-4xl md:text-5xl uppercase leading-[0.95] mt-8", children: [
          "A documented",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("span", { className: "font-serif-italic normal-case opacity-70", children: "lineage." })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-8 text-white/70 leading-relaxed", children: "The greatest cars are never designed by committee. They begin with one vision, one pencil, and the courage to challenge convention. Vision148 RS500 is our modern interpretation of that philosophy, inspired by Al Yasid's unmistakable design language and the legendary houses of Pininfarina, Bertone and Zagato. This isn't retro. It's the next chapter." }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-white/55 text-sm leading-relaxed", children: "Working alongside Al Yasid, we're developing Vision148 RS500 with the same philosophy that made the world's greatest coach builders legendary." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "paper", children: /* @__PURE__ */ jsxs("div", { className: "max-w-[1500px] mx-auto px-6 md:px-10 py-24 md:py-32", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 font-mono text-[0.7rem] tracking-[0.22em] uppercase text-black/50", children: [
        /* @__PURE__ */ jsx("span", { children: "03" }),
        /* @__PURE__ */ jsx("span", { className: "h-px w-10 bg-black/30" }),
        /* @__PURE__ */ jsx("span", { children: "Specification" })
      ] }),
      /* @__PURE__ */ jsxs("h2", { className: "font-display text-5xl md:text-6xl uppercase leading-[0.95] mt-8", children: [
        "Built like",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("span", { className: "font-serif-italic normal-case opacity-70", children: "a monograph." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-16 grid md:grid-cols-2 gap-x-16", children: specs.map(([k, v], i) => /* @__PURE__ */ jsxs("div", { className: `flex justify-between gap-6 py-6 border-t border-black/15 ${i === specs.length - 1 || i === specs.length - 2 ? "md:border-b" : ""}`, children: [
        /* @__PURE__ */ jsx("div", { className: "font-mono text-[11px] uppercase tracking-[0.22em] opacity-60", children: k }),
        /* @__PURE__ */ jsx("div", { className: "font-display uppercase text-lg md:text-xl text-right", children: v })
      ] }, k)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-24 md:py-32 border-t border-white/10", children: /* @__PURE__ */ jsxs("div", { className: "max-w-[1500px] mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-12 items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-5", children: [
        /* @__PURE__ */ jsx(SectionLabel, { n: "04", title: "Engine" }),
        /* @__PURE__ */ jsxs("h2", { className: "font-display text-4xl md:text-5xl uppercase leading-[0.95] mt-8", children: [
          "Cosworth ",
          /* @__PURE__ */ jsx("span", { className: "font-serif-italic normal-case opacity-70", children: "YB," }),
          /* @__PURE__ */ jsx("br", {}),
          "by Mahle."
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-8 text-white/70 leading-relaxed", children: "Stripped to bare castings. Re-machined. Re-balanced. Reassembled to motorsport tolerance by Mahle's UK engine programme." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "md:col-span-7 overflow-hidden", children: /* @__PURE__ */ jsx("img", { src: engine, alt: "Engine", className: "w-full grayscale aspect-[4/3] object-cover" }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-24 md:py-32 border-t border-white/10", children: /* @__PURE__ */ jsxs("div", { className: "max-w-[1500px] mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-12 items-center", children: [
      /* @__PURE__ */ jsx("div", { className: "md:col-span-7 overflow-hidden order-2 md:order-1", children: /* @__PURE__ */ jsx("img", { src: workshop, alt: "Workshop", className: "w-full grayscale aspect-[4/3] object-cover" }) }),
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-5 order-1 md:order-2", children: [
        /* @__PURE__ */ jsx(SectionLabel, { n: "05", title: "Coachwork" }),
        /* @__PURE__ */ jsxs("h2", { className: "font-display text-4xl md:text-5xl uppercase leading-[0.95] mt-8", children: [
          "COACH BUILT",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("span", { className: "font-serif-italic normal-case opacity-70", children: "Alluminium." })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-8 text-white/70 leading-relaxed", children: "Unique tooling & coach built aluminium body panels by Coventry Metalcraft complemented by composite aero parts by BAMD and 3D printed interior dashboard and switchgear by DMC, Silverstone." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-10 flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsx(PillLink, { to: "/process", variant: "ghost", children: "The Process" }),
          /* @__PURE__ */ jsx(PillLink, { to: "/apply", children: "Apply" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "h-[45vh] md:h-[65vh] relative overflow-hidden border-t border-b border-white/10", children: /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-fixed bg-cover bg-center grayscale opacity-60 parallax-bg", style: {
      backgroundImage: `url(${design})`
    } }) }),
    /* @__PURE__ */ jsx(CrossLink, { to: "/process", eyebrow: "Next", title: "The Process →" }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  TheCarPage as component
};
