import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "@/assets/vision148-logo.jpg";

const links = [
  { to: "/the-car", label: "The Car" },
  { to: "/process", label: "Process" },
  { to: "/partners", label: "Partners" },
  { to: "/experience", label: "Experience" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/70 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-[1500px] mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img src={logo} alt="Vision148" className="h-9 w-9 object-contain transition-transform duration-500 group-hover:rotate-[8deg]" />
          <span className="font-display text-sm tracking-[0.4em] uppercase hidden sm:block">
            Vision <span className="font-serif-italic normal-case tracking-normal">one-forty-eight</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-10 text-[11px] font-mono uppercase tracking-[0.24em]">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="link-underline"
              activeProps={{ className: "opacity-100" }}
              inactiveProps={{ className: "opacity-70 hover:opacity-100" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            to="/apply"
            className="hidden sm:inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.24em] border border-white/40 px-4 py-2.5 hover:bg-white hover:text-black transition-colors duration-300"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" /> Apply
          </Link>
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden h-10 w-10 flex flex-col items-center justify-center gap-1.5"
          >
            <span className={`h-px w-5 bg-white transition-transform ${open ? "translate-y-[3px] rotate-45" : ""}`} />
            <span className={`h-px w-5 bg-white transition-transform ${open ? "-translate-y-[3px] -rotate-45" : ""}`} />
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/95 backdrop-blur-xl">
          <nav className="px-6 py-8 flex flex-col gap-5 text-sm font-mono uppercase tracking-[0.24em]">
            {links.map((l) => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="hover:opacity-60">
                {l.label}
              </Link>
            ))}
            <Link to="/apply" onClick={() => setOpen(false)} className="border border-white/40 px-4 py-3 text-center mt-2">
              Apply
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
