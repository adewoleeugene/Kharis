import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { events, formatEventDate, formatDateRange } from "@/lib/events";

export function generateStaticParams() {
  return events.map((e) => ({ slug: e.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  return params.then(({ slug }) => {
    const e = events.find((x) => x.slug === slug);
    if (!e) return { title: "Event" };
    return {
      title: e.title,
      description: e.summary,
    };
  });
}

const toneStyles = {
  ink: "radial-gradient(ellipse at 20% 30%, #3f0b2a, #2b061d 60%, #180310 100%)",
  sage: "radial-gradient(ellipse at 30% 70%, #2c4a3a, #2b061d 65%)",
  gold: "radial-gradient(ellipse at 70% 20%, #b8863b, #2b061d 70%)",
} as const;

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = events.find((e) => e.slug === slug);
  if (!event) notFound();

  const d = formatEventDate(event.startsAt);
  const range = formatDateRange(event.startsAt, event.endsAt);
  const related = events.filter((e) => e.slug !== event.slug).slice(0, 3);

  return (
    <>
      <section className="relative bg-ink text-parchment-50 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ background: toneStyles[event.tone] }}
          aria-hidden
        />
        <div
          className="absolute -top-40 -right-40 w-[640px] h-[640px] rounded-full bg-grace/15 blur-3xl"
          aria-hidden
        />
        <div className="container-x max-w-[1400px] mx-auto pt-20 md:pt-28 pb-24 md:pb-32 relative">
          <Link
            href="/events"
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-ink-300 hover:text-grace-light transition-colors"
          >
            <span aria-hidden>←</span> All events
          </Link>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-8 bg-grace-light" />
                <span className="text-[11px] uppercase tracking-[0.22em] text-grace-light">
                  {event.category}
                </span>
              </div>
              <h1 className="font-display tracking-tight leading-[0.9] text-[clamp(2.75rem,7vw,6rem)]">
                {event.title}
              </h1>
              <p className="mt-6 font-display italic text-xl md:text-2xl text-ink-300 max-w-2xl leading-snug">
                {event.tagline}
              </p>
            </div>

            <div className="lg:col-span-4">
              <div className="border border-parchment-50/20 bg-ink-900/50 backdrop-blur-sm p-8 md:p-10">
                <div className="flex items-baseline gap-5 mb-6 pb-6 border-b border-parchment-50/15">
                  <div>
                    <div className="font-display text-7xl leading-none text-parchment-50">{d.day}</div>
                    <div className="text-sm font-display tracking-wide text-grace-light mt-1">
                      {d.monthShort} {d.year}
                    </div>
                  </div>
                  <div className="text-[11px] uppercase tracking-[0.22em] text-ink-300 border-l border-parchment-50/15 pl-5 self-stretch flex flex-col justify-end pb-1">
                    <span>{d.weekday}</span>
                    <span className="text-parchment-50 font-display text-2xl tracking-wide mt-1">
                      {d.time}
                    </span>
                  </div>
                </div>

                <dl className="space-y-4 mb-8">
                  <div>
                    <dt className="text-[11px] uppercase tracking-[0.22em] text-ink-300">Dates</dt>
                    <dd className="mt-1 text-sm text-parchment-50">{range}</dd>
                  </div>
                  <div>
                    <dt className="text-[11px] uppercase tracking-[0.22em] text-ink-300">Location</dt>
                    <dd className="mt-1 text-sm text-parchment-50">{event.location}</dd>
                    {event.venueLine && (
                      <dd className="mt-1 text-xs text-ink-300">{event.venueLine}</dd>
                    )}
                  </div>
                  {event.capacity && (
                    <div>
                      <dt className="text-[11px] uppercase tracking-[0.22em] text-ink-300">
                        Capacity
                      </dt>
                      <dd className="mt-1 text-sm text-parchment-50">{event.capacity}</dd>
                    </div>
                  )}
                </dl>

                <Link
                  href={event.registerHref ?? "#register"}
                  className="inline-flex w-full items-center justify-center gap-3 bg-grace-light text-ink px-7 py-4 text-[13px] uppercase tracking-[0.16em] rounded-xs hover:bg-parchment-50 transition-colors"
                >
                  Register now <span aria-hidden>→</span>
                </Link>
                <p className="mt-4 text-[11px] uppercase tracking-[0.22em] text-ink-300 text-center">
                  Free · confirm on arrival
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-x max-w-[1400px] mx-auto py-20 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-grace" />
              <span className="text-[11px] uppercase tracking-[0.22em] text-grace-dark">
                About the gathering
              </span>
            </div>
            <p className="font-display text-2xl md:text-3xl text-ink leading-snug max-w-2xl">
              {event.summary}
            </p>
            <div className="mt-10 space-y-5 text-ink-500 leading-relaxed max-w-2xl">
              <p>
                We&rsquo;re praying for this gathering with the expectation that lives
                are changed, communities are strengthened, and the Word goes out
                in power. If you&rsquo;ve never joined a Kharis event before, this is
                a good place to start.
              </p>
              <p>
                Arrive 30 minutes early for the best seats. Tea and coffee are
                on. Children&rsquo;s ministry runs where applicable — ask a welcome
                team member on the day.
              </p>
            </div>

            {event.campus && (
              <div className="mt-10 border-t hairline pt-8">
                <span className="text-[11px] uppercase tracking-[0.22em] text-ink-500">
                  Open to these campuses
                </span>
                <p className="mt-3 font-display text-xl text-ink">{event.campus}</p>
              </div>
            )}
          </div>

          <aside id="register" className="lg:col-span-4 lg:sticky lg:top-28 self-start">
            <div className="border hairline bg-parchment-100 p-7 md:p-8">
              <span className="text-[11px] uppercase tracking-[0.22em] text-grace-dark">
                Need to know
              </span>
              <ul className="mt-5 space-y-4 text-sm text-ink">
                <li className="flex justify-between gap-4 pb-3 border-b hairline">
                  <span className="text-ink-500">Cost</span>
                  <span>Free unless noted</span>
                </li>
                <li className="flex justify-between gap-4 pb-3 border-b hairline">
                  <span className="text-ink-500">Age</span>
                  <span>All ages welcome</span>
                </li>
                <li className="flex justify-between gap-4 pb-3 border-b hairline">
                  <span className="text-ink-500">Accessibility</span>
                  <span>Step-free access</span>
                </li>
                <li className="flex justify-between gap-4">
                  <span className="text-ink-500">Language</span>
                  <span>English</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="mt-8 inline-flex w-full items-center justify-center gap-3 border hairline px-6 py-3 text-[13px] uppercase tracking-[0.16em] text-ink hover:bg-parchment-50 transition-colors"
              >
                Ask a question
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-parchment-100 border-y hairline">
        <div className="container-x max-w-[1400px] mx-auto py-16 md:py-20">
          <div className="flex items-end justify-between mb-10 gap-6 flex-wrap">
            <h2 className="font-display text-3xl md:text-4xl text-ink tracking-tight">
              More to come.
            </h2>
            <Link
              href="/events"
              className="text-[13px] uppercase tracking-[0.16em] text-ink border-b hairline pb-1 hover:border-grace-dark hover:text-grace-dark transition-colors"
            >
              All events →
            </Link>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-px bg-ink/10 border hairline">
            {related.map((r) => {
              const rd = formatEventDate(r.startsAt);
              return (
                <li key={r.slug} className="bg-parchment-50">
                  <Link
                    href={`/events/${r.slug}`}
                    className="group block h-full p-7 md:p-8 hover:bg-parchment-100 transition-colors"
                  >
                    <div className="flex items-baseline justify-between mb-8">
                      <div>
                        <div className="font-display text-4xl text-ink leading-none">{rd.day}</div>
                        <div className="text-xs font-display text-grace-dark mt-1">
                          {rd.monthShort}
                        </div>
                      </div>
                      <span className="text-[10px] uppercase tracking-[0.22em] text-ink-500">
                        {r.category}
                      </span>
                    </div>
                    <h3 className="font-display text-xl text-ink leading-tight group-hover:text-grace-dark transition-colors">
                      {r.title}
                    </h3>
                    <p className="mt-3 text-xs uppercase tracking-[0.18em] text-ink-500">
                      {r.location}
                    </p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}
