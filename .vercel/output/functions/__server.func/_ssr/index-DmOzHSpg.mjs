import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { N as Nav, C as CrossLink, F as Footer, a as PillLink, S as SectionLabel } from "./Primitives-BHEdI8CK.mjs";
import { c as chassisVideo } from "./router-DbM9WHzU.mjs";
import { p as processVideo } from "./process-rFchNS1r.mjs";
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
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
function Marquee({ items }) {
  const row = [...items, ...items];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-y border-white/10 py-6 overflow-hidden marquee-mask", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex animate-marquee whitespace-nowrap", children: row.map((it, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "span",
    {
      className: "font-display uppercase text-3xl md:text-5xl tracking-tight mx-10 inline-flex items-center gap-10",
      children: [
        it,
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/30 font-serif-italic text-2xl", children: "·" })
      ]
    },
    i
  )) }) });
}
const heroCar = "/assets/hero-car-D7AYmz0K.jpg";
const heroVideo = "/assets/video-CEQfNafy.mp4";
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "top", className: "relative min-h-screen flex items-end overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("video", { src: heroVideo, poster: heroCar, autoPlay: true, muted: true, loop: true, playsInline: true, className: "absolute inset-0 w-full h-full object-cover opacity-70 grayscale scale-[1.04]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/80" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grain pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-[1500px] mx-auto px-6 md:px-10 pb-20 md:pb-28 w-full reveal", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 eyebrow mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full bg-white animate-pulse" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "A Sarthe Cars Programme" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-10 bg-white/30" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Est. 2024" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display uppercase leading-[0.84] text-[18vw] md:text-[10.5vw] tracking-tight", children: [
        "One ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-serif-italic normal-case font-normal opacity-90", children: "of" }),
        " One.",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "opacity-50", children: "RS500" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 grid md:grid-cols-12 gap-8 items-end", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "md:col-span-7 text-base md:text-lg text-white/70 max-w-2xl leading-relaxed", children: "The reimagination and re-engineering of car #148 of the original 500 Ford Sierra RS500 Cosworths — reimagined through digital manufacturing, artisan coachbuilding, and a private syndicate of twenty-five." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-5 flex flex-wrap gap-3 md:justify-end", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(PillLink, { to: "/apply", children: "Join the Syndicate" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(PillLink, { to: "/the-car", variant: "ghost", children: "The Car" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-mono uppercase tracking-[0.4em] text-white/50 animate-pulse", children: "Scroll" })
  ] });
}
function Manifesto() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-32 md:py-48 border-t border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1500px] mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { n: "01", title: "Manifesto" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display uppercase text-3xl md:text-5xl leading-[1.05] tracking-tight", children: [
        "A modern ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-serif-italic normal-case opacity-80", children: "homage" }),
        ", built once. A digital twin. A private ledger of provenance. Twenty-five custodians of a singular automotive ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-serif-italic normal-case opacity-80", children: "artefact" }),
        "."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid grid-cols-3 gap-6 max-w-xl", children: [["500", "Original cars"], ["1 / 1", "Genesis build"], ["25", "Syndicate seats"]].map(([k, v], i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `border-t border-white/20 pt-4 reveal stagger-${i + 1}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-3xl md:text-4xl", children: k }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] mt-2 font-mono uppercase tracking-[0.2em] text-white/50", children: v })
      ] }, v)) })
    ] })
  ] }) });
}
function Pillars() {
  const items = [{
    n: "I",
    title: "One of One",
    body: "A singular build derived from chassis #148 — never duplicated, never replicated."
  }, {
    n: "II",
    title: "World-Class Partners",
    body: "DMC, Mahle, Coventry Metalcraft, T3DMC, BAMD, ASM — embedded throughout."
  }, {
    n: "III",
    title: "Exclusive Access",
    body: "Private drives, factory visits, and curated experiences with the finished car."
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "paper", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-[1500px] mx-auto px-6 md:px-10 py-24 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-0 border-t border-b border-black/15 overflow-hidden", children: items.map((it, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-10 md:p-14 group transition-colors hover:bg-black hover:text-white reveal stagger-${i + 1} ${i > 0 ? "md:border-l border-black/15 border-t md:border-t-0" : ""}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-xs tracking-[0.3em] opacity-60", children: it.n }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-3xl md:text-4xl uppercase mt-8 leading-tight", children: it.title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-sm leading-relaxed opacity-70 max-w-xs", children: it.body })
  ] }, it.title)) }) }) });
}
function HighlightCar() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-28 md:py-40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1500px] mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-7 overflow-hidden reveal aspect-[4/3] bg-white/5 relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx("video", { src: chassisVideo, autoPlay: true, muted: true, loop: true, playsInline: true, className: "w-full h-full object-cover grayscale zoom-hover" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-5 md:pt-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { n: "02", title: "The Car" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-5xl md:text-6xl uppercase leading-[0.95] mt-8", children: [
        "Vision148",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-serif-italic normal-case opacity-70", children: "RS500." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 text-white/70 leading-relaxed", children: "Car #148 — stored for fifteen years, acquired in 2024, now reborn. Dismantled with archaeological care, every component catalogued, scanned and assessed for restoration, replacement or additive remanufacture." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PillLink, { to: "/the-car", variant: "ghost", children: "Read the Specification" }) })
    ] })
  ] }) });
}
function HighlightProcess() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-28 md:py-40 border-t border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1500px] mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-12 items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { n: "03", title: "Process" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-5xl md:text-6xl uppercase leading-[0.95] mt-8", children: [
        "From chassis",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-serif-italic normal-case opacity-70", children: "to road." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 text-white/70 leading-relaxed max-w-xl", children: "Three phases. Eighteen months. Documented in full digital fidelity. From the archaeological dismantle through to the first turn of the key." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PillLink, { to: "/process", variant: "ghost", children: "The Build Process" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-7 overflow-hidden reveal aspect-[4/3] bg-white/5 relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx("video", { src: processVideo, autoPlay: true, muted: true, loop: true, playsInline: true, className: "w-full h-full object-cover grayscale zoom-hover" }) })
  ] }) });
}
function HighlightExperience() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "paper", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1500px] mx-auto px-6 md:px-10 py-28 md:py-40 grid md:grid-cols-12 gap-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-7 overflow-hidden reveal aspect-[4/3] bg-white/5 relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx("video", { src: partnerVideo, autoPlay: true, muted: true, loop: true, playsInline: true, className: "w-full h-full object-cover grayscale zoom-hover" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-5 md:pt-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 font-mono text-[0.7rem] tracking-[0.22em] uppercase text-black/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "04" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-10 bg-black/30" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "The Experience" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-5xl md:text-6xl uppercase leading-[0.95] mt-8", children: [
        "Ownership,",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-serif-italic normal-case opacity-70", children: "reimagined." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 text-black/70 leading-relaxed", children: "Private drives. Studio visits. Curated exhibitions. A custodianship calendar designed around the finished car and the people who built it." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "/experience", className: "inline-flex items-center gap-3 text-[11px] font-mono uppercase tracking-[0.24em] border border-black/40 px-7 py-4 hover:bg-black hover:text-white transition-colors", children: [
        "The Experience ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "→" })
      ] }) })
    ] })
  ] }) });
}
function Scarcity() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-28 md:py-40 border-t border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1500px] mx-auto px-6 md:px-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline justify-between gap-8 flex-wrap", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow", children: "05 / Scarcity" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow", children: "One build · Twenty-five custodians" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 font-display uppercase leading-[0.82] text-[34vw] md:text-[22vw] tracking-tight text-center", children: [
      "1",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-serif-italic normal-case opacity-60", children: "4" }),
      "8"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 max-w-2xl mx-auto text-center text-white/65 leading-relaxed", children: "The 148th of 500 RS500 Cosworths ever built. Reborn once. Then never again." })
  ] }) });
}
function FinalCTA() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-32 md:py-48 border-t border-white/10 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1500px] mx-auto px-6 md:px-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow", children: "Apply" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display uppercase text-6xl md:text-8xl leading-[0.9] tracking-tight mt-8", children: [
      "Take a seat",
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-serif-italic normal-case opacity-70", children: "in history." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-10 max-w-xl mx-auto text-white/60 leading-relaxed", children: "Syndicate places are limited and reviewed individually. Register interest to receive the full prospectus and an introduction from the Vision148 team." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 flex flex-wrap gap-4 justify-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(PillLink, { to: "/apply", children: "Register Interest" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(PillLink, { to: "/partners", variant: "ghost", children: "Meet the Partners" })
    ] })
  ] }) });
}
function Home() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "bg-background text-foreground min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Marquee, { items: ["One of One", "RS500 Cosworth", "Genesis Build", "Digital Twin", "25 Custodians", "Est. 2024"] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Manifesto, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Pillars, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(HighlightCar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(HighlightProcess, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(HighlightExperience, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Scarcity, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FinalCTA, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CrossLink, { to: "/apply", eyebrow: "Next", title: "Apply for a seat →" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  Home as component
};
