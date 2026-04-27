import Link from "next/link";
import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";

export const metadata: Metadata = {
  title: "I'm New",
  description:
    "Planning your first visit to Kharis Church — what to expect, what to wear, where your kids go, and how to get in touch before you come.",
};

const steps = [
  {
    n: "01",
    title: "Come a little early",
    body: "Doors open 30 minutes before the service. Coffee&rsquo;s on — we&rsquo;d love to say hello.",
  },
  {
    n: "02",
    title: "Look for the welcome team",
    body: "They&rsquo;re the warm smiles. They&rsquo;ll find you seats and show you around.",
  },
  {
    n: "03",
    title: "Kids are sorted",
    body: "Kinder (3–6), Super (7–11), Transition (12–16) — during Sunday service.",
  },
  {
    n: "04",
    title: "Stay afterwards",
    body: "The best conversations happen over tea in the foyer. Bring your questions.",
  },
];

const faqs = [
  {
    q: "What should I wear?",
    a: "Whatever feels comfortable. Most people dress smart-casual; some wear suits, some wear trainers. There is no uniform.",
  },
  {
    q: "How long is the service?",
    a: "Plan on ninety minutes. Worship, the Word, prayer. A little longer if it's a special Sunday.",
  },
  {
    q: "Do I have to give?",
    a: "No. Giving is a response, not a requirement. If it's your first time, we'd rather you just come and receive.",
  },
  {
    q: "What about my kids?",
    a: "Children's ministry runs during the service in three age bands — Kinder, Super, Transition. Leaders are all DBS-checked.",
  },
  {
    q: "What if I'm not a Christian?",
    a: "Welcome. Kharis is for seekers as much as believers. Come, listen, ask questions — take your time.",
  },
];

