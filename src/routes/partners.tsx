import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { PageHero, CrossLink } from "@/components/site/Primitives";
import partnerVideo from "@/assets/video/partner.mp4";

import { fetchSeoMetadata, mapSeoToMeta, fetchPartners } from "@/lib/api";

const partners = [
  { name: "DMC", role: "Digital Manufacturing", body: "The Digital Manufacturing Centre at Silverstone — host facility for final assembly and additive manufacture." },
  { name: "Mahle", role: "Engine Engineering", body: "Engine rebuild and validation. Motorsport-grade tolerances. UK engine programme." },
  { name: "Coventry Metalcraft", role: "Coachbuilding", body: "Hand-formed steel and aluminium panel work. Heritage techniques, modern measurement." },
  { name: "T3DMC", role: "Scanning & Twin", body: "Component-level 3D scanning and the live digital twin of the entire build." },
  { name: "ASM AUTORECYCLING ", role: "Dismantling specialists", body: "RS500 #148 dismantle and part catalogue and storage" },
  { name: "BAMD", role: "Composite specialists", body: "Composite partner for trim and interior" },
  { name: "Cornerstone", role: "non-structural repair specialists", body: "Glass removal and specialist repairs" },
  { name: "HGL", role: "Membership Program", body: "Technology providers for the project companion membership platform, Autovision.club" },
];

export const Route = createFileRoute("/partners")({
  loader: async () => {
    const seoPromise = fetchSeoMetadata("partners", {
      title: "Partners — Vision148",
      description: "A curated consortium — DMC, Mahle, Coventry Metalcraft, T3DMC, ASM, BAMD.",
      og_title: "Partners — Vision148",
      og_description: "A curated consortium of motorsport and manufacturing partners.",
    });
    const partnersPromise = fetchPartners(partners);

    const [seo, dynamicPartners] = await Promise.all([seoPromise, partnersPromise]);
    return { seo, partners: dynamicPartners };
  },
  head: ({ loaderData }) => ({
    meta: mapSeoToMeta(loaderData?.seo || {
      title: "Partners — Vision148",
      description: "A curated consortium — DMC, Mahle, Coventry Metalcraft, T3DMC, ASM, BAMD.",
      og_title: "Partners — Vision148",
      og_description: "A curated consortium of motorsport and manufacturing partners.",
    }),
  }),
  component: PartnersPage,
});

function PartnersPage() {
  const { partners: dynamicPartners } = Route.useLoaderData();
  return (
    <main className="bg-background text-foreground min-h-screen">
      <Nav />
      <PageHero
        eyebrow="03 / Partners"
        title="A curated"
        italic="consortium."
        intro="Each partner is best-in-class — additive manufacturing, coachbuilding, composites, engine engineering. Selected to elevate the technical and commercial credibility of a one-of-one, investment-grade build."
        video={partnerVideo}
      />

      <section className="py-20 md:py-28">
        <div className="max-w-[1500px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 border-t border-l border-white/15">
            {dynamicPartners.map((p, i) => (
              <div
                key={p.name}
                className={`border-b border-r border-white/15 aspect-[3/1] flex items-center justify-center px-4 group transition-colors hover:bg-white hover:text-black reveal stagger-${(i % 4) + 1}`}
              >
                <span className="font-display uppercase tracking-[0.18em] text-lg md:text-xl text-center">
                  {p.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="paper">
        <div className="max-w-[1500px] mx-auto px-6 md:px-10 py-24 md:py-32">
          <div className="flex items-center gap-4 font-mono text-[0.7rem] tracking-[0.22em] uppercase text-black/50">
            <span>04</span><span className="h-px w-10 bg-black/30" /><span>Roster</span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl uppercase leading-[0.95] mt-8 max-w-3xl">
            Named hands. <span className="font-serif-italic normal-case opacity-70">Named houses.</span>
          </h2>
          <div className="mt-16 divide-y divide-black/15 border-y border-black/15">
            {dynamicPartners.map((p, i) => (
              <div key={p.name} className={`grid md:grid-cols-12 gap-6 py-10 group reveal stagger-${(i % 4) + 1}`}>
                <div className="md:col-span-1 font-mono text-[11px] uppercase tracking-[0.22em] opacity-50">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="md:col-span-4 font-display uppercase text-3xl md:text-4xl tracking-tight">{p.name}</div>
                <div className="md:col-span-3 font-mono text-[11px] uppercase tracking-[0.22em] opacity-60">{p.role}</div>
                <div className="md:col-span-4 text-sm text-black/70 leading-relaxed">{p.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CrossLink to="/experience" eyebrow="Next" title="The Experience →" />
      <Footer />
    </main>
  );
}
