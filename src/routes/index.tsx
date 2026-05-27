import { createFileRoute } from "@tanstack/react-router";
import logo from "@/assets/vision148-logo.jpg";
import heroCar from "@/assets/hero-car.jpg";
import heroVideo from "@/assets/hero-video.mp4.asset.json";
import workshop from "@/assets/workshop.jpg";
import engine from "@/assets/engine.jpg";
import theCar from "@/assets/the-car.jpg";
import design from "@/assets/design.jpg";
import experience from "@/assets/experience.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vision148 — RS500 Genesis Build" },
      {
        name: "description",
        content:
          "A one-of-one syndicated build of the Ford Sierra RS500 Cosworth. Heritage coachbuilding meets digital manufacturing.",
      },
      { property: "og:title", content: "Vision148 — RS500 Genesis Build" },
      {
        property: "og:description",
        content: "A one-of-one syndicated build of the Ford Sierra RS500 Cosworth.",
      },
    ],
  }),
  component: VisionLanding,
});

/* ---------- Primitives ---------- */

function SectionLabel({ n, title }: { n: string; title: string }) {
  return (
    <div className="flex items-center gap-4 eyebrow">
      <span>{n}</span>
      <span className="h-px w-10 bg-hairline" />
      <span>{title}</span>
    </div>
  );
}

function PillButton({
  children,
  href = "#apply",
  variant = "solid",
}: {
  children: React.ReactNode;
  href?: string;
  variant?: "solid" | "ghost";
}) {
  const base =
    "group inline-flex items-center gap-3 px-7 py-4 text-xs font-mono tracking-[0.22em] uppercase transition-all duration-300";
  const styles =
    variant === "solid"
      ? "bg-white text-black hover:bg-white/85"
      : "border border-white/40 text-white hover:border-white hover:bg-white hover:text-black";
  return (
    <a href={href} className={`${base} ${styles}`}>
      {children}
      <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </a>
  );
}

/* ---------- Sections ---------- */

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
      <div className="max-w-[1500px] mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <img src={logo} alt="Vision148" className="h-9 w-9 object-contain" />
          <span className="font-display text-sm tracking-[0.35em] uppercase hidden sm:block">
            Vision 148
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-10 text-xs font-mono uppercase tracking-[0.22em]">
          <a href="#opportunity" className="hover:opacity-60 transition">The Opportunity</a>
          <a href="#car" className="hover:opacity-60 transition">The Car</a>
          <a href="#build" className="hover:opacity-60 transition">The Build</a>
          <a href="#partners" className="hover:opacity-60 transition">Partners</a>
        </nav>
        <a
          href="#apply"
          className="text-xs font-mono uppercase tracking-[0.22em] border border-white/40 px-4 py-2 hover:bg-white hover:text-black transition"
        >
          Apply
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-end overflow-hidden">
      <video
        src={heroVideo.url}
        poster={heroCar}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-70 grayscale"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/70" />
      <div className="relative max-w-[1500px] mx-auto px-6 md:px-10 pb-20 md:pb-28 w-full reveal">
        <div className="eyebrow mb-6">A Sarthe Cars Programme · Est. 2024</div>
        <h1 className="font-display uppercase leading-[0.86] text-[18vw] md:text-[10.5vw] tracking-tight">
          One <span className="italic font-light">of</span> One.
          <br />
          <span className="opacity-60">RS500</span>
        </h1>
        <div className="mt-10 grid md:grid-cols-3 gap-8 items-end">
          <p className="md:col-span-2 text-base md:text-lg text-white/70 max-w-2xl leading-relaxed">
            Vision148 is the restoration and re-engineering of car #148 of the original
            500 Ford Sierra RS500 Cosworths — reimagined through bleeding-edge digital
            manufacturing, artisan coachbuilding, and a private syndicate of twenty-five.
          </p>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <PillButton href="#apply">Join the Syndicate</PillButton>
            <PillButton href="#car" variant="ghost">Learn More</PillButton>
          </div>
        </div>
      </div>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-mono uppercase tracking-[0.4em] text-white/50 animate-pulse">
        Scroll
      </div>
    </section>
  );
}

