import Link from "next/link";
import { buildFund } from "@/lib/content";

export function BuildGodsHouse() {
  return (
    <section className="relative bg-ink text-parchment-50 overflow-hidden">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse at 80% 0%, rgba(212,168,90,0.22), transparent 55%), radial-gradient(ellipse at 0% 100%, rgba(44,74,58,0.32), transparent 60%)",
        }}
        aria-hidden
      />
      <div className="container-x max-w-[1400px] mx-auto py-24 md:py-32 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-grace-light" />
              <span className="text-[11px] uppercase tracking-[0.22em] text-grace-light">
                {buildFund.eyebrow}
              </span>
            </div>
            <h2 className="font-display text-5xl md:text-7xl lg:text-[104px] leading-[0.9] tracking-tight">
              {buildFund.title}.
            </h2>
            <p className="mt-8 text-lg md:text-xl text-ink-300 max-w-xl leading-relaxed">
              {buildFund.body}
            </p>
            <div className="mt-12 flex flex-wrap items-center gap-5">
              <a
                href={buildFund.primaryHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-grace-light text-ink px-7 py-4 text-[13px] uppercase tracking-[0.16em] rounded-xs hover:bg-parchment-50 transition-colors"
              >
                {buildFund.primaryLabel} <span aria-hidden>→</span>
              </a>
              <Link
                href={buildFund.secondaryHref}
                className="text-[13px] uppercase tracking-[0.16em] text-parchment-50 border-b border-parchment-50/30 pb-1 hover:border-grace-light transition-colors"
              >
                {buildFund.secondaryLabel}
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="border border-parchment-50/20 p-8 md:p-10 bg-ink-700/40 backdrop-blur-sm">
              <div className="flex items-baseline justify-between mb-8">
                <span className="text-[11px] uppercase tracking-[0.22em] text-ink-300">
                  Campaign progress
                </span>
                <span className="text-[11px] uppercase tracking-[0.22em] text-grace-light">
                  Live
                </span>
              </div>

              <div className="relative h-px bg-parchment-50/15 mb-8">
                <div className="absolute inset-y-0 left-0 w-[62%] bg-grace-light" />
                <div className="absolute top-1/2 left-[62%] -translate-y-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-grace-light" />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="font-display text-3xl md:text-4xl">62%</div>
                  <div className="text-[11px] uppercase tracking-[0.2em] text-ink-300 mt-2">
                    of vision funded
                  </div>
                </div>
                <div>
                  <div className="font-display text-3xl md:text-4xl">15</div>
                  <div className="text-[11px] uppercase tracking-[0.2em] text-ink-300 mt-2">
                    campuses benefiting
                  </div>
                </div>
              </div>

              <p className="mt-8 pt-6 border-t border-parchment-50/15 text-xs text-ink-300 leading-relaxed">
                Figures refresh monthly. Partner with a one-time gift or pledge over 24 months.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
