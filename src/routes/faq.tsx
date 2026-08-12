import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { PageHero, CrossLink } from "@/components/site/Primitives";
import videoBg from "@/assets/video/chassis.mp4";
import { fetchSeoMetadata, mapSeoToMeta, fetchFaqs } from "@/lib/api";

const groups: { title: string; items: [string, string][] }[] = [
  {
    title: "The Programme",
    items: [
      ["How many seats are available?", "Limited 10 Founder Members for rotational use, however 20 associate Memberships available for experience days."],
      ["Is this a fractional ownership scheme?", "This is an Experiential scheme for a limited number of people to get access to a 1-of-1 asset for use and enjoyment."],
      ["What is the duration of the programme?", "The Syndicate will run for three years after the car is complete. "],
    ],
  },
  {
    title: "The Car",
    items: [
      ["Is the donor shell genuine?", "Yes. A matching-numbers RS500 shell, fully documented, acquired in 2023. This is number 148 of 500. Provenance is published to custodians."],
      ["What is being changed?", "The body will be coach built aluminium with modern underpinnings, so yes much will be changed."],
      ["Will it be road-legal?", "The completed car will be road legal and used by the Members."],
    ],
  },
  {
    title: "Custodianship",
    items: [
      ["What do custodians actually get?", "Founder Members will have access to the car for 16 days per year for three years, Associate Members will be invited to two experience track days per year. "],
      ["Can I drive the car?", "Yes , if you are a Founder Member"],
      ["What happens after three years?", "The Rs500 will be prepared to be sold."],
    ],
  },
  {
    title: "Application",
    items: [
      ["How do I apply?", "Apply via www.syndicatedrestomod.com "],
      ["Is there a selection process?", "First come first served limited to 10 Founder and 20 Associate Members."],
      ["What are the costs?", "Founder Members one off fee of £25,000 for Associate Members £5000 one off fee."],
    ],
  },
];

function groupFaqs(faqs: any[]) {
  const map: Record<string, [string, string][]> = {};
  for (const f of faqs) {
    const cat = f.categoryName || "General";
    if (!map[cat]) map[cat] = [];
    map[cat].push([f.title, f.description]);
  }
  return Object.entries(map).map(([title, items]) => ({
    title,
    items,
  }));
}

export const Route = createFileRoute("/faq")({
  loader: async () => {
    const seoPromise = fetchSeoMetadata("faq", {
      title: "FAQ — Vision148",
      description: "Answers about the Vision148 syndicate, the RS500 build, costs, timelines and custodianship.",
      og_title: "FAQ — Vision148",
      og_description: "Everything custodians ask, in one place.",
    });

    const fallbackFlat = groups.flatMap(g => 
      g.items.map(([q, a]) => ({
        title: q,
        description: a,
        categoryName: g.title,
      }))
    );
    const faqsPromise = fetchFaqs(fallbackFlat);

    const [seo, flatFaqs] = await Promise.all([seoPromise, faqsPromise]);
    const grouped = groupFaqs(flatFaqs);

    return { seo, groups: grouped };
  },
  head: ({ loaderData }) => ({
    meta: mapSeoToMeta(loaderData?.seo || {
      title: "FAQ — Vision148",
      description: "Answers about the Vision148 syndicate, the RS500 build, costs, timelines and custodianship.",
      og_title: "FAQ — Vision148",
      og_description: "Everything custodians ask, in one place.",
    }),
  }),
  component: FAQPage,
});
function FAQPage() {
  const { groups } = Route.useLoaderData();
  return (
    <main className="bg-background text-foreground min-h-screen">
      <Nav />
      <PageHero
        eyebrow="07 / FAQ"
        title="Questions,"
        italic="answered."
        intro="If something isn't covered here, the studio answers personally — write to us at hello@vision148.com."
        video={videoBg}
      />

      <section className="py-24 md:py-32">
        <div className="max-w-[1100px] mx-auto px-6 md:px-10 space-y-20">
          {groups.map((g, gi) => (
            <div key={g.title}>
              <div className="flex items-center gap-4 font-mono text-[0.7rem] tracking-[0.22em] uppercase text-white/50">
                <span>{String(gi + 1).padStart(2, "0")}</span>
                <span className="h-px w-10 bg-white/20" />
                <span>{g.title}</span>
              </div>
              <div className="mt-8 border-t border-white/15">
                {g.items.map(([q, a]) => (
                  <FAQItem key={q} q={q} a={a} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CrossLink to="/apply" eyebrow="Ready?" title="Apply for a seat →" />
      <Footer />
    </main>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <button
      onClick={() => setOpen((v) => !v)}
      className="w-full text-left border-b border-white/15 py-8 group block"
    >
      <div className="flex items-baseline justify-between gap-6">
        <div className="font-display uppercase text-2xl md:text-3xl tracking-tight group-hover:opacity-70 transition-opacity">
          {q}
        </div>
        <div className={`font-mono text-2xl transition-transform duration-300 ${open ? "rotate-45" : ""}`}>+</div>
      </div>
      <div
        className={`overflow-hidden transition-all duration-500 ${open ? "max-h-96 mt-6 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <p className="text-white/70 leading-relaxed max-w-2xl">{a}</p>
      </div>
    </button>
  );
}
