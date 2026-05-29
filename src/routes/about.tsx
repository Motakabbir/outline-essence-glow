import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { PageHero, CrossLink } from "@/components/site/Primitives";
import workshop from "@/assets/workshop.jpg";
import design from "@/assets/design.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Vision148" },
      { name: "description", content: "The story, the people, and the philosophy behind the Vision148 RS500 Genesis Build." },
      { property: "og:title", content: "About — Vision148" },
      { property: "og:description", content: "Heritage coachbuilding meets digital manufacturing." },
    ],
  }),
  component: AboutPage,
});

const principles = [
  ["Heritage", "We treat the RS500 as a cultural artefact — preserved, not modernised away."],
  ["Craft", "Every panel, every weld, every fastener is documented, dated and signed."],
  ["Transparency", "Custodians see the build as it happens. No press release surprises."],
  ["Restraint", "Twenty-five seats. One car. No spin-offs. No tiers."],
];

const team = [
  ["Programme Director", "Sarthe Cars"],
  ["Engineering Lead", "ASM Performance"],
  ["Powertrain", "Mahle Powertrain"],
  ["Digital Manufacture", "DMC · T3DMC"],
  ["Coachwork", "Coventry Metalcraft"],
  ["Composites", "BAMD"],
];

function AboutPage() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <Nav />
      <PageHero
        eyebrow="05 / About"
        title="A small studio"
        italic="with one obsession."
        intro="Vision148 was founded to build a single car — a definitive Ford Sierra RS500 Cosworth — and to share its making with twenty-five custodians who care as deeply as we do."
      />

      <section className="py-24 md:py-32 paper">
        <div className="max-w-[1500px] mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5">
            <div className="flex items-center gap-4 font-mono text-[0.7rem] tracking-[0.22em] uppercase text-black/50">
              <span>01</span><span className="h-px w-10 bg-black/30" /><span>Origin</span>
            </div>
            <h2 className="font-display text-5xl md:text-6xl uppercase leading-[0.95] mt-8">
              Started in a<br />
              <span className="font-serif-italic normal-case opacity-70">Coventry shed.</span>
            </h2>
            <p className="mt-8 text-black/70 leading-relaxed">
              Three engineers, one donor shell, and a question: what would the RS500
              look like if it had been finished properly, the first time? Five years
              later, the answer is in mid-build at a small workshop outside Coventry.
            </p>
            <p className="mt-6 text-black/70 leading-relaxed">
              We don't restore cars. We don't make replicas. We build one — and only one.
            </p>
          </div>
          <div className="md:col-span-7">
            <img src={workshop} alt="Workshop" className="w-full grayscale aspect-[4/3] object-cover" />
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="max-w-[1500px] mx-auto px-6 md:px-10">
          <div className="eyebrow">02 / Principles</div>
          <h2 className="mt-6 font-display uppercase text-5xl md:text-7xl leading-[0.9]">
            What we believe.
          </h2>
          <div className="grid md:grid-cols-2 gap-px bg-white/10 mt-16">
            {principles.map(([t, b], i) => (
              <div key={t} className="bg-black p-10 md:p-14">
                <div className="font-mono text-[11px] uppercase tracking-[0.22em] opacity-50">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="font-display uppercase text-3xl md:text-4xl mt-6">{t}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 border-t border-white/10">
        <div className="max-w-[1500px] mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5">
            <div className="eyebrow">03 / The Roster</div>
            <h2 className="mt-6 font-display uppercase text-5xl md:text-6xl leading-[0.95]">
              People<br /><span className="font-serif-italic normal-case opacity-70">behind it.</span>
            </h2>
            <p className="mt-8 text-white/70 leading-relaxed max-w-md">
              A federation of the best independent shops in British motorsport
              engineering — coordinated, not subcontracted.
            </p>
          </div>
          <div className="md:col-span-7 border-t border-white/10">
            {team.map(([role, name]) => (
              <div key={role} className="flex items-baseline justify-between gap-6 py-6 border-b border-white/10">
                <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/50">{role}</div>
                <div className="font-display uppercase text-2xl md:text-3xl tracking-tight">{name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="paper py-24 md:py-32">
        <div className="max-w-[1500px] mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7">
            <img src={design} alt="Design" className="w-full grayscale aspect-[4/3] object-cover" />
          </div>
          <div className="md:col-span-5">
            <div className="flex items-center gap-4 font-mono text-[0.7rem] tracking-[0.22em] uppercase text-black/50">
              <span>04</span><span className="h-px w-10 bg-black/30" /><span>Vision</span>
            </div>
            <h2 className="font-display text-5xl md:text-6xl uppercase leading-[0.95] mt-8">
              Not a brand.<br />
              <span className="font-serif-italic normal-case opacity-70">A programme.</span>
            </h2>
            <p className="mt-8 text-black/70 leading-relaxed">
              When this car is finished, Vision148 closes. There is no Vision149.
              The studio exists to deliver one object — exceptionally — and then go quiet.
            </p>
          </div>
        </div>
      </section>

      <CrossLink to="/contact" eyebrow="Next" title="Contact the studio →" />
      <Footer />
    </main>
  );
}
