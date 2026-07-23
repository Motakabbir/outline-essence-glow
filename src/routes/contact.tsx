import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { PageHero, CrossLink } from "@/components/site/Primitives";
import videoBg from "@/assets/video/journal.mp4";
import { fetchSeoMetadata, mapSeoToMeta, sendContactForm } from "@/lib/api";

export const Route = createFileRoute("/contact")({
  loader: async () => {
    const seo = await fetchSeoMetadata("contact", {
      title: "Contact — Vision148",
      description: "Speak with the Vision148 studio about the RS500 Genesis Build, partnerships, or press.",
      og_title: "Contact — Vision148",
      og_description: "Reach the Vision148 studio directly.",
    });
    return { seo };
  },
  head: ({ loaderData }) => ({
    meta: mapSeoToMeta(loaderData?.seo || {
      title: "Contact — Vision148",
      description: "Speak with the Vision148 studio about the RS500 Genesis Build, partnerships, or press.",
      og_title: "Contact — Vision148",
      og_description: "Reach the Vision148 studio directly.",
    }),
  }),
  component: ContactPage,
});

const submitContactForm = createServerFn({ method: "POST" })
  .inputValidator(
    z.object({
      first_name: z.string(),
      last_name: z.string(),
      email: z.string().email(),
      phone: z.string(),
      message: z.string(),
    })
  )
  .handler(async ({ data }) => {
    console.info("Server received contact submission:", data);
    return await sendContactForm(data);
  });

const channels = [
  ["Custodianship", "syndicate@vision148.com", "For seat enquiries and applications."],
  ["Partnerships", "studio@vision148.com", "Suppliers, collaborators and patrons."],
  ["Press", "press@vision148.com", "Editorial, features and image requests."],
];

const locations = [
  ["Studio", "Coventry, UK", "By appointment only."],
  ["Engineering", "Silverstone, UK", "ASM Performance facility."],
  ["Office", "London, UK", "Mayfair — by introduction."],
];

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <main className="bg-background text-foreground min-h-screen">
      <Nav />
      <PageHero
        eyebrow="06 / Contact"
        title="Get in"
        italic="touch."
        intro="The studio answers personally. Most messages receive a reply within two working days."
        video={videoBg}
      />

      <section className="py-24 md:py-32">
        <div className="max-w-[1500px] mx-auto px-6 md:px-10 grid md:grid-cols-3 gap-px bg-white/10">
          {channels.map(([t, email, b]) => (
            <a
              key={email}
              href={`mailto:${email}`}
              className="bg-black p-10 md:p-12 group hover:bg-white hover:text-black transition-colors duration-500"
            >
              <div className="font-mono text-[11px] uppercase tracking-[0.22em] opacity-50">{t}</div>
              <div className="font-display uppercase text-2xl md:text-3xl mt-6 break-words">{email}</div>
              <div className="mt-4 text-sm opacity-70 leading-relaxed">{b}</div>
              <div className="mt-8 text-xs font-mono uppercase tracking-[0.24em] opacity-60 group-hover:opacity-100">Write →</div>
            </a>
          ))}
        </div>
      </section>

      <section className="paper py-24 md:py-32">
        <div className="max-w-[1500px] mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-4 font-mono text-[0.7rem] tracking-[0.22em] uppercase text-black/50">
              <span>02</span><span className="h-px w-10 bg-black/30" /><span>Send a note</span>
            </div>
            <h2 className="font-display text-5xl md:text-6xl uppercase leading-[0.95] mt-8 text-black">
              Or write<br />
              <span className="font-serif-italic normal-case opacity-70">to us here.</span>
            </h2>
            <p className="mt-8 text-black/70 leading-relaxed max-w-md">
              A short message is fine. Tell us who you are and what you'd like to discuss.
            </p>
          </div>
          <div className="md:col-span-7">
            {sent ? (
              <div className="border border-black/20 p-12 text-black">
                <div className="font-mono text-[11px] uppercase tracking-[0.22em] opacity-60">Received</div>
                <div className="mt-4 font-display uppercase text-3xl">Thank you.</div>
                <p className="mt-4 text-black/70">We'll be in touch shortly.</p>
              </div>
            ) : (
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  const data = {
                    first_name: formData.get("first_name") as string,
                    last_name: formData.get("last_name") as string,
                    email: formData.get("email") as string,
                    phone: formData.get("phone") as string,
                    message: formData.get("message") as string,
                  };
                  try {
                    const res = await sendContactForm(data);
                    if (res.success) {
                      setSent(true);
                    } else {
                      console.error("Failed to submit form:", res.message);
                    }
                  } catch (err) {
                    console.error("Failed to submit form:", err);
                  }
                }}
                className="space-y-6 text-black"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <Field label="First Name" name="first_name" />
                  <Field label="Last Name" name="last_name" />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <Field label="Email" name="email" type="email" />
                  <Field label="Phone" name="phone" type="tel" />
                </div>
                <Field label="Message" name="message" textarea />
                <button
                  type="submit"
                  className="inline-flex items-center gap-3 px-7 py-4 text-[11px] font-mono tracking-[0.24em] uppercase bg-black text-white hover:bg-black/85 transition-colors"
                >
                  Send message <span>→</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 border-t border-white/10">
        <div className="max-w-[1500px] mx-auto px-6 md:px-10">
          <div className="eyebrow">03 / Locations</div>
          <div className="grid md:grid-cols-3 gap-px bg-white/10 mt-12">
            {locations.map(([t, place, note]) => (
              <div key={t} className="bg-black p-10 md:p-12">
                <div className="font-mono text-[11px] uppercase tracking-[0.22em] opacity-50">{t}</div>
                <div className="font-display uppercase text-3xl mt-6">{place}</div>
                <div className="mt-4 text-sm opacity-60">{note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CrossLink to="/faq" eyebrow="Next" title="Frequently asked →" />
      <Footer />
    </main>
  );
}

function Field({
  label, name, type = "text", textarea = false,
}: { label: string; name: string; type?: string; textarea?: boolean }) {
  const cls =
    "w-full bg-transparent border-b border-black/30 focus:border-black outline-none py-3 text-base placeholder:text-black/30";
  return (
    <label className="block">
      <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-black/50">{label}</span>
      {textarea ? (
        <textarea name={name} required rows={5} className={`${cls} mt-2 resize-none`} />
      ) : (
        <input name={name} type={type} required className={`${cls} mt-2`} />
      )}
    </label>
  );
}
