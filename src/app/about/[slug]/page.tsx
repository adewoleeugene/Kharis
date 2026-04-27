import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { aboutPages, getAboutPage } from "@/lib/about-pages";

export function generateStaticParams() {
  return aboutPages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = getAboutPage(slug);
  if (!p) return { title: "About" };
  return { title: p.title, description: p.intro };
}

function pillarCols(n: number) {
  if (n <= 2) return "md:grid-cols-2";
  if (n === 3) return "md:grid-cols-3";
  return "md:grid-cols-2 lg:grid-cols-4";
}

export default async function AboutSubPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getAboutPage(slug);
  if (!page) notFound();
  const others = aboutPages.filter((p) => p.slug !== slug);

  const crumbLabel = slug
    .split("-")
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join(" ");

  return (
    <>
      <PageHeader
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: crumbLabel },
        ]}
        eyebrow={page.eyebrow}
        title={page.title}
        intro={page.intro}
      />

      {page.blocks?.map((block, i) => (
        <section
          key={i}
          className={i % 2 === 1 ? "bg-parchment-100 border-y hairline" : ""}
        >
          <div className="container-x max-w-[1400px] mx-auto py-20 md:py-24">
            {block.type === "prose" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                {block.heading && (
                  <h2 className="lg:col-span-4 font-display text-3xl md:text-4xl text-ink tracking-tight leading-[1.05]">
                    {block.heading}
                  </h2>
                )}
                <div
                  className={`${
                    block.heading ? "lg:col-span-8" : "lg:col-span-12 max-w-3xl"
                  }`}
                >
                  <p className="text-lg text-ink-500 leading-relaxed">{block.body}</p>
                  {block.actions && block.actions.length > 0 && (
                    <div className="mt-8 flex flex-wrap gap-5">
                      {block.actions.map((a) =>
                        a.primary ? (
                          <a
                            key={a.href}
                            href={a.href}
                            target={a.external ? "_blank" : undefined}
                            rel={a.external ? "noopener noreferrer" : undefined}
                            className="inline-flex items-center gap-3 bg-ink text-parchment-50 px-7 py-4 text-[13px] uppercase tracking-[0.16em] rounded-xs hover:bg-ink-700 transition-colors"
                          >
                            {a.label}{" "}
                            <span aria-hidden>{a.external ? "↗" : "→"}</span>
                          </a>
                        ) : (
                          <a
                            key={a.href}
                            href={a.href}
                            target={a.external ? "_blank" : undefined}
                            rel={a.external ? "noopener noreferrer" : undefined}
                            className="inline-flex items-center gap-3 text-[13px] uppercase tracking-[0.16em] text-ink border-b hairline pb-1 hover:border-grace-dark hover:text-grace-dark transition-colors"
                          >
                            {a.label}{" "}
                            <span aria-hidden>{a.external ? "↗" : "→"}</span>
                          </a>
                        )
                      )}
                    </div>
                  )}
                </div>
              </div>
            )}
            {block.type === "pillars" && (
              <>
                {block.heading && (
                  <h2 className="font-display text-3xl md:text-4xl text-ink tracking-tight mb-10">
                    {block.heading}
                  </h2>
                )}
                <ol
                  className={`grid grid-cols-1 ${pillarCols(
                    block.items.length
                  )} gap-px bg-ink/10 border hairline`}
                >
                  {block.items.map((item, j) => (
                    <li
                      key={j}
                      className="bg-parchment-50 p-7 md:p-9 min-h-[200px] flex flex-col justify-between"
                    >
                      <span className="font-display text-grace-dark text-2xl">
                        {String(j + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="font-display text-2xl text-ink leading-tight">
                          {item.name}
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
            {block.type === "list" && (
              <>
                {block.heading && (
                  <h2 className="font-display text-3xl md:text-4xl text-ink tracking-tight mb-10">
                    {block.heading}
                  </h2>
                )}
                <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-ink/10 border hairline">
                  {block.items.map((item, j) => (
                    <li
                      key={j}
                      className="bg-parchment-50 p-6 md:p-7 flex flex-col gap-5 min-h-[200px]"
                    >
                      <span className="font-display text-grace-dark text-2xl">
                        {String(j + 1).padStart(2, "0")}
                      </span>
                      <p className="text-ink leading-snug text-[15px]">{item}</p>
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
              More about Kharis.
            </h2>
            <Link
              href="/about"
              className="text-[13px] uppercase tracking-[0.16em] text-parchment-50 border-b border-parchment-50/30 pb-1 hover:border-grace-light transition-colors"
            >
              About overview →
            </Link>
          </div>
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-px bg-parchment-50/15 border border-parchment-50/15">
            {others.map((o) => (
              <li key={o.slug} className="bg-ink">
                <Link
                  href={`/about/${o.slug}`}
                  className="group flex flex-col justify-between h-full p-6 min-h-[140px] hover:bg-ink-700 transition-colors"
                >
                  <span className="text-[10px] uppercase tracking-[0.22em] text-ink-300 group-hover:text-grace-light transition-colors">
                    {o.eyebrow}
                  </span>
                  <span className="font-display text-xl text-parchment-50 mt-6 group-hover:text-grace-light transition-colors">
                    {o.title}
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
