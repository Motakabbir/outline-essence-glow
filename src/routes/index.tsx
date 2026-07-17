import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Marquee } from "@/components/site/Marquee";
import { PillLink, SectionLabel, CrossLink } from "@/components/site/Primitives";
import heroCar from "@/assets/hero-car.jpg";
import heroVideo from "@/assets/video.mp4";
import workshop from "@/assets/workshop.jpg";
import engine from "@/assets/engine.jpg";
import theCar from "@/assets/the-car.jpg";
import experience from "@/assets/experience.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vision148 — RS500 Genesis Build" },
      {
        name: "description",
        content:
          "Vision148 — a one-of-one syndicated build of the Ford Sierra RS500 Cosworth. Heritage coachbuilding meets digital manufacturing.",
      },
      { property: "og:title", content: "Vision148 — RS500 Genesis Build" },
      {
        property: "og:description",
        content: "A one-of-one syndicated build of the Ford Sierra RS500 Cosworth.",
      },
      { property: "og:image", content: "/og.jpg" },
    ],
  }),
  component: Home,
});

function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-end overflow-hidden">
      <video
        src={heroVideo}
        poster={heroCar}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-70 grayscale scale-[1.04]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/80" />
      <div className="absolute inset-0 grain pointer-events-none" />

      <div className="relative max-w-[1500px] mx-auto px-6 md:px-10 pb-20 md:pb-28 w-full reveal">
        <div className="flex items-center gap-4 eyebrow mb-8">
          <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
          <span>A Sarthe Cars Programme</span>
          <span className="h-px w-10 bg-white/30" />
          <span>Est. 2024</span>
        </div>
        <h1 className="font-display uppercase leading-[0.84] text-[18vw] md:text-[10.5vw] tracking-tight">
          One <span className="font-serif-italic normal-case font-normal opacity-90">of</span> One.
          <br />
          <span className="opacity-50">RS500</span>
        </h1>
        <div className="mt-12 grid md:grid-cols-12 gap-8 items-end">
          <p className="md:col-span-7 text-base md:text-lg text-white/70 max-w-2xl leading-relaxed">
            The reimagination and re-engineering of car #148 of the original 500 Ford
            Sierra RS500 Cosworths — reimagined through digital manufacturing, artisan
            coachbuilding, and a private syndicate of twenty-five.
          </p>
          <div className="md:col-span-5 flex flex-wrap gap-3 md:justify-end">
            <PillLink to="/apply">Join the Syndicate</PillLink>
            <PillLink to="/the-car" variant="ghost">The Car</PillLink>
          </div>
        </div>
      </div>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-mono uppercase tracking-[0.4em] text-white/50 animate-pulse">
        Scroll
      </div>
    </section>
  );
}

