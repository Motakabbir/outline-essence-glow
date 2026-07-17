import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { PageHero, PillLink, SectionLabel, CrossLink } from "@/components/site/Primitives";
import workshop from "@/assets/workshop.jpg";
import engine from "@/assets/ENGINE.png";
import theCar from "@/assets/the-car.jpg";
import design from "@/assets/design.jpg";
import videoBg from "@/assets/video/process.mp4";

export const Route = createFileRoute("/the-car")({
  head: () => ({
    meta: [
      { title: "The Car — Vision148 RS500" },
      { name: "description", content: "Car #148 of 500 RS500 Cosworths — reborn through digital manufacturing and motorsport-grade engineering." },
      { property: "og:title", content: "The Car — Vision148 RS500" },
      { property: "og:description", content: "Car #148 of 500 RS500 Cosworths — reborn through digital manufacturing." },
    ],
  }),
  component: TheCarPage,
});

const specs: [string, string][] = [
  ["Chassis", "#148 of 500 — original RS500 Cosworth"],
  ["Engine", "Cosworth YB, rebuilt by Mahle"],
  ["Body", "Blended steel & aluminium coachwork"],
  ["Interior", "3D-printed dashboard, bespoke trim"],
  ["Documentation", "Full digital twin · build ledger"],
  ["Custodians", "Syndicate of 25"],
];

function TheCarPage() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <Nav />
      <PageHero
        eyebrow="01 / The Car"
        title="Car №148."
        italic="Reborn."
        intro="Acquired in 2024 after fifteen years in storage. Dismantled with archaeological care, scanned, catalogued and reborn through additive manufacture, classic coachbuilding and motorsport-grade engineering."
        video={videoBg}
      />

      <section className="py-24 md:py-32">
        <div className="max-w-[1500px] mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-7 overflow-hidden">
            <img src={theCar} alt="Silver Ford Sierra RS500" className="w-full grayscale" />
          </div>
          <div className="md:col-span-5 md:pt-6">
            <SectionLabel n="02" title="THE VISION" />
            <h2 className="font-display text-4xl md:text-5xl uppercase leading-[0.95] mt-8">
              A documented<br />
              <span className="font-serif-italic normal-case opacity-70">lineage.</span>
            </h2>
            <p className="mt-8 text-white/70 leading-relaxed">
              The greatest cars are never designed by committee. They begin with one vision, one pencil, and the courage to challenge convention. Vision148 RS500 is our modern interpretation of that philosophy, inspired by Al Yasid's unmistakable design language and the legendary houses of Pininfarina, Bertone and Zagato. This isn't retro. It's the next chapter.
            </p>
            <p className="mt-4 text-white/55 text-sm leading-relaxed">
              Working alongside Al Yasid, we're developing Vision148 RS500 with the same philosophy that made the world's greatest coach builders legendary.
            </p>
          </div>
        </div>
      </section>

      <section className="paper">
        <div className="max-w-[1500px] mx-auto px-6 md:px-10 py-24 md:py-32">
          <div className="flex items-center gap-4 font-mono text-[0.7rem] tracking-[0.22em] uppercase text-black/50">
            <span>03</span><span className="h-px w-10 bg-black/30" /><span>Specification</span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl uppercase leading-[0.95] mt-8">
            Built like<br />
            <span className="font-serif-italic normal-case opacity-70">a monograph.</span>
          </h2>
          <div className="mt-16 grid md:grid-cols-2 gap-x-16">
            {specs.map(([k, v], i) => (
              <div key={k} className={`flex justify-between gap-6 py-6 border-t border-black/15 ${i === specs.length - 1 || i === specs.length - 2 ? "md:border-b" : ""}`}>
                <div className="font-mono text-[11px] uppercase tracking-[0.22em] opacity-60">{k}</div>
                <div className="font-display uppercase text-lg md:text-xl text-right">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 border-t border-white/10">
        <div className="max-w-[1500px] mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5">
            <SectionLabel n="04" title="Engine" />
            <h2 className="font-display text-4xl md:text-5xl uppercase leading-[0.95] mt-8">
              Cosworth <span className="font-serif-italic normal-case opacity-70">YB,</span><br />
              by Mahle.
            </h2>
            <p className="mt-8 text-white/70 leading-relaxed">
              Stripped to bare castings. Re-machined. Re-balanced. Reassembled to
              motorsport tolerance by Mahle's UK engine programme.
            </p>
          </div>
          <div className="md:col-span-7 overflow-hidden">
            <img src={engine} alt="Engine" className="w-full grayscale aspect-[4/3] object-cover" />
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 border-t border-white/10">
        <div className="max-w-[1500px] mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 overflow-hidden order-2 md:order-1">
            <img src={workshop} alt="Workshop" className="w-full grayscale aspect-[4/3] object-cover" />
          </div>
          <div className="md:col-span-5 order-1 md:order-2">
            <SectionLabel n="05" title="Coachwork" />
            <h2 className="font-display text-4xl md:text-5xl uppercase leading-[0.95] mt-8">
              COACH BUILT<br />
              <span className="font-serif-italic normal-case opacity-70">Alluminium.</span>
            </h2>
            <p className="mt-8 text-white/70 leading-relaxed">
              Unique tooling & coach built aluminium body panels by Coventry Metalcraft complemented by composite aero parts by BAMD and 3D printed interior dashboard and switchgear by DMC, Silverstone.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <PillLink to="/process" variant="ghost">The Process</PillLink>
              <PillLink to="/apply">Apply</PillLink>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 border-t border-white/10">
        <div className="max-w-[1500px] mx-auto px-6 md:px-10">
          <img src={design} alt="CAD" className="w-full grayscale aspect-[21/9] object-cover" />
        </div>
      </section>

      <CrossLink to="/process" eyebrow="Next" title="The Process →" />
      <Footer />
    </main>
  );
}
