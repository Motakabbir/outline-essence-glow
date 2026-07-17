import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { b as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, c as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { G as notFound } from "../_libs/tanstack__router-core.mjs";
import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
const appCss = "/assets/styles-D76CjOR4.css";
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
const $$splitComponentImporter$b = () => import("./the-car-CwNZVy46.mjs");
const Route$b = createFileRoute("/the-car")({
  head: () => ({
    meta: [{
      title: "The Car — Vision148 RS500"
    }, {
      name: "description",
      content: "Car #148 of 500 RS500 Cosworths — reborn through digital manufacturing and motorsport-grade engineering."
    }, {
      property: "og:title",
      content: "The Car — Vision148 RS500"
    }, {
      property: "og:description",
      content: "Car #148 of 500 RS500 Cosworths — reborn through digital manufacturing."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$b, "component")
});
const $$splitComponentImporter$a = () => import("./process-Mj6P3vuj.mjs");
const Route$a = createFileRoute("/process")({
  head: () => ({
    meta: [{
      title: "The Process — Vision148"
    }, {
      name: "description",
      content: "Three phases. Eighteen months. From archaeological dismantle to the first drive."
    }, {
      property: "og:title",
      content: "The Process — Vision148"
    }, {
      property: "og:description",
      content: "Three phases. Eighteen months. The Vision148 build process."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const $$splitComponentImporter$9 = () => import("./partners-Duz020DJ.mjs");
const Route$9 = createFileRoute("/partners")({
  head: () => ({
    meta: [{
      title: "Partners — Vision148"
    }, {
      name: "description",
      content: "A curated consortium — DMC, Mahle, Coventry Metalcraft, T3DMC, ASM, BAMD."
    }, {
      property: "og:title",
      content: "Partners — Vision148"
    }, {
      property: "og:description",
      content: "A curated consortium of motorsport and manufacturing partners."
    }]
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
const $$splitComponentImporter$7 = () => import("./faq-CoGQQ8VF.mjs");
const Route$7 = createFileRoute("/faq")({
  head: () => ({
    meta: [{
      title: "FAQ — Vision148"
    }, {
      name: "description",
      content: "Answers about the Vision148 syndicate, the RS500 build, costs, timelines and custodianship."
    }, {
      property: "og:title",
      content: "FAQ — Vision148"
    }, {
      property: "og:description",
      content: "Everything custodians ask, in one place."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./experience-CwOT9J8S.mjs");
const Route$6 = createFileRoute("/experience")({
  head: () => ({
    meta: [{
      title: "The Experience — Vision148"
    }, {
      name: "description",
      content: "Private drives, studio visits, exhibitions and the quarterly digital twin."
    }, {
      property: "og:title",
      content: "The Experience — Vision148"
    }, {
      property: "og:description",
      content: "Custodianship designed around the finished car."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./contact-BzluWKx5.mjs");
const Route$5 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact — Vision148"
    }, {
      name: "description",
      content: "Speak with the Vision148 studio about the RS500 Genesis Build, partnerships, or press."
    }, {
      property: "og:title",
      content: "Contact — Vision148"
    }, {
      property: "og:description",
      content: "Reach the Vision148 studio directly."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./apply-Btcd-BLT.mjs");
const Route$4 = createFileRoute("/apply")({
  head: () => ({
    meta: [{
      title: "Apply — Vision148"
    }, {
      name: "description",
      content: "Register interest in the Vision148 syndicate. Twenty-five seats. One car."
    }, {
      property: "og:title",
      content: "Apply — Vision148"
    }, {
      property: "og:description",
      content: "Register interest in the Vision148 syndicate."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./about-B3y-AHvm.mjs");
const Route$3 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About — Vision148"
    }, {
      name: "description",
      content: "The story, the people, and the philosophy behind the Vision148 RS500 Genesis Build."
    }, {
      property: "og:title",
      content: "About — Vision148"
    }, {
      property: "og:description",
      content: "Heritage coachbuilding meets digital manufacturing."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./index-C4rsaG6Q.mjs");
const Route$2 = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Vision148 — RS500 Genesis Build"
    }, {
      name: "description",
      content: "Vision148 — a one-of-one syndicated build of the Ford Sierra RS500 Cosworth. Heritage coachbuilding meets digital manufacturing."
    }, {
      property: "og:title",
      content: "Vision148 — RS500 Genesis Build"
    }, {
      property: "og:description",
      content: "A one-of-one syndicated build of the Ford Sierra RS500 Cosworth."
    }, {
      property: "og:image",
      content: "/og.jpg"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./journal.index-Cd7s6pg4.mjs");
const Route$1 = createFileRoute("/journal/")({
  head: () => ({
    meta: [{
      title: "Journal — Vision148"
    }, {
      name: "description",
      content: "A curated in-depth record from acquisition to completion of #148 RS500."
    }, {
      property: "og:title",
      content: "Journal — Vision148"
    }, {
      property: "og:description",
      content: "A curated in-depth record from acquisition to completion of #148 RS500."
    }]
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
const $$splitComponentImporter = () => import("./journal._slug-CZmNK6bv.mjs");
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
  Route as R,
  chassisVideo as c,
  posts as p,
  router as r,
  workshop as w
};
