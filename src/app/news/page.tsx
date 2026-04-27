import Link from "next/link";
import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { announcements } from "@/lib/content";

export const metadata: Metadata = {
  title: "News",
  description:
    "The latest from Kharis Church — new teaching series, KP2 updates, capital campaign news, new campuses and other family announcements.",
};

// Extend with dated archive items as the site matures. Keeping this file as
// the single source means new items flow straight to the home Latest block.
const archive = [
  ...announcements.map((a) => ({ ...a, dateLabel: "Current" })),
  {
    category: "Campus",
    title: "Kharis Reading gathers every Sunday",
    blurb:
      "Our Reading campus now meets weekly. Plan your first visit and say hello to the team.",
    href: "/locations/reading",
    dateLabel: "Earlier",
  },
  {
    category: "Series",
    title: "The Issues of Life — thematic teaching archive",
    blurb:
      "A growing archive of practical teaching on marriage, money, fear, fellowship and purpose.",
    href: "/messages/series/issues-of-life",
    dateLabel: "Earlier",
  },
];

export default function NewsPage() {
  return (
    <>
      <PageHeader
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "News" }]}
        eyebrow="From the family"
        title="What's moving across Kharis."
        intro="Series launches, KP2 updates, capital-campaign milestones and campus news — the things worth telling the whole family about."
      />

      <section className="container-x max-w-[1400px] mx-auto py-14 md:py-20">
        <ul className="space-y-px bg-ink/10 border hairline">
          {archive.map((a, i) => (
            <li key={`${a.href}-${i}`} className="bg-parchment-50">
              <Link
                href={a.href}
                className="group grid grid-cols-12 gap-4 md:gap-6 p-6 md:p-8 items-start hover:bg-parchment-100 transition-colors"
              >
                <div className="col-span-12 md:col-span-2">
                  <div className="text-[11px] uppercase tracking-[0.22em] text-grace-dark">
                    {a.category}
                  </div>
                  <div className="mt-1 text-[11px] uppercase tracking-[0.22em] text-ink-500">
                    {a.dateLabel}
                  </div>
                </div>
                <div className="col-span-12 md:col-span-9">
                  <h2 className="font-display text-2xl md:text-3xl text-ink leading-tight group-hover:text-grace-dark transition-colors">
                    {a.title}
                  </h2>
                  <p className="mt-3 text-ink-500 leading-relaxed max-w-2xl">
                    {a.blurb}
                  </p>
                </div>
                <div className="col-span-12 md:col-span-1 md:text-right">
                  <span
                    className="inline-flex w-9 h-9 rounded-full border hairline items-center justify-center text-ink-500 group-hover:bg-ink group-hover:text-parchment-50 group-hover:border-ink transition-colors"
                    aria-hidden
                  >
                    →
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
