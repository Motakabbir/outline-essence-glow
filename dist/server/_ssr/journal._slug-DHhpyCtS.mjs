import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { N as Nav, P as PageHero, C as CrossLink, F as Footer } from "./Primitives-DHBnMrOH.mjs";
import { c as Route, p as posts } from "./router-DYMhSVNV.mjs";

import "../_libs/seroval.mjs";

import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";


import "../_libs/react-dom.mjs";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "./api-Drrs5acz.mjs";
import "./server-C1mmbbAp.mjs";
import "../_libs/h3-v2.mjs";
import "../_libs/unenv.mjs";


import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";




import "../_libs/zod.mjs";
function JournalPost() {
  const {
    slug
  } = Route.useLoaderData();
  const post = posts.find((p) => p.slug === slug);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "bg-background text-foreground min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: `JOURNAL — ${post.date} — ${post.category}`, title: post.title, intro: post.excerpt, video: post.video, img: post.img }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("article", { className: "py-20 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-[800px] mx-auto px-6 md:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "prose prose-invert prose-lg font-sans leading-loose text-white/80", children: post.content }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CrossLink, { to: "/journal", eyebrow: "Archive", title: "More Dispatches →" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  JournalPost as component
};
