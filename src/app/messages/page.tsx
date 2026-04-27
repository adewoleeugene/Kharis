import Link from "next/link";
import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { currentSeries, podcastPlatforms, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Messages",
  description:
    "Teaching from Pastor David Antwi and the Kharis team — a verse-by-verse expository series in Acts, the Issues of Life thematic series, and a growing audio library on Spotify, Apple Podcasts, SoundCloud and more.",
};

const recentMessages = [
  {
    series: "Acts",
    reference: "Acts 21:1–14",
    title: "Can Suffering Be Part Of God's Will?",
    preacher: "Pastor David Antwi",
  },
  {
    series: "Acts",
    reference: "Acts 20:30–38",
    title: "I Commend You To God",
    preacher: "Pastor David Antwi",
  },
  {
    series: "Special",
    reference: "Easter",
    title: "The Implications of the Resurrection",
    preacher: "Pastor David Antwi",
  },
  {
    series: "Special",
    reference: "Easter",
    title: "My God Died For Me",
    preacher: "Pastor David Antwi",
  },
  {
    series: "Acts",
    reference: "Acts 20:25–29",
    title: "Future-Proofing the Church",
    preacher: "Pastor David Antwi",
  },
  {
    series: "Acts",
    reference: "Acts 20:20–24",
    title: "Why I Do What I Do For God",
    preacher: "Pastor David Antwi",
  },
];

const issuesOfLife = [
  "A life without restrictions leads to destruction",
  "The Christian life is about fellowship",
  "Instead of looking around you for help, look up to God",
  "Save your best for the one who commits their future to you",
  "It takes sacrifice to be a wife of a man in ministry",
  "Here's why the woman you choose to marry matters",
  "Jesus promises to quench your thirst, but it starts with your humility",
  "There are 365 'fear nots' in the Bible for a reason",
];

