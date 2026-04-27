import Link from "next/link";
import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { podcastPlatforms, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Audio & Podcast",
  description:
    "Listen to Kharis Church messages on Spotify, Apple Podcasts, SoundCloud, Google Podcasts, Amazon Music and YouTube — every message from Pastor David Antwi, available wherever you already listen.",
};

export default function AudioPage() {
  return (
    <>
      <PageHeader
        eyebrow="Listen anywhere"
        title="Take Kharis with you."
        intro="Every message, every platform. Subscribe wherever you already listen — new episodes land within a day of the live teaching."
      />

      <section className="container-x max-w-[1400px] mx-auto py-14 md:py-20">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink/10 border hairline">
          {podcastPlatforms.map((p, i) => (
            <li key={p.label} className="bg-parchment-50">
              <Link
                href={p.href}
                target={p.href.startsWith("http") ? "_blank" : undefined}
                rel={p.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex flex-col justify-between h-full p-7 md:p-8 min-h-[180px] hover:bg-parchment-100 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-[0.22em] text-ink-500">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.22em] text-ink-500">
                    Subscribe
                  </span>
                </div>
                <div className="flex items-end justify-between">
                  <span className="font-display text-2xl md:text-3xl text-ink group-hover:text-grace-dark transition-colors">
                    {p.label}
                  </span>
                  <span
                    className="w-9 h-9 rounded-full border hairline flex items-center justify-center text-ink-500 group-hover:bg-ink group-hover:text-parchment-50 group-hover:border-ink transition-colors"
                    aria-hidden
                  >
                    ↗
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-parchment-100 border-y hairline">
        <div className="container-x max-w-[1400px] mx-auto py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="font-display text-3xl md:text-4xl text-ink tracking-tight leading-[1.05]">
                Prefer the video?
              </h2>
              <p className="mt-4 text-ink-500 leading-relaxed max-w-md">
                Every message is posted on YouTube at{" "}
                <a
                  href="https://www.youtube.com/@KharisMinistries"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink underline decoration-grace-dark/40 underline-offset-4 hover:decoration-grace-dark"
                >
                  @KharisMinistries
                </a>
                . Subscribe there for the full library in picture and sound.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 md:justify-end">
              <Link
                href="/messages"
                className="inline-flex items-center gap-3 bg-ink text-parchment-50 px-7 py-4 text-[13px] uppercase tracking-[0.16em] rounded-xs hover:bg-ink-700 transition-colors"
              >
                Browse messages <span aria-hidden>→</span>
              </Link>
              <Link
                href="/messages/series"
                className="inline-flex items-center gap-3 border hairline px-7 py-4 text-[13px] uppercase tracking-[0.16em] text-ink hover:bg-parchment-50 transition-colors"
              >
                All series
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container-x max-w-[1400px] mx-auto py-14 md:py-16 text-sm text-ink-500 leading-relaxed">
        <p>
          Having trouble finding us on your platform of choice? Write to us and
          we&rsquo;ll help —{" "}
          <a
            href={`mailto:${site.contactEmails.kgroup}`}
            className="underline decoration-grace-dark/40 underline-offset-4 hover:decoration-grace-dark text-ink"
          >
            {site.contactEmails.kgroup}
          </a>
          .
        </p>
      </section>
    </>
  );
}
