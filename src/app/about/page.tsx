import Link from "next/link";
import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { missionPillars, visionCharacteristics, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Founded in 2003 by Pastors David and Awo Antwi, Kharis Church is a teaching-centred family across the United Kingdom, Ghana and Sierra Leone.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
        eyebrow="About Kharis"
        title="A teaching-centred family, rooted in grace."
        intro="Founded in 2003 in London by Pastors David and Awo Antwi, Kharis has grown into fifteen campuses across three nations — built on clear teaching, deep fellowship, and practical love."
      />

      <section className="container-x max-w-[1400px] mx-auto py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <span className="text-[11px] uppercase tracking-[0.22em] text-grace-dark">Mission</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-ink tracking-tight leading-[1.02]">
              To minister to the whole person.
            </h2>
          </div>
          <div className="lg:col-span-7 text-ink-500 text-lg leading-relaxed space-y-6">
            <p className="font-display text-2xl md:text-3xl text-ink italic leading-snug">
              &ldquo;We are a friendly, caring and exciting family church that seeks to
              influence our society with the reality of God&rsquo;s love and the
              reliability of His principles&mdash;by ministering to the spiritual,
              physical, social and emotional needs of people who care to
              experience God in a dynamic and a living way.&rdquo;
            </p>
            <p className="text-sm uppercase tracking-[0.18em] text-ink-500">— Our mission</p>
          </div>
        </div>

        <ol className="mt-14 grid grid-cols-1 md:grid-cols-4 gap-px bg-ink/10 border hairline">
          {missionPillars.map((p, i) => (
            <li key={p.name} className="bg-parchment-50 p-7 md:p-9 min-h-[200px] flex flex-col justify-between">
              <span className="font-display text-grace-dark text-2xl">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display text-2xl text-ink leading-tight">{p.name}</h3>
                <p className="mt-3 text-sm text-ink-500 leading-relaxed">{p.blurb}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-ink text-parchment-50 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(ellipse at 20% 0%, rgba(212,168,90,0.18), transparent 50%)",
          }}
          aria-hidden
        />
        <div className="container-x max-w-[1400px] mx-auto py-24 md:py-32 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-16">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-8 bg-grace-light" />
                <span className="text-[11px] uppercase tracking-[0.22em] text-grace-light">Vision</span>
              </div>
              <h2 className="font-display text-5xl md:text-7xl tracking-tight leading-[0.95]">
                Changing the world <br className="hidden md:inline" />
                with a touch of His grace.
              </h2>
            </div>
            <p className="lg:col-span-5 text-ink-300 leading-relaxed max-w-md">
              Eight characteristics shape the church we are becoming. Read them as aspirations we refuse to let go of.
            </p>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-parchment-50/15 border border-parchment-50/15">
            {visionCharacteristics.map((v, i) => (
              <li key={v.heading} className="bg-ink p-7 md:p-8 min-h-[220px] flex flex-col justify-between">
                <span className="font-display text-grace-light text-xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-2xl text-parchment-50 leading-tight">{v.heading}</h3>
                  <p className="mt-3 text-sm text-ink-300 leading-relaxed">{v.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-x max-w-[1400px] mx-auto py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <span className="text-[11px] uppercase tracking-[0.22em] text-grace-dark">Founders</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-ink tracking-tight leading-[1.02]">
              Pastors David &amp; Awo Antwi.
            </h2>
          </div>
          <div className="lg:col-span-7 text-ink-500 text-lg leading-relaxed space-y-5">
            <p>
              Pastors David and Awo founded Kharis Church in 2003 — a multifaceted ministry
              headquartered in London with branches across the United Kingdom, Ghana and Sierra Leone.
            </p>
            <p>
              They also founded <strong className="text-ink">Kharis Phase 2 (KP2)</strong>, our students&rsquo; and young people&rsquo;s services,
              and have established a presence on UK university campuses.
            </p>
            <p>
              Married for over twenty years with two children, their focus is on establishing
              believers in the faith, strengthening local churches, and pursuing revival across nations.
            </p>
            <div className="pt-4 flex flex-wrap gap-5">
              <Link
                href="/about/leadership"
                className="text-[13px] uppercase tracking-[0.16em] text-ink border-b hairline pb-1 hover:border-grace-dark hover:text-grace-dark transition-colors"
              >
                Full leadership team →
              </Link>
              <Link
                href="/about/governance"
                className="text-[13px] uppercase tracking-[0.16em] text-ink border-b hairline pb-1 hover:border-grace-dark hover:text-grace-dark transition-colors"
              >
                Governance & trustees →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-parchment-100 border-y hairline">
        <div className="container-x max-w-[1400px] mx-auto py-16 md:py-20">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div>
              <h2 className="font-display text-3xl md:text-4xl text-ink tracking-tight">
                Come meet us in person.
              </h2>
              <p className="mt-3 text-ink-500">
                Fifteen campuses across three nations. Find yours and we&rsquo;ll meet you at the door.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/locations"
                className="inline-flex items-center gap-3 bg-ink text-parchment-50 px-7 py-4 text-[13px] uppercase tracking-[0.16em] rounded-xs hover:bg-ink-700 transition-colors"
              >
                Find a campus <span aria-hidden>→</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 border hairline px-7 py-4 text-[13px] uppercase tracking-[0.16em] text-ink hover:bg-parchment-50 transition-colors"
              >
                Contact {site.name}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
