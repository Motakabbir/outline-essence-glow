## Vision148 Landing Page — Black & White Editorial

A single-page, high-end black-and-white landing for the Vision148 RS500 syndicate — built like a coffee-table monograph. Stark monochrome, tall condensed display type (matching the logo's stencil/condensed feel), generous negative space, hairline rules, and slow editorial pacing. No color accents — pure black, pure white, and a single warm off-white for paper-like sections.

### Design language
- Palette: pure black `#000`, pure white `#fff`, off-white `#f5f3ee` for alternating bands, mid-gray for meta text
- Typography: condensed display (Oswald / Bebas-style) for headlines echoing the VISION 148 logo; clean grotesque (Inter/Space Grotesk) for body; mono small-caps for section numbers/labels
- Motion: subtle — reveal on scroll, slow image parallax, hairline underline hovers. No bouncy effects.
- Logo: use the provided white-on-black Vision148 mark in nav and footer

### Page structure (matches the block layout doc)

1. **Nav** — minimal: logo left, hamburger or thin links right (Apply, Learn More)
2. **Hero** — full-bleed black, hero video placeholder (poster image of the RS500), oversized condensed headline "ONE OF ONE / RS500", small-caps tagline, scroll cue
3. **Section 2 — The Opportunity** — two-column: text left, image right (silver RS500 on wet road)
4. **Section 3 — Three pillars** — three columns with hairline dividers: "One of One Car Build" · "World-Class Build Partners" · "Exclusive Access to the Finished Car"
5. **Available Syndicate banner** — full-width black band, oversized type, count indicator ("25 seats")
6. **Section 4 — The Car** — image left, text right, "More Info" link button with arrow
7. **Section 5 — How It Works** — text left, image right
8. **Section 6 — The Build Process** — horizontal timeline (Phase 1 complete → Phase 2 → Phase 3) with hairline rail
9. **Section 7 — Partners** — intro text + logo wall (T3DMC, ASM, Mahle, DMC, Coventry Metalcraft, BAMD, etc.) rendered as monochrome wordmarks
10. **Section 8 — The Experience** — four text blocks in a 4-up grid
11. **Section 9 — The Value** — text + image two-column
12. **Section 10 — Scarcity** — image + text, large numeric "148" treatment
13. **Final CTA** — full black band, large headline + APPLY button
14. **Footer** — logo, social icons, simple menu, copyright

### Technical
- Single route at `src/routes/index.tsx` replacing the placeholder
- Copy Vision148 logo (256px JPG) to `src/assets/vision148-logo.jpg`
- Update `src/styles.css` tokens: background black, foreground white, off-white surface variant, condensed display font + grotesque body via Google Fonts `<link>` in `__root.tsx` head
- All sections as components under `src/components/landing/` (Hero, Opportunity, Pillars, SyndicateBanner, TheCar, HowItWorks, BuildTimeline, Partners, Experience, Value, Scarcity, FinalCTA, Footer, Nav)
- Placeholder images via `imagegen` (RS500-style sports car silhouettes, workshop, chassis) in B&W
- SEO: title "Vision148 — RS500 Genesis Build", meta description from kickoff notes
- No backend, no forms wired yet — Apply button is a styled anchor (can hook later)

### Out of scope (this pass)
- CRM/Mailchimp integration, registration flow, calendar/booking, the separate "Learn More" supplementary page — landing page only
