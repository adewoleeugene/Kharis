import Link from "next/link";
import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { series } from "@/lib/series";

export const metadata: Metadata = {
  title: "Series",
  description:
    "All teaching series from Kharis Church — verse-by-verse expository teaching, thematic explorations, and seasonal specials from Pastor David Antwi.",
};

const tones = {
  ink: "radial-gradient(ellipse at 25% 75%, #3f0b2a, #2b061d 60%, #180310 100%)",
  sage: "radial-gradient(ellipse at 30% 60%, #2c4a3a, #2b061d 70%)",
  gold: "radial-gradient(ellipse at 75% 25%, #b8863b, #2b061d 70%)",
} as const;

export default function SeriesIndexPage() {
  return (
    <>
      <PageHeader
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Messages", href: "/messages" },
          { label: "Series" },
        ]}
        eyebrow="Every teaching series"
        title="Work through the Word, book by book."
        intro="From verse-by-verse expositions to thematic explorations and seasonal specials — every Kharis series in one place."
      />

      <section className="container-x max-w-[1400px] mx-auto py-14 md:py-20">
        <ul className="space-y-px bg-ink/10 border hairline">
          {series.map((s) => (
            <li key={s.slug} className="bg-parchment-50">
              <Link
                href={`/messages/series/${s.slug}`}
                className="group grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 p-6 md:p-8 hover:bg-parchment-100 transition-colors"
              >
                <div
                  className="lg:col-span-4 aspect-[4/3] lg:aspect-auto relative overflow-hidden bg-ink min-h-[180px]"
                  style={{ background: tones[s.tone] }}
                  aria-hidden
                >
                  <div className="absolute top-6 left-6 text-[11px] uppercase tracking-[0.22em] text-grace-light">
                    {s.kind}
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 font-display text-3xl md:text-4xl text-parchment-50 leading-[0.95]">
                    {s.title.split(" ").slice(0, 2).join(" ")}
                  </div>
                </div>

                <div className="lg:col-span-8 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] uppercase tracking-[0.22em] text-grace-dark">
                      {s.eyebrow}
                    </span>
                    <h2 className="mt-4 font-display text-3xl md:text-4xl text-ink leading-tight tracking-tight group-hover:text-grace-dark transition-colors">
                      {s.title}
                    </h2>
                    <p className="mt-3 text-ink-500 leading-relaxed max-w-2xl">
                      {s.subtitle}
                    </p>
                  </div>
                  <div className="mt-6 pt-6 border-t hairline flex items-center justify-between text-[11px] uppercase tracking-[0.22em] text-ink-500">
                    <span>
                      {s.sermons.length} {s.sermons.length === 1 ? "message" : "messages"}
                    </span>
                    <span className="group-hover:text-grace-dark transition-colors">
                      Explore series →
                    </span>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