export default function MessagesPage() {
  return (
    <>
      <PageHeader
        eyebrow={currentSeries.eyebrow}
        title={currentSeries.title}
        intro={currentSeries.subtitle}
      >
        <figure className="max-w-3xl">
          <blockquote className="font-display text-2xl md:text-3xl text-ink leading-snug">
            <span className="text-grace">&ldquo;</span>
            {currentSeries.quote}
            <span className="text-grace">&rdquo;</span>
          </blockquote>
          <figcaption className="mt-4 text-[11px] uppercase tracking-[0.22em] text-ink-500">
            — {currentSeries.preacher}
          </figcaption>
        </figure>
        <div className="mt-10 flex flex-wrap gap-5">
          <Link
            href="#library"
            className="inline-flex items-center gap-3 bg-ink text-parchment-50 px-7 py-4 text-[13px] uppercase tracking-[0.16em] rounded-xs hover:bg-ink-700 transition-colors"
          >
            Browse library <span aria-hidden>→</span>
          </Link>
          <Link
            href="#listen"
            className="text-[13px] uppercase tracking-[0.16em] text-ink border-b hairline pb-1 hover:border-grace-dark hover:text-grace-dark transition-colors"
          >
            Listen on your podcast app
          </Link>
        </div>
      </PageHeader>

      <section id="library" className="container-x max-w-[1400px] mx-auto py-20 md:py-28">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-grace" />
              <span className="text-[11px] uppercase tracking-[0.22em] text-grace-dark">
                Recent messages
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl tracking-tight text-ink leading-[1.02]">
              Most recent, first.
            </h2>
          </div>
          <Link
            href="/messages/series/acts"
            className="text-[13px] uppercase tracking-[0.16em] text-ink border-b hairline pb-1 hover:border-grace-dark hover:text-grace-dark transition-colors"
          >
            See all of Acts →
          </Link>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink/10 border hairline">
          {recentMessages.map((m, i) => (
            <li key={m.title} className="bg-parchment-50">
              <Link
                href="#"
                className="group block h-full"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-ink">
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        i % 3 === 0
                          ? "radial-gradient(ellipse at 25% 75%, #3f0b2a, #2b061d 60%, #180310 100%)"
                          : i % 3 === 1
                          ? "radial-gradient(ellipse at 75% 25%, #8a6328, #2b061d 70%)"
                          : "radial-gradient(ellipse at 50% 60%, #2c4a3a, #2b061d 75%)",
                    }}
                    aria-hidden
                  />
                  <div className="absolute inset-0 p-6 flex flex-col justify-between">
                    <span className="text-[11px] uppercase tracking-[0.22em] text-grace-light">
                      {m.series} · {m.reference}
                    </span>
                    <div className="flex items-center gap-3 text-parchment-50">
                      <span className="w-10 h-10 rounded-full bg-grace-light/90 text-ink flex items-center justify-center text-sm">
                        ▶
                      </span>
                      <span className="text-xs uppercase tracking-[0.18em]">Watch</span>
                    </div>
                  </div>
                </div>
                <div className="p-6 md:p-7">
                  <h3 className="font-display text-xl md:text-[22px] leading-tight text-ink group-hover:text-grace-dark transition-colors">
                    {m.title}
                  </h3>
                  <p className="mt-2 text-xs uppercase tracking-[0.18em] text-ink-500">
                    {m.preacher}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-parchment-100 border-y hairline">
        <div className="container-x max-w-[1400px] mx-auto py-20 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-8 bg-grace" />
                <span className="text-[11px] uppercase tracking-[0.22em] text-grace-dark">
                  Thematic series
                </span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl tracking-tight text-ink leading-[1.02]">
                Issues of Life.
              </h2>
              <p className="mt-6 text-ink-500 leading-relaxed max-w-md">
                The Word on the ordinary places where life actually happens — marriage, money, fear, fellowship, purpose.
              </p>
            </div>

            <ul className="lg:col-span-7 space-y-px bg-ink/10 border hairline">
              {issuesOfLife.map((title, i) => (
                <li key={title} className="bg-parchment-50">
                  <Link
                    href="#"
                    className="group flex items-start gap-6 p-6 md:p-7 hover:bg-parchment-100 transition-colors"
                  >
                    <span className="font-display text-grace-dark text-xl shrink-0 w-10 pt-0.5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1 font-display text-lg md:text-xl text-ink leading-snug group-hover:text-grace-dark transition-colors">
                      {title}
                    </span>
                    <span
                      className="text-ink-500 group-hover:text-grace-dark transition-colors pt-1"
                      aria-hidden
                    >
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="listen" className="bg-ink text-parchment-50 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(ellipse at 80% 20%, rgba(212,168,90,0.2), transparent 55%)",
          }}
          aria-hidden
        />
        <div className="container-x max-w-[1400px] mx-auto py-24 md:py-28 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-14">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-8 bg-grace-light" />
                <span className="text-[11px] uppercase tracking-[0.22em] text-grace-light">
                  Podcast
                </span>
              </div>
              <h2 className="font-display text-5xl md:text-6xl tracking-tight leading-[0.95]">
                Take {site.name} <br className="hidden md:inline" />
                with you.
              </h2>
            </div>
            <p className="lg:col-span-5 text-ink-300 leading-relaxed max-w-md">
              Every message, everywhere you listen. Subscribe on your platform of choice — new episodes drop within a day of the live teaching.
            </p>
          </div>

          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-parchment-50/15 border border-parchment-50/15">
            {podcastPlatforms.map((p) => (
              <li key={p.label} className="bg-ink">
                <Link
                  href={p.href}
                  className="group flex flex-col items-start justify-between h-full p-6 hover:bg-ink-700 transition-colors min-h-[140px]"
                >
                  <span className="text-[11px] uppercase tracking-[0.22em] text-ink-300 group-hover:text-grace-light transition-colors">
                    Listen on
                  </span>
                  <span className="font-display text-xl text-parchment-50 mt-6">
                    {p.label}
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
