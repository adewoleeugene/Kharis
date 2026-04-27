import Link from "next/link";
import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "KGroups",
  description:
    "Kharis KGroups — small home fellowships meeting every Friday 7:00–8:30pm across every Kharis campus, for Scripture, prayer and relationships.",
};

const rhythm = [
  {
    n: "01",
    title: "Open the Word",
    body: "We study Scripture together, often following Sunday's teaching.",
  },
  {
    n: "02",
    title: "Share the week",
    body: "Life updates, questions, breakthroughs — honest conversation.",
  },
  {
    n: "03",
    title: "Pray for each other",
    body: "Specific, believing prayer. No one leaves un-prayed-for.",
  },
];

export default function KGroupsPage() {
  return (
    <>
      <PageHeader
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Kharis Life", href: "/life" },
          { label: "KGroups" },
        ]}
        eyebrow="Small home fellowships"
        title="Growing larger and smaller at the same time."
        intro="Every Friday, across every Kharis campus, KGroups gather in homes and cafés for Scripture, prayer and genuine friendship — because fellowship is not optional to the Christian life."
      >
        <div className="flex flex-wrap gap-5">
          <Link
            href="#join"
            className="inline-flex items-center gap-3 bg-ink text-parchment-50 px-7 py-4 text-[13px] uppercase tracking-[0.16em] rounded-xs hover:bg-ink-700 transition-colors"
          >
            Find a group <span aria-hidden>→</span>
          </Link>
          <Link
            href={`mailto:${site.contactEmails.kgroup}`}
            className="text-[13px] uppercase tracking-[0.16em] text-ink border-b hairline pb-1 hover:border-grace-dark hover:text-grace-dark transition-colors"
          >
            {site.contactEmails.kgroup}
          </Link>
        </div>
      </PageHeader>

      <section className="container-x max-w-[1400px] mx-auto py-16 md:py-24 border-b hairline">
        <figure className="max-w-3xl">
          <blockquote className="font-display text-3xl md:text-4xl text-ink leading-snug">
            <span className="text-grace">&ldquo;</span>Love must be sincere. Hate what is
            evil; cling to what is good. Be devoted to one another in love. Honour one
            another above yourselves.<span className="text-grace">&rdquo;</span>
          </blockquote>
          <figcaption className="mt-5 text-[11px] uppercase tracking-[0.22em] text-ink-500">
            — Romans 12:9-10
          </figcaption>
        </figure>
      </section>

      <section className="container-x max-w-[1400px] mx-auto py-20 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-grace" />
              <span className="text-[11px] uppercase tracking-[0.22em] text-grace-dark">
                The rhythm
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl tracking-tight text-ink leading-[1.02]">
              Fridays, without fail.
            </h2>
            <p className="mt-6 text-ink-500 leading-relaxed max-w-md">
              Groups meet every Friday from 7:00 to 8:30pm unless announced otherwise in
              Sunday services. Most gather in homes; some meet in cafés near the campus.
            </p>
          </div>

          <ol className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-px bg-ink/10 border hairline">
            {rhythm.map((s) => (
              <li
                key={s.n}
                className="bg-parchment-50 p-7 md:p-8 flex flex-col justify-between min-h-[220px]"
              >
                <span className="font-display text-2xl text-grace-dark">{s.n}</span>
                <div>
                  <h3 className="font-display text-xl text-ink leading-tight">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm text-ink-500 leading-relaxed">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

<section
        id="join"
        className="bg-ink text-parchment-50 relative overflow-hidden"
      >
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(ellipse at 80% 20%, rgba(212,168,90,0.2), transparent 55%)",
          }}
          aria-hidden
        />
        <div className="container-x max-w-[1400px] mx-auto py-24 md:py-28 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-6">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-8 bg-grace-light" />
                <span className="text-[11px] uppercase tracking-[0.22em] text-grace-light">
                  Join a group
                </span>
              </div>
              <h2 className="font-display text-5xl md:text-7xl tracking-tight leading-[0.92]">
                The fastest way in.
              </h2>
              <p className="mt-8 text-ink-300 leading-relaxed max-w-md">
                Tell us your city. A KGroup leader will reach out this week with the
                host, the address, and what to bring — usually nothing but yourself.
              </p>
            </div>

            <div className="lg:col-span-6 border border-parchment-50/20 bg-ink-700/40 backdrop-blur-sm p-8 md:p-10">
            <form className="space-y-5" action="#" method="post" aria-label="KGroup request">
              <label className="block">
                <span className="block text-[11px] uppercase tracking-[0.18em] text-ink-300 mb-2">
                  Full name
                </span>
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-parchment-50/30 focus:border-grace-light py-2 outline-none transition-colors"
                  required
                />
              </label>
              <label className="block">
                <span className="block text-[11px] uppercase tracking-[0.18em] text-ink-300 mb-2">
                  Email
                </span>
                <input
                  type="email"
                  className="w-full bg-transparent border-b border-parchment-50/30 focus:border-grace-light py-2 outline-none transition-colors"
                  required
                />
              </label>
              <label className="block">
                <span className="block text-[11px] uppercase tracking-[0.18em] text-ink-300 mb-2">
                  City
                </span>
                <input
                  type="text"
                  placeholder="London, Birmingham, Accra…"
                  className="w-full bg-transparent border-b border-parchment-50/30 focus:border-grace-light py-2 outline-none placeholder:text-ink-300/60 transition-colors"
                  required
                />
              </label>
              <button
                type="submit"
                className="mt-4 inline-flex items-center gap-3 bg-grace-light text-ink px-7 py-4 text-[13px] uppercase tracking-[0.16em] rounded-xs hover:bg-parchment-50 transition-colors"
              >
                Send request <span aria-hidden>→</span>
              </button>
            </form>
            <p className="mt-6 pt-5 border-t border-parchment-50/15 text-xs text-ink-300 leading-relaxed">
              Or write directly to{" "}
              <a
                href={`mailto:${site.contactEmails.kgroup}`}
                className="text-grace-light underline underline-offset-4"
              >
                {site.contactEmails.kgroup}
              </a>
              .
            </p>
          </div>
          </div>
        </div>
      </section>

      <section className="bg-parchment-100 border-y hairline">
        <div className="container-x max-w-[1400px] mx-auto py-16 md:py-20">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-6">
            <h2 className="font-display text-3xl md:text-4xl text-ink tracking-tight">
              Continue the journey.
            </h2>
            <Link
              href="/life/volunteer"
              className="text-[13px] uppercase tracking-[0.16em] text-ink border-b hairline pb-1 hover:border-grace-dark hover:text-grace-dark transition-colors"
            >
              Next: serve on a team →
            </Link>
          </div>
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-px bg-ink/10 border hairline">
            {[
              { label: "Volunteer", href: "/life/volunteer", meta: "Serve on a team" },
              { label: "Departments", href: "/departments", meta: "Find your fit" },
              { label: "Membership", href: "/life/membership", meta: "Covenant with the family" },
              { label: "Evangelism", href: "/life/evangelism", meta: "Reach the city" },
            ].map((item, i) => (
              <li key={item.href} className="bg-parchment-50">
                <Link
                  href={item.href}
                  className="group flex flex-col justify-between h-full p-6 min-h-[140px] hover:bg-parchment-100 transition-colors"
                >
                  <span className="text-[11px] uppercase tracking-[0.22em] text-grace-dark">
                    {String(i + 1).padStart(2, "0")} · {item.meta}
                  </span>
                  <span className="font-display text-2xl text-ink mt-6 group-hover:text-grace-dark transition-colors">
                    {item.label}
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
