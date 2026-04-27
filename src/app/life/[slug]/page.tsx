import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { lifeSections, getLifeSection, getJourneyIndex } from "@/lib/life";

export function generateStaticParams() {
  return lifeSections.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = getLifeSection(slug);
  if (!s) return { title: "Kharis Life" };
  return { title: s.title, description: s.intro };
}

function colsFor(n: number) {
  if (n <= 2) return "md:grid-cols-2";
  if (n === 3) return "md:grid-cols-3";
  return "md:grid-cols-2 lg:grid-cols-4";
}

export default async function LifePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const section = getLifeSection(slug);
  if (!section) notFound();

  const currentJourneyIdx = getJourneyIndex(slug);
  const related = lifeSections
    .filter((s) => {
      if (s.slug === slug) return false;
      // If this page is on the journey, hide anything earlier in the journey.
      // Topical pages (idx -1) are always allowed.
      if (currentJourneyIdx === -1) return true;
      const otherIdx = getJourneyIndex(s.slug);
      return otherIdx === -1 || otherIdx > currentJourneyIdx;
    })
    .slice(0, 4);

  return (
    <>
      <PageHeader
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Kharis Life", href: "/life" },
          { label: section.title.replace(/\.$/, "") },
        ]}
        eyebrow={section.eyebrow}
        title={section.title}
        intro={section.intro}
      >
        {(section.ctaPrimary || section.ctaSecondary) && (
          <div className="flex flex-wrap gap-5">
            {section.ctaPrimary && (
              <Link
                href={section.ctaPrimary.href}
                className="inline-flex items-center gap-3 bg-ink text-parchment-50 px-7 py-4 text-[13px] uppercase tracking-[0.16em] rounded-xs hover:bg-ink-700 transition-colors"
              >
                {section.ctaPrimary.label} <span aria-hidden>→</span>
              </Link>
            )}
            {section.ctaSecondary && (
              <Link
                href={section.ctaSecondary.href}
                className="text-[13px] uppercase tracking-[0.16em] text-ink border-b hairline pb-1 hover:border-grace-dark hover:text-grace-dark transition-colors"
              >
                {section.ctaSecondary.label}
              </Link>
            )}
          </div>
        )}
      </PageHeader>

      {section.scripture && (
        <section className="container-x max-w-[1400px] mx-auto py-16 md:py-20 border-b hairline">
          <figure className="max-w-3xl">
            <blockquote className="font-display text-3xl md:text-4xl text-ink leading-snug">
              <span className="text-grace">&ldquo;</span>
              {section.scripture.quote}
              <span className="text-grace">&rdquo;</span>
            </blockquote>
            <figcaption className="mt-5 text-[11px] uppercase tracking-[0.22em] text-ink-500">
              — {section.scripture.ref}
            </figcaption>
          </figure>
        </section>
      )}

      {section.blocks?.map((block, i) => (
        <section
          key={i}
          className={
            i % 2 === 1
              ? "bg-parchment-100 border-y hairline"
              : ""
          }
        >
          <div className="container-x max-w-[1400px] mx-auto py-20 md:py-24">
            {block.type === "prose" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                {block.heading && (
                  <h2 className="lg:col-span-4 font-display text-3xl md:text-4xl text-ink tracking-tight leading-[1.05]">
                    {block.heading}
                  </h2>
                )}
                <p
                  className={`${
                    block.heading ? "lg:col-span-8" : "lg:col-span-12 max-w-3xl"
                  } text-lg text-ink-500 leading-relaxed`}
                >
                  {block.body}
                </p>
              </div>
            )}
            {block.type === "cards" && (
              <>
                {block.heading && (
                  <h2 className="font-display text-3xl md:text-4xl text-ink tracking-tight mb-10">
                    {block.heading}
                  </h2>
                )}
                <ul
                  className={`grid grid-cols-1 ${colsFor(
                    block.items.length
                  )} gap-px bg-ink/10 border hairline`}
                >
                  {block.items.map((item, j) => (
                    <li
                      key={j}
                      className="bg-parchment-50 p-7 md:p-9 flex flex-col min-h-[240px]"
                    >
                      {item.meta && (
                        <span className="text-[11px] uppercase tracking-[0.22em] text-grace-dark">
                          {item.meta}
                        </span>
                      )}
                      <h3
                        className={`font-display text-2xl text-ink leading-tight ${
                          item.meta ? "mt-4" : ""
                        }`}
                      >
                        {item.title}
                      </h3>
                      <p className="mt-4 text-sm text-ink-500 leading-relaxed">
                        {item.body}
                      </p>
                    </li>
                  ))}
                </ul>
              </>
            )}
            {block.type === "steps" && (
              <>
                {block.heading && (
                  <h2 className="font-display text-3xl md:text-4xl text-ink tracking-tight mb-10">
                    {block.heading}
                  </h2>
                )}
                <ol
                  className={`grid grid-cols-1 ${colsFor(
                    block.items.length
                  )} gap-px bg-ink/10 border hairline`}
                >
                  {block.items.map((item) => (
                    <li
                      key={item.n}
                      className="bg-parchment-50 p-7 md:p-8 flex flex-col justify-between min-h-[220px]"
                    >
                      <span className="font-display text-2xl text-grace-dark">
                        {item.n}
                      </span>
                      <div>
                        <h3 className="font-display text-xl text-ink leading-tight">
                          {item.title}
                        </h3>
                        <p className="mt-3 text-sm text-ink-500 leading-relaxed">
                          {item.body}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </>
            )}
          </div>
        </section>
      ))}

      <section className="bg-ink text-parchment-50">
        <div className="container-x max-w-[1400px] mx-auto py-16 md:py-20">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-6">
            <h2 className="font-display text-3xl md:text-4xl tracking-tight">
              Continue the journey.
            </h2>
            {section.next &&
              (() => {
                const target = section.next.href ?? `/life/${section.next.slug}`;
                const fallbackTitle = getLifeSection(section.next.slug)?.title.replace(
                  /\.$/,
                  ""
                );
                const label = section.next.label ?? `On to ${fallbackTitle ?? "next"}`;
                return (
                  <Link
                    href={target}
                    className="text-[13px] uppercase tracking-[0.16em] text-grace-light border-b border-grace-light/40 pb-1 hover:border-grace-light transition-colors"
                  >
                    {label} →
                  </Link>
                );
              })()}
          </div>
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-px bg-parchment-50/15 border border-parchment-50/15">
            {related.map((r) => (
              <li key={r.slug} className="bg-ink">
                <Link
                  href={`/life/${r.slug}`}
                  className="group flex flex-col justify-between h-full p-6 min-h-[140px] hover:bg-ink-700 transition-colors"
                >
                  <span className="text-[10px] uppercase tracking-[0.22em] text-ink-300 group-hover:text-grace-light transition-colors">
                    {r.eyebrow}
                  </span>
                  <span className="font-display text-xl text-parchment-50 mt-6 group-hover:text-grace-light transition-colors">
                    {r.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
