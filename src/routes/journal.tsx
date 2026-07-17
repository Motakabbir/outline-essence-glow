import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { PageHero, CrossLink } from "@/components/site/Primitives";
import workshop from "@/assets/workshop.jpg";
import engine from "@/assets/engine.jpg";
import design from "@/assets/design.jpg";
import experience from "@/assets/experience.jpg";
import theCar from "@/assets/the-car.jpg";

export const Route = createFileRoute("/journal")({
  head: () => ({
    meta: [
      { title: "Journal — Vision148" },
      { name: "description", content: "Build notes, partner profiles and dispatches from the Vision148 studio." },
      { property: "og:title", content: "Journal — Vision148" },
      { property: "og:description", content: "Dispatches from the build floor." },
    ],
  }),
  component: JournalPage,
});

const posts = [
  { date: "May 2026", category: "Build Note", title: "Bare shell, photographed in seventeen ways.", excerpt: "After eight weeks of media blasting and chemical stripping, the donor RS500 returned this week as a pure metal object.", img: workshop },
  { date: "Apr 2026", category: "Partner", title: "Inside Mahle Powertrain — the YBD block, reborn.", excerpt: "A morning with the engineering team responsible for casting, machining and balancing the new bottom end.", img: engine },
  { date: "Mar 2026", category: "Digital Twin", title: "Why we model every component before we touch it.", excerpt: "The case for slow design: a tour through the in-browser digital twin and what each custodian can do with it.", img: design },
  { date: "Feb 2026", category: "Dispatch", title: "A first dinner with the syndicate.", excerpt: "Twelve custodians, three engineers, one long table at the Coventry studio.", img: experience },
  { date: "Jan 2026", category: "Provenance", title: "The donor: chain of custody, 1987 to today.", excerpt: "Four owners, two countries, one extraordinary file of documentation.", img: theCar },
];

function JournalPage() {
  const [lead, ...rest] = posts;
  return (
    <main className="bg-background text-foreground min-h-screen">
      <Nav />
      <PageHero
        eyebrow="08 / Journal"
        title="Dispatches"
        italic="from the floor."
        intro="A curated in-depth record from acquisition to completion of #148 RS500. This will be a unique insight into the artisan skills of coach building to the bleeding edge additive manufacturing usually reserved for the word of hypercar and motorsport."
      />

      <section className="py-20 md:py-28 border-b border-white/10">
        <div className="max-w-[1500px] mx-auto px-6 md:px-10">
          <Link to="/journal" className="group grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-7 overflow-hidden">
              <img
                src={lead.img}
                alt={lead.title}
                className="w-full aspect-[16/10] object-cover grayscale transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
            <div className="md:col-span-5">
              <div className="flex items-center gap-4 font-mono text-[10px] tracking-[0.24em] uppercase text-white/50">
                <span>{lead.date}</span><span className="h-px w-8 bg-white/30" /><span>{lead.category}</span>
              </div>
              <h2 className="mt-6 font-display uppercase text-4xl md:text-6xl leading-[0.95]">
                {lead.title}
              </h2>
              <p className="mt-6 text-white/70 leading-relaxed max-w-md">{lead.excerpt}</p>
              <div className="mt-8 text-xs font-mono uppercase tracking-[0.24em] link-underline inline-block">
                Read the entry →
              </div>
            </div>
          </Link>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="max-w-[1500px] mx-auto px-6 md:px-10">
          <div className="eyebrow mb-12">Archive</div>
          <div className="grid md:grid-cols-2 gap-px bg-white/10">
            {rest.map((p) => (
              <Link
                to="/journal"
                key={p.title}
                className="group bg-black p-8 md:p-10 hover:bg-white hover:text-black transition-colors duration-500"
              >
                <div className="overflow-hidden">
                  <img src={p.img} alt={p.title} className="w-full aspect-[16/10] object-cover grayscale group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="mt-6 flex items-center gap-4 font-mono text-[10px] tracking-[0.24em] uppercase opacity-60">
                  <span>{p.date}</span><span>·</span><span>{p.category}</span>
                </div>
                <div className="mt-3 font-display uppercase text-2xl md:text-3xl leading-tight">
                  {p.title}
                </div>
                <div className="mt-4 text-sm opacity-70 leading-relaxed">{p.excerpt}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CrossLink to="/about" eyebrow="Behind it" title="About the studio →" />
      <Footer />
    </main>
  );
}
