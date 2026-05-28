import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export function SectionLabel({ n, title }: { n: string; title: string }) {
  return (
    <div className="flex items-center gap-4 eyebrow">
      <span>{n}</span>
      <span className="h-px w-10 bg-hairline" />
      <span>{title}</span>
    </div>
  );
}

type Variant = "solid" | "ghost";

function classesFor(variant: Variant) {
  const base =
    "group inline-flex items-center gap-3 px-7 py-4 text-[11px] font-mono tracking-[0.24em] uppercase transition-all duration-300";
  const styles =
    variant === "solid"
      ? "bg-white text-black hover:bg-white/85"
      : "border border-white/40 text-white hover:border-white hover:bg-white hover:text-black";
  return `${base} ${styles}`;
}

export function PillLink({
  to,
  children,
  variant = "solid",
}: {
  to: string;
  children: ReactNode;
  variant?: Variant;
}) {
  return (
    <Link to={to} className={classesFor(variant)}>
      {children}
      <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
    </Link>
  );
}

export function PillAnchor({
  href,
  children,
  variant = "solid",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
}) {
  return (
    <a href={href} className={classesFor(variant)}>
      {children}
      <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
    </a>
  );
}

export function PageHero({
  eyebrow,
  title,
  italic,
  intro,
}: {
  eyebrow: string;
  title: ReactNode;
  italic?: string;
  intro?: string;
}) {
  return (
    <section className="pt-40 md:pt-52 pb-20 md:pb-28 border-b border-white/10 relative grain">
      <div className="max-w-[1500px] mx-auto px-6 md:px-10 reveal">
        <div className="eyebrow">{eyebrow}</div>
        <h1 className="mt-8 font-display uppercase leading-[0.88] text-[14vw] md:text-[8.5vw] tracking-tight">
          {title}
          {italic && (
            <>
              <br />
              <span className="font-serif-italic normal-case opacity-70">{italic}</span>
            </>
          )}
        </h1>
        {intro && (
          <p className="mt-10 max-w-2xl text-white/70 text-base md:text-lg leading-relaxed">{intro}</p>
        )}
      </div>
    </section>
  );
}

export function CrossLink({
  to,
  eyebrow,
  title,
}: {
  to: string;
  eyebrow: string;
  title: string;
}) {
  return (
    <Link
      to={to}
      className="group block border-t border-white/15 py-10 md:py-14 transition-colors hover:bg-white/5"
    >
      <div className="max-w-[1500px] mx-auto px-6 md:px-10 flex items-center justify-between gap-6">
        <div>
          <div className="eyebrow">{eyebrow}</div>
          <div className="mt-3 font-display uppercase text-3xl md:text-5xl tracking-tight">
            {title}
          </div>
        </div>
        <span className="font-display text-3xl md:text-4xl transition-transform duration-500 group-hover:translate-x-3">
          →
        </span>
      </div>
    </Link>
  );
}
