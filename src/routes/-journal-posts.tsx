import React from "react";
import workshop from "@/assets/workshop.jpg";
import engine from "@/assets/engine.jpg";
import design from "@/assets/scanning.jpg";
import experience from "@/assets/dismantle.jpg";
import theCar from "@/assets/the-car.jpg";
import chassisVideo from "@/assets/video/chassis.mp4";

export const posts = [
  {
    slug: "bare-shell",
    date: "May 2026",
    category: "Build Note",
    title: "BARE SHELL, STRIPPED & SCANNED",
    excerpt: "Together with our partners at ASM, 148 has been completely stripped and prepared for ICE blasting, repair, alignment and painting and further scanned to create our unique digital datum.",
    video: chassisVideo,
    img: workshop,
    content: (
      <>
        <p>
          In the painstaking process of reviving #148, the initial dismantling phase proved crucial. Working alongside our dedicated partners at ASM, we meticulously stripped the vehicle down to its barest essentials. Every component, no matter how minute, was carefully cataloged and preserved for the ensuing steps.
        </p>
        <p>
          The journey from a complete car to a bare metal chassis is not merely about taking things apart—it is about establishing a flawless foundation. Once stripped, the shell was prepared for an intensive ICE blasting process. This state-of-the-art cleaning technique ensures that decades of road wear, old paint, and accumulated debris are removed without compromising the integrity of the underlying steel.
        </p>
        <h3>Digital Precision Meets Analog Craft</h3>
        <p>
          Perhaps the most vital step in this phase was the comprehensive 3D scanning of the bare shell. This scan provides us with an absolute, uncompromising digital datum—a perfect blueprint against which every subsequent repair, alignment, and modification will be measured. It bridges the gap between historical coachbuilding techniques and cutting-edge additive manufacturing, ensuring that when #148 returns to the road, it does so with a precision that was unimaginable in 1987.
        </p>
      </>
    )
  },
  {
    slug: "mahle-powertrain",
    date: "APR 2025",
    category: "Al Yasid Design",
    title: "COLLABORATING WITH TALENTED VISUALISER AL YASID DESIGN",
    excerpt: "Identifying talent is something that the project is keen to deliver. The Al Yasid Design language accelerated the project potential from initial sketches to tuned visuals to reinterpret this icon.",
    img: engine,
    content: (
      <>
        <p>Detailed build notes regarding the Mahle Powertrain process will go here. A deep dive into the engineering required to rebirth the iconic YBD block.</p>
      </>
    )
  },
  {
    slug: "digital-twin",
    date: "Mar 2026",
    category: "Digital Twin",
    title: "Why we model every component before we touch it.",
    excerpt: "Each component has been digitally scanned with our partners T3DMC to create a unique digital datum for this build. 148 is the most digitally documented RS500 in existence.",
    img: design,
    content: (
      <>
        <p>Detailed notes regarding the digital twin modelling process will go here. Every single component is meticulously rendered before physical work begins.</p>
      </>
    )
  },
  {
    slug: "first-dinner",
    date: "Feb 2026",
    category: "DISMANTLE",
    title: "A first DISMANTLING 148  with the syndicate.",
    excerpt: "Total care and attention from partners ASM Autorecycling to  respectfully dismantle 148 and to catalogue each part to assess repair, replace or remanufacture components for the build.",
    img: experience,
    content: (
      <>
        <p>Detailed notes regarding the first syndicate dinner will go here, highlighting the community aspect of the Vision148 project.</p>
      </>
    )
  },
  {
    slug: "provenance",
    date: "apr 2026",
    category: "SYNDICATE BIRTH",
    title: "The donor: chain of custody, 1987 to today.",
    excerpt: "Four owners, two countries, one extraordinary file of documentation.",
    img: theCar,
    content: (
      <>
        <p>Detailed notes regarding the extraordinary chain of custody for the donor car will go here, tracing its history back to 1987.</p>
      </>
    )
  },
];
