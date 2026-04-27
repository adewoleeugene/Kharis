"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { events, formatEventDate, formatDateRange, type EventCategory } from "@/lib/events";

type Filter = "all" | EventCategory;

const FILTERS: Filter[] = ["all", "KP2", "Conference", "Fasting", "Outreach", "Marriage", "Prayer"];

const toneStyles = {
  ink: {
    bg: "radial-gradient(ellipse at 20% 30%, #3f0b2a, #2b061d 60%, #180310 100%)",
    accent: "text-grace-light",
  },
  sage: {
    bg: "radial-gradient(ellipse at 30% 70%, #2c4a3a, #2b061d 65%)",
    accent: "text-grace-light",
  },
  gold: {
    bg: "radial-gradient(ellipse at 70% 20%, #b8863b, #2b061d 70%)",
    accent: "text-parchment-50",
  },
} as const;

export function EventsExplorer() {
  const [filter, setFilter] = useState<Filter>("all");

  const filtered = useMemo(
    () => (filter === "all" ? events : events.filter((e) => e.category === filter)),
    [filter]
  );

  const featured = filtered.find((e) => e.featured);
  const rest = filtered.filter((e) => e !== featured);

  return (
    <>
      <div className="sticky top-16 md:top-20 z-30 bg-parchment-50/90 backdrop-blur-md border-b hairline">
        <div className="container-x max-w-[1400px] mx-auto py-4 md:py-5">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
            <span className="text-[11px] uppercase tracking-[0.22em] text-ink-500 shrink-0 mr-3">
              Filter
            </span>
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                aria-pressed={filter === f}
                className={`shrink-0 px-4 py-2 text-[12px] uppercase tracking-[0.14em] rounded-xs transition-colors border hairline ${
                  filter === f
                    ? "bg-ink text-parchment-50 border-ink"
                    : "text-ink-500 hover:text-ink hover:border-ink/30"
                }`}
              >
                {f === "all" ? "All events" : f}
              </button>
            ))}
          </div>
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="container-x max-w-[1400px] mx-auto py-20">
          <div className="border hairline p-12 text-center max-w-2xl mx-auto">
            <p className="font-display text-2xl text-ink">Nothing in this category yet.</p>
            <p className="mt-3 text-sm text-ink-500">Try another filter, or check back soon.</p>
          </div>
        </div>
      ) : (
        <>
          {featured && <FeaturedEvent event={featured} />}
          <section className="container-x max-w-[1400px] mx-auto py-14 md:py-20">
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink/10 border hairline">
              {rest.map((e) => (
                <li key={e.slug} className="bg-parchment-50">
                  <EventCard event={e} />
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs uppercase tracking-[0.18em] text-ink-500">
              {filtered.length} {filtered.length === 1 ? "event" : "events"} shown
            </p>
          </section>
        </>
      )}
    </>
  );
}

function FeaturedEvent({ event: e }: { event: (typeof events)[number] }) {
  const d = formatEventDate(e.startsAt);
  const tone = toneStyles[e.tone];
  return (
    <section className="container-x max-w-[1400px] mx-auto pt-14">
      <Link
        href={`/events/${e.slug}`}
        className="group relative block border hairline bg-ink text-parchment-50 overflow-hidden hover:border-grace transition-colors"
      >
        <div className="absolute inset-0" style={{ background: tone.bg }} aria-hidden />
        <div
          className="absolute -top-32 -right-32 w-[560px] h-[560px] rounded-full bg-grace/15 blur-3xl"
          aria-hidden
        />

        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 p-8 md:p-12 lg:p-16 min-h-[460px]">
          <div className="lg:col-span-3 flex flex-col justify-between order-2 lg:order-1">
            <div className="flex items-center gap-3">
              <span className={`text-[11px] uppercase tracking-[0.22em] ${tone.accent}`}>
                Featured
              </span>
              <span className="h-px w-8 bg-grace-light" />
            </div>

            <div className="mt-10 lg:mt-0">
              <div className="font-display text-[clamp(4.5rem,10vw,8rem)] leading-[0.85] text-parchment-50">
                {d.day}
              </div>
              <div className="text-2xl md:text-3xl font-display text-grace-light mt-1 tracking-wide">
                {d.monthShort}
              </div>
              <div className="text-[11px] uppercase tracking-[0.22em] text-ink-300 mt-4">
                {d.weekday} · {d.time}
              </div>
            </div>
          </div>

          <div className="lg:col-span-9 flex flex-col justify-between order-1 lg:order-2">
            <div>
              <span className="text-[11px] uppercase tracking-[0.22em] text-grace-light">
                {e.category}
              </span>
              <h2 className="mt-5 font-display text-[clamp(2.25rem,5vw,4.5rem)] tracking-tight leading-[0.95]">
                {e.title}
              </h2>
              <p className="mt-5 text-lg md:text-xl text-ink-300 max-w-2xl leading-snug font-display italic">
                {e.tagline}
              </p>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <span className="inline-flex items-center gap-3 bg-grace-light text-ink px-7 py-4 text-[13px] uppercase tracking-[0.16em] rounded-xs group-hover:bg-parchment-50 transition-colors">
                Event details
                <span className="transition-transform group-hover:translate-x-1" aria-hidden>
                  →
                </span>
              </span>
              <span className="text-[11px] uppercase tracking-[0.22em] text-ink-300">
                {e.location}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
}

function EventCard({ event: e }: { event: (typeof events)[number] }) {
  const d = formatEventDate(e.startsAt);
  const tone = toneStyles[e.tone];
  return (
    <Link href={`/events/${e.slug}`} className="group block h-full">
      <div className="relative aspect-[4/3] overflow-hidden bg-ink">
        <div className="absolute inset-0" style={{ background: tone.bg }} aria-hidden />
        <div className="absolute inset-0 p-6 flex flex-col justify-between">
          <div className="flex items-start justify-between">
            <div>
              <div className="font-display text-6xl text-parchment-50 leading-none">
                {d.day}
              </div>
              <div className={`text-sm font-display mt-1 tracking-wide ${tone.accent}`}>
                {d.monthShort}
              </div>
            </div>
            <span className={`text-[10px] uppercase tracking-[0.22em] ${tone.accent}`}>
              {e.category}
            </span>
          </div>
          <div className="text-[11px] uppercase tracking-[0.22em] text-ink-300">
            {d.weekday} · {d.time}
          </div>
        </div>
      </div>
      <div className="p-6 md:p-7">
        <h3 className="font-display text-xl md:text-2xl leading-tight text-ink group-hover:text-grace-dark transition-colors">
          {e.title}
        </h3>
        <p className="mt-3 text-xs uppercase tracking-[0.18em] text-ink-500">
          {e.location}
        </p>
      </div>
    </Link>
  );
}