export default function ImNewPage() {
  return (
    <>
      <PageHeader
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Kharis Life", href: "/life" },
          { label: "I'm New" },
        ]}
        eyebrow="Welcome home"
        title="Coming for the first time? Breathe."
        intro="You don't need to dress a certain way, know the songs, or bring anything. Just come as you are — we'll meet you at the door and walk the rest of the way with you."
      >
        <div className="flex flex-wrap gap-5">
          <Link
            href="/locations"
            className="inline-flex items-center gap-3 bg-ink text-parchment-50 px-7 py-4 text-[13px] uppercase tracking-[0.16em] rounded-xs hover:bg-ink-700 transition-colors"
          >
            Find your campus <span aria-hidden>→</span>
          </Link>
          <Link
            href="/contact"
            className="text-[13px] uppercase tracking-[0.16em] text-ink border-b hairline pb-1 hover:border-grace-dark hover:text-grace-dark transition-colors"
          >
            Let us know you&rsquo;re coming
          </Link>
        </div>
      </PageHeader>

      <section className="container-x max-w-[1400px] mx-auto py-20 md:py-24">
        <div className="flex items-center gap-3 mb-8">
          <span className="h-px w-8 bg-grace" />
          <span className="text-[11px] uppercase tracking-[0.22em] text-grace-dark">
            What to expect
          </span>
        </div>
        <h2 className="font-display text-4xl md:text-5xl text-ink tracking-tight leading-[1.02] max-w-3xl mb-10">
          Four small things worth knowing.
        </h2>

        <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-ink/10 border hairline">
          {steps.map((s) => (
            <li
              key={s.n}
              className="bg-parchment-50 p-7 md:p-8 flex flex-col gap-10 min-h-[280px]"
            >
              <span className="font-display text-2xl text-grace-dark">{s.n}</span>
              <div>
                <h3 className="font-display text-xl text-ink leading-tight">{s.title}</h3>
                <p
                  className="mt-3 text-sm text-ink-500 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: s.body }}
                />
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-parchment-100 border-y hairline">
        <div className="container-x max-w-[1400px] mx-auto py-20 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-8 bg-grace" />
                <span className="text-[11px] uppercase tracking-[0.22em] text-grace-dark">
                  Common questions
                </span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl tracking-tight text-ink leading-[1.02]">
                Asked a lot. <br className="hidden md:inline" /> Answered here.
              </h2>
            </div>
            <dl className="lg:col-span-7 divide-y divide-ink/10 border hairline bg-parchment-50">
              {faqs.map((item) => (
                <div key={item.q} className="px-6 md:px-8 py-5 md:py-6">
                  <dt className="font-display text-xl text-ink leading-snug">{item.q}</dt>
                  <dd className="mt-3 text-ink-500 leading-relaxed">{item.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="bg-ink text-parchment-50 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(ellipse at 20% 80%, rgba(212,168,90,0.2), transparent 55%)",
          }}
          aria-hidden
        />
        <div className="container-x max-w-[1400px] mx-auto py-24 md:py-28 relative">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-grace-light" />
              <span className="text-[11px] uppercase tracking-[0.22em] text-grace-light">
                Next step
              </span>
            </div>
            <h2 className="font-display text-5xl md:text-6xl tracking-tight leading-[0.95]">
              Tell us you&rsquo;re coming. <br className="hidden md:inline" /> We&rsquo;ll be
              expecting you.
            </h2>
            <p className="mt-8 text-ink-300 text-lg leading-relaxed max-w-xl">
              A quick note lets our welcome team keep an eye out. You&rsquo;ll get a
              warm introduction at the door, and we&rsquo;ll make sure you leave with at
              least one new name to remember.
            </p>
            <div className="mt-10 flex flex-wrap gap-5">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-grace-light text-ink px-7 py-4 text-[13px] uppercase tracking-[0.16em] rounded-xs hover:bg-parchment-50 transition-colors"
              >
                Message us <span aria-hidden>→</span>
              </Link>
              <Link
                href="/locations"
                className="text-[13px] uppercase tracking-[0.16em] text-parchment-50 border-b border-parchment-50/30 pb-1 hover:border-grace-light transition-colors"
              >
                Find a campus
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container-x max-w-[1400px] mx-auto py-20 md:py-24">
        <div className="flex items-end justify-between mb-10 gap-6 flex-wrap">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-grace" />
              <span className="text-[11px] uppercase tracking-[0.22em] text-grace-dark">
                After your first visit
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-ink tracking-tight leading-[1.02]">
              You came. Now let&rsquo;s go deeper.
            </h2>
            <p className="mt-5 max-w-xl text-ink-500 leading-relaxed">
              The Kharis Life is built in community and through service. Whatever you&rsquo;re ready for next — meeting Jesus, finding a small group, or joining a team — there&rsquo;s a doorway here.
            </p>
          </div>
          <Link
            href="/life"
            className="text-[13px] uppercase tracking-[0.16em] text-ink border-b hairline pb-1 hover:border-grace-dark hover:text-grace-dark transition-colors"
          >
            All of Kharis Life →
          </Link>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-px bg-ink/10 border hairline">
          {[
            {
              meta: "01 · The first step",
              label: "Become a Believer",
              body: "Meet Jesus and begin a new life in Christ. No prior experience required.",
              href: "/life/become-a-believer",
            },
            {
              meta: "02 · Find your people",
              label: "Join a KGroup",
              body: "Small home fellowships across every campus, every Friday — Scripture, prayer and friendship.",
              href: "/life/kgroups",
            },
            {
              meta: "03 · Serve a team",
              label: "Find a department",
              body: "Welcome, worship, media, children, prayer — every gift has a place. Find yours.",
              href: "/departments",
            },
          ].map((item) => (
            <li key={item.href} className="bg-parchment-50">
              <Link
                href={item.href}
                className="group flex flex-col justify-between h-full p-7 md:p-8 min-h-[260px] hover:bg-parchment-100 transition-colors"
              >
                <span className="text-[11px] uppercase tracking-[0.22em] text-grace-dark">
                  {item.meta}
                </span>
                <div>
                  <h3 className="font-display text-3xl text-ink leading-tight group-hover:text-grace-dark transition-colors">
                    {item.label}
                  </h3>
                  <p className="mt-3 text-sm text-ink-500 leading-relaxed">{item.body}</p>
                  <span
                    aria-hidden
                    className="mt-6 inline-block text-[11px] uppercase tracking-[0.18em] text-ink-500 group-hover:text-grace-dark transition-colors"
                  >
                    Read more →
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
