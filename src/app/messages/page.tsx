import Link from "next/link";
import type { Metadata } from "next";
import { currentSeries, podcastPlatforms, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Messages",
  description:
    "Teaching from Pastor David Antwi and the Kharis team — a verse-by-verse expository series in Acts, the Issues of Life thematic series, and a growing audio library on Spotify, Apple Podcasts, SoundCloud and more.",
};

type RecentMessage = {
  series: string;
  reference: string;
  title: string;
  preacher: string;
  videoId?: string;
};

const recentMessages: RecentMessage[] = [
  {
    series: "Acts",
    reference: "Acts 21:1–14",
    title: "Can Suffering Be Part Of God's Will?",
    preacher: "Pastor David Antwi",
    videoId: "gsF2ba-vDGw",
  },
  {
    series: "Acts",
    reference: "Acts 20:30–38",
    title: "I Commend You To God",
    preacher: "Pastor David Antwi",
    videoId: "vP0-9ugqJJE",
  },
  {
    series: "Special",
    reference: "Easter",
    title: "Resurrection Praise Night",
    preacher: "Kharis Church",
    videoId: "mZeLUR5be0Y",
  },
  {
    series: "Special",
    reference: "Easter",
    title: "The Implications of the Resurrection",
    preacher: "Pastor David Antwi",
    videoId: "bSbJFkOS4mY",
  },
  {
    series: "Special",
    reference: "Easter",
    title: "My God Died For Me",
    preacher: "Pastor David Antwi",
    videoId: "ldJa-TcM5Vc",
  },
  {
    series: "Special",
    reference: "Good Friday",
    title: "The Glorious Cross — Good Friday Broadcast",
    preacher: "Pastor David Antwi",
    videoId: "CkFM6auEc_g",
  },
  {
    series: "Special",
    reference: "Matthew 21:1–11",
    title: "Who Is This?",
    preacher: "Pastor David Antwi",
    videoId: "mCjwRX2Tyhk",
  },
  {
    series: "Acts",
    reference: "Acts 20:25–29",
    title: "Future-Proofing the Church",
    preacher: "Pastor David Antwi",
    videoId: "YbxJQrixIbU",
  },
  {
    series: "Acts",
    reference: "Acts 20:20–24",
    title: "Why I Do What I Do For God",
    preacher: "Pastor David Antwi",
    videoId: "CAu3DiTv-ME",
  },
];

type IssuesOfLifeMessage = {
  episode: string;
  title: string;
  blurb?: string;
  videoId?: string;
};

const ISSUES_OF_LIFE_PLAYLIST =
  "https://www.youtube.com/playlist?list=PLFyGYjZDD1FvB9YuoA2JI2GfQQgFfX_c8";

// Order mirrors kharis.org/messages — newest first.
const issuesOfLife: IssuesOfLifeMessage[] = [
  {
    episode: "Episode 30",
    title: "Restrictions",
    blurb: "A life without restrictions leads to destruction.",
    videoId: "WiJkxkTOYfk",
  },
  {
    episode: "Episode 29",
    title: "Christian Fellowship",
    blurb: "The Christian life is about fellowship.",
    videoId: "FTWBHKB2p-4",
  },
  {
    episode: "Episode 27",
    title: "It’s A Set Up",
    videoId: "XJ5CSlFMN7s",
  },
  {
    episode: "Episode 26",
    title: "Trust In God",
    blurb: "Instead of looking around you for help, look up to God and trust in Him.",
    videoId: "Ths_WdM6ZGQ",
  },
  {
    episode: "Episode 25",
    title: "Save The Best",
    blurb: "Save your best for the one who commits their future to you.",
    videoId: "EfX2f2mXIQs",
  },
  {
    episode: "Episode 24",
    title: "Ministry Wives",
    blurb: "It takes sacrifice to be a wife of a man in ministry.",
    videoId: "597AJPVSTIo",
  },
  {
    episode: "Episode 23",
    title: "Choose Wisely",
    blurb: "Here’s why the woman you choose to marry matters.",
    videoId: "qqBBa8dVnec",
  },
  {
    episode: "Episode 22",
    title: "Thirst No More",
    blurb: "Jesus promises to quench your thirst, but it starts with your humility.",
    videoId: "kBlFWIbWPuI",
  },
  {
    episode: "Episode 21",
    title: "Fear Not",
    blurb: "There are 365 ‘fear nots’ in the Bible for a reason.",
    videoId: "-JnzlN799do",
  },
];

