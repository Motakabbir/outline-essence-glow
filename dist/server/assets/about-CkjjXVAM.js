import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { N as Nav, P as PageHero, C as CrossLink, F as Footer } from "./Primitives-DHBnMrOH.js";
import { j as journalVideo } from "./journal-Dn1zTfAK.js";
import { b as Route, w as workshop } from "./router-Cy05bNZC.js";
import { d as design } from "./design-CJWwRsMp.js";
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
const principles = [["Heritage", "We treat the RS500 as a cultural artefact — preserved, not modernised away."], ["Craft", "Every panel, every weld, every fastener is documented, dated and signed."], ["Transparency", "Custodians see the build as it happens. No press release surprises."], ["Restraint", "Twenty-five seats. One car. No spin-offs. No tiers."]];
function AboutPage() {
  const {
    teamMembers
  } = Route.useLoaderData();
  return /* @__PURE__ */ jsxs("main", { className: "bg-background text-foreground min-h-screen", children: [
    /* @__PURE__ */ jsx(Nav, {}),
    /* @__PURE__ */ jsx(PageHero, { eyebrow: "05 / About", title: "A small studio", italic: "with one obsession.", intro: "Vision148 was founded to build a single car — a definitive Ford Sierra RS500 Cosworth — and to share its making with twenty-five custodians who care as deeply as we do.", video: journalVideo }),
    /* @__PURE__ */ jsx("section", { className: "py-24 md:py-32 paper", children: /* @__PURE__ */ jsxs("div", { className: "max-w-[1500px] mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-12 items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-5", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 font-mono text-[0.7rem] tracking-[0.22em] uppercase text-black/50", children: [
          /* @__PURE__ */ jsx("span", { children: "01" }),
          /* @__PURE__ */ jsx("span", { className: "h-px w-10 bg-black/30" }),
          /* @__PURE__ */ jsx("span", { children: "Origin" })
        ] }),
        /* @__PURE__ */ jsxs("h2", { className: "font-display text-5xl md:text-6xl uppercase leading-[0.95] mt-8", children: [
          "STARTED WITH A PASSION",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("span", { className: "font-serif-italic normal-case opacity-70", children: "to reimagine" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-8 text-black/70 leading-relaxed", children: "The origin story of the Vision148 is inspired through exposure to some of the leading figures in UK automotive and motorsport  and a collective passion to identify icons of the road and deploy artisan and bleeding edge technology manufacturing and materials into a unique showpiece." }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-black/70 leading-relaxed", children: "The mission has never been to recreate the RS500. It's to imagine what it would have become if its bloodline had continued uninterrupted into 2026. With Al Yasid's vision blending heritage with modern design language, creating a silhouette that feels both inevitable and completely new. This is how legends evolve" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "md:col-span-7 h-[300px] md:h-[450px] overflow-hidden relative", children: /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-fixed bg-cover bg-center grayscale opacity-80 parallax-bg", style: {
        backgroundImage: `url(${workshop})`
      } }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-24 md:py-32", children: /* @__PURE__ */ jsxs("div", { className: "max-w-[1500px] mx-auto px-6 md:px-10", children: [
      /* @__PURE__ */ jsx("div", { className: "eyebrow", children: "02 / Principles" }),
      /* @__PURE__ */ jsx("h2", { className: "mt-6 font-display uppercase text-5xl md:text-7xl leading-[0.9]", children: "What we believe." }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-px bg-white/10 mt-16", children: principles.map(([t, b], i) => /* @__PURE__ */ jsxs("div", { className: `bg-black p-10 md:p-14 reveal stagger-${i % 2 + 1}`, children: [
        /* @__PURE__ */ jsx("div", { className: "font-mono text-[11px] uppercase tracking-[0.22em] opacity-50", children: String(i + 1).padStart(2, "0") }),
        /* @__PURE__ */ jsx("div", { className: "font-display uppercase text-3xl md:text-4xl mt-6", children: t }),
        /* @__PURE__ */ jsx("div", { className: "mt-4 text-sm opacity-70 leading-relaxed", children: b })
      ] }, t)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-24 md:py-32 border-t border-white/10", children: /* @__PURE__ */ jsxs("div", { className: "max-w-[1500px] mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-12 items-start", children: [
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-5 sticky top-32", children: [
        /* @__PURE__ */ jsx("div", { className: "eyebrow", children: "03 / The Roster" }),
        /* @__PURE__ */ jsxs("h2", { className: "mt-6 font-display uppercase text-5xl md:text-6xl leading-[0.95]", children: [
          "People",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("span", { className: "font-serif-italic normal-case opacity-70", children: "behind it." })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-8 text-white/70 leading-relaxed max-w-md", children: "The primary architects of the Vision148 project have been supported by unique collaborations from automotive and Motorsport with a singular mission to deliver and showcase the very best in coach building and bleeding edge technology manufacturing." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "md:col-span-7 border-t border-white/10 mt-12 md:mt-0", children: teamMembers.map(({
        position,
        name,
        image
      }, i) => /* @__PURE__ */ jsxs("div", { className: `group flex flex-col md:flex-row items-start md:items-center justify-between gap-8 py-6 md:py-8 border-b border-white/10 hover:bg-white/5 transition-colors cursor-default md:-mx-6 md:px-6 rounded-2xl reveal stagger-${i % 5 + 1}`, children: [
        /* @__PURE__ */ jsx("div", { className: "font-mono text-xs md:text-sm uppercase tracking-widest text-white/70 group-hover:text-white transition-colors md:w-2/3 leading-loose pr-8", children: position && position.startsWith(name) ? /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx("span", { className: "bg-white text-black font-semibold px-2 py-0.5 mr-2", children: name }),
          position.slice(name.length).trim()
        ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx("span", { className: "bg-white text-black font-semibold px-2 py-0.5 mr-2", children: name }),
          position
        ] }) }),
        image && /* @__PURE__ */ jsx("div", { className: "flex items-center justify-start md:justify-end md:w-1/3 w-full", children: /* @__PURE__ */ jsx("img", { src: image, alt: name, className: "w-20 h-20 md:w-28 md:h-28 shrink-0 object-cover rounded-full grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105 border border-white/10" }) })
      ] }, name)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "paper py-24 md:py-32", children: /* @__PURE__ */ jsxs("div", { className: "max-w-[1500px] mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-12 items-center", children: [
      /* @__PURE__ */ jsx("div", { className: "md:col-span-7", children: /* @__PURE__ */ jsx("img", { src: design, alt: "Design", className: "w-full grayscale aspect-[4/3] object-cover" }) }),
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-5", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 font-mono text-[0.7rem] tracking-[0.22em] uppercase text-black/50", children: [
          /* @__PURE__ */ jsx("span", { children: "04" }),
          /* @__PURE__ */ jsx("span", { className: "h-px w-10 bg-black/30" }),
          /* @__PURE__ */ jsx("span", { children: "Vision" })
        ] }),
        /* @__PURE__ */ jsxs("h2", { className: "font-display text-5xl md:text-6xl uppercase leading-[0.95] mt-8", children: [
          "Not a brand.",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("span", { className: "font-serif-italic normal-case opacity-70", children: "An experience" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-8 text-black/70 leading-relaxed", children: "But, the true benefactors of this project will be a limited few who will be have the unique privilege of experiencing driving the completed car through an unique syndicate of individuals." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(CrossLink, { to: "/contact", eyebrow: "Next", title: "Contact the studio →" }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  AboutPage as component
};
