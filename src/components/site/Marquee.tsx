export function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items];
  return (
    <div className="border-y border-white/10 py-6 overflow-hidden marquee-mask">
      <div className="flex animate-marquee whitespace-nowrap">
        {row.map((it, i) => (
          <span
            key={i}
            className="font-display uppercase text-3xl md:text-5xl tracking-tight mx-10 inline-flex items-center gap-10"
          >
            {it}
            <span className="text-white/30 font-serif-italic text-2xl">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
