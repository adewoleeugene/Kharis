import Link from "next/link";
import { kharisLife } from "@/lib/content";

export function KharisLifeSection() {
  return (
    <section className="bg-parchment-100 border-y hairline">
      <div className="container-x max-w-[1400px] mx-auto py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-end mb-14 md:mb-20">
          <div className="md:col-span-7">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-grace" />
              <span className="text-[11px] uppercase tracking-[0.22em] text-grace-dark">
                The Kharis Life
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight text-ink leading-[1.02]">
              A path from first faith <br className="hidden md:inline" />
              to full participation.
            </h2>
          </div>
          <p className="md:col-span-5 text-ink-500 leading-relaxed md:pb-3">
            We walk every believer through five rhythms — not a programme, but a life. Start where
            you are; we&rsquo;ll meet you there.
          </p>
        </div>

        <ol className="grid grid-cols-1 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x hairline border hairline bg-parchment-50">
          {kharisLife.map((step) => (
            <li key={step.step}>
              <Link
                href={step.href}
                className="group block h-full p-7 md:p-8 relative hover:bg-parchment-100 transition-colors"
              >
                <div className="flex items-center justify-between mb-10">
                  <span className="font-display text-2xl text-grace-dark">{step.step}</span>
                  <span
                    className="w-8 h-8 rounded-full border hairline flex items-center justify-center text-ink-500 group-hover:bg-ink group-hover:text-parchment-50 group-hover:border-ink transition-colors"
                    aria-hidden
                  >
                    →
                  </span>
                </div>
                <h3 className="font-display text-xl md:text-2xl text-ink leading-tight">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm text-ink-500 leading-relaxed">{step.blurb}</p>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
