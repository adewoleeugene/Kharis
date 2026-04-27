import Link from "next/link";
import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { site } from "@/lib/content";

const kp2Cities = [
  "London",
  "Birmingham",
  "Romford",
  "Southampton",
  "Peterborough",
];

const kp2Events = [
  {
    title: "Bring A Soul Sunday",
    blurb: "Every member brings a friend. One Sunday. Many new lives.",
  },
  {
    title: "Summer Camp",
    blurb: "Five residential days of teaching, worship and sport.",
  },
  {
    title: "Sports Day",
    blurb: "A full family-friendly day in the sun — football, races, food.",
  },
  {
    title: "Praise Nights",
    blurb: "Evenings of worship and prophetic ministry for our generation.",
  },
];

export const metadata: Metadata = {
  title: "KP2 — Kharis Phase 2",
  description:
    "Kharis Phase 2 (KP2) is Kharis Church's students' and young people's services — a spirit-filled, revival-seeking generation meeting in London, Birmingham, Romford, Southampton and Peterborough.",
};

export default function Kp2Page() {
  return (
    <>
      <PageHeader
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Kharis Life", href: "/life" },
          { label: "KP2" },
        ]}
        eyebrow="Kharis Phase 2 · Students & young people"
        title="A generation, unapologetically alive to Jesus."
        intro="KP2 is Kharis's students' and young adults' services — spirit-filled, revival-seeking and unashamed of the gospel. If you're between 14 and 24, this is your home at Kharis."
      >
        <div className="flex flex-wrap gap-5">
          <Link
            href="#join"
            className="inline-flex items-center gap-3 bg-ink text-parchment-50 px-7 py-4 text-[13px] uppercase tracking-[0.16em] rounded-xs hover:bg-ink-700 transition-colors"
          >
            Get involved <span aria-hidden>→</span>
          </Link>
          <Link
            href="/events"
            className="text-[13px] uppercase tracking-[0.16em] text-ink border-b hairline pb-1 hover:border-grace-dark hover:text-grace-dark transition-colors"
          >
            Upcoming KP2 events
          </Link>
        </div>
      </PageHeader>

      <section className="container-x max-w-[1400px] mx-auto py-20 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-grace" />
              <span className="text-[11px] uppercase tracking-[0.22em] text-grace-dark">
                Where we gather
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-ink tracking-tight leading-[1.02]">
              Five UK cities. <br className="hidden md:inline" /> One generation.
            </h2>
            <p className="mt-6 text-ink-500 leading-relaxed max-w-md">
              KP2 services run alongside Kharis congregations in five cities across
              the United Kingdom — including a growing presence on university
              campuses.
            </p>
          </div>

          <ul className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-px bg-ink/10 border hairline self-start">
            {kp2Cities.map((city, i) => (
              <li
                key={city}
                className={`bg-parchment-50 p-7 md:p-8 min-h-[140px] flex flex-col justify-between ${
                  i === 0 ? "md:col-span-2" : ""
                }`}
              >
                <span className="text-[11px] uppercase tracking-[0.22em] text-ink-500">
                  {String(i + 1).padStart(2, "0")}
                  {i === 0 && " · Flagship"}
                </span>
                <div className="font-display text-3xl md:text-4xl text-ink">
                  {city}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-parchment-100 border-y hairline">
        <div className="container-x max-w-[1400px] mx-auto py-20 md:py-24">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-6">
            <h2 className="font-display text-4xl md:text-5xl text-ink tracking-tight leading-[1.02]">
              The KP2 year.
            </h2>
            <Link
              href="/events"
              className="text-[13px] uppercase tracking-[0.16em] text-ink border-b hairline pb-1 hover:border-grace-dark hover:text-grace-dark transition-colors"
            >
              All events →
            </Link>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-ink/10 border hairline">
            {kp2Events.map((e, i) => (
              <li
                key={e.title}
                className="bg-parchment-50 p-7 md:p-8 min-h-[240px] flex flex-col justify-between"
              >
                <span className="font-display text-grace-dark text-2xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-2xl text-ink leading-tight">
                    {e.title}
                  </h3>
                  <p className="mt-3 text-sm text-ink-500 leading-relaxed">
                    {e.blurb}
                  </p>
                </div>
              </li>
            ))}
          </ul>
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
              "radial-gradient(ellipse at 70% 20%, rgba(212,168,90,0.22), transparent 55%)",
          }}
          aria-hidden
        />
        <div className="container-x max-w-[1400px] mx-auto py-24 md:py-28 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-6">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-8 bg-grace-light" />
                <span className="text-[11px] uppercase tracking-[0.22em] text-grace-light">
                  Get involved
                </span>
              </div>
              <h2 className="font-display text-5xl md:text-6xl tracking-tight leading-[0.95]">
                Come to a service. <br className="hidden md:inline" /> Bring a friend.
              </h2>
              <p className="mt-8 text-ink-300 text-lg leading-relaxed max-w-md">
                The KP2 door is always open. Find the service nearest to you, message
                us to say you&rsquo;re coming, or just turn up — we&rsquo;d love to meet you.
              </p>
              <div className="mt-10">
                <Link
                  href="/departments"
                  className="text-[13px] uppercase tracking-[0.16em] text-parchment-50 border-b border-parchment-50/30 pb-1 hover:border-grace-light transition-colors"
                >
                  Serve on a team →
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 border border-parchment-50/20 bg-ink-700/40 backdrop-blur-sm p-8 md:p-10">
              <span className="text-[11px] uppercase tracking-[0.22em] text-grace-light">
                Message KP2
              </span>
              <h3 className="mt-3 font-display text-3xl text-parchment-50 leading-tight">
                Tell us you&rsquo;re coming.
              </h3>
              <form
                className="mt-8 space-y-5"
                action="#"
                method="post"
                aria-label="KP2 message"
              >
                <input type="hidden" name="campus" value="kp2" />
                <label className="block">
                  <span className="block text-[11px] uppercase tracking-[0.18em] text-ink-300 mb-2">
                    Full name
                  </span>
                  <input
                    type="text"
                    name="name"
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
                    name="email"
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
                    name="city"
                    placeholder="London, Birmingham, Romford…"
                    className="w-full bg-transparent border-b border-parchment-50/30 focus:border-grace-light py-2 outline-none placeholder:text-ink-300/60 transition-colors"
                  />
                </label>
                <label className="block">
                  <span className="block text-[11px] uppercase tracking-[0.18em] text-ink-300 mb-2">
                    Message
                  </span>
                  <textarea
                    name="message"
                    rows={4}
                    className="w-full bg-transparent border-b border-parchment-50/30 focus:border-grace-light py-2 outline-none resize-none transition-colors"
                    required
                  />
                </label>
                <button
                  type="submit"
                  className="mt-4 inline-flex items-center gap-3 bg-grace-light text-ink px-7 py-4 text-[13px] uppercase tracking-[0.16em] rounded-xs hover:bg-parchment-50 transition-colors"
                >
                  Send message <span aria-hidden>→</span>
                </button>
              </form>
              <p className="mt-6 pt-5 border-t border-parchment-50/15 text-xs text-ink-300 leading-relaxed">
                Or write directly to{" "}
                <a
                  href={`mailto:${site.contactEmails.kp2}`}
                  className="text-grace-light underline underline-offset-4"
                >
                  {site.contactEmails.kp2}
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
