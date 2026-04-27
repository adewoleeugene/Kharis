import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { campuses, getCampus } from "@/lib/campuses";

export function generateStaticParams() {
  return campuses.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = getCampus(slug);
  if (!c) return { title: "Campus" };
  const base = `Kharis ${c.city}`;
  return {
    title: base,
    description: c.intro
      ? c.intro
      : `Kharis Church ${c.city} — part of the Kharis family in ${c.country}. Find service times, venue details and how to plan your first visit.`,
  };
}

export default async function CampusPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const campus = getCampus(slug);
  if (!campus) notFound();

  const siblings = campuses
    .filter((c) => c.region === campus.region && c.slug !== campus.slug)
    .slice(0, 6);

  const hasSchedule = (campus.services?.length ?? 0) > 0;

  return (
    <>
      <PageHeader
        eyebrow={
          campus.flagship
            ? `Kharis ${campus.city} · Flagship campus`
            : `Kharis ${campus.city} · ${campus.country}`
        }
        title={
          campus.flagship
            ? "You have a home in the capital."
            : `You have a home in ${campus.city}.`
        }
        intro={
          campus.intro ??
          `Part of the Kharis family in ${campus.country}. Every week we gather around Scripture, prayer and community — and we'd love to meet you.`
        }
      >
        <div className="flex flex-wrap gap-5">
          <Link
            href="#visit"
            className="inline-flex items-center gap-3 bg-ink text-parchment-50 px-7 py-4 text-[13px] uppercase tracking-[0.16em] rounded-xs hover:bg-ink-700 transition-colors"
          >
            {hasSchedule ? "Plan your visit" : "Get in touch"} <span aria-hidden>→</span>
          </Link>
          <Link
            href="/im-new"
            className="text-[13px] uppercase tracking-[0.16em] text-ink border-b hairline pb-1 hover:border-grace-dark hover:text-grace-dark transition-colors"
          >
            I&rsquo;m new to Kharis
          </Link>
        </div>
      </PageHeader>

      <section id="visit" className="container-x max-w-[1400px] mx-auto py-20 md:py-24">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-grace" />
              <span className="text-[11px] uppercase tracking-[0.22em] text-grace-dark">
                Weekly schedule
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl tracking-tight text-ink leading-[1.02]">
              When we gather.
            </h2>
          </div>
        </div>

        {hasSchedule ? (
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-px bg-ink/10 border hairline">
            {campus.services!.map((s) => (
              <li
                key={`${s.day}-${s.time}`}
                className="bg-parchment-50 p-8 md:p-10 flex flex-col justify-between min-h-[320px]"
              >
                <div>
                  <span className="text-[11px] uppercase tracking-[0.22em] text-grace-dark">
                    {s.day}
                  </span>
                  <div className="mt-5 font-display text-6xl md:text-7xl text-ink leading-none">
                    {s.time}
                  </div>
                  {s.note && (
                    <p className="mt-4 text-sm text-ink-500 leading-relaxed">{s.note}</p>
                  )}
                </div>
                {(s.venue || s.address) && (
                  <div className="mt-8 pt-5 border-t hairline">
                    {s.venue && (
                      <div className="font-display text-lg text-ink leading-tight">
                        {s.venue}
                      </div>
                    )}
                    {s.address && (
                      <div className="text-xs uppercase tracking-[0.18em] text-ink-500 mt-1">
                        {s.address}
                      </div>
                    )}
                    {s.transport && (
                      <div className="text-xs text-ink-500 mt-2">{s.transport}</div>
                    )}
                  </div>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <div className="border hairline bg-parchment-100 p-8 md:p-12 max-w-3xl">
            <span className="text-[11px] uppercase tracking-[0.22em] text-grace-dark">
              Confirming with the campus
            </span>
            <h3 className="mt-4 font-display text-3xl md:text-4xl text-ink leading-tight">
              We&rsquo;ll share {campus.city} times on request.
            </h3>
            <p className="mt-5 text-ink-500 leading-relaxed max-w-xl">
              While we finalise this page, the quickest way to get the latest service
              times and venue for Kharis {campus.city} is to send us a quick note.
              We&rsquo;ll reply within a day.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-3 bg-ink text-parchment-50 px-7 py-4 text-[13px] uppercase tracking-[0.16em] rounded-xs hover:bg-ink-700 transition-colors"
            >
              Message Kharis {campus.city} <span aria-hidden>→</span>
            </Link>
          </div>
        )}
      </section>

      {campus.campusLead && (
        <section className="bg-parchment-100 border-y hairline">
          <div className="container-x max-w-[1400px] mx-auto py-20 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-5">
                <div className="flex items-center gap-3 mb-4">
                  <span className="h-px w-8 bg-grace" />
                  <span className="text-[11px] uppercase tracking-[0.22em] text-grace-dark">
                    Campus lead
                  </span>
                </div>
                <h2 className="font-display text-4xl md:text-5xl tracking-tight text-ink leading-[1.02]">
                  {campus.campusLead.name}.
                </h2>
                <p className="mt-4 text-[11px] uppercase tracking-[0.22em] text-ink-500">
                  {campus.campusLead.title}
                </p>
                <p className="mt-6 text-ink-500 leading-relaxed max-w-md">
                  The teaching here anchors every Kharis campus. Start with the
                  current series, then come meet the family.
                </p>
                <Link
                  href="/messages"
                  className="mt-8 inline-flex text-[13px] uppercase tracking-[0.16em] text-ink border-b hairline pb-1 hover:border-grace-dark hover:text-grace-dark transition-colors"
                >
                  Current teaching →
                </Link>
              </div>

              <div className="lg:col-span-7">
                <h3 className="font-display text-2xl md:text-3xl text-ink tracking-tight mb-6">
                  Visiting for the first time?
                </h3>
                <ol className="space-y-4">
                  {[
                    {
                      n: "01",
                      h: "Come a little early",
                      b: "Doors open 30 minutes before the service. Coffee is on; we'd love to say hello.",
                    },
                    {
                      n: "02",
                      h: "Look for the welcome team",
                      b: "They're the ones in the warm smiles. They'll help you find seats and show you around.",
                    },
                    {
                      n: "03",
                      h: "Kids are taken care of",
                      b: "Children's ministry runs during Sunday service — Kinder (3–6), Super (7–11), Transition (12–16).",
                    },
                    {
                      n: "04",
                      h: "Stay afterwards",
                      b: "The best conversations happen over tea in the foyer. Bring your questions.",
                    },
                  ].map((step) => (
                    <li
                      key={step.n}
                      className="bg-parchment-50 border hairline p-6 md:p-7 flex gap-6"
                    >
                      <span className="font-display text-2xl text-grace-dark shrink-0 w-10">
                        {step.n}
                      </span>
                      <div>
                        <h4 className="font-display text-xl text-ink leading-tight">
                          {step.h}
                        </h4>
                        <p className="mt-2 text-sm text-ink-500 leading-relaxed">
                          {step.b}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="bg-ink text-parchment-50">
        <div className="container-x max-w-[1400px] mx-auto py-20 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-8 bg-grace-light" />
                <span className="text-[11px] uppercase tracking-[0.22em] text-grace-light">
                  {hasSchedule ? "Directions" : "Contact"}
                </span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl tracking-tight leading-[1.02]">
                {hasSchedule ? "How to reach us." : "Talk to the team."}
              </h2>

              {hasSchedule ? (
                <dl className="mt-10 space-y-6">
                  {campus.services!
                    .filter((s) => s.address)
                    .map((s) => (
                      <div
                        key={`${s.day}-addr`}
                        className="flex gap-6 pb-6 border-b border-parchment-50/10 last:border-0"
                      >
                        <dt className="w-28 shrink-0 text-[11px] uppercase tracking-[0.22em] text-ink-300 pt-1">
                          {s.day}
                        </dt>
                        <dd>
                          {s.venue && (
                            <div className="font-display text-xl text-parchment-50">
                              {s.venue}
                            </div>
                          )}
                          <div className="text-sm text-ink-300 mt-1">
                            {s.address}
                            {s.transport && ` · ${s.transport}`}
                          </div>
                        </dd>
                      </div>
                    ))}
                </dl>
              ) : (
                <p className="mt-8 text-ink-300 leading-relaxed max-w-md">
                  We keep venue details current with the local team. Drop us a note
                  and we&rsquo;ll send the address, parking notes and a warm welcome
                  — usually within a day.
                </p>
              )}
            </div>

            <div className="border border-parchment-50/15 bg-ink-700/40 backdrop-blur-sm p-8 md:p-10">
              <span className="text-[11px] uppercase tracking-[0.22em] text-ink-300">
                Get in touch
              </span>
              <h3 className="mt-4 font-display text-3xl text-parchment-50 leading-tight">
                Questions before you come?
              </h3>
              <p className="mt-4 text-ink-300 leading-relaxed">
                Speak to a member of the team at the admin desk on a Sunday, or message
                us ahead of time. We&rsquo;ll make sure someone&rsquo;s expecting you.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-3 bg-grace-light text-ink px-7 py-4 text-[13px] uppercase tracking-[0.16em] rounded-xs hover:bg-parchment-50 transition-colors"
              >
                Message Kharis {campus.city} <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {siblings.length > 0 && (
        <section className="container-x max-w-[1400px] mx-auto py-20 md:py-24">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-6">
            <h2 className="font-display text-3xl md:text-4xl text-ink tracking-tight">
              Other campuses in the {campus.region === "uk" ? "United Kingdom" : "region"}.
            </h2>
            <Link
              href="/locations"
              className="text-[13px] uppercase tracking-[0.16em] text-ink border-b hairline pb-1 hover:border-grace-dark hover:text-grace-dark transition-colors"
            >
              All campuses →
            </Link>
          </div>

          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-ink/10 border hairline">
            {siblings.map((s) => (
              <li key={s.slug} className="bg-parchment-50">
                <Link
                  href={`/locations/${s.slug}`}
                  className="group flex flex-col justify-between h-full p-6 hover:bg-parchment-100 transition-colors min-h-[140px]"
                >
                  <span className="text-[10px] uppercase tracking-[0.22em] text-ink-500">
                    {s.country}
                  </span>
                  <span className="font-display text-2xl text-ink mt-4 group-hover:text-grace-dark transition-colors">
                    {s.city}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  );
}
