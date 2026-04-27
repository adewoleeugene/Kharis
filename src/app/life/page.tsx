import Link from "next/link";
import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { kharisLife } from "@/lib/content";
import { lifeSections } from "@/lib/life";

export const metadata: Metadata = {
  title: "Kharis Life",
  description:
    "A path from first faith to full participation — believer, baptism, KGroups, marriage, children, serving, evangelism. Walk it at your pace; we walk it with you.",
};

const dedicatedRoutes: Record<string, string> = {
  "become-a-believer": "/life/become-a-believer",
  kgroups: "/life/kgroups",
  "young-adults": "/kp2",
};

function hrefFor(slug: string) {
  return dedicatedRoutes[slug] ?? `/life/${slug}`;
}

export default function KharisLifePage() {
  return (
    <>
      <PageHeader
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Kharis Life" }]}
        eyebrow="Kharis Life"
        title="A path from first faith to full participation."
        intro="Kharis Life is the rhythm we keep together — beginning with Christ, gathered in groups, raised in families, sent into the city. Walk it at your pace. We walk it with you."
      />

      <section className="container-x max-w-[1400px] mx-auto py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-14">
          <div className="lg:col-span-7">
            <span className="text-[11px] uppercase tracking-[0.22em] text-grace-dark">The journey</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-ink tracking-tight leading-[1.02]">
              Five steps that shape a life.
            </h2>
          </div>
          <p className="lg:col-span-5 text-ink-500 leading-relaxed max-w-md">
            Not a programme — a posture. Each step is a doorway, and every doorway is open whenever you&rsquo;re ready.
          </p>
        </div>

        <ol className="grid grid-cols-1 md:grid-cols-5 gap-px bg-ink/10 border hairline">
          {kharisLife.map((step) => (
            <li key={step.step} className="bg-parchment-50">
              <Link
                href={step.href}
                className="group block p-7 md:p-8 min-h-[240px] flex flex-col justify-between hover:bg-parchment-100 transition-colors"
              >
                <span className="font-display text-grace-dark text-2xl">{step.step}</span>
                <div>
                  <h3 className="font-display text-2xl text-ink leading-tight">{step.title}</h3>
                  <p className="mt-3 text-sm text-ink-500 leading-relaxed">{step.blurb}</p>
                  <span
                    aria-hidden
                    className="mt-5 inline-block text-[11px] uppercase tracking-[0.18em] text-ink-500 group-hover:text-grace-dark transition-colors"
                  >
                    Read more →
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-ink text-parchment-50 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(ellipse at 80% 0%, rgba(212,168,90,0.18), transparent 50%)",
          }}
          aria-hidden
        />
        <div className="container-x max-w-[1400px] mx-auto py-20 md:py-28 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-8 bg-grace-light" />
                <span className="text-[11px] uppercase tracking-[0.22em] text-grace-light">A word that anchors us</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl tracking-tight leading-[1.02]">
                Grow in grace, and in the knowledge of our Lord.
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-6">
              <p className="font-display text-2xl md:text-3xl italic leading-snug text-parchment-50">
                &ldquo;But grow in grace, and in the knowledge of our Lord and Saviour Jesus Christ.&rdquo;
              </p>
              <p className="text-sm uppercase tracking-[0.18em] text-grace-light">— 2 Peter 3:18</p>
              <p className="text-ink-300 leading-relaxed max-w-xl">
                Every part of Kharis Life is built around that single command: not religious activity, but real growth — in grace, and in the knowledge of Christ.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-x max-w-[1400px] mx-auto py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-14">
          <div className="lg:col-span-7">
            <span className="text-[11px] uppercase tracking-[0.22em] text-grace-dark">All the doorways</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-ink tracking-tight leading-[1.02]">
              Find your next step.
            </h2>
          </div>
          <p className="lg:col-span-5 text-ink-500 leading-relaxed max-w-md">
            Whatever season you&rsquo;re in — first day, first marriage, first child, first call to serve — there&rsquo;s a place for you here.
          </p>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink/10 border hairline">
          {lifeSections.map((s) => (
            <li key={s.slug} className="bg-parchment-50">
              <Link
                href={hrefFor(s.slug)}
                className="group block p-7 md:p-8 min-h-[240px] flex flex-col justify-between hover:bg-parchment-100 transition-colors"
              >
                <span className="text-[11px] uppercase tracking-[0.22em] text-grace-dark">
                  {s.eyebrow}
                </span>
                <div>
                  <h3 className="font-display text-2xl md:text-3xl text-ink leading-tight">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm text-ink-500 leading-relaxed line-clamp-3">
                    {s.intro}
                  </p>
                  <span
                    aria-hidden
                    className="mt-5 inline-block text-[11px] uppercase tracking-[0.18em] text-ink-500 group-hover:text-grace-dark transition-colors"
                  >
                    Read more →
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-parchment-100 border-y hairline">
        <div className="container-x max-w-[1400px] mx-auto py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <span className="text-[11px] uppercase tracking-[0.22em] text-grace-dark">Friday rhythm</span>
              <h2 className="mt-4 font-display text-3xl md:text-4xl text-ink tracking-tight leading-[1.02]">
                Larger and smaller at once.
              </h2>
              <p className="mt-4 text-ink-500 max-w-xl leading-relaxed">
                Kharis grows on Sunday and Thursday — but it grows up on Friday night, in homes and cafés across the city, around Scripture and a kettle. KGroups are how we know each other.
              </p>
            </div>
            <div className="lg:col-span-5 flex flex-wrap gap-4 lg:justify-end">
              <Link
                href="/life/kgroups"
                className="inline-flex items-center gap-3 bg-ink text-parchment-50 px-7 py-4 text-[13px] uppercase tracking-[0.16em] rounded-xs hover:bg-ink-700 transition-colors"
              >
                Join a KGroup <span aria-hidden>→</span>
              </Link>
              <Link
                href="/locations"
                className="inline-flex items-center gap-3 border hairline px-7 py-4 text-[13px] uppercase tracking-[0.16em] text-ink hover:bg-parchment-50 transition-colors"
              >
                Find a campus
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container-x max-w-[1400px] mx-auto py-20 md:py-24">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <h2 className="font-display text-3xl md:text-4xl text-ink tracking-tight">
              Not sure where to begin?
            </h2>
            <p className="mt-3 text-ink-500 max-w-xl">
              Tell us a little about yourself and a pastor on your campus will be in touch — usually within a week.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-ink text-parchment-50 px-7 py-4 text-[13px] uppercase tracking-[0.16em] rounded-xs hover:bg-ink-700 transition-colors"
            >
              Talk to a pastor <span aria-hidden>→</span>
            </Link>
            <Link
              href="/im-new"
              className="inline-flex items-center gap-3 border hairline px-7 py-4 text-[13px] uppercase tracking-[0.16em] text-ink hover:bg-parchment-50 transition-colors"
            >
              I&rsquo;m new here
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
