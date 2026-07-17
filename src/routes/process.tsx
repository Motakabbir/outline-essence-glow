import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { PageHero, SectionLabel, CrossLink } from "@/components/site/Primitives";
import engine from "@/assets/Vision_To_the_road .jpg";
import design from "@/assets/Bare_Shell_Disamantling.jpg";
import processVideo from "@/assets/video/process.mp4";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "The Process — Vision148" },
      { name: "description", content: "Three phases. Eighteen months. From archaeological dismantle to the first drive." },
      { property: "og:title", content: "The Process — Vision148" },
      { property: "og:description", content: "Three phases. Eighteen months. The Vision148 build process." },
    ],
  }),
  component: ProcessPage,
});

const phases = [
  {
    n: "Phase I",
    status: "Complete",
    title: "Dismantle & Scan",
    body: "Donor car fully dismantled by classic-RS specialists. Every part catalogued, photographed, and scanned. A complete 3D digital twin created with T3DMC.",
    deliverables: ["Build ledger", "Component archive", "Digital twin v1"],
  },
  {
    n: "Phase II",
    status: "In progress",
    title: "Baseline & Design",
    body: "Chassis aligned and prepared by Coventry Metalcraft. Composite tooling, CAD surfacing, aero simulation. Engine rebuild commences at Mahle.",
    deliverables: ["Surfacing CAD", "Aero CFD package", "Tooling production"],
  },
  {
    n: "Phase III",
    status: "Upcoming",
    title: "Assembly & Drive",
    body: "Final assembly at the Digital Manufacturing Centre, Silverstone. Trim, electronics, calibration. First drive. Hand-over to the syndicate.",
    deliverables: ["Final assembly", "Shake-down testing", "Hand-over event"],
  },
];

function ProcessPage() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <Nav />
      <PageHero
        eyebrow="02 / The Process"
        title="FROM MODELLING"
        italic="to road."
        intro="A process of design iteration and modelling to define the design language needed to make the car unique yet respectful to this icons DNA."
        video={processVideo}
      />

      <section className="py-24 md:py-32">
        <div className="max-w-[1500px] mx-auto px-6 md:px-10">
          <div className="relative">
            <div className="absolute top-3 left-0 right-0 h-px bg-white/15 hidden md:block" />
            <div className="grid md:grid-cols-3 gap-12">
              {phases.map((p) => (
                <div key={p.n} className="relative md:pt-10">
                  <div className="hidden md:block absolute top-0 left-0 w-2 h-2 rounded-full bg-white" />
                  <div className="flex justify-between items-baseline">
                    <div className="font-mono text-xs uppercase tracking-[0.25em]">{p.n}</div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
                      {p.status}
                    </div>
                  </div>
                  <h3 className="font-display text-3xl md:text-4xl uppercase mt-6">{p.title}</h3>
                  <p className="mt-4 text-white/60 text-sm leading-relaxed">{p.body}</p>
                  <ul className="mt-6 space-y-2">
                    {p.deliverables.map((d) => (
                      <li key={d} className="flex items-center gap-3 text-[11px] font-mono uppercase tracking-[0.2em] text-white/55">
                        <span className="h-px w-4 bg-white/30" />{d}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="paper">
        <div className="max-w-[1500px] mx-auto px-6 md:px-10 py-24 md:py-32 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-4 font-mono text-[0.7rem] tracking-[0.22em] uppercase text-black/50">
              <span>03</span><span className="h-px w-10 bg-black/30" /><span>Methodology</span>
            </div>
            <h2 className="font-display text-5xl md:text-6xl uppercase leading-[0.95] mt-8">
              Built with<br />
              <span className="font-serif-italic normal-case opacity-70">discipline.</span>
            </h2>
          </div>
          <div className="md:col-span-7">
            <ol className="space-y-8">
              {[
                ["Catalogue", "Every component photographed, weighed, scanned and assigned a unique identifier."],
                ["Decide", "Restore, replace or remanufacture — assessed by an independent technical committee."],
                ["Document", "Decisions written into the build ledger and shared quarterly with custodians."],
                ["Drive", "The finished car is tested, validated and handed over with a full provenance dossier."],
              ].map(([t, b], i) => (
                <li key={t} className="flex gap-6 border-t border-black/15 pt-6">
                  <span className="font-mono text-xs tracking-[0.2em] opacity-50 mt-1 w-10">0{i + 1}</span>
                  <div>
                    <div className="font-display uppercase text-2xl tracking-tight">{t}</div>
                    <div className="text-sm text-black/65 mt-2 max-w-md">{b}</div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 border-t border-white/10">
        <div className="max-w-[1500px] mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-6">
          <img src={design} alt="CAD" className="w-full grayscale aspect-[4/3] object-cover" />
          <img src={engine} alt="Engine" className="w-full grayscale aspect-[4/3] object-cover" />
        </div>
      </section>

      <CrossLink to="/partners" eyebrow="Next" title="The Partners →" />
      <Footer />
    </main>
  );
}
