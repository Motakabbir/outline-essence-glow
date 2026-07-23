import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { b as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, c as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { G as notFound } from "../_libs/tanstack__router-core.mjs";
import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { m as mapSeoToMeta, b as fetchSeoMetadata, a as fetchPartners, f as fetchFaqs, c as fetchTeamMembers } from "./api-Drrs5acz.mjs";
import { a as createServerFn, T as TSS_SERVER_FUNCTION, g as getServerFnById } from "./server-C1mmbbAp.mjs";
import { o as objectType, s as stringType } from "../_libs/zod.mjs";
import "../_libs/react-dom.mjs";

import "../_libs/isbot.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/unenv.mjs";



import "../_libs/seroval-plugins.mjs";


import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";




const appCss = "/assets/styles-BTGW7T3T.css";
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$c = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Vision148 — RS500 Genesis Build" },
      { name: "description", content: "A one-of-one syndicated build of the Ford Sierra RS500 Cosworth. Heritage coachbuilding meets digital manufacturing." },
      { name: "author", content: "Vision148" },
      { property: "og:title", content: "Vision148 — RS500 Genesis Build" },
      { property: "og:description", content: "A one-of-one syndicated build of the Ford Sierra RS500 Cosworth." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&family=Instrument+Serif:ital@0;1&display=swap"
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$c.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) });
}
const $$splitComponentImporter$b = () => import("./the-car-DAzycBkh.mjs");
const Route$b = createFileRoute("/the-car")({
  loader: async () => {
    const seo = await fetchSeoMetadata("the-car", {
      title: "The Car — Vision148 RS500",
      description: "Car #148 of 500 RS500 Cosworths — reborn through digital manufacturing and motorsport-grade engineering.",
      og_title: "The Car — Vision148 RS500",
      og_description: "Car #148 of 500 RS500 Cosworths — reborn through digital manufacturing."
    });
    return {
      seo
    };
  },
  head: ({
    loaderData
  }) => ({
    meta: mapSeoToMeta(loaderData?.seo || {
      title: "The Car — Vision148 RS500",
      description: "Car #148 of 500 RS500 Cosworths — reborn through digital manufacturing and motorsport-grade engineering.",
      og_title: "The Car — Vision148 RS500",
      og_description: "Car #148 of 500 RS500 Cosworths — reborn through digital manufacturing."
    })
  }),
  component: lazyRouteComponent($$splitComponentImporter$b, "component")
});
const $$splitComponentImporter$a = () => import("./process-Mj6P3vuj.mjs");
const Route$a = createFileRoute("/process")({
  loader: async () => {
    const seo = await fetchSeoMetadata("process", {
      title: "The Process — Vision148",
      description: "Three phases. Eighteen months. From archaeological dismantle to the first drive.",
      og_title: "The Process — Vision148",
      og_description: "Three phases. Eighteen months. The Vision148 build process."
    });
    return {
      seo
    };
  },
  head: ({
    loaderData
  }) => ({
    meta: mapSeoToMeta(loaderData?.seo || {
      title: "The Process — Vision148",
      description: "Three phases. Eighteen months. From archaeological dismantle to the first drive.",
      og_title: "The Process — Vision148",
      og_description: "Three phases. Eighteen months. The Vision148 build process."
    })
  }),
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const $$splitComponentImporter$9 = () => import("./partners-ByO4yOjV.mjs");
const partners = [{
  name: "DMC",
  role: "Digital Manufacturing",
  body: "The Digital Manufacturing Centre at Silverstone — host facility for final assembly and additive manufacture."
}, {
  name: "Mahle",
  role: "Engine Engineering",
  body: "Engine rebuild and validation. Motorsport-grade tolerances. UK engine programme."
}, {
  name: "Coventry Metalcraft",
  role: "Coachbuilding",
  body: "Hand-formed steel and aluminium panel work. Heritage techniques, modern measurement."
}, {
  name: "T3DMC",
  role: "Scanning & Twin",
  body: "Component-level 3D scanning and the live digital twin of the entire build."
}, {
  name: "ASM AUTORECYCLING ",
  role: "Dismantling specialists",
  body: "RS500 #148 dismantle and part catalogue and storage"
}, {
  name: "BAMD",
  role: "Composite specialists",
  body: "Composite partner for trim and interior"
}, {
  name: "Cornerstone",
  role: "non-structural repair specialists",
  body: "Glass removal and specialist repairs"
}, {
  name: "HGL",
  role: "Membership Program",
  body: "Technology providers for the project companion membership platform, Autovision.club"
}];
const Route$9 = createFileRoute("/partners")({
  loader: async () => {
    const seoPromise = fetchSeoMetadata("partners", {
      title: "Partners — Vision148",
      description: "A curated consortium — DMC, Mahle, Coventry Metalcraft, T3DMC, ASM, BAMD.",
      og_title: "Partners — Vision148",
      og_description: "A curated consortium of motorsport and manufacturing partners."
    });
    const partnersPromise = fetchPartners(partners);
    const [seo, dynamicPartners] = await Promise.all([seoPromise, partnersPromise]);
    return {
      seo,
      partners: dynamicPartners
    };
  },
  head: ({
    loaderData
  }) => ({
    meta: mapSeoToMeta(loaderData?.seo || {
      title: "Partners — Vision148",
      description: "A curated consortium — DMC, Mahle, Coventry Metalcraft, T3DMC, ASM, BAMD.",
      og_title: "Partners — Vision148",
      og_description: "A curated consortium of motorsport and manufacturing partners."
    })
  }),
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./journal-hdlc17Rz.mjs");
const Route$8 = createFileRoute("/journal")({
  head: () => ({
    meta: [{
      title: "Journal — Vision148"
    }, {
      name: "description",
      content: "Build notes, partner profiles and dispatches from the Vision148 studio."
    }, {
      property: "og:title",
      content: "Journal — Vision148"
    }, {
      property: "og:description",
      content: "Dispatches from the build floor."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./faq-4Ad7fAYn.mjs");
const groups = [{
  title: "The Programme",
  items: [["How many seats are available?", "Twenty-five. When they're gone, the syndicate closes. There is no waitlist beyond the first round."], ["Is this a fractional ownership scheme?", "No. Custodians do not own the car. They fund and accompany its build, and share scheduled access to the finished object."], ["What is the duration of the programme?", "Approximately three years from kickoff to handover, with a five-year custodianship period after completion."]]
}, {
  title: "The Car",
  items: [["Is the donor shell genuine?", "Yes. A matching-numbers RS500 shell, fully documented, acquired in 2023. Provenance is published to custodians."], ["What is being changed?", "Nothing visible. Beneath the skin: modern metallurgy, refreshed electronics, and a Mahle-built powertrain to original spec."], ["Will it be road-legal?", "Yes. UK registered, MOT-exempt as a historic vehicle, fully usable on public roads."]]
}, {
  title: "Custodianship",
  items: [["What do custodians actually get?", "Studio access during build, quarterly digital-twin updates, private drives, exhibitions, dinners, and a place in the provenance ledger of the finished car."], ["Can I drive the car?", "Yes. Scheduled drive days are part of the programme — track and road, in the UK and Europe."], ["What happens after five years?", "The car enters its long-term custodianship phase. The original twenty-five retain first right of access in perpetuity."]]
}, {
  title: "Application",
  items: [["How do I apply?", "Submit an enquiry through the Apply page. We respond personally within two working days."], ["Is there a selection process?", "Yes. The studio meets every prospective custodian before a seat is offered. Fit matters as much as funding."], ["What are the costs?", "Disclosed in the prospectus, on request, after an initial conversation."]]
}];
function groupFaqs(faqs) {
  const map = {};
  for (const f of faqs) {
    const cat = f.categoryName || "General";
    if (!map[cat]) map[cat] = [];
    map[cat].push([f.title, f.description]);
  }
  return Object.entries(map).map(([title, items]) => ({
    title,
    items
  }));
}
const Route$7 = createFileRoute("/faq")({
  loader: async () => {
    const seoPromise = fetchSeoMetadata("faq", {
      title: "FAQ — Vision148",
      description: "Answers about the Vision148 syndicate, the RS500 build, costs, timelines and custodianship.",
      og_title: "FAQ — Vision148",
      og_description: "Everything custodians ask, in one place."
    });
    const fallbackFlat = groups.flatMap((g) => g.items.map(([q, a]) => ({
      title: q,
      description: a,
      categoryName: g.title
    })));
    const faqsPromise = fetchFaqs(fallbackFlat);
    const [seo, flatFaqs] = await Promise.all([seoPromise, faqsPromise]);
    const grouped = groupFaqs(flatFaqs);
    return {
      seo,
      groups: grouped
    };
  },
  head: ({
    loaderData
  }) => ({
    meta: mapSeoToMeta(loaderData?.seo || {
      title: "FAQ — Vision148",
      description: "Answers about the Vision148 syndicate, the RS500 build, costs, timelines and custodianship.",
      og_title: "FAQ — Vision148",
      og_description: "Everything custodians ask, in one place."
    })
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./experience-CwOT9J8S.mjs");
const Route$6 = createFileRoute("/experience")({
  loader: async () => {
    const seo = await fetchSeoMetadata("experience", {
      title: "The Experience — Vision148",
      description: "Private drives, studio visits, exhibitions and the quarterly digital twin.",
      og_title: "The Experience — Vision148",
      og_description: "Custodianship designed around the finished car."
    });
    return {
      seo
    };
  },
  head: ({
    loaderData
  }) => ({
    meta: mapSeoToMeta(loaderData?.seo || {
      title: "The Experience — Vision148",
      description: "Private drives, studio visits, exhibitions and the quarterly digital twin.",
      og_title: "The Experience — Vision148",
      og_description: "Custodianship designed around the finished car."
    })
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var createSsrRpc = (functionId) => {
  const url = "/_serverFn/" + functionId;
  const serverFnMeta = { id: functionId };
  const fn = async (...args) => {
    return (await getServerFnById(functionId))(...args);
  };
  return Object.assign(fn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
const $$splitComponentImporter$5 = () => import("./contact-BxM03nWg.mjs");
const Route$5 = createFileRoute("/contact")({
  loader: async () => {
    const seo = await fetchSeoMetadata("contact", {
      title: "Contact — Vision148",
      description: "Speak with the Vision148 studio about the RS500 Genesis Build, partnerships, or press.",
      og_title: "Contact — Vision148",
      og_description: "Reach the Vision148 studio directly."
    });
    return {
      seo
    };
  },
  head: ({
    loaderData
  }) => ({
    meta: mapSeoToMeta(loaderData?.seo || {
      title: "Contact — Vision148",
      description: "Speak with the Vision148 studio about the RS500 Genesis Build, partnerships, or press.",
      og_title: "Contact — Vision148",
      og_description: "Reach the Vision148 studio directly."
    })
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
createServerFn({
  method: "POST"
}).inputValidator(objectType({
  first_name: stringType(),
  last_name: stringType(),
  email: stringType().email(),
  phone: stringType(),
  message: stringType()
})).handler(createSsrRpc("c3804d43ea11a75535ebb5ae9e76d1efb9734c08a9487988e3b78f015fb81075"));
const $$splitComponentImporter$4 = () => import("./apply-BgBFlX41.mjs");
const Route$4 = createFileRoute("/apply")({
  loader: async () => {
    const seo = await fetchSeoMetadata("apply", {
      title: "Apply — Vision148",
      description: "Register interest in the Vision148 syndicate. Twenty-five seats. One car.",
      og_title: "Apply — Vision148",
      og_description: "Register interest in the Vision148 syndicate."
    });
    return {
      seo
    };
  },
  head: ({
    loaderData
  }) => ({
    meta: mapSeoToMeta(loaderData?.seo || {
      title: "Apply — Vision148",
      description: "Register interest in the Vision148 syndicate. Twenty-five seats. One car.",
      og_title: "Apply — Vision148",
      og_description: "Register interest in the Vision148 syndicate."
    })
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
createServerFn({
  method: "POST"
}).inputValidator(objectType({
  name: stringType(),
  email: stringType().email(),
  phone: stringType().optional(),
  intro: stringType().optional(),
  message: stringType().optional()
})).handler(createSsrRpc("596878548ed97fad99e76f722b7a9710ef35e411603b7cf465c4265a96fd0bdc"));
const ianHoweImg = "/assets/Ian-Howe-DEhh2UC5.png";
const stuartPeachImg = "/assets/Stuart-Peach-CH7eWYnA.png";
const alYasidImg = "/assets/Al-Yasid-Bm-z5K-a.png";
const simonKwImg = "/assets/Simon-Kw-BG0ASdJj.png";
const brendanImg = "/assets/Brendan-D8B1ZMVt.png";
const kieronImg = "/assets/KIERON_SALTER-Cbik1S_v.png";
const $$splitComponentImporter$3 = () => import("./about-ByPzekg8.mjs");
const team = [{
  role: "Ian Howe FOUNDER & BUILD DIRECTOR 30 years experience in automotive & fintech Business",
  name: "Ian Howe",
  image: ianHoweImg
}, {
  role: "Stuart Peach PROJECT CO FOUNDER Partner in the vision148 project and original custodian of #148",
  name: "Stuart Peach",
  image: stuartPeachImg
}, {
  role: "Al Yasid Oozeear DIGITAL VISUALISOR & DESIGNER Independent Automotive designer specialising in bespoke car design",
  name: "Al Yasid Oozeear",
  image: alYasidImg
}, {
  role: "Simon Kiero Watson COMMERCIAL & FINANCE OVERSIGHT Highly experiencedCorporate Finance and Exchange Expert.",
  name: "Simon Kiero Watson",
  image: simonKwImg
}, {
  role: "Brendan OToole CEO of Coventry Metalcraft Ltd.",
  name: "Brendan OToole",
  image: brendanImg
}, {
  role: "Kieron Salter CEO Digital Manufacturing Centre Ltd (DMC) Silverstone",
  name: "Kieron Salter",
  image: kieronImg
}];
const Route$3 = createFileRoute("/about")({
  loader: async () => {
    const seoPromise = fetchSeoMetadata("about", {
      title: "About — Vision148",
      description: "The story, the people, and the philosophy behind the Vision148 RS500 Genesis Build.",
      og_title: "About — Vision148",
      og_description: "Heritage coachbuilding meets digital manufacturing."
    });
    const fallbackTeam = team.map((t) => ({
      name: t.name,
      position: t.role,
      image: t.image
    }));
    const teamMembersPromise = fetchTeamMembers(fallbackTeam);
    const [seo, teamMembers] = await Promise.all([seoPromise, teamMembersPromise]);
    return {
      seo,
      teamMembers
    };
  },
  head: ({
    loaderData
  }) => ({
    meta: mapSeoToMeta(loaderData?.seo || {
      title: "About — Vision148",
      description: "The story, the people, and the philosophy behind the Vision148 RS500 Genesis Build.",
      og_title: "About — Vision148",
      og_description: "Heritage coachbuilding meets digital manufacturing."
    })
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./index-lotpbZ-J.mjs");
const Route$2 = createFileRoute("/")({
  loader: async () => {
    const seo = await fetchSeoMetadata("home", {
      title: "Vision148 — RS500 Genesis Build",
      description: "Vision148 — a one-of-one syndicated build of the Ford Sierra RS500 Cosworth. Heritage coachbuilding meets digital manufacturing.",
      og_title: "Vision148 — RS500 Genesis Build",
      og_description: "A one-of-one syndicated build of the Ford Sierra RS500 Cosworth.",
      og_image: "/og.jpg"
    });
    return {
      seo
    };
  },
  head: ({
    loaderData
  }) => ({
    meta: mapSeoToMeta(loaderData?.seo || {
      title: "Vision148 — RS500 Genesis Build",
      description: "Vision148 — a one-of-one syndicated build of the Ford Sierra RS500 Cosworth. Heritage coachbuilding meets digital manufacturing.",
      og_title: "Vision148 — RS500 Genesis Build",
      og_description: "A one-of-one syndicated build of the Ford Sierra RS500 Cosworth.",
      og_image: "/og.jpg"
    })
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./journal.index-BlUO7e16.mjs");
const Route$1 = createFileRoute("/journal/")({
  loader: async () => {
    const seo = await fetchSeoMetadata("journal", {
      title: "Journal — Vision148",
      description: "A curated in-depth record from acquisition to completion of #148 RS500.",
      og_title: "Journal — Vision148",
      og_description: "A curated in-depth record from acquisition to completion of #148 RS500."
    });
    return {
      seo
    };
  },
  head: ({
    loaderData
  }) => ({
    meta: mapSeoToMeta(loaderData?.seo || {
      title: "Journal — Vision148",
      description: "A curated in-depth record from acquisition to completion of #148 RS500.",
      og_title: "Journal — Vision148",
      og_description: "A curated in-depth record from acquisition to completion of #148 RS500."
    })
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const workshop = "/assets/workshop-DP3ouAaE.jpg";
const engine = "/assets/engine-BAsbs6x4.jpg";
const design = "/assets/scanning-Zqz__a3f.jpg";
const experience = "/assets/dismantle-DDyiDgC6.jpg";
const theCar = "/assets/the_car_crowd-BrIp2JeP.jpg";
const chassisVideo = "/assets/chassis-DzkiDE7p.mp4";
const posts = [
  {
    slug: "bare-shell",
    date: "May 2026",
    category: "Build Note",
    title: "BARE SHELL, STRIPPED & SCANNED",
    excerpt: "Together with our partners at ASM, 148 has been completely stripped and prepared for ICE blasting, repair, alignment and painting and further scanned to create our unique digital datum.",
    video: chassisVideo,
    img: workshop,
    content: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "In the painstaking process of reviving #148, the initial dismantling phase proved crucial. Working alongside our dedicated partners at ASM, we meticulously stripped the vehicle down to its barest essentials. Every component, no matter how minute, was carefully cataloged and preserved for the ensuing steps." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "The journey from a complete car to a bare metal chassis is not merely about taking things apart—it is about establishing a flawless foundation. Once stripped, the shell was prepared for an intensive ICE blasting process. This state-of-the-art cleaning technique ensures that decades of road wear, old paint, and accumulated debris are removed without compromising the integrity of the underlying steel." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Digital Precision Meets Analog Craft" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Perhaps the most vital step in this phase was the comprehensive 3D scanning of the bare shell. This scan provides us with an absolute, uncompromising digital datum—a perfect blueprint against which every subsequent repair, alignment, and modification will be measured. It bridges the gap between historical coachbuilding techniques and cutting-edge additive manufacturing, ensuring that when #148 returns to the road, it does so with a precision that was unimaginable in 1987." })
    ] })
  },
  {
    slug: "mahle-powertrain",
    date: "APR 2025",
    category: "Al Yasid Design",
    title: "COLLABORATING WITH TALENTED VISUALISER AL YASID DESIGN",
    excerpt: "Identifying talent is something that the project is keen to deliver. The Al Yasid Design language accelerated the project potential from initial sketches to tuned visuals to reinterpret this icon.",
    img: engine,
    content: /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Detailed build notes regarding the Mahle Powertrain process will go here. A deep dive into the engineering required to rebirth the iconic YBD block." }) })
  },
  {
    slug: "digital-twin",
    date: "Mar 2026",
    category: "Digital Twin",
    title: "Why we model every component before we touch it.",
    excerpt: "Each component has been digitally scanned with our partners T3DMC to create a unique digital datum for this build. 148 is the most digitally documented RS500 in existence.",
    img: design,
    content: /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Detailed notes regarding the digital twin modelling process will go here. Every single component is meticulously rendered before physical work begins." }) })
  },
  {
    slug: "first-dinner",
    date: "Feb 2026",
    category: "DISMANTLE",
    title: "A first DISMANTLING 148  with the syndicate.",
    excerpt: "Total care and attention from partners ASM Autorecycling to  respectfully dismantle 148 and to catalogue each part to assess repair, replace or remanufacture components for the build.",
    img: experience,
    content: /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Detailed notes regarding the first syndicate dinner will go here, highlighting the community aspect of the Vision148 project." }) })
  },
  {
    slug: "provenance",
    date: "apr 2026",
    category: "SYNDICATE BIRTH",
    title: "THE BIRTH OF A SYNDICATE",
    excerpt: "in collaboration with TheCarCrowd the creation of an exclusive Syndicate will allow members the opportunity to become a part of this project and to ultimately experience driving the RS500 #148.",
    img: theCar,
    content: /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Detailed notes regarding the extraordinary chain of custody for the donor car will go here, tracing its history back to 1987." }) })
  }
];
const $$splitComponentImporter = () => import("./journal._slug-DHhpyCtS.mjs");
const Route = createFileRoute("/journal/$slug")({
  component: lazyRouteComponent($$splitComponentImporter, "component"),
  loader: ({
    params
  }) => {
    const post = posts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return {
      slug: post.slug
    };
  },
  head: ({
    loaderData
  }) => {
    const post = posts.find((p) => p.slug === loaderData?.slug);
    return {
      meta: [{
        title: `${post ? post.title : "Post"} — Vision148`
      }, {
        name: "description",
        content: post ? post.excerpt : "Vision148 RS500 Genesis Build dispatch."
      }, {
        property: "og:title",
        content: post ? post.title : "Vision148 Dispatch"
      }, {
        property: "og:description",
        content: post ? post.excerpt : "Vision148 RS500 Genesis Build dispatch."
      }]
    };
  }
});
const TheCarRoute = Route$b.update({
  id: "/the-car",
  path: "/the-car",
  getParentRoute: () => Route$c
});
const ProcessRoute = Route$a.update({
  id: "/process",
  path: "/process",
  getParentRoute: () => Route$c
});
const PartnersRoute = Route$9.update({
  id: "/partners",
  path: "/partners",
  getParentRoute: () => Route$c
});
const JournalRoute = Route$8.update({
  id: "/journal",
  path: "/journal",
  getParentRoute: () => Route$c
});
const FaqRoute = Route$7.update({
  id: "/faq",
  path: "/faq",
  getParentRoute: () => Route$c
});
const ExperienceRoute = Route$6.update({
  id: "/experience",
  path: "/experience",
  getParentRoute: () => Route$c
});
const ContactRoute = Route$5.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$c
});
const ApplyRoute = Route$4.update({
  id: "/apply",
  path: "/apply",
  getParentRoute: () => Route$c
});
const AboutRoute = Route$3.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$c
});
const IndexRoute = Route$2.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$c
});
const JournalIndexRoute = Route$1.update({
  id: "/",
  path: "/",
  getParentRoute: () => JournalRoute
});
const JournalSlugRoute = Route.update({
  id: "/$slug",
  path: "/$slug",
  getParentRoute: () => JournalRoute
});
const JournalRouteChildren = {
  JournalSlugRoute,
  JournalIndexRoute
};
const JournalRouteWithChildren = JournalRoute._addFileChildren(JournalRouteChildren);
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  ApplyRoute,
  ContactRoute,
  ExperienceRoute,
  FaqRoute,
  JournalRoute: JournalRouteWithChildren,
  PartnersRoute,
  ProcessRoute,
  TheCarRoute
};
const routeTree = Route$c._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Route$9 as R,
  Route$7 as a,
  Route$3 as b,
  Route as c,
  chassisVideo as d,
  createSsrRpc as e,
  posts as p,
  router as r,
  workshop as w
};
