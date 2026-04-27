import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { series, getSeries } from "@/lib/series";

export function generateStaticParams() {
  return series.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = getSeries(slug);
  if (!s) return { title: "Series" };
  return { title: s.title, description: s.description };
}

const tones = {
  ink: "radial-gradient(ellipse at 25% 75%, #3f0b2a, #2b061d 60%, #180310 100%)",
  sage: "radial-gradient(ellipse at 30% 60%, #2c4a3a, #2b061d 70%)",
  gold: "radial-gradient(ellipse at 75% 25%, #b8863b, #2b061d 70%)",
} as const;

export default async function SeriesDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = getSeries(slug);
  if (!s) notFound();

  const others = series.filter((o) => o.slug !== s.slug);

  return (
    <>
      <PageHeader eyebrow={s.eyebrow} title={s.title} intro={s.subtitle}>
        <p className="max-w-2xl text-base text-ink-500 leading-relaxed">{s.description}</p>
        <div className="mt-8 flex flex-wrap gap-5">
          <Link
            href="#messages"
            className="inline-flex items-center gap-3 bg-ink text-parchment-50 px-7 py-4 text-[13px] uppercase tracking-[0.16em] rounded-xs hover:bg-ink-700 transition-colors"
          >
            Browse messages <span aria-hidden>→</span>
          </Link>
          <Link
            href="/messages/audio"
            className="text-[13px] uppercase tracking-[0.16em] text-ink border-b hairline pb-1 hover:border-grace-dark hover:text-grace-dark transition-colors"
          >
            Listen on your podcast app
          </Link>
        </div>
      </PageHeader>

      <section id="messages" className="container-x max-w-[1400px] mx-auto py-20 md:py-24">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-grace" />
              <span className="text-[11px] uppercase tracking-[0.22em] text-grace-dark">
                {s.sermons.length} messages in this series
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl tracking-tight text-ink leading-[1.02]">
              The messages.
            </h2>
          </div>
          <p className="text-sm text-ink-500">Taught by {s.preacher}</p>
        </div>

        <ol className="space-y-px bg-ink/10 border hairline">
          {s.sermons.map((m, i) => (
            <li key={i} className="bg-parchment-50">
              <a
                href="#"
                className="group grid grid-cols-12 gap-4 md:gap-6 p-5 md:p-7 items-center hover:bg-parchment-100 transition-colors"
              >
                <span className="col-span-1 font-display text-2xl text-grace-dark">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="col-span-11 md:col-span-8">
                  <h3 className="font-display text-lg md:text-xl text-ink leading-snug group-hover:text-grace-dark transition-colors">
                    {m.title}
                  </h3>
                  {m.reference && (
                    <p className="mt-1 text-[11px] uppercase tracking-[0.22em] text-ink-500">
                      {m.reference}
                    </p>
                  )}
                </div>
                <div className="col-start-2 md:col-start-auto md:col-span-3 flex items-center justify-end gap-3 text-[11px] uppercase tracking-[0.18em] text-ink-500">
                  <span
                    className="w-8 h-8 rounded-full border hairline flex items-center justify-center group-hover:bg-ink group-hover:text-parchment-50 group-hover:border-ink transition-colors"
                    aria-hidden
                  >
                    ▶
                  </span>
                  <span className="hidden md:inline">Watch / Listen</span>
                </div>
              </a>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-parchment-100 border-y hairline">
        <div className="container-x max-w-[1400px] mx-auto py-16 md:py-20">
          <div className="flex items-end justify-between mb-8 flex-wrap gap-6">
            <h2 className="font-display text-3xl md:text-4xl text-ink tracking-tight">
              Other series.
            </h2>
            <Link
              href="/messages/series"
              className="text-[13px] uppercase tracking-[0.16em] text-ink border-b hairline pb-1 hover:border-grace-dark hover:text-grace-dark transition-colors"
            >
              All series →
            </Link>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-px bg-ink/10 border hairline">
            {others.map((o) => (
              <li key={o.slug} className="bg-parchment-50">
                <Link
                  href={`/messages/series/${o.slug}`}
                  className="group block p-7 md:p-8 h-full hover:bg-parchment-100 transition-colors"
                >
                  <span className="text-[11px] uppercase tracking-[0.22em] text-grace-dark">
                    {o.kind}
                  </span>
                  <h3 className="mt-4 font-display text-2xl text-ink leading-tight group-hover:text-grace-dark transition-colors">
                    {o.title}
                  </h3>
                  <p className="mt-3 text-sm text-ink-500 leading-relaxed">{o.subtitle}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
