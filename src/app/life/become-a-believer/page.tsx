import Link from "next/link";
import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";

export const metadata: Metadata = {
  title: "Become a Believer",
  description:
    "The Kharis Life begins with meeting Jesus. Understand what it means to believe, how to pray, and how to become part of the Kharis family.",
};

const phases = [
  {
    letter: "A",
    heading: "Believe",
    sub: "Understand what the Christian faith is.",
    body:
      "A believer is someone who repents of sin and believes in the life, death and resurrection of Jesus Christ. The Apostles' Creed gives the short summary of what we hold to. If you're new to this — or returning — our New Believer's Class walks you through the foundations.",
    cta: { label: "Join a New Believer's Class", href: "/contact" },
  },
  {
    letter: "B",
    heading: "Become",
    sub: "Join a local church family.",
    body:
      "The Christian life is not designed to be lived in isolation. Kharis membership takes you through our values, beliefs and commitments — the shape of the family you're joining. Sign up through your local campus.",
    cta: { label: "Kharis Membership", href: "/life/membership" },
  },
  {
    letter: "C",
    heading: "Belong",
    sub: "Serve in the family you've joined.",
    body:
      "Serving in church is part of our worship to God. Every believer belongs on a team — welcome, ushering, children, media, worship, prayer, and many more. Take the next step at your campus.",
    cta: { label: "See departments", href: "/departments" },
  },
];

