import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
const logo = "/assets/vision148-logo-Dbu8HTfX.jpg";
const links = [
  { to: "/the-car", label: "The Car" },
  { to: "/process", label: "Process" },
  { to: "/partners", label: "Partners" },
  { to: "/experience", label: "Experience" },
  { to: "/journal", label: "Journal" },
  { to: "/about", label: "About" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" }
];
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxs(
    "header",
    {
      className: `fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "bg-black/70 backdrop-blur-xl border-b border-white/10" : "bg-transparent border-b border-transparent"}`,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "max-w-[1500px] mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs(Link, { id: "nav-logo", to: "/", className: "flex items-center gap-3 group", children: [
            /* @__PURE__ */ jsx("img", { src: logo, alt: "Vision148", className: "h-9 w-9 object-contain transition-transform duration-500 group-hover:rotate-[8deg]" }),
            /* @__PURE__ */ jsxs("span", { className: "font-display text-sm tracking-[0.4em] uppercase hidden sm:block", children: [
              "Vision ",
              /* @__PURE__ */ jsx("span", { className: "font-serif-italic normal-case tracking-normal", children: "one-forty-eight" })
            ] })
          ] }),
          /* @__PURE__ */ jsx("nav", { className: "hidden md:flex items-center gap-10 text-[11px] font-mono uppercase tracking-[0.24em]", children: links.map((l) => /* @__PURE__ */ jsx(
            Link,
            {
              id: `nav-link-${l.label.toLowerCase().replace(/\s+/g, "-")}`,
              to: l.to,
              className: "link-underline",
              activeProps: { className: "opacity-100" },
              inactiveProps: { className: "opacity-70 hover:opacity-100" },
              children: l.label
            },
            l.to
          )) }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxs(
              Link,
              {
                id: "nav-apply-btn",
                to: "/apply",
                className: "hidden sm:inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.24em] border border-white/40 px-4 py-2.5 hover:bg-white hover:text-black transition-colors duration-300",
                children: [
                  /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-white animate-pulse" }),
                  " Apply"
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              "button",
              {
                id: "nav-mobile-toggle",
                "aria-label": "Menu",
                onClick: () => setOpen((v) => !v),
                className: "md:hidden h-10 w-10 flex flex-col items-center justify-center gap-1.5",
                children: [
                  /* @__PURE__ */ jsx("span", { className: `h-px w-5 bg-white transition-transform ${open ? "translate-y-[3px] rotate-45" : ""}` }),
                  /* @__PURE__ */ jsx("span", { className: `h-px w-5 bg-white transition-transform ${open ? "-translate-y-[3px] -rotate-45" : ""}` })
                ]
              }
            )
          ] })
        ] }),
        open && /* @__PURE__ */ jsx("div", { className: "md:hidden border-t border-white/10 bg-black/95 backdrop-blur-xl", children: /* @__PURE__ */ jsxs("nav", { className: "px-6 py-8 flex flex-col gap-5 text-sm font-mono uppercase tracking-[0.24em]", children: [
          links.map((l) => /* @__PURE__ */ jsx(Link, { to: l.to, onClick: () => setOpen(false), className: "hover:opacity-60", children: l.label }, l.to)),
          /* @__PURE__ */ jsx(Link, { to: "/apply", onClick: () => setOpen(false), className: "border border-white/40 px-4 py-3 text-center mt-2", children: "Apply" })
        ] }) })
      ]
    }
  );
}
function Footer() {
  return /* @__PURE__ */ jsx("footer", { className: "border-t border-white/10 pt-24 pb-12", children: /* @__PURE__ */ jsxs("div", { className: "max-w-[1500px] mx-auto px-6 md:px-10", children: [
    /* @__PURE__ */ jsxs("div", { className: "font-display uppercase text-[14vw] md:text-[10vw] leading-[0.85] tracking-tight opacity-90", children: [
      "Vision",
      /* @__PURE__ */ jsx("span", { className: "font-serif-italic opacity-60", children: "148" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "hairline mt-12" }),
    /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-12 gap-10 mt-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-4 flex items-center gap-4", children: [
        /* @__PURE__ */ jsx("img", { src: logo, alt: "Vision148", className: "h-12 w-12" }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "font-display uppercase tracking-[0.3em] text-sm", children: "Vision 148" }),
          /* @__PURE__ */ jsx("div", { className: "text-[10px] font-mono uppercase tracking-[0.22em] text-white/40 mt-1", children: "A Sarthe Cars Programme · Est. 2024" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-5 grid grid-cols-3 gap-6 text-[11px] font-mono uppercase tracking-[0.22em]", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsx("div", { className: "text-white/40", children: "Explore" }),
          /* @__PURE__ */ jsx(Link, { to: "/the-car", className: "block hover:opacity-60", children: "The Car" }),
          /* @__PURE__ */ jsx(Link, { to: "/process", className: "block hover:opacity-60", children: "Process" }),
          /* @__PURE__ */ jsx(Link, { to: "/partners", className: "block hover:opacity-60", children: "Partners" }),
          /* @__PURE__ */ jsx(Link, { to: "/experience", className: "block hover:opacity-60", children: "Experience" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsx("div", { className: "text-white/40", children: "Studio" }),
          /* @__PURE__ */ jsx(Link, { to: "/about", className: "block hover:opacity-60", children: "About" }),
          /* @__PURE__ */ jsx(Link, { to: "/journal", className: "block hover:opacity-60", children: "Journal" }),
          /* @__PURE__ */ jsx(Link, { to: "/faq", className: "block hover:opacity-60", children: "FAQ" }),
          /* @__PURE__ */ jsx(Link, { to: "/contact", className: "block hover:opacity-60", children: "Contact" }),
          /* @__PURE__ */ jsx(Link, { to: "/apply", className: "block hover:opacity-60", children: "Apply" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsx("div", { className: "text-white/40", children: "Connect" }),
          /* @__PURE__ */ jsx("a", { href: "#", className: "block hover:opacity-60", children: "Instagram" }),
          /* @__PURE__ */ jsx("a", { href: "#", className: "block hover:opacity-60", children: "LinkedIn" }),
          /* @__PURE__ */ jsx("a", { href: "#", className: "block hover:opacity-60", children: "YouTube" }),
          /* @__PURE__ */ jsx("a", { href: "mailto:hello@vision148.com", className: "block hover:opacity-60", children: "Email" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-3 text-[10px] font-mono uppercase tracking-[0.22em] text-white/40 md:text-right", children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Vision 148.",
        /* @__PURE__ */ jsx("br", {}),
        "All rights reserved.",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("span", { className: "block mt-4", children: "Coventry · Silverstone · London" })
      ] })
    ] })
  ] }) });
}
function SectionLabel({ n, title }) {
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 eyebrow", children: [
    /* @__PURE__ */ jsx("span", { children: n }),
    /* @__PURE__ */ jsx("span", { className: "h-px w-10 bg-hairline" }),
    /* @__PURE__ */ jsx("span", { children: title })
  ] });
}
function classesFor(variant) {
  const base = "group inline-flex items-center gap-3 px-7 py-4 text-[11px] font-mono tracking-[0.24em] uppercase transition-all duration-300";
  const styles = variant === "solid" ? "bg-white text-black hover:bg-white/85" : "border border-white/40 text-white hover:border-white hover:bg-white hover:text-black";
  return `${base} ${styles}`;
}
function PillLink({
  to,
  children,
  variant = "solid"
}) {
  return /* @__PURE__ */ jsxs(Link, { to, className: classesFor(variant), children: [
    children,
    /* @__PURE__ */ jsx("span", { className: "inline-block transition-transform duration-300 group-hover:translate-x-1", children: "→" })
  ] });
}
function PageHero({
  eyebrow,
  title,
  italic,
  intro,
  video,
  img
}) {
  return /* @__PURE__ */ jsxs("section", { className: "pt-40 md:pt-52 pb-20 md:pb-28 border-b border-white/10 relative grain overflow-hidden", children: [
    video ? /* @__PURE__ */ jsx(
      "video",
      {
        src: video,
        autoPlay: true,
        muted: true,
        loop: true,
        playsInline: true,
        className: "absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none mix-blend-screen"
      }
    ) : img ? /* @__PURE__ */ jsx(
      "img",
      {
        src: img,
        alt: "",
        className: "absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none grayscale mix-blend-screen"
      }
    ) : null,
    /* @__PURE__ */ jsxs("div", { className: "max-w-[1500px] mx-auto px-6 md:px-10 reveal relative z-10", children: [
      /* @__PURE__ */ jsx("div", { className: "eyebrow", children: eyebrow }),
      /* @__PURE__ */ jsxs("h1", { className: "mt-8 font-display uppercase leading-[0.88] text-[14vw] md:text-[8.5vw] tracking-tight", children: [
        title,
        italic && /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("span", { className: "font-serif-italic normal-case opacity-70", children: italic })
        ] })
      ] }),
      intro && /* @__PURE__ */ jsx("p", { className: "mt-10 max-w-2xl text-white/70 text-base md:text-lg leading-relaxed", children: intro })
    ] })
  ] });
}
function CrossLink({
  to,
  eyebrow,
  title
}) {
  return /* @__PURE__ */ jsx(
    Link,
    {
      to,
      className: "group block border-t border-white/15 py-10 md:py-14 transition-colors hover:bg-white/5",
      children: /* @__PURE__ */ jsxs("div", { className: "max-w-[1500px] mx-auto px-6 md:px-10 flex items-center justify-between gap-6", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "eyebrow", children: eyebrow }),
          /* @__PURE__ */ jsx("div", { className: "mt-3 font-display uppercase text-3xl md:text-5xl tracking-tight", children: title })
        ] }),
        /* @__PURE__ */ jsx("span", { className: "font-display text-3xl md:text-4xl transition-transform duration-500 group-hover:translate-x-3", children: "→" })
      ] })
    }
  );
}
export {
  CrossLink as C,
  Footer as F,
  Nav as N,
  PageHero as P,
  SectionLabel as S,
  PillLink as a
};
