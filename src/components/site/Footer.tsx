import { Link } from "@tanstack/react-router";
import logo from "@/assets/vision148-logo.jpg";

export function Footer() {
  return (
    <footer className="border-t border-white/10 pt-24 pb-12">
      <div className="max-w-[1500px] mx-auto px-6 md:px-10">
        <div className="font-display uppercase text-[14vw] md:text-[10vw] leading-[0.85] tracking-tight opacity-90">
          Vision<span className="font-serif-italic opacity-60">148</span>
        </div>
        <div className="hairline mt-12" />
        <div className="grid md:grid-cols-12 gap-10 mt-12">
          <div className="md:col-span-4 flex items-center gap-4">
            <img src={logo} alt="Vision148" className="h-12 w-12" />
            <div>
              <div className="font-display uppercase tracking-[0.3em] text-sm">Vision 148</div>
              <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-white/40 mt-1">
                A Sarthe Cars Programme · Est. 2024
              </div>
            </div>
          </div>
          <div className="md:col-span-5 grid grid-cols-2 gap-6 text-[11px] font-mono uppercase tracking-[0.22em]">
            <div className="space-y-3">
              <div className="text-white/40">Explore</div>
              <Link to="/the-car" className="block hover:opacity-60">The Car</Link>
              <Link to="/process" className="block hover:opacity-60">Process</Link>
              <Link to="/partners" className="block hover:opacity-60">Partners</Link>
              <Link to="/experience" className="block hover:opacity-60">Experience</Link>
              <Link to="/apply" className="block hover:opacity-60">Apply</Link>
            </div>
            <div className="space-y-3">
              <div className="text-white/40">Connect</div>
              <a href="#" className="block hover:opacity-60">Instagram</a>
              <a href="#" className="block hover:opacity-60">LinkedIn</a>
              <a href="#" className="block hover:opacity-60">YouTube</a>
              <a href="mailto:hello@vision148.com" className="block hover:opacity-60">Email</a>
            </div>
          </div>
          <div className="md:col-span-3 text-[10px] font-mono uppercase tracking-[0.22em] text-white/40 md:text-right">
            © {new Date().getFullYear()} Vision 148.<br />All rights reserved.<br />
            <span className="block mt-4">Coventry · Silverstone · London</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
