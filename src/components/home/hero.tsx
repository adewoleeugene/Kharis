import Link from "next/link";
import { currentSeries, site } from "@/lib/content";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-parchment-50">
      <div className="absolute inset-0 grain opacity-40 pointer-events-none" aria-hidden />
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-grace/10 blur-3xl pointer-events-none" aria-hidden />

      <div className="container-x max-w-[1400px] mx-auto pt-10 md:pt-16 pb-20 md:pb-28 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-8">
              <span className="h-px w-8 bg-grace" />
              <span className="text-[11px] uppercase tracking-[0.22em] text-grace-dark font-medium">
                {currentSeries.eyebrow}
              </span>
            </div>

            <h1 className="font-display tracking-tight text-ink text-[clamp(2.75rem,7vw,6.25rem)] leading-[0.95]">
              {currentSeries.title}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-ink-500 max-w-xl leading-relaxed">
              {currentSeries.subtitle}
            </p>

            <figure className="mt-10 max-w-2xl">
              <blockquote className="font-display text-2xl md:text-3xl leading-snug text-ink">
                <span className="text-grace">&ldquo;</span>
                {currentSeries.quote}
                <span className="text-grace">&rdquo;</span>
              </blockquote>
              <figcaption className="mt-4 text-sm uppercase tracking-[0.18em] text-ink-500">
                — {currentSeries.preacher}
              </figcaption>
            </figure>

            <div className="mt-12 flex flex-wrap items-center gap-5">
              <Link
                href={currentSeries.ctaHref}
                className="group inline-flex items-center gap-3 bg-ink text-parchment-50 px-7 py-4 text-[13px] uppercase tracking-[0.16em] rounded-xs hover:bg-ink-700 transition-colors"
              >
                {currentSeries.ctaLabel}
                <span className="transition-transform group-hover:translate-x-1" aria-hidden>→</span>
              </Link>
              <Link
                href={currentSeries.secondaryHref}
                className="text-[13px] uppercase tracking-[0.16em] text-ink border-b hairline pb-1 hover:border-grace-dark hover:text-grace-dark transition-colors"
              >
                {currentSeries.secondaryLabel}
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] bg-ink rounded-sm overflow-hidden">
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse at 30% 20%, #3f0b2a 0%, #2b061d 55%, #180310 100%)",
                }}
                aria-hidden
              />
              <div
                className="absolute inset-0 opacity-30 mix-blend-screen"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 70% 60%, rgba(212,168,90,0.55), transparent 45%)",
                }}
                aria-hidden
              />

              <div className="relative h-full flex flex-col justify-between p-8 md:p-10">
                <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.22em] text-parchment-50/70">
                  <span>Series · 01 of 12</span>
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-grace-light animate-pulse" />
                    On Air
                  </span>
                </div>

                <div>
                  <p className="text-[11px] uppercase tracking-[0.24em] text-grace-light mb-4">
                    Kharis Teaching
                  </p>
                  <h2 className="font-display text-4xl md:text-5xl text-parchment-50 leading-[0.95]">
                    Acts.
                  </h2>
                  <p className="mt-4 text-sm text-parchment-50/70 max-w-[26ch]">
                    And they continued stedfastly in the apostles&rsquo; doctrine.
                  </p>
                  <div className="mt-8 flex items-center gap-3">
                    <span className="w-10 h-10 rounded-full bg-grace-light/90 text-ink flex items-center justify-center">
                      ▶
                    </span>
                    <div>
                      <div className="text-sm text-parchment-50">Watch episode 01</div>
                      <div className="text-[11px] uppercase tracking-[0.18em] text-parchment-50/60">
                        {site.pastors.primary.name}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
