import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { N as Nav, P as PageHero, C as CrossLink, F as Footer } from "./Primitives-C10q8h9m.mjs";
import { w as workshop } from "./workshop-By8aCrVK.mjs";
import { e as engine } from "./engine-C7A05NUk.mjs";
import { d as design } from "./design-CJWwRsMp.mjs";
import { e as experience } from "./experience-C_qXkUXx.mjs";
import { t as theCar } from "./the-car-E50hrLWo.mjs";
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
const posts = [{
  date: "May 2026",
  category: "Build Note",
  title: "Bare shell, photographed in seventeen ways.",
  excerpt: "After eight weeks of media blasting and chemical stripping, the donor RS500 returned this week as a pure metal object.",
  img: workshop
}, {
  date: "Apr 2026",
  category: "Partner",
  title: "Inside Mahle Powertrain — the YBD block, reborn.",
  excerpt: "A morning with the engineering team responsible for casting, machining and balancing the new bottom end.",
  img: engine
}, {
  date: "Mar 2026",
  category: "Digital Twin",
  title: "Why we model every component before we touch it.",
  excerpt: "The case for slow design: a tour through the in-browser digital twin and what each custodian can do with it.",
  img: design
}, {
  date: "Feb 2026",
  category: "Dispatch",
  title: "A first dinner with the syndicate.",
  excerpt: "Twelve custodians, three engineers, one long table at the Coventry studio.",
  img: experience
}, {
  date: "Jan 2026",
  category: "Provenance",
  title: "The donor: chain of custody, 1987 to today.",
  excerpt: "Four owners, two countries, one extraordinary file of documentation.",
  img: theCar
}];
function JournalPage() {
  const [lead, ...rest] = posts;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "bg-background text-foreground min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "08 / Journal", title: "Dispatches", italic: "from the floor.", intro: "A slow, occasional record of the build. Published when there is something worth saying — and only then." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 md:py-28 border-b border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-[1500px] mx-auto px-6 md:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/journal", className: "group grid md:grid-cols-12 gap-10 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-7 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: lead.img, alt: lead.title, className: "w-full aspect-[16/10] object-cover grayscale transition-transform duration-700 group-hover:scale-[1.03]" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 font-mono text-[10px] tracking-[0.24em] uppercase text-white/50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: lead.date }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-8 bg-white/30" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: lead.category })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-6 font-display uppercase text-4xl md:text-6xl leading-[0.95]", children: lead.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-white/70 leading-relaxed max-w-md", children: lead.excerpt }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 text-xs font-mono uppercase tracking-[0.24em] link-underline inline-block", children: "Read the entry →" })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1500px] mx-auto px-6 md:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow mb-12", children: "Archive" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-px bg-white/10", children: rest.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/journal", className: "group bg-black p-8 md:p-10 hover:bg-white hover:text-black transition-colors duration-500", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.img, alt: p.title, className: "w-full aspect-[16/10] object-cover grayscale group-hover:scale-105 transition-transform duration-700" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-center gap-4 font-mono text-[10px] tracking-[0.24em] uppercase opacity-60", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: p.date }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "·" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: p.category })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 font-display uppercase text-2xl md:text-3xl leading-tight", children: p.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 text-sm opacity-70 leading-relaxed", children: p.excerpt })
      ] }, p.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CrossLink, { to: "/about", eyebrow: "Behind it", title: "About the studio →" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  JournalPage as component
};
