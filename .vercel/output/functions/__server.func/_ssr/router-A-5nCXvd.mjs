import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { b as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, c as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
const appCss = "/assets/styles-DhY04xSd.css";
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
  const router = useRouter();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router.invalidate();
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
const Route$a = createRootRouteWithContext()({
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
  const { queryClient } = Route$a.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) });
}
const $$splitComponentImporter$9 = () => import("./the-car-DoPkXLAJ.mjs");
const Route$9 = createFileRoute("/the-car")({
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
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./process-59RzmCYy.mjs");
const Route$8 = createFileRoute("/process")({
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
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./partners-Dllw4XOn.mjs");
const Route$7 = createFileRoute("/partners")({
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
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./journal-EoAsIdb6.mjs");
const Route$6 = createFileRoute("/journal")({
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
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./faq-CKMB38Ne.mjs");
const Route$5 = createFileRoute("/faq")({
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
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./experience-CmcACUSa.mjs");
const Route$4 = createFileRoute("/experience")({
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
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./contact-B6rQ-QQu.mjs");
const Route$3 = createFileRoute("/contact")({
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
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./apply-DFL2zmN3.mjs");
const Route$2 = createFileRoute("/apply")({
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
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./about-bCYBWx3l.mjs");
const Route$1 = createFileRoute("/about")({
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
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-BBnGWBHH.mjs");
const Route = createFileRoute("/")({
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
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const TheCarRoute = Route$9.update({
  id: "/the-car",
  path: "/the-car",
  getParentRoute: () => Route$a
});
const ProcessRoute = Route$8.update({
  id: "/process",
  path: "/process",
  getParentRoute: () => Route$a
});
const PartnersRoute = Route$7.update({
  id: "/partners",
  path: "/partners",
  getParentRoute: () => Route$a
});
const JournalRoute = Route$6.update({
  id: "/journal",
  path: "/journal",
  getParentRoute: () => Route$a
});
const FaqRoute = Route$5.update({
  id: "/faq",
  path: "/faq",
  getParentRoute: () => Route$a
});
const ExperienceRoute = Route$4.update({
  id: "/experience",
  path: "/experience",
  getParentRoute: () => Route$a
});
const ContactRoute = Route$3.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$a
});
const ApplyRoute = Route$2.update({
  id: "/apply",
  path: "/apply",
  getParentRoute: () => Route$a
});
const AboutRoute = Route$1.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$a
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$a
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  ApplyRoute,
  ContactRoute,
  ExperienceRoute,
  FaqRoute,
  JournalRoute,
  PartnersRoute,
  ProcessRoute,
  TheCarRoute
};
const routeTree = Route$a._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router;
};
export {
  getRouter
};
