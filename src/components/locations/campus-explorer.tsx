"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { campuses, type Region } from "@/lib/campuses";
import { PastorAvatar } from "@/components/ui/pastor-avatar";

type Filter = "all" | Region;

const DAY_ABBR: Record<string, string> = {
  sunday: "Sun",
  sundays: "Sun",
  monday: "Mon",
  mondays: "Mon",
  tuesday: "Tue",
  tuesdays: "Tue",
  wednesday: "Wed",
  wednesdays: "Wed",
  thursday: "Thu",
  thursdays: "Thu",
  friday: "Fri",
  fridays: "Fri",
  saturday: "Sat",
  saturdays: "Sat",
  midweek: "Midweek",
};

function shortDay(day: string): string {
  return DAY_ABBR[day.toLowerCase()] ?? day;
}

const FILTERS: { id: Filter; label: string }[] = [
  { id: "all", label: "All campuses" },
  { id: "uk", label: "United Kingdom" },
  { id: "international", label: "International" },
];

export function CampusExplorer() {
  const [filter, setFilter] = useState<Filter>("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return campuses.filter((c) => {
      if (filter !== "all" && c.region !== filter) return false;
      if (q && !`${c.city} ${c.country}`.toLowerCase().includes(q)) return false;
      return true;
    });
  }, [filter, query]);

  const counts = useMemo(
    () => ({
      all: campuses.length,
      uk: campuses.filter((c) => c.region === "uk").length,
      international: campuses.filter((c) => c.region === "international").length,
    }),
    []
  );

  const flagship = filtered.find((c) => c.flagship);
  const rest = filtered.filter((c) => !c.flagship);

  return (
    <>
      <div className="sticky top-16 md:top-20 z-30 bg-parchment-50/90 backdrop-blur-md border-b hairline">
        <div className="container-x max-w-[1400px] mx-auto py-4 md:py-5 flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
          <div className="flex items-center gap-1 bg-ink/[0.04] p-1 rounded-xs self-start">
            {FILTERS.map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                aria-pressed={filter === f.id}
                className={`px-4 py-2 text-[12px] uppercase tracking-[0.14em] rounded-xs transition-colors ${
                  filter === f.id
                    ? "bg-ink text-parchment-50"
                    : "text-ink-500 hover:text-ink"
                }`}
              >
                {f.label}
                <span
                  className={`ml-2 text-[10px] ${
                    filter === f.id ? "text-grace-light" : "text-ink-500/70"
                  }`}
                >
                  {counts[f.id]}
                </span>
              </button>
            ))}
          </div>

          <div className="flex-1 max-w-md md:ml-auto">
            <label className="relative block">
              <span className="sr-only">Search campuses</span>
              <span
                className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-500"
                aria-hidden
              >
                ⌕
              </span>
              <input
                type="search"
                placeholder="Search a city…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-transparent border hairline pl-10 pr-4 py-2.5 text-sm text-ink placeholder:text-ink-500/70 focus:border-grace-dark outline-none rounded-xs transition-colors"
              />
            </label>
          </div>
        </div>
      </div>

      <section className="container-x max-w-[1400px] mx-auto py-14 md:py-20">
        {filtered.length === 0 ? (
          <div className="border hairline p-12 text-center">
            <p className="font-display text-2xl text-ink">No campus matches that search.</p>
            <p className="mt-3 text-sm text-ink-500">
              Try a different city, or clear your search.
            </p>
            <button
              onClick={() => {
                setQuery("");
                setFilter("all");
              }}
              className="mt-6 inline-flex text-[13px] uppercase tracking-[0.16em] text-ink border-b hairline pb-1 hover:border-grace-dark hover:text-grace-dark transition-colors"
            >
              Reset filters →
            </button>
          </div>
        ) : (
          <>
            {flagship && (
              <FlagshipCard campus={flagship} />
            )}

            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink/10 border hairline">
              {rest.map((c, i) => (
                <li key={c.slug} className="bg-parchment-50">
                  <CampusCard campus={c} index={i + (flagship ? 2 : 1)} />
                </li>
              ))}
            </ul>

            <p className="mt-8 text-xs uppercase tracking-[0.18em] text-ink-500">
              Showing {filtered.length} of {campuses.length} campuses
            </p>
          </>
        )}
      </section>
    </>
  );
}

