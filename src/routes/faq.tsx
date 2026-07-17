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
      ["How many seats are available?", "Twenty-five. When they're gone, the syndicate closes. There is no waitlist beyond the first round."],
      ["Is this a fractional ownership scheme?", "No. Custodians do not own the car. They fund and accompany its build, and share scheduled access to the finished object."],
      ["What is the duration of the programme?", "Approximately three years from kickoff to handover, with a five-year custodianship period after completion."],
    ],
  },
  {
    title: "The Car",
    items: [
      ["Is the donor shell genuine?", "Yes. A matching-numbers RS500 shell, fully documented, acquired in 2023. Provenance is published to custodians."],
      ["What is being changed?", "Nothing visible. Beneath the skin: modern metallurgy, refreshed electronics, and a Mahle-built powertrain to original spec."],
      ["Will it be road-legal?", "Yes. UK registered, MOT-exempt as a historic vehicle, fully usable on public roads."],
    ],
  },
  {
    title: "Custodianship",
    items: [
      ["What do custodians actually get?", "Studio access during build, quarterly digital-twin updates, private drives, exhibitions, dinners, and a place in the provenance ledger of the finished car."],
      ["Can I drive the car?", "Yes. Scheduled drive days are part of the programme — track and road, in the UK and Europe."],
      ["What happens after five years?", "The car enters its long-term custodianship phase. The original twenty-five retain first right of access in perpetuity."],
    ],
  },
  {
    title: "Application",
    items: [
      ["How do I apply?", "Submit an enquiry through the Apply page. We respond personally within two working days."],
      ["Is there a selection process?", "Yes. The studio meets every prospective custodian before a seat is offered. Fit matters as much as funding."],
      ["What are the costs?", "Disclosed in the prospectus, on request, after an initial conversation."],
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