export default function MessagesPage() {
  const featured = recentMessages[0];
  const featuredHref = featured.videoId
    ? `https://www.youtube.com/watch?v=${featured.videoId}`
    : "#";
  const featuredThumb = featured.videoId
    ? `https://img.youtube.com/vi/${featured.videoId}/maxresdefault.jpg`
    : null;

  return (
    <>
      <section className="relative overflow-hidden bg-parchment-50 border-b hairline">
        <div className="absolute inset-0 grain opacity-40 pointer-events-none" aria-hidden />
        <div
          className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full bg-grace/10 blur-3xl pointer-events-none"
          aria-hidden
        />
        <div className="container-x max-w-[1400px] mx-auto pt-10 md:pt-14 pb-14 md:pb-20 relative">
          <nav aria-label="Breadcrumb" className="mb-10 md:mb-12">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] uppercase tracking-[0.22em]">
              <li className="flex items-center gap-2">
                <Link href="/" className="text-ink-500 hover:text-ink transition-colors">
                  Home
                </Link>
                <span aria-hidden className="text-ink-500/40">/</span>
              </li>
              <li>
                <span aria-current="page" className="text-grace-dark">Messages</span>
              </li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-end">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-8 bg-grace" />
                <span className="text-[11px] uppercase tracking-[0.22em] text-grace-dark font-medium">
                  {currentSeries.eyebrow}
                </span>
              </div>
              <h1 className="font-display tracking-tight text-ink leading-[0.95] text-[clamp(2.5rem,6vw,5.5rem)]">
                {currentSeries.title}
              </h1>
              <p className="mt-8 max-w-2xl text-lg md:text-xl text-ink-500 leading-relaxed">
                {currentSeries.subtitle}
              </p>
              <figure className="mt-10 max-w-2xl">
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
            </div>

            <div className="lg:col-span-5">
              <a
                href={featuredHref}
                {...(featured.videoId
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="group block border hairline bg-parchment-50 hover:border-grace-dark transition-colors"
              >
                <div className="relative aspect-video overflow-hidden bg-ink">
                  {featuredThumb ? (
                    <img
                      src={featuredThumb}
                      alt={featured.title}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  ) : (
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "radial-gradient(ellipse at 25% 75%, #3f0b2a, #2b061d 60%, #180310 100%)",
                      }}
                      aria-hidden
                    />
                  )}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent pointer-events-none"
                    aria-hidden
                  />
                  <div className="absolute inset-0 p-5 md:p-6 flex flex-col justify-between">
                    <span className="text-[11px] uppercase tracking-[0.22em] text-grace-light">
                      Latest message · {featured.series}
                      {featured.reference ? ` · ${featured.reference}` : ""}
                    </span>
                    <div className="flex items-center gap-3 text-parchment-50">
                      <span className="w-11 h-11 rounded-full bg-grace-light/90 text-ink flex items-center justify-center text-base">
                        ▶
                      </span>
                      <span className="text-xs uppercase tracking-[0.18em]">
                        Watch on YouTube
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-6 md:p-7">
                  <h2 className="font-display text-2xl md:text-[26px] leading-tight text-ink group-hover:text-grace-dark transition-colors">
                    {featured.title}
                  </h2>
                  <p className="mt-2 text-xs uppercase tracking-[0.18em] text-ink-500">
                    {featured.preacher}
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

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
          {recentMessages.map((m, i) => {
            const watchHref = m.videoId
              ? `https://www.youtube.com/watch?v=${m.videoId}`
              : "#";
            const thumbUrl = m.videoId
              ? `https://img.youtube.com/vi/${m.videoId}/maxresdefault.jpg`
              : null;
            return (
              <li key={m.title} className="bg-parchment-50">
                <a
                  href={watchHref}
                  {...(m.videoId
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="group block h-full"
                >
                  <div className="relative aspect-video overflow-hidden bg-ink">
                    {thumbUrl ? (
                      <img
                        src={thumbUrl}
                        alt={m.title}
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    ) : (
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
                    )}
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent pointer-events-none"
                      aria-hidden
                    />
                    <div className="absolute inset-0 p-5 md:p-6 flex flex-col justify-between">
                      <span className="text-[11px] uppercase tracking-[0.22em] text-grace-light">
                        {m.series} · {m.reference}
                      </span>
                      <div className="flex items-center gap-3 text-parchment-50">
                        <span className="w-10 h-10 rounded-full bg-grace-light/90 text-ink flex items-center justify-center text-sm">
                          ▶
                        </span>
                        <span className="text-xs uppercase tracking-[0.18em]">
                          {m.videoId ? "Watch on YouTube" : "Watch"}
                        </span>
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
                </a>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="bg-parchment-100 border-y hairline">
        <div className="container-x max-w-[1400px] mx-auto py-20 md:py-24">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-8 bg-grace" />
                <span className="text-[11px] uppercase tracking-[0.22em] text-grace-dark">
                  Thematic series
                </span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl tracking-tight text-ink leading-[1.02]">
                Issues of Life.
              </h2>
              <p className="mt-6 text-ink-500 leading-relaxed max-w-xl">
                The Word on the ordinary places where life actually happens — marriage, money, fear, fellowship, purpose.
              </p>
            </div>
            <a
              href={ISSUES_OF_LIFE_PLAYLIST}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] uppercase tracking-[0.16em] text-ink border-b hairline pb-1 hover:border-grace-dark hover:text-grace-dark transition-colors"
            >
              Watch the playlist on YouTube →
            </a>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink/10 border hairline">
            {issuesOfLife.map((m) => {
              const watchHref = m.videoId
                ? `https://www.youtube.com/watch?v=${m.videoId}`
                : ISSUES_OF_LIFE_PLAYLIST;
              const thumbUrl = m.videoId
                ? `https://img.youtube.com/vi/${m.videoId}/maxresdefault.jpg`
                : null;
              return (
                <li key={`${m.episode}-${m.title}`} className="bg-parchment-50">
                  <a
                    href={watchHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block h-full"
                  >
                    <div className="relative aspect-video overflow-hidden bg-ink">
                      {thumbUrl ? (
                        <img
                          src={thumbUrl}
                          alt={`${m.episode} — ${m.title}`}
                          loading="lazy"
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      ) : (
                        <div
                          className="absolute inset-0"
                          style={{
                            background:
                              "radial-gradient(ellipse at 30% 70%, #8a6328, #2b061d 70%)",
                          }}
                          aria-hidden
                        />
                      )}
                      <div
                        className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent pointer-events-none"
                        aria-hidden
                      />
                      <div className="absolute inset-0 p-5 flex flex-col justify-between">
                        <span className="font-display text-grace-light text-lg uppercase tracking-[0.18em]">
                          {m.episode}
                        </span>
                        <div className="flex items-center gap-3 text-parchment-50">
                          <span className="w-9 h-9 rounded-full bg-grace-light/90 text-ink flex items-center justify-center text-xs">
                            ▶
                          </span>
                          <span className="text-[11px] uppercase tracking-[0.18em]">
                            {m.videoId ? "Watch" : "Playlist"}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="p-5 md:p-6">
                      <p className="font-display text-lg md:text-xl text-ink leading-snug group-hover:text-grace-dark transition-colors">
                        {m.title}
                      </p>
                      {m.blurb && (
                        <p className="mt-2 text-sm text-ink-500 leading-relaxed">
                          {m.blurb}
                        </p>
                      )}
                    </div>
                  </a>
                </li>
              );
            })}
          </ul>
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
