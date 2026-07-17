import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { N as Nav, P as PageHero, C as CrossLink, F as Footer } from "./Primitives-DwaFkoMK.mjs";
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
const groups = [{
  title: "The Programme",
  items: [["How many seats are available?", "Twenty-five. When they're gone, the syndicate closes. There is no waitlist beyond the first round."], ["Is this a fractional ownership scheme?", "No. Custodians do not own the car. They fund and accompany its build, and share scheduled access to the finished object."], ["What is the duration of the programme?", "Approximately three years from kickoff to handover, with a five-year custodianship period after completion."]]
}, {
  title: "The Car",
  items: [["Is the donor shell genuine?", "Yes. A matching-numbers RS500 shell, fully documented, acquired in 2023. Provenance is published to custodians."], ["What is being changed?", "Nothing visible. Beneath the skin: modern metallurgy, refreshed electronics, and a Mahle-built powertrain to original spec."], ["Will it be road-legal?", "Yes. UK registered, MOT-exempt as a historic vehicle, fully usable on public roads."]]
}, {
  title: "Custodianship",
  items: [["What do custodians actually get?", "Studio access during build, quarterly digital-twin updates, private drives, exhibitions, dinners, and a place in the provenance ledger of the finished car."], ["Can I drive the car?", "Yes. Scheduled drive days are part of the programme — track and road, in the UK and Europe."], ["What happens after five years?", "The car enters its long-term custodianship phase. The original twenty-five retain first right of access in perpetuity."]]
}, {
  title: "Application",
  items: [["How do I apply?", "Submit an enquiry through the Apply page. We respond personally within two working days."], ["Is there a selection process?", "Yes. The studio meets every prospective custodian before a seat is offered. Fit matters as much as funding."], ["What are the costs?", "Disclosed in the prospectus, on request, after an initial conversation."]]
}];
function FAQPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "bg-background text-foreground min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "07 / FAQ", title: "Questions,", italic: "answered.", intro: "If something isn't covered here, the studio answers personally — write to us at hello@vision148.com." }),
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