function Opportunity() {
  return (
    <section id="opportunity" className="py-28 md:py-40 border-t border-white/10">
      <div className="max-w-[1500px] mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <SectionLabel n="02" title="The Opportunity" />
          <h2 className="font-display text-5xl md:text-7xl uppercase leading-[0.95] mt-8">
            A modern homage,<br />built once.
          </h2>
        </div>
        <div className="md:col-span-6 md:col-start-7 md:pt-10">
          <p className="text-white/70 text-lg leading-relaxed">
            A rare invitation to co-own a singular automotive artefact — the rebirth of
            an original RS500 platform, fused with 21st-century engineering. Twenty-five
            members. One car. A shared chapter in motoring history.
          </p>
          <p className="text-white/50 text-sm leading-relaxed mt-6">
            Heritage-inspired design, additive manufacturing, motorsport-grade build
            partners. Every decision documented, every component catalogued.
          </p>
          <img
            src={theCar}
            alt="Silver Ford Sierra RS500"
            width={1400}
            height={1000}
            loading="lazy"
            className="mt-10 w-full grayscale"
          />
        </div>
      </div>
    </section>
  );
}

function Pillars() {
  const items = [
    {
      n: "I",
      title: "One of One",
      body: "A singular build derived from chassis #148 — never duplicated, never replicated.",
    },
    {
      n: "II",
      title: "World-Class Partners",
      body: "DMC, Mahle, Coventry Metalcraft, T3DMC, BAMD, ASM — best-in-class, embedded throughout.",
    },
    {
      n: "III",
      title: "Exclusive Access",
      body: "Private drives, factory visits, and curated experiences with the finished car.",
    },
  ];
  return (
    <section className="paper">
      <div className="max-w-[1500px] mx-auto px-6 md:px-10 py-24 md:py-32">
        <div className="grid md:grid-cols-3 gap-0 border-t border-b border-black/15">
          {items.map((it, i) => (
            <div
              key={it.title}
              className={`p-10 md:p-14 ${i > 0 ? "md:border-l border-black/15" : ""} ${
                i > 0 ? "border-t md:border-t-0 border-black/15" : ""
              }`}
            >
              <div className="font-mono text-xs tracking-[0.3em] opacity-60">{it.n}</div>
              <h3 className="font-display text-3xl md:text-4xl uppercase mt-8 leading-tight">
                {it.title}
              </h3>
              <p className="mt-6 text-sm leading-relaxed text-black/70 max-w-xs">{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SyndicateBanner() {
  return (
    <section className="relative py-20 md:py-28 border-y border-white/10 overflow-hidden">
      <div className="max-w-[1500px] mx-auto px-6 md:px-10 flex flex-col md:flex-row items-baseline gap-8 md:gap-16">
        <div className="eyebrow whitespace-nowrap">Available Syndicate</div>
        <div className="flex-1">
          <div className="font-display uppercase text-[14vw] md:text-[9vw] leading-[0.85] tracking-tight">
            25 <span className="opacity-40">Seats</span>
          </div>
        </div>
        <div className="font-mono text-xs uppercase tracking-[0.3em] text-white/60 md:text-right">
          Phase II<br />Open
        </div>
      </div>
    </section>
  );
}

function TheCarSection() {
  return (
    <section id="car" className="py-28 md:py-40">
      <div className="max-w-[1500px] mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-7">
          <img
            src={workshop}
            alt="RS500 chassis in workshop"
            width={1400}
            height={1000}
            loading="lazy"
            className="w-full grayscale"
          />
        </div>
        <div className="md:col-span-5 md:pt-6">
          <SectionLabel n="04" title="The Car" />
          <h2 className="font-display text-5xl md:text-6xl uppercase leading-[0.95] mt-8">
            Vision148<br />RS500
          </h2>
          <p className="mt-8 text-white/70 leading-relaxed">
            Car #148 — stored for fifteen years, acquired in 2024, now reborn. Dismantled
            with archaeological care by classic-RS specialists, every component catalogued,
            scanned and assessed for restoration, replacement or additive remanufacture.
          </p>
          <p className="mt-4 text-white/50 text-sm leading-relaxed">
            Original turbocharged Cosworth YB engine, rebuilt by Mahle. Blended steel and
            aluminium body. 3D-printed dashboard. A digital twin of the entire car.
          </p>
          <div className="mt-10">
            <PillButton href="#build" variant="ghost">
              Read the Specification
            </PillButton>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="paper">
      <div className="max-w-[1500px] mx-auto px-6 md:px-10 py-28 md:py-40 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-4 font-mono text-[0.7rem] tracking-[0.22em] uppercase text-black/50">
            <span>05</span>
            <span className="h-px w-10 bg-black/30" />
            <span>How It Works</span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl uppercase leading-[0.95] mt-8">
            A syndicate of twenty-five.
          </h2>
          <ol className="mt-12 space-y-8">
            {[
              ["Apply", "Submit interest. Curated review and introduction."],
              ["Reserve", "Secure your seat. Phase contribution committed."],
              ["Witness", "Quarterly build access, digital twin updates, private events."],
              ["Experience", "Hand-over, driving days, exhibitions, custodianship."],
            ].map(([t, b], i) => (
              <li key={t} className="flex gap-6 border-t border-black/15 pt-6">
                <span className="font-mono text-xs tracking-[0.2em] opacity-50 mt-1 w-8">
                  0{i + 1}
                </span>
                <div>
                  <div className="font-display uppercase text-2xl tracking-tight">{t}</div>
                  <div className="text-sm text-black/65 mt-2 max-w-md">{b}</div>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div className="md:col-span-6 md:col-start-7">
          <img
            src={design}
            alt="CAD design workstation"
            width={1400}
            height={1000}
            loading="lazy"
            className="w-full grayscale"
          />
        </div>
      </div>
    </section>
  );
}

function BuildTimeline() {
  const phases = [
    {
      n: "Phase I",
      status: "Complete",
      title: "Dismantle & Scan",
      body: "Donor car fully dismantled. Parts catalogued. Complete 3D digital twin created with T3DMC.",
    },
    {
      n: "Phase II",
      status: "In progress",
      title: "Baseline & Design",
      body: "Chassis aligned and prepared by Coventry Metalcraft. Composite tooling, CAD surfacing, aero simulation.",
    },
    {
      n: "Phase III",
      status: "Upcoming",
      title: "Assembly & Drive",
      body: "Final assembly at the Digital Manufacturing Centre, Silverstone. Engine rebuild at Mahle. First drive.",
    },
  ];
  return (
    <section id="build" className="py-28 md:py-40 border-t border-white/10">
      <div className="max-w-[1500px] mx-auto px-6 md:px-10">
        <SectionLabel n="06" title="The Build Process" />
        <h2 className="font-display text-5xl md:text-7xl uppercase leading-[0.95] mt-8 max-w-4xl">
          From chassis<br />to road.
        </h2>

        <div className="mt-20 relative">
          <div className="absolute top-3 left-0 right-0 h-px bg-white/15" />
          <div className="grid md:grid-cols-3 gap-12">
            {phases.map((p) => (
              <div key={p.n} className="relative pt-10">
                <div className="absolute top-0 left-0 w-2 h-2 rounded-full bg-white" />
                <div className="flex justify-between items-baseline">
                  <div className="font-mono text-xs uppercase tracking-[0.25em]">{p.n}</div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
                    {p.status}
                  </div>
                </div>
                <h3 className="font-display text-3xl md:text-4xl uppercase mt-6">{p.title}</h3>
                <p className="mt-4 text-white/60 text-sm leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>

        <img
          src={engine}
          alt="Rebuilt Cosworth YB engine"
          width={1400}
          height={1000}
          loading="lazy"
          className="mt-24 w-full grayscale aspect-[21/9] object-cover"
        />
      </div>
    </section>
  );
}

function Partners() {
  const logos = [
    "DMC",
    "Mahle",
    "Coventry Metalcraft",
    "T3DMC",
    "ASM Auto",
    "BAMD",
    "Cornerstone",
    "HGL",
  ];
  return (
    <section id="partners" className="paper">
      <div className="max-w-[1500px] mx-auto px-6 md:px-10 py-28 md:py-36">
        <div className="grid md:grid-cols-12 gap-12 mb-20">
          <div className="md:col-span-5">
            <div className="flex items-center gap-4 font-mono text-[0.7rem] tracking-[0.22em] uppercase text-black/50">
              <span>07</span>
              <span className="h-px w-10 bg-black/30" />
              <span>Partners</span>
            </div>
            <h2 className="font-display text-5xl md:text-6xl uppercase leading-[0.95] mt-8">
              A curated consortium.
            </h2>
          </div>
          <p className="md:col-span-6 md:col-start-7 text-black/70 md:pt-10 leading-relaxed">
            Each partner is best-in-class — additive manufacturing, coachbuilding,
            composites, recycling, engine engineering. Selected to elevate the technical
            and commercial credibility of a one-of-one, investment-grade build.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 border-t border-l border-black/15">
          {logos.map((l) => (
            <div
              key={l}
              className="border-b border-r border-black/15 aspect-[3/1] flex items-center justify-center px-4"
            >
              <span className="font-display uppercase tracking-[0.18em] text-lg md:text-xl text-center">
                {l}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  const items = [
    ["Private Drives", "Track and road days at proving grounds and circuits."],
    ["Studio Visits", "Behind-the-scenes access at DMC, Mahle and Coventry Metalcraft."],
    ["Exhibitions", "Show appearances at curated automotive and design events."],
    ["Digital Twin", "Quarterly updates from the build, in full 3D fidelity."],
  ];
  return (
    <section className="py-28 md:py-40 border-t border-white/10">
      <div className="max-w-[1500px] mx-auto px-6 md:px-10">
        <SectionLabel n="08" title="The Experience" />
        <h2 className="font-display text-5xl md:text-7xl uppercase leading-[0.95] mt-8 max-w-4xl">
          Ownership,<br />reimagined.
        </h2>
        <div className="mt-20 grid md:grid-cols-4 gap-px bg-white/10">
          {items.map(([t, b]) => (
            <div key={t} className="bg-black p-8 md:p-10">
              <div className="font-display uppercase text-2xl md:text-3xl">{t}</div>
              <div className="mt-4 text-sm text-white/60 leading-relaxed">{b}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Value() {
  return (
    <section className="py-28 md:py-40 border-t border-white/10">
      <div className="max-w-[1500px] mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-6">
          <SectionLabel n="09" title="The Value" />
          <h2 className="font-display text-5xl md:text-6xl uppercase leading-[0.95] mt-8">
            Provenance<br />by design.
          </h2>
          <p className="mt-8 text-white/70 leading-relaxed max-w-xl">
            Every part traceable. Every decision documented. Every collaborator a name
            recognised across motorsport and luxury manufacture. The Vision148 RS500 is
            built as an artefact — and engineered as a driver's car.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
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
        <div className="md:col-span-6">
          <img
            src={experience}
            alt="Exhibition space with car"
            width={1400}
            height={1000}
            loading="lazy"
            className="w-full grayscale aspect-[4/3] object-cover"
          />
        </div>
      </div>
    </section>
  );
}

function Scarcity() {
  return (
    <section className="paper">
      <div className="max-w-[1500px] mx-auto px-6 md:px-10 py-24 md:py-32">
        <div className="flex items-baseline justify-between gap-8 flex-wrap">
          <div className="font-mono text-[0.7rem] tracking-[0.22em] uppercase text-black/50">
            10 / Scarcity
          </div>
          <div className="font-mono text-[0.7rem] tracking-[0.22em] uppercase text-black/50">
            One build · Twenty-five custodians
          </div>
        </div>
        <div className="mt-12 font-display uppercase leading-[0.82] text-[34vw] md:text-[22vw] tracking-tight text-center">
          148
        </div>
        <p className="mt-8 max-w-2xl mx-auto text-center text-black/70 leading-relaxed">
          The 148th of 500 RS500 Cosworths ever built. Reborn once. Then never again.
        </p>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section id="apply" className="py-32 md:py-48 border-t border-white/10">
      <div className="max-w-[1500px] mx-auto px-6 md:px-10 text-center">
        <div className="eyebrow">Apply</div>
        <h2 className="font-display uppercase text-6xl md:text-8xl leading-[0.9] tracking-tight mt-8">
          Take a seat<br />
          <span className="italic font-light opacity-60">in history.</span>
        </h2>
        <p className="mt-10 max-w-xl mx-auto text-white/60 leading-relaxed">
          Syndicate places are limited and reviewed individually. Register interest to
          receive the full prospectus and an introduction from the Vision148 team.
        </p>
        <div className="mt-12 flex flex-wrap gap-4 justify-center">
          <PillButton href="mailto:hello@vision148.com">Register Interest</PillButton>
          <PillButton href="#car" variant="ghost">Download Prospectus</PillButton>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 py-16">
      <div className="max-w-[1500px] mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4 flex items-center gap-4">
          <img src={logo} alt="Vision148" className="h-12 w-12" />
          <div>
            <div className="font-display uppercase tracking-[0.3em] text-sm">Vision 148</div>
            <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/40 mt-1">
              A Sarthe Cars Programme
            </div>
          </div>
        </div>
        <div className="md:col-span-5 grid grid-cols-2 gap-6 text-xs font-mono uppercase tracking-[0.22em]">
          <div className="space-y-3">
            <div className="text-white/40">Explore</div>
            <a href="#opportunity" className="block hover:opacity-60">Opportunity</a>
            <a href="#car" className="block hover:opacity-60">The Car</a>
            <a href="#build" className="block hover:opacity-60">Build</a>
            <a href="#partners" className="block hover:opacity-60">Partners</a>
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
          © {new Date().getFullYear()} Vision 148.<br />All rights reserved.
        </div>
      </div>
    </footer>
  );
}

/* ---------- Page ---------- */

function VisionLanding() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <Nav />
      <Hero />
      <Opportunity />
      <Pillars />
      <SyndicateBanner />
      <TheCarSection />
      <HowItWorks />
      <BuildTimeline />
      <Partners />
      <Experience />
      <Value />
      <Scarcity />
      <FinalCTA />
      <Footer />
    </main>
  );
}