function Manifesto() {
  return (
    <section className="py-32 md:py-48 border-t border-white/10">
      <div className="max-w-[1500px] mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <SectionLabel n="01" title="Manifesto" />
        </div>
        <div className="md:col-span-8">
          <p className="font-display uppercase text-3xl md:text-5xl leading-[1.05] tracking-tight">
            A modern <span className="font-serif-italic normal-case opacity-80">homage</span>,
            built once. A digital twin. A private ledger of provenance. Twenty-five
            custodians of a singular automotive <span className="font-serif-italic normal-case opacity-80">artefact</span>.
          </p>
          <div className="mt-12 grid grid-cols-3 gap-6 max-w-xl">
            {[
              ["500", "Original cars"],
              ["1 / 1", "Genesis build"],
              ["25", "Syndicate seats"],
            ].map(([k, v]) => (
              <div key={v} className="border-t border-white/20 pt-4">
                <div className="font-display text-3xl md:text-4xl">{k}</div>
                <div className="text-[10px] mt-2 font-mono uppercase tracking-[0.2em] text-white/50">
                  {v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Pillars() {
  const items = [
    { n: "I", title: "One of One", body: "A singular build derived from chassis #148 — never duplicated, never replicated." },
    { n: "II", title: "World-Class Partners", body: "DMC, Mahle, Coventry Metalcraft, T3DMC, BAMD, ASM — embedded throughout." },
    { n: "III", title: "Exclusive Access", body: "Private drives, factory visits, and curated experiences with the finished car." },
  ];
  return (
    <section className="paper">
      <div className="max-w-[1500px] mx-auto px-6 md:px-10 py-24 md:py-32">
        <div className="grid md:grid-cols-3 gap-0 border-t border-b border-black/15">
          {items.map((it, i) => (
            <div
              key={it.title}
              className={`p-10 md:p-14 group transition-colors hover:bg-black hover:text-white ${
                i > 0 ? "md:border-l border-black/15 border-t md:border-t-0" : ""
              }`}
            >
              <div className="font-mono text-xs tracking-[0.3em] opacity-60">{it.n}</div>
              <h3 className="font-display text-3xl md:text-4xl uppercase mt-8 leading-tight">
                {it.title}
              </h3>
              <p className="mt-6 text-sm leading-relaxed opacity-70 max-w-xs">{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HighlightCar() {
  return (
    <section className="py-28 md:py-40">
      <div className="max-w-[1500px] mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-7 overflow-hidden">
          <img
            src={workshop}
            alt="RS500 chassis in workshop"
            width={1400}
            height={1000}
            loading="lazy"
            className="w-full grayscale transition-transform duration-[2s] hover:scale-[1.04]"
          />
        </div>
        <div className="md:col-span-5 md:pt-6">
          <SectionLabel n="02" title="The Car" />
          <h2 className="font-display text-5xl md:text-6xl uppercase leading-[0.95] mt-8">
            Vision148<br />
            <span className="font-serif-italic normal-case opacity-70">RS500.</span>
          </h2>
          <p className="mt-8 text-white/70 leading-relaxed">
            Car #148 — stored for fifteen years, acquired in 2024, now reborn. Dismantled
            with archaeological care, every component catalogued, scanned and assessed
            for restoration, replacement or additive remanufacture.
          </p>
          <div className="mt-10">
            <PillLink to="/the-car" variant="ghost">Read the Specification</PillLink>
          </div>
        </div>
      </div>
    </section>
  );
}

function HighlightProcess() {
  return (
    <section className="py-28 md:py-40 border-t border-white/10">
      <div className="max-w-[1500px] mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-5">
          <SectionLabel n="03" title="Process" />
          <h2 className="font-display text-5xl md:text-6xl uppercase leading-[0.95] mt-8">
            From chassis<br />
            <span className="font-serif-italic normal-case opacity-70">to road.</span>
          </h2>
          <p className="mt-8 text-white/70 leading-relaxed max-w-xl">
            Three phases. Eighteen months. Documented in full digital fidelity. From the
            archaeological dismantle through to the first turn of the key.
          </p>
          <div className="mt-10">
            <PillLink to="/process" variant="ghost">The Build Process</PillLink>
          </div>
        </div>
        <div className="md:col-span-7 overflow-hidden">
          <img
            src={engine}
            alt="Cosworth YB engine"
            width={1400}
            height={1000}
            loading="lazy"
            className="w-full grayscale aspect-[4/3] object-cover transition-transform duration-[2s] hover:scale-[1.04]"
          />
        </div>
      </div>
    </section>
  );
}

function HighlightExperience() {
  return (
    <section className="paper">
      <div className="max-w-[1500px] mx-auto px-6 md:px-10 py-28 md:py-40 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-7 overflow-hidden">
          <img
            src={experience}
            alt="Exhibition"
            width={1400}
            height={1000}
            loading="lazy"
            className="w-full grayscale aspect-[4/3] object-cover"
          />
        </div>
        <div className="md:col-span-5 md:pt-6">
          <div className="flex items-center gap-4 font-mono text-[0.7rem] tracking-[0.22em] uppercase text-black/50">
            <span>04</span>
            <span className="h-px w-10 bg-black/30" />
            <span>The Experience</span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl uppercase leading-[0.95] mt-8">
            Ownership,<br />
            <span className="font-serif-italic normal-case opacity-70">reimagined.</span>
          </h2>
          <p className="mt-8 text-black/70 leading-relaxed">
            Private drives. Studio visits. Curated exhibitions. A custodianship calendar
            designed around the finished car and the people who built it.
          </p>
          <div className="mt-10">
            <a
              href="/experience"
              className="inline-flex items-center gap-3 text-[11px] font-mono uppercase tracking-[0.24em] border border-black/40 px-7 py-4 hover:bg-black hover:text-white transition-colors"
            >
              The Experience <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Scarcity() {
  return (
    <section className="py-28 md:py-40 border-t border-white/10">
      <div className="max-w-[1500px] mx-auto px-6 md:px-10">
        <div className="flex items-baseline justify-between gap-8 flex-wrap">
          <div className="eyebrow">05 / Scarcity</div>
          <div className="eyebrow">One build · Twenty-five custodians</div>
        </div>
        <div className="mt-12 font-display uppercase leading-[0.82] text-[34vw] md:text-[22vw] tracking-tight text-center">
          1<span className="font-serif-italic normal-case opacity-60">4</span>8
        </div>
        <p className="mt-8 max-w-2xl mx-auto text-center text-white/65 leading-relaxed">
          The 148th of 500 RS500 Cosworths ever built. Reborn once. Then never again.
        </p>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-32 md:py-48 border-t border-white/10 text-center">
      <div className="max-w-[1500px] mx-auto px-6 md:px-10">
        <div className="eyebrow">Apply</div>
        <h2 className="font-display uppercase text-6xl md:text-8xl leading-[0.9] tracking-tight mt-8">
          Take a seat<br />
          <span className="font-serif-italic normal-case opacity-70">in history.</span>
        </h2>
        <p className="mt-10 max-w-xl mx-auto text-white/60 leading-relaxed">
          Syndicate places are limited and reviewed individually. Register interest to
          receive the full prospectus and an introduction from the Vision148 team.
        </p>
        <div className="mt-12 flex flex-wrap gap-4 justify-center">
          <PillLink to="/apply">Register Interest</PillLink>
          <PillLink to="/partners" variant="ghost">Meet the Partners</PillLink>
        </div>
      </div>
    </section>
  );
}

function Home() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <Nav />
      <Hero />
      <Marquee items={["One of One", "RS500 Cosworth", "Genesis Build", "Digital Twin", "25 Custodians", "Est. 2024"]} />
      <Manifesto />
      <Pillars />
      <HighlightCar />
      <HighlightProcess />
      <HighlightExperience />
      <Scarcity />
      <FinalCTA />
      <CrossLink to="/apply" eyebrow="Next" title="Apply for a seat →" />
      <Footer />
    </main>
  );
}
