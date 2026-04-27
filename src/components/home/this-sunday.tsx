import Link from "next/link";
import { thisSunday } from "@/lib/content";

const serviceSlots = thisSunday.schedule;

export function ThisSunday() {
  return (
    <section className="bg-ink text-parchment-50 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(246,241,231,0.2) 1px, transparent 1px)",
          backgroundSize: "80px 100%",
        }}
        aria-hidden
      />
      <div className="container-x max-w-[1400px] mx-auto py-20 md:py-28 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-grace-light" />
              <span className="text-[11px] uppercase tracking-[0.22em] text-grace-light">
                {thisSunday.eyebrow}
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.02] tracking-tight">
              {thisSunday.heading}
            </h2>
            <p className="mt-6 text-ink-300 max-w-md leading-relaxed">{thisSunday.body}</p>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <Link
                href={thisSunday.primaryHref}
                className="inline-flex items-center gap-3 bg-grace-light text-ink px-7 py-4 text-[13px] uppercase tracking-[0.16em] rounded-xs hover:bg-parchment-50 transition-colors"
              >
                {thisSunday.primaryLabel} <span aria-hidden>→</span>
              </Link>
              <Link
                href={thisSunday.secondaryHref}
                className="text-[13px] uppercase tracking-[0.16em] text-parchment-50 border-b border-parchment-50/30 pb-1 hover:border-grace-light transition-colors"
              >
                {thisSunday.secondaryLabel}
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-parchment-50/15">
              {serviceSlots.map((slot) => (
                <div
                  key={slot.label}
                  className="bg-ink p-8 md:p-10 flex flex-col justify-between min-h-[220px] group hover:bg-ink-700 transition-colors"
                >
                  <span className="text-[11px] uppercase tracking-[0.22em] text-ink-300">
                    {slot.label}
                  </span>
                  <div>
                    <div className="font-display text-6xl md:text-7xl text-parchment-50 leading-none">
                      {slot.time}
                    </div>
                    <p className="mt-3 text-sm text-ink-300">{slot.note}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-5 text-xs uppercase tracking-[0.18em] text-ink-300">
              Times vary by campus · check your local page
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
