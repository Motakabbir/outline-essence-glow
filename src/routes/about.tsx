import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { PageHero, CrossLink } from "@/components/site/Primitives";
import workshop from "@/assets/workshop.jpg";
import design from "@/assets/design.jpg";
import ianHoweImg from "@/assets/team/Ian-Howe.png";
import stuartPeachImg from "@/assets/team/Stuart-Peach.png";
import alYasidImg from "@/assets/team/Al-Yasid.png";
import simonKwImg from "@/assets/team/Simon-Kw.png";
import brendanImg from "@/assets/team/Brendan.png";
import kieronImg from "@/assets/team/KIERON_SALTER.png";

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
  {
    role: "Ian Howe FOUNDER & BUILD DIRECTOR 30 years experience in automotive & fintech Business",
    name: "Ian Howe",
    image: ianHoweImg
  },
  {
    role: "Stuart Peach PROJECT CO FOUNDER Partner in the vision148 project and original custodian of #148",
    name: "Stuart Peach",
    image: stuartPeachImg
  },
  {
    role: "Al Yasid Oozeear DIGITAL VISUALISOR & DESIGNER Independent Automotive designer specialising in bespoke car design",
    name: "Al Yasid Oozeear",
    image: alYasidImg
  },
  {
    role: "Simon Kiero Watson COMMERCIAL & FINANCE OVERSIGHT Highly experiencedCorporate Finance and Exchange Expert.",
    name: "Simon Kiero Watson",
    image: simonKwImg
  },
  {
    role: "Brendan OToole CEO of Coventry Metalcraft Ltd.",
    name: "Brendan OToole",
    image: brendanImg
  },
  {
    role: "Kieron Salter CEO Digital Manufacturing Centre Ltd (DMC) Silverstone",
    name: "Kieron Salter",
    image: kieronImg
  },
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
              STARTED WITH A PASSION<br />
              <span className="font-serif-italic normal-case opacity-70">to reimagine</span>
            </h2>
            <p className="mt-8 text-black/70 leading-relaxed">
              The origin story of the Vision148 is inspired through exposure to some of the leading figures in UK automotive and motorsport  and a collective passion to identify icons of the road and deploy artisan and bleeding edge technology manufacturing and materials into a unique showpiece.
            </p>
            <p className="mt-6 text-black/70 leading-relaxed">
              The mission has never been to recreate the RS500. It's to imagine what it would have become if its bloodline had continued uninterrupted into 2026. With Al Yasid's vision blending heritage with modern design language, creating a silhouette that feels both inevitable and completely new. This is how legends evolve
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
          <div className="md:col-span-5 sticky top-32">
            <div className="eyebrow">03 / The Roster</div>
            <h2 className="mt-6 font-display uppercase text-5xl md:text-6xl leading-[0.95]">
              People<br /><span className="font-serif-italic normal-case opacity-70">behind it.</span>
            </h2>
            <p className="mt-8 text-white/70 leading-relaxed max-w-md">
              The primary architects of the Vision148 project have been supported by unique collaborations from automotive and Motorsport with a singular mission to deliver and showcase the very best in coach building and bleeding edge technology manufacturing.
            </p>
          </div>
          <div className="md:col-span-7 border-t border-white/10 mt-12 md:mt-0">
            {team.map(({ role, name, image }) => (
              <div key={name} className="group flex flex-col md:flex-row items-start md:items-center justify-between gap-8 py-6 md:py-8 border-b border-white/10 hover:bg-white/5 transition-colors cursor-default md:-mx-6 md:px-6 rounded-2xl">
                <div className="font-mono text-xs md:text-sm uppercase tracking-widest text-white/70 group-hover:text-white transition-colors md:w-2/3 leading-loose pr-8">
                  {role.startsWith(name) ? (
                    <>
                      <span className="bg-white text-black font-semibold px-2 py-0.5 mr-2">{name}</span>
                      {role.slice(name.length).trim()}
                    </>
                  ) : (
                    role
                  )}
                </div>
                <div className="flex items-center justify-start md:justify-end md:w-1/3 w-full">
                  <img
                    src={image}
                    alt={name}
                    className="w-20 h-20 md:w-28 md:h-28 shrink-0 object-cover rounded-full grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105 border border-white/10"
                  />
                </div>
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
              <span className="font-serif-italic normal-case opacity-70">An experience</span>
            </h2>
            <p className="mt-8 text-black/70 leading-relaxed">
              But, the true benefactors of this project will be a limited few who will be have the unique privilege of experiencing driving the completed car through an unique syndicate of individuals.   
            </p>
          </div>
        </div>
      </section>

      <CrossLink to="/contact" eyebrow="Next" title="Contact the studio →" />
      <Footer />
    </main>
  );
}