function FlagshipCard({ campus }: { campus: (typeof campuses)[number] }) {
  return (
    <Link
      href={`/locations/${campus.slug}`}
      className="group relative block border hairline bg-ink text-parchment-50 overflow-hidden mb-px hover:border-grace transition-colors"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 20% 30%, #3f0b2a, #2b061d 55%, #180310 100%)",
        }}
        aria-hidden
      />
      <div className="absolute -top-24 -right-24 w-[480px] h-[480px] rounded-full bg-grace/15 blur-3xl" aria-hidden />

      <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 p-8 md:p-12 lg:p-16 min-h-[420px]">
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div className="flex items-center gap-3">
            <span className="text-[11px] uppercase tracking-[0.22em] text-grace-light">
              Flagship campus
            </span>
            <span className="h-px w-8 bg-grace-light" />
            <span className="text-[11px] uppercase tracking-[0.22em] text-ink-300">01</span>
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-[0.22em] text-ink-300 mb-4">
              {campus.country}
            </div>
            <h2 className="font-display text-[clamp(3rem,7vw,6.5rem)] tracking-tight leading-[0.9]">
              {campus.city}.
            </h2>
            {campus.venueHint && (
              <p className="mt-5 text-sm md:text-base text-ink-300 max-w-md">
                {campus.venueHint}
              </p>
            )}
            <div className="mt-8 pt-6 border-t border-parchment-50/15 max-w-xs">
              <PastorAvatar
                name={campus.campusLead?.name}
                image={campus.campusLead?.image}
                size="xl"
                variant="dark"
                fullWidth
              />
              <p className="mt-5 text-[10px] uppercase tracking-[0.22em] text-grace-light">
                {campus.campusLead?.title ?? "Campus pastor"}
              </p>
              <p className="mt-2 font-display text-2xl md:text-3xl text-parchment-50 leading-tight">
                {campus.campusLead?.name ?? "Lead pastor — TBC"}
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col justify-end gap-6">
          <dl className="space-y-5">
            {campus.primaryService && (
              <div className="flex items-baseline justify-between border-b border-parchment-50/15 pb-4">
                <dt className="text-[11px] uppercase tracking-[0.22em] text-ink-300">
                  {campus.primaryService.day}
                </dt>
                <dd className="font-display text-3xl md:text-4xl text-parchment-50">
                  {campus.primaryService.time}
                </dd>
              </div>
            )}
            {campus.midweek && (
              <div className="flex items-baseline justify-between border-b border-parchment-50/15 pb-4">
                <dt className="text-[11px] uppercase tracking-[0.22em] text-ink-300">
                  {campus.midweek.day}
                </dt>
                <dd className="font-display text-3xl md:text-4xl text-parchment-50">
                  {campus.midweek.time}
                </dd>
              </div>
            )}
          </dl>
          <span className="inline-flex items-center gap-3 text-[13px] uppercase tracking-[0.16em] text-grace-light border-b border-grace-light/40 pb-1 self-start group-hover:border-grace-light transition-colors">
            Plan your visit
            <span className="transition-transform group-hover:translate-x-1" aria-hidden>
              →
            </span>
          </span>
        </div>
      </div>
    </Link>
  );
}

function CampusCard({
  campus,
  index,
}: {
  campus: (typeof campuses)[number];
  index: number;
}) {
  return (
    <Link
      href={`/locations/${campus.slug}`}
      className="group block h-full p-7 md:p-8 hover:bg-parchment-100 transition-colors"
    >
      <div className="flex items-center justify-between mb-10">
        <span className="text-[11px] uppercase tracking-[0.22em] text-ink-500">
          {String(index).padStart(2, "0")}
        </span>
        <span
          className={`text-[10px] uppercase tracking-[0.22em] ${
            campus.region === "international" ? "text-grace-dark" : "text-ink-500"
          }`}
        >
          {campus.region === "international" ? "International" : "UK"}
        </span>
      </div>
      <h3 className="font-display text-3xl md:text-4xl text-ink leading-[0.95] tracking-tight">
        {campus.city}
      </h3>
      <p className="mt-2 text-xs uppercase tracking-[0.18em] text-ink-500">{campus.country}</p>

      <div className="mt-6 pt-5 border-t hairline">
        <PastorAvatar
          name={campus.campusLead?.name}
          image={campus.campusLead?.image}
          size="lg"
          fullWidth
        />
        <p className="mt-5 text-[10px] uppercase tracking-[0.22em] text-grace-dark">
          {campus.campusLead?.title ?? "Campus pastor"}
        </p>
        <p className="mt-1 font-display text-xl text-ink leading-tight">
          {campus.campusLead?.name ?? "Lead pastor — TBC"}
        </p>
      </div>

      <div className="mt-6 pt-5 border-t hairline flex items-end justify-between gap-4">
        <dl className="space-y-1.5 flex-1 min-w-0">
          {campus.services && campus.services.length > 0 ? (
            campus.services.map((s) => (
              <div
                key={`${s.day}-${s.time}`}
                className="flex items-baseline justify-between gap-3"
              >
                <dt className="text-[10px] uppercase tracking-[0.18em] text-ink-500">
                  {shortDay(s.day)}
                </dt>
                <dd className="font-display text-sm text-ink tabular-nums">
                  {s.time}
                </dd>
              </div>
            ))
          ) : campus.primaryService ? (
            <div className="flex items-baseline justify-between gap-3">
              <dt className="text-[10px] uppercase tracking-[0.18em] text-ink-500">
                {shortDay(campus.primaryService.day)}
              </dt>
              <dd className="font-display text-sm text-ink tabular-nums">
                {campus.primaryService.time}
              </dd>
            </div>
          ) : (
            <span className="text-xs text-ink-500">Service times on campus page</span>
          )}
        </dl>
        <span
          className="shrink-0 w-8 h-8 rounded-full border hairline flex items-center justify-center text-ink-500 group-hover:bg-ink group-hover:text-parchment-50 group-hover:border-ink transition-colors"
          aria-hidden
        >
          →
        </span>
      </div>
    </Link>
  );
}
