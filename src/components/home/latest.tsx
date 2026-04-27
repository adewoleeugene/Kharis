import Link from "next/link";
import { announcements } from "@/lib/content";

export function Latest() {
  return (
    <section className="container-x max-w-[1400px] mx-auto py-20 md:py-28">
      <div className="flex items-end justify-between mb-10 md:mb-14 gap-6 flex-wrap">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-grace" />
            <span className="text-[11px] uppercase tracking-[0.22em] text-grace-dark">
              Latest
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl tracking-tight text-ink">
            What&rsquo;s moving across Kharis.
          </h2>
        </div>
        <Link
          href="/news"
          className="text-[13px] uppercase tracking-[0.16em] text-ink border-b hairline pb-1 hover:border-grace-dark hover:text-grace-dark transition-colors"
        >
          All updates →
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {announcements.map((a, i) => (
          <Link
            key={a.href}
            href={a.href}
            className="group block border hairline bg-parchment-50 hover:border-grace transition-colors"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-ink">
              <div
                className="absolute inset-0"
                style={{
                  background:
                    i === 0
                      ? "radial-gradient(ellipse at 20% 80%, #3f0b2a, #2b061d 60%)"
                      : i === 1
                      ? "radial-gradient(ellipse at 80% 20%, #8a6328, #2b061d 70%)"
                      : "radial-gradient(ellipse at 50% 50%, #2c4a3a, #2b061d 75%)",
                }}
                aria-hidden
              />
              <div className="absolute inset-0 flex items-end p-6">
                <span className="text-[11px] uppercase tracking-[0.22em] text-grace-light">
                  {a.category}
                </span>
              </div>
              <div className="absolute top-6 right-6 w-10 h-10 rounded-full border border-parchment-50/40 flex items-center justify-center text-parchment-50 group-hover:bg-grace-light group-hover:text-ink group-hover:border-grace-light transition-colors">
                →
              </div>
            </div>
            <div className="p-6 md:p-7">
              <h3 className="font-display text-2xl md:text-[26px] leading-tight text-ink group-hover:text-grace-dark transition-colors">
                {a.title}
              </h3>
              <p className="mt-3 text-sm text-ink-500 leading-relaxed">{a.blurb}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
