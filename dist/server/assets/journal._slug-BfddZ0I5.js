import { jsxs, jsx } from "react/jsx-runtime";
import { N as Nav, P as PageHero, C as CrossLink, F as Footer } from "./Primitives-DHBnMrOH.js";
import { c as Route, p as posts } from "./router-Cy05bNZC.js";
import "@tanstack/react-router";
import "react";
import "@tanstack/react-query";
import "./api-Drrs5acz.js";
import "./server-Ci16uXs1.js";
import "node:async_hooks";
import "h3-v2";
import "@tanstack/router-core";
import "seroval";
import "@tanstack/history";
import "@tanstack/router-core/ssr/client";
import "@tanstack/router-core/ssr/server";
import "@tanstack/react-router/ssr/server";
import "zod";
function JournalPost() {
  const {
    slug
  } = Route.useLoaderData();
  const post = posts.find((p) => p.slug === slug);
  return /* @__PURE__ */ jsxs("main", { className: "bg-background text-foreground min-h-screen", children: [
    /* @__PURE__ */ jsx(Nav, {}),
    /* @__PURE__ */ jsx(PageHero, { eyebrow: `JOURNAL — ${post.date} — ${post.category}`, title: post.title, intro: post.excerpt, video: post.video, img: post.img }),
    /* @__PURE__ */ jsx("article", { className: "py-20 md:py-32", children: /* @__PURE__ */ jsx("div", { className: "max-w-[800px] mx-auto px-6 md:px-10", children: /* @__PURE__ */ jsx("div", { className: "prose prose-invert prose-lg font-sans leading-loose text-white/80", children: post.content }) }) }),
    /* @__PURE__ */ jsx(CrossLink, { to: "/journal", eyebrow: "Archive", title: "More Dispatches →" }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  JournalPost as component
};