export default function BecomeABelieverPage() {
  return (
    <>
      <PageHeader
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Kharis Life", href: "/life" },
          { label: "Become a Believer" },
        ]}
        eyebrow="The Kharis Life · First step"
        title="Believe. Become. Belong."
        intro='"The Christian life is a one-another life." — Pastor David Antwi. A believer is someone who repents of sin and believes in the life, death and resurrection of Jesus Christ. If that is where you are — or where you want to be — start here.'
      >
        <div className="flex flex-wrap gap-5">
          <Link
            href="#prayer"
            className="inline-flex items-center gap-3 bg-ink text-parchment-50 px-7 py-4 text-[13px] uppercase tracking-[0.16em] rounded-xs hover:bg-ink-700 transition-colors"
          >
            Pray the prayer <span aria-hidden>→</span>
          </Link>
          <Link
            href="/contact"
            className="text-[13px] uppercase tracking-[0.16em] text-ink border-b hairline pb-1 hover:border-grace-dark hover:text-grace-dark transition-colors"
          >
            Tell us you said yes
          </Link>
        </div>
      </PageHeader>

      <section className="container-x max-w-[1400px] mx-auto py-16 md:py-20 border-b hairline">
        <figure className="max-w-3xl">
          <blockquote className="font-display text-3xl md:text-4xl text-ink leading-snug">
            <span className="text-grace">&ldquo;</span>For with the heart one believes unto righteousness,
            and with the mouth confession is made unto salvation.<span className="text-grace">&rdquo;</span>
          </blockquote>
          <figcaption className="mt-5 text-[11px] uppercase tracking-[0.22em] text-ink-500">
            — Romans 10:10
          </figcaption>
        </figure>
      </section>

      <section className="container-x max-w-[1400px] mx-auto py-20 md:py-24">
        <div className="flex items-center gap-3 mb-10">
          <span className="h-px w-8 bg-grace" />
          <span className="text-[11px] uppercase tracking-[0.22em] text-grace-dark">
            Three phases
          </span>
        </div>
        <h2 className="font-display text-4xl md:text-5xl text-ink tracking-tight leading-[1.02] max-w-3xl mb-12">
          A path that starts wherever you are.
        </h2>

        <ol className="grid grid-cols-1 md:grid-cols-3 gap-px bg-ink/10 border hairline">
          {phases.map((p, i) => (
            <li
              key={p.heading}
              className="bg-parchment-50 p-8 md:p-10 flex flex-col justify-between min-h-[420px]"
            >
              <div>
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-grace-dark text-6xl leading-none">
                    {p.letter}
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.22em] text-ink-500">
                    Phase {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-8 font-display text-3xl md:text-4xl text-ink leading-tight tracking-tight">
                  {p.heading}
                </h3>
                <p className="mt-2 text-[11px] uppercase tracking-[0.22em] text-grace-dark">
                  {p.sub}
                </p>
                <p className="mt-6 text-ink-500 leading-relaxed">{p.body}</p>
              </div>
              <Link
                href={p.cta.href}
                className="mt-8 inline-flex text-[13px] uppercase tracking-[0.16em] text-ink border-b hairline pb-1 hover:border-grace-dark hover:text-grace-dark transition-colors self-start"
              >
                {p.cta.label} →
              </Link>
            </li>
          ))}
        </ol>
      </section>

      <section
        id="prayer"
        className="bg-ink text-parchment-50 relative overflow-hidden"
      >
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(212,168,90,0.22), transparent 55%)",
          }}
          aria-hidden
        />
        <div className="container-x max-w-[1400px] mx-auto py-24 md:py-32 relative">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-grace-light" />
              <span className="text-[11px] uppercase tracking-[0.22em] text-grace-light">
                The Sinner&rsquo;s Prayer
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl tracking-tight leading-[1.05]">
              If you&rsquo;re ready, pray these words with us.
            </h2>
            <p className="mt-6 text-ink-300 leading-relaxed">
              There is no magic in the sentences — the miracle is in the heart that
              means them. Take your time. Say them aloud if you can.
            </p>
          </div>

          <figure className="mt-12 max-w-3xl border-l-4 border-grace-light pl-8 md:pl-10">
            <blockquote className="font-display text-2xl md:text-3xl leading-snug text-parchment-50 italic">
              Lord Jesus, I know that I am a sinner. I believe that You died on the
              cross, were buried, and resurrected on the third day to save me from
              eternal death, through the forgiveness of sin by Your blood. From this
              day forward, I am born again to eternal life, and I am a child of God.
              Holy Spirit, I receive your help to live this new life, all the
              remaining days of my life. Amen.
            </blockquote>
          </figure>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-10 items-start max-w-4xl">
            <div>
              <span className="text-[11px] uppercase tracking-[0.22em] text-grace-light">
                What&rsquo;s next
              </span>
              <p className="mt-4 text-ink-300 leading-relaxed">
                If you prayed this prayer — or if you&rsquo;re close and want to talk
                — let us know. We&rsquo;ll send you the New Believer&rsquo;s Class
                details and introduce you to a pastor at your local campus.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-grace-light text-ink px-7 py-4 text-[13px] uppercase tracking-[0.16em] rounded-xs hover:bg-parchment-50 transition-colors"
              >
                Tell us you said yes <span aria-hidden>→</span>
              </Link>
              <Link
                href="/locations"
                className="inline-flex items-center justify-center gap-3 border border-parchment-50/30 px-7 py-4 text-[13px] uppercase tracking-[0.16em] text-parchment-50 hover:border-grace-light transition-colors"
              >
                Find your campus
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-parchment-100 border-y hairline">
        <div className="container-x max-w-[1400px] mx-auto py-20 md:py-24">
          <div className="flex items-end justify-between mb-10 gap-6 flex-wrap">
            <h2 className="font-display text-3xl md:text-4xl text-ink tracking-tight">
              Keep going.
            </h2>
            <Link
              href="/life/baptism"
              className="text-[13px] uppercase tracking-[0.16em] text-ink border-b hairline pb-1 hover:border-grace-dark hover:text-grace-dark transition-colors"
            >
              On to baptism →
            </Link>
          </div>
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-px bg-ink/10 border hairline">
            {[
              { label: "Baptism", href: "/life/baptism", meta: "Declare it publicly" },
              { label: "KGroups", href: "/life/kgroups", meta: "Find a small group" },
              { label: "Membership", href: "/life/membership", meta: "Covenant with the family" },
              { label: "Departments", href: "/departments", meta: "Find a team to serve" },
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
