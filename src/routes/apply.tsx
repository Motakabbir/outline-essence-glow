import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/Primitives";

export const Route = createFileRoute("/apply")({
  head: () => ({
    meta: [
      { title: "Apply — Vision148" },
      { name: "description", content: "Register interest in the Vision148 syndicate. Twenty-five seats. One car." },
      { property: "og:title", content: "Apply — Vision148" },
      { property: "og:description", content: "Register interest in the Vision148 syndicate." },
    ],
  }),
  component: ApplyPage,
});

function ApplyPage() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <main className="bg-background text-foreground min-h-screen">
      <Nav />
      <PageHero
        eyebrow="05 / Apply"
        title="Take a seat"
        italic="in history."
        intro="Syndicate places are limited and reviewed individually. Share a few details and the Vision148 team will be in touch with the full prospectus."
      />

      <section className="py-20 md:py-28">
        <div className="max-w-[1500px] mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-12">
          <aside className="md:col-span-4 space-y-10">
            <div>
              <div className="eyebrow">Seats</div>
              <div className="font-display text-6xl mt-4">25</div>
              <div className="text-white/55 text-sm mt-2">Phase II — open</div>
            </div>
            <div>
              <div className="eyebrow">Contact</div>
              <a href="mailto:hello@vision148.com" className="block mt-4 link-underline font-display text-2xl">
                hello@vision148.com
              </a>
              <div className="text-white/55 text-sm mt-2">Coventry · Silverstone · London</div>
            </div>
            <div>
              <div className="eyebrow">Confidentiality</div>
              <p className="mt-4 text-sm text-white/60 leading-relaxed max-w-sm">
                All interest is treated in confidence. Prospectus released on request,
                under NDA where appropriate.
              </p>
            </div>
          </aside>

          <div className="md:col-span-8">
            {submitted ? (
              <div className="border border-white/15 p-10 md:p-16 text-center">
                <div className="eyebrow">Received</div>
                <h3 className="font-display uppercase text-4xl md:text-5xl mt-6">
                  Thank you.
                </h3>
                <p className="mt-6 text-white/65 max-w-md mx-auto">
                  A member of the Vision148 team will be in touch within five working days
                  with the full prospectus.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-10"
              >
                {[
                  { id: "name", label: "Full name", type: "text", required: true },
                  { id: "email", label: "Email address", type: "email", required: true },
                  { id: "phone", label: "Phone (optional)", type: "tel", required: false },
                  { id: "intro", label: "How did you hear of Vision148?", type: "text", required: false },
                ].map((f) => (
                  <div key={f.id} className="border-b border-white/20 pb-4 focus-within:border-white transition-colors">
                    <label htmlFor={f.id} className="block eyebrow mb-3">{f.label}</label>
                    <input
                      id={f.id}
                      type={f.type}
                      required={f.required}
                      className="w-full bg-transparent text-xl md:text-2xl font-display tracking-tight placeholder:opacity-30 outline-none"
                      placeholder="—"
                    />
                  </div>
                ))}
                <div className="border-b border-white/20 pb-4 focus-within:border-white transition-colors">
                  <label htmlFor="message" className="block eyebrow mb-3">Notes (optional)</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full bg-transparent text-lg leading-relaxed placeholder:opacity-30 outline-none resize-none"
                    placeholder="Anything we should know"
                  />
                </div>
                <div className="flex flex-wrap items-center gap-6 pt-4">
                  <button
                    type="submit"
                    className="group inline-flex items-center gap-3 bg-white text-black px-8 py-4 text-[11px] font-mono uppercase tracking-[0.24em] hover:bg-white/85 transition"
                  >
                    Register Interest
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </button>
                  <p className="text-[11px] font-mono uppercase tracking-[0.22em] text-white/40">
                    We will respond within five working days
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
