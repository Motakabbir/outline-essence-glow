import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/journal")({
  head: () => ({
    meta: [
      { title: "Journal — Vision148" },
      { name: "description", content: "Build notes, partner profiles and dispatches from the Vision148 studio." },
      { property: "og:title", content: "Journal — Vision148" },
      { property: "og:description", content: "Dispatches from the build floor." },
    ],
  }),
  component: Outlet,
});


