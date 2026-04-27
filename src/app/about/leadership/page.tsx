import Link from "next/link";
import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { pastors, campusPastorSlots } from "@/lib/pastors";

export const metadata: Metadata = {
  title: "Our Pastors",
  description:
    "Meet the pastors and campus leads shepherding the Kharis family across the United Kingdom, Ghana and Sierra Leone — founded in 2003 by Rev. Dr. David Antwi and Pastor Awo Antwi.",
};

export default function LeadershipPage() {
  const founders = pastors.filter((p) => p.founder);

  return (
    <>
      <PageHeader
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Leadership" },
        ]}
        eyebrow="Leadership · Our pastors"
        title="The shepherds of Kharis."
        intro="The Kharis family is led by our founders and a team of campus pastors across three nations. Meet the people who pray for you, teach you, and walk with you through the Christian life."
      />

      <section className="container-x max-w-[1400px] mx-auto py-20 md:py-24">
        <div className="flex items-center gap-3 mb-10">
          <span className="h-px w-8 bg-grace" />
          <span className="text-[11px] uppercase tracking-[0.22em] text-grace-dark">
            Founders
          </span>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-px bg-ink/10 border hairline">
          {founders.map((p) => (
            <li key={p.name} className="bg-parchment-50">
              <article className="p-8 md:p-10 lg:p-12 flex flex-col min-h-[420px]">
                <div
                  className="aspect-[4/3] w-full mb-8 relative overflow-hidden"
                  style={{
                    background:
                      "radial-gradient(ellipse at 30% 25%, #3f0b2a, #2b061d 60%, #180310 100%)",
                  }}
                  aria-hidden
                >
                  <div className="absolute bottom-6 left-6 text-[11px] uppercase tracking-[0.22em] text-grace-light">
                    Kharis {p.campus}
                  </div>
                  <div className="absolute top-6 right-6 w-10 h-10 rounded-full border border-parchment-50/40 flex items-center justify-center text-parchment-50 font-display text-lg">
                    {p.name
                      .split(" ")
                      .slice(-2)
                      .map((s) => s[0])
                      .join("")}
                  </div>
                </div>
                <span className="text-[11px] uppercase tracking-[0.22em] text-grace-dark">
                  {p.title}
                </span>
                <h2 className="mt-3 font-display text-3xl md:text-4xl text-ink leading-tight">
                  {p.name}
                </h2>
                {p.bio && (
                  <p className="mt-5 text-ink-500 leading-relaxed">{p.bio}</p>
                )}
                {p.campusSlug && (
                  <Link
                    href={`/locations/${p.campusSlug}`}
                    className="mt-6 inline-flex text-[13px] uppercase tracking-[0.16em] text-ink border-b hairline pb-1 hover:border-grace-dark hover:text-grace-dark transition-colors self-start"
                  >
                    Visit Kharis {p.campus} →
                  </Link>
                )}
              </article>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-parchment-100 border-y hairline">
        <div className="container-x max-w-[1400px] mx-auto py-20 md:py-24">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-8 bg-grace" />
                <span className="text-[11px] uppercase tracking-[0.22em] text-grace-dark">
                  Campus pastors
                </span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl text-ink tracking-tight leading-[1.02]">
                A pastor in every city.
              </h2>
            </div>
            <p className="text-ink-500 max-w-sm leading-relaxed">
              Every Kharis campus is shepherded by a local lead pastor. Introduce
              yourself at your campus and we&rsquo;ll connect you.
            </p>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink/10 border hairline">
            {campusPastorSlots.map((slot, i) => (
              <li key={slot.campusSlug} className="bg-parchment-50">
                <Link
                  href={`/locations/${slot.campusSlug}`}
                  className="group block h-full p-7 md:p-8 hover:bg-parchment-100 transition-colors"
                >
                  <div className="flex items-center justify-between mb-10">
                    <span className="text-[11px] uppercase tracking-[0.22em] text-ink-500">
                      {String(i + 3).padStart(2, "0")}
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.22em] text-ink-500">
                      {slot.country}
                    </span>
                  </div>
                  <span className="text-[11px] uppercase tracking-[0.22em] text-grace-dark">
                    Campus pastor
                  </span>
                  <h3 className="mt-3 font-display text-2xl md:text-3xl text-ink leading-tight group-hover:text-grace-dark transition-colors">
                    Kharis {slot.campus}
                  </h3>
                  <p className="mt-4 text-sm text-ink-500 leading-relaxed">
                    Name to be introduced — ask on arrival, or{" "}
                    <span className="underline decoration-grace-dark/40 underline-offset-4 group-hover:decoration-grace-dark">
                      visit the campus page
                    </span>
                    .
                  </p>
                </Link>
              </li>
            ))}
          </ul>

          <p className="mt-10 max-w-3xl text-sm text-ink-500 leading-relaxed">
            We&rsquo;re in the process of publishing full profiles for every campus
            pastor. In the meantime, each campus page above carries the direct
            route to reach its team.
          </p>
        </div>
      </section>

      <section className="bg-ink text-parchment-50">
        <div className="container-x max-w-[1400px] mx-auto py-16 md:py-20">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <h2 className="font-display text-3xl md:text-4xl tracking-tight max-w-xl">
              Questions for the pastoral team?
            </h2>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-grace-light text-ink px-7 py-4 text-[13px] uppercase tracking-[0.16em] rounded-xs hover:bg-parchment-50 transition-colors"
              >
                Write to us <span aria-hidden>→</span>
              </Link>
              <Link
                href="/about/governance"
                className="inline-flex items-center gap-3 border border-parchment-50/30 px-7 py-4 text-[13px] uppercase tracking-[0.16em] text-parchment-50 hover:border-grace-light transition-colors"
              >
                Governance &amp; trustees
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
