import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { PageHero, CrossLink } from "@/components/site/Primitives";
import experience from "@/assets/Hospitality.png";
import design from "@/assets/design.jpg";
import videoBg from "@/assets/video/partner.mp4";

import { fetchSeoMetadata, mapSeoToMeta } from "@/lib/api";

export const Route = createFileRoute("/experience")({
  loader: async () => {
    const seo = await fetchSeoMetadata("experience", {
      title: "The Experience — Vision148",
      description: "Private drives, studio visits, exhibitions and the quarterly digital twin.",
      og_title: "The Experience — Vision148",
      og_description: "Custodianship designed around the finished car.",
    });
    return { seo };
  },
  head: ({ loaderData }) => ({
    meta: mapSeoToMeta(loaderData?.seo || {
      title: "The Experience — Vision148",
      description: "Private drives, studio visits, exhibitions and the quarterly digital twin.",
      og_title: "The Experience — Vision148",
      og_description: "Custodianship designed around the finished car.",
    }),
  }),
  component: ExperiencePage,
});

const benefits = [
  ["Private Drives", "Track and road days at proving grounds and circuits across the UK and Europe."],
  ["Studio Visits", "Behind-the-scenes access at DMC, Mahle and Coventry Metalcraft."],
  ["Exhibitions", "Show appearances at curated automotive, art and design events."],
  ["Digital Twin", "Quarterly updates from the build, delivered in full 3D fidelity."],
  ["Custodianship Calendar", "Scheduled access to the finished car, by arrangement."],
  ["Members' Dinners", "Private hospitality alongside the build partners and engineering team."],
];

function ExperiencePage() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <Nav />
      <PageHero
        eyebrow="04 / The Experience"
        title="Ownership,"
        italic="reimagined."
        intro="Twenty-five custodians. One car. A year-round programme of access, hospitality and shared craftsmanship — engineered with the same care as the build itself."
        video={videoBg}
      />

      <section className="py-24 md:py-32">
        <div className="max-w-[1500px] mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-3 gap-px bg-white/10">
            {benefits.map(([t, b], i) => (
              <div
                key={t}
                className={`bg-black p-10 md:p-12 group hover:bg-white hover:text-black transition-colors duration-500 reveal stagger-${(i % 3) + 1}`}
              >
                <div className="font-mono text-[11px] uppercase tracking-[0.22em] opacity-50">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="font-display uppercase text-2xl md:text-3xl mt-6">{t}</div>
                <div className="mt-4 text-sm opacity-70 leading-relaxed">{b}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="paper">
        <div className="max-w-[1500px] mx-auto px-6 md:px-10 py-24 md:py-32 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5">
            <div className="flex items-center gap-4 font-mono text-[0.7rem] tracking-[0.22em] uppercase text-black/50">
              <span>02</span><span className="h-px w-10 bg-black/30" /><span>Hospitality</span>
            </div>
            <h2 className="font-display text-5xl md:text-6xl uppercase leading-[0.95] mt-8">
              Curated, not<br />
              <span className="font-serif-italic normal-case opacity-70">corporate.</span>
            </h2>
            <p className="mt-8 text-black/70 leading-relaxed max-w-xl">
              In conjunction with our partners TheCarCrowd each event will be shaped around the people in the syndicate, small numbers, intimate access, real workshops, No badges and no branding.
            </p>
          </div>
          <div className="md:col-span-7 overflow-hidden reveal aspect-[4/3] relative">
            <img src={experience} alt="Hospitality" className="w-full h-full grayscale object-cover zoom-hover" />
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 border-t border-white/10">
        <div className="max-w-[1500px] mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 overflow-hidden reveal aspect-[4/3] relative">
            <img src={design} alt="Digital twin" className="w-full h-full grayscale object-cover zoom-hover" />
          </div>
          <div className="md:col-span-5">
            <div className="eyebrow">03 / Digital Twin</div>
            <h2 className="font-display text-5xl md:text-6xl uppercase leading-[0.95] mt-8">
              Witness the<br />
              <span className="font-serif-italic normal-case opacity-70">build, live.</span>
            </h2>
            <p className="mt-8 text-white/70 leading-relaxed max-w-xl">
              A quarterly 3D update — explorable in browser. Every new component, every
              decision, every piece of provenance attached to its place on the car.
            </p>
          </div>
        </div>
      </section>

      <CrossLink to="/apply" eyebrow="Next" title="Apply for a seat →" />
      <Footer />
    </main>
  );
}
