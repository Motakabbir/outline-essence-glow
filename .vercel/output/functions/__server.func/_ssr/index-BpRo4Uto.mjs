import { j as jsxRuntimeExports } from "../_libs/react.mjs";
const logo = "/assets/vision148-logo-Dbu8HTfX.jpg";
const heroCar = "/assets/hero-car-D7AYmz0K.jpg";
const heroVideo = "/assets/video-CEQfNafy.mp4";
const workshop = "/assets/workshop-DP3ouAaE.jpg";
const engine = "/assets/engine-BAsbs6x4.jpg";
const theCar = "/assets/the-car-IRvns5Xa.jpg";
const design = "/assets/design-Dc-ZZXQQ.jpg";
const experience = "/assets/experience-ZyUdGZJn.jpg";
function SectionLabel({
  n,
  title
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 eyebrow", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: n }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-10 bg-hairline" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: title })
  ] });
}
function PillButton({
  children,
  href = "#apply",
  variant = "solid"
}) {
  const base = "group inline-flex items-center gap-3 px-7 py-4 text-xs font-mono tracking-[0.22em] uppercase transition-all duration-300";
  const styles = variant === "solid" ? "bg-white text-black hover:bg-white/85" : "border border-white/40 text-white hover:border-white hover:bg-white hover:text-black";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href, className: `${base} ${styles}`, children: [
    children,
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block transition-transform duration-300 group-hover:translate-x-1", children: "→" })
  ] });
}
function Nav() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1500px] mx-auto px-6 md:px-10 h-16 flex items-center justify-between", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#top", className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, alt: "Vision148", className: "h-9 w-9 object-contain" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-sm tracking-[0.35em] uppercase hidden sm:block", children: "Vision 148" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden md:flex items-center gap-10 text-xs font-mono uppercase tracking-[0.22em]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#opportunity", className: "hover:opacity-60 transition", children: "The Opportunity" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#car", className: "hover:opacity-60 transition", children: "The Car" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#build", className: "hover:opacity-60 transition", children: "The Build" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#partners", className: "hover:opacity-60 transition", children: "Partners" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#apply", className: "text-xs font-mono uppercase tracking-[0.22em] border border-white/40 px-4 py-2 hover:bg-white hover:text-black transition", children: "Apply" })
  ] }) });
}
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "top", className: "relative min-h-screen flex items-end overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("video", { src: heroVideo, poster: heroCar, autoPlay: true, muted: true, loop: true, playsInline: true, className: "absolute inset-0 w-full h-full object-cover opacity-70 grayscale" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/70" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-[1500px] mx-auto px-6 md:px-10 pb-20 md:pb-28 w-full reveal", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow mb-6", children: "A Sarthe Cars Programme · Est. 2024" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display uppercase leading-[0.86] text-[18vw] md:text-[10.5vw] tracking-tight", children: [
        "One ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic font-light", children: "of" }),
        " One.",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "opacity-60", children: "RS500" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 grid md:grid-cols-3 gap-8 items-end", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "md:col-span-2 text-base md:text-lg text-white/70 max-w-2xl leading-relaxed", children: "Vision148 is the restoration and re-engineering of car #148 of the original 500 Ford Sierra RS500 Cosworths — reimagined through bleeding-edge digital manufacturing, artisan coachbuilding, and a private syndicate of twenty-five." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3 md:justify-end", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(PillButton, { href: "#apply", children: "Join the Syndicate" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(PillButton, { href: "#car", variant: "ghost", children: "Learn More" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-mono uppercase tracking-[0.4em] text-white/50 animate-pulse", children: "Scroll" })
  ] });
}
function Opportunity() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "opportunity", className: "py-28 md:py-40 border-t border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1500px] mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { n: "02", title: "The Opportunity" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-5xl md:text-7xl uppercase leading-[0.95] mt-8", children: [
        "A modern homage,",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "built once."
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-6 md:col-start-7 md:pt-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/70 text-lg leading-relaxed", children: "A rare invitation to co-own a singular automotive artefact — the rebirth of an original RS500 platform, fused with 21st-century engineering. Twenty-five members. One car. A shared chapter in motoring history." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/50 text-sm leading-relaxed mt-6", children: "Heritage-inspired design, additive manufacturing, motorsport-grade build partners. Every decision documented, every component catalogued." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: theCar, alt: "Silver Ford Sierra RS500", width: 1400, height: 1e3, loading: "lazy", className: "mt-10 w-full grayscale" })
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
    body: "DMC, Mahle, Coventry Metalcraft, T3DMC, BAMD, ASM — best-in-class, embedded throughout."
  }, {
    n: "III",
    title: "Exclusive Access",
    body: "Private drives, factory visits, and curated experiences with the finished car."
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "paper", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-[1500px] mx-auto px-6 md:px-10 py-24 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-0 border-t border-b border-black/15", children: items.map((it, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-10 md:p-14 ${i > 0 ? "md:border-l border-black/15" : ""} ${i > 0 ? "border-t md:border-t-0 border-black/15" : ""}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-xs tracking-[0.3em] opacity-60", children: it.n }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-3xl md:text-4xl uppercase mt-8 leading-tight", children: it.title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-sm leading-relaxed text-black/70 max-w-xs", children: it.body })
  ] }, it.title)) }) }) });
}
function SyndicateBanner() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-20 md:py-28 border-y border-white/10 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1500px] mx-auto px-6 md:px-10 flex flex-col md:flex-row items-baseline gap-8 md:gap-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow whitespace-nowrap", children: "Available Syndicate" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display uppercase text-[14vw] md:text-[9vw] leading-[0.85] tracking-tight", children: [
      "25 ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "opacity-40", children: "Seats" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-mono text-xs uppercase tracking-[0.3em] text-white/60 md:text-right", children: [
      "Phase II",
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      "Open"
    ] })
  ] }) });
}
function TheCarSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "car", className: "py-28 md:py-40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1500px] mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-7", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: workshop, alt: "RS500 chassis in workshop", width: 1400, height: 1e3, loading: "lazy", className: "w-full grayscale" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-5 md:pt-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { n: "04", title: "The Car" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-5xl md:text-6xl uppercase leading-[0.95] mt-8", children: [
        "Vision148",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "RS500"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 text-white/70 leading-relaxed", children: "Car #148 — stored for fifteen years, acquired in 2024, now reborn. Dismantled with archaeological care by classic-RS specialists, every component catalogued, scanned and assessed for restoration, replacement or additive remanufacture." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-white/50 text-sm leading-relaxed", children: "Original turbocharged Cosworth YB engine, rebuilt by Mahle. Blended steel and aluminium body. 3D-printed dashboard. A digital twin of the entire car." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PillButton, { href: "#build", variant: "ghost", children: "Read the Specification" }) })
    ] })
  ] }) });
}
function HowItWorks() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "paper", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1500px] mx-auto px-6 md:px-10 py-28 md:py-40 grid md:grid-cols-12 gap-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 font-mono text-[0.7rem] tracking-[0.22em] uppercase text-black/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "05" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-10 bg-black/30" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "How It Works" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-5xl md:text-6xl uppercase leading-[0.95] mt-8", children: "A syndicate of twenty-five." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "mt-12 space-y-8", children: [["Apply", "Submit interest. Curated review and introduction."], ["Reserve", "Secure your seat. Phase contribution committed."], ["Witness", "Quarterly build access, digital twin updates, private events."], ["Experience", "Hand-over, driving days, exhibitions, custodianship."]].map(([t, b], i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-6 border-t border-black/15 pt-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-xs tracking-[0.2em] opacity-50 mt-1 w-8", children: [
          "0",
          i + 1
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display uppercase text-2xl tracking-tight", children: t }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-black/65 mt-2 max-w-md", children: b })
        ] })
      ] }, t)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-6 md:col-start-7", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: design, alt: "CAD design workstation", width: 1400, height: 1e3, loading: "lazy", className: "w-full grayscale" }) })
  ] }) });
}
function BuildTimeline() {
  const phases = [{
    n: "Phase I",
    status: "Complete",
    title: "Dismantle & Scan",
    body: "Donor car fully dismantled. Parts catalogued. Complete 3D digital twin created with T3DMC."
  }, {
    n: "Phase II",
    status: "In progress",
    title: "Baseline & Design",
    body: "Chassis aligned and prepared by Coventry Metalcraft. Composite tooling, CAD surfacing, aero simulation."
  }, {
    n: "Phase III",
    status: "Upcoming",
    title: "Assembly & Drive",
    body: "Final assembly at the Digital Manufacturing Centre, Silverstone. Engine rebuild at Mahle. First drive."
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "build", className: "py-28 md:py-40 border-t border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1500px] mx-auto px-6 md:px-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { n: "06", title: "The Build Process" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-5xl md:text-7xl uppercase leading-[0.95] mt-8 max-w-4xl", children: [
      "From chassis",
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      "to road."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-20 relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-3 left-0 right-0 h-px bg-white/15" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-12", children: phases.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative pt-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-0 w-2 h-2 rounded-full bg-white" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-baseline", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-xs uppercase tracking-[0.25em]", children: p.n }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] uppercase tracking-[0.25em] text-white/40", children: p.status })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-3xl md:text-4xl uppercase mt-6", children: p.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-white/60 text-sm leading-relaxed", children: p.body })
      ] }, p.n)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: engine, alt: "Rebuilt Cosworth YB engine", width: 1400, height: 1e3, loading: "lazy", className: "mt-24 w-full grayscale aspect-[21/9] object-cover" })
  ] }) });
}
function Partners() {
  const logos = ["DMC", "Mahle", "Coventry Metalcraft", "T3DMC", "ASM Auto", "BAMD", "Cornerstone", "HGL"];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "partners", className: "paper", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1500px] mx-auto px-6 md:px-10 py-28 md:py-36", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-12 gap-12 mb-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 font-mono text-[0.7rem] tracking-[0.22em] uppercase text-black/50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "07" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-10 bg-black/30" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Partners" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-5xl md:text-6xl uppercase leading-[0.95] mt-8", children: "A curated consortium." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "md:col-span-6 md:col-start-7 text-black/70 md:pt-10 leading-relaxed", children: "Each partner is best-in-class — additive manufacturing, coachbuilding, composites, recycling, engine engineering. Selected to elevate the technical and commercial credibility of a one-of-one, investment-grade build." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 border-t border-l border-black/15", children: logos.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-r border-black/15 aspect-[3/1] flex items-center justify-center px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display uppercase tracking-[0.18em] text-lg md:text-xl text-center", children: l }) }, l)) })
  ] }) });
}
function Experience() {
  const items = [["Private Drives", "Track and road days at proving grounds and circuits."], ["Studio Visits", "Behind-the-scenes access at DMC, Mahle and Coventry Metalcraft."], ["Exhibitions", "Show appearances at curated automotive and design events."], ["Digital Twin", "Quarterly updates from the build, in full 3D fidelity."]];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-28 md:py-40 border-t border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1500px] mx-auto px-6 md:px-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { n: "08", title: "The Experience" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-5xl md:text-7xl uppercase leading-[0.95] mt-8 max-w-4xl", children: [
      "Ownership,",
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      "reimagined."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-20 grid md:grid-cols-4 gap-px bg-white/10", children: items.map(([t, b]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-black p-8 md:p-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display uppercase text-2xl md:text-3xl", children: t }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 text-sm text-white/60 leading-relaxed", children: b })
    ] }, t)) })
  ] }) });
}
function Value() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-28 md:py-40 border-t border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1500px] mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-12 items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { n: "09", title: "The Value" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-5xl md:text-6xl uppercase leading-[0.95] mt-8", children: [
        "Provenance",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "by design."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 text-white/70 leading-relaxed max-w-xl", children: "Every part traceable. Every decision documented. Every collaborator a name recognised across motorsport and luxury manufacture. The Vision148 RS500 is built as an artefact — and engineered as a driver's car." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid grid-cols-3 gap-6 max-w-md", children: [["500", "Original cars"], ["1 / 1", "Genesis build"], ["25", "Syndicate seats"]].map(([k, v]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-white/20 pt-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-3xl md:text-4xl", children: k }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] mt-2 font-mono uppercase tracking-[0.2em] text-white/50", children: v })
      ] }, v)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: experience, alt: "Exhibition space with car", width: 1400, height: 1e3, loading: "lazy", className: "w-full grayscale aspect-[4/3] object-cover" }) })
  ] }) });
}
function Scarcity() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "paper", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1500px] mx-auto px-6 md:px-10 py-24 md:py-32", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline justify-between gap-8 flex-wrap", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[0.7rem] tracking-[0.22em] uppercase text-black/50", children: "10 / Scarcity" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[0.7rem] tracking-[0.22em] uppercase text-black/50", children: "One build · Twenty-five custodians" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 font-display uppercase leading-[0.82] text-[34vw] md:text-[22vw] tracking-tight text-center", children: "148" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 max-w-2xl mx-auto text-center text-black/70 leading-relaxed", children: "The 148th of 500 RS500 Cosworths ever built. Reborn once. Then never again." })
  ] }) });
}
function FinalCTA() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "apply", className: "py-32 md:py-48 border-t border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1500px] mx-auto px-6 md:px-10 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow", children: "Apply" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display uppercase text-6xl md:text-8xl leading-[0.9] tracking-tight mt-8", children: [
      "Take a seat",
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic font-light opacity-60", children: "in history." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-10 max-w-xl mx-auto text-white/60 leading-relaxed", children: "Syndicate places are limited and reviewed individually. Register interest to receive the full prospectus and an introduction from the Vision148 team." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 flex flex-wrap gap-4 justify-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(PillButton, { href: "mailto:hello@vision148.com", children: "Register Interest" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(PillButton, { href: "#car", variant: "ghost", children: "Download Prospectus" })
    ] })
  ] }) });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "border-t border-white/10 py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1500px] mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-4 flex items-center gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, alt: "Vision148", className: "h-12 w-12" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display uppercase tracking-[0.3em] text-sm", children: "Vision 148" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-mono uppercase tracking-[0.2em] text-white/40 mt-1", children: "A Sarthe Cars Programme" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-5 grid grid-cols-2 gap-6 text-xs font-mono uppercase tracking-[0.22em]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white/40", children: "Explore" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#opportunity", className: "block hover:opacity-60", children: "Opportunity" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#car", className: "block hover:opacity-60", children: "The Car" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#build", className: "block hover:opacity-60", children: "Build" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#partners", className: "block hover:opacity-60", children: "Partners" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white/40", children: "Connect" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "block hover:opacity-60", children: "Instagram" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "block hover:opacity-60", children: "LinkedIn" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "block hover:opacity-60", children: "YouTube" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:hello@vision148.com", className: "block hover:opacity-60", children: "Email" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-3 text-[10px] font-mono uppercase tracking-[0.22em] text-white/40 md:text-right", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " Vision 148.",
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      "All rights reserved."
    ] })
  ] }) });
}
function VisionLanding() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "bg-background text-foreground min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Opportunity, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Pillars, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SyndicateBanner, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TheCarSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(HowItWorks, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(BuildTimeline, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Partners, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Experience, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Value, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Scarcity, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FinalCTA, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  VisionLanding as component
};
