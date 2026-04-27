import Link from "next/link";
import { ukCities, internationalCities } from "@/lib/content";

const slug = (s: string) => s.toLowerCase().replace(/\s+/g, "-");

export function Locations() {
  return (
    <section className="container-x max-w-[1400px] mx-auto py-20 md:py-28">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14">
        <div className="lg:col-span-7">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-grace" />
            <span className="text-[11px] uppercase tracking-[0.22em] text-grace-dark">
              Across the nations
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight text-ink leading-[1.02]">
            Fifteen campuses. <br className="hidden md:inline" />
            One family.
          </h2>
        </div>
        <p className="lg:col-span-5 text-ink-500 leading-relaxed lg:pt-4 max-w-md">
          From London to Freetown, Kharis meets in thirteen UK cities and two nations overseas.
          Find the campus nearest to you and come as you are.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-7">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-[11px] uppercase tracking-[0.22em] text-ink-500">
              United Kingdom
            </span>
            <span className="h-px flex-1 bg-ink/10" />
            <span className="text-[11px] text-ink-500">{ukCities.length}</span>
          </div>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-px bg-ink/10 border border-ink/10">
            {ukCities.map((city) => (
              <li key={city}>
                <Link
                  href={`/locations/${slug(city)}`}
                  className="group flex items-center justify-between bg-parchment-50 hover:bg-ink hover:text-parchment-50 transition-colors py-4 px-5"
                >
                  <span className="font-display text-lg md:text-xl">{city}</span>
                  <span
                    className="text-ink-500 group-hover:text-grace-light transition-colors"
                    aria-hidden
                  >
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-5">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-[11px] uppercase tracking-[0.22em] text-ink-500">
              International
            </span>
            <span className="h-px flex-1 bg-ink/10" />
            <span className="text-[11px] text-ink-500">{internationalCities.length}</span>
          </div>
          <ul className="space-y-px bg-ink/10 border border-ink/10">
            {internationalCities.map((loc) => (
              <li key={loc.city}>
                <Link
                  href={`/locations/${slug(loc.city)}`}
                  className="group flex items-center justify-between bg-parchment-50 hover:bg-ink hover:text-parchment-50 transition-colors py-5 px-6"
                >
                  <div>
                    <div className="font-display text-xl md:text-2xl">{loc.city}</div>
                    <div className="text-[11px] uppercase tracking-[0.2em] text-ink-500 group-hover:text-grace-light transition-colors mt-1">
                      {loc.country}
                    </div>
                  </div>
                  <span
                    className="text-ink-500 group-hover:text-grace-light transition-colors"
                    aria-hidden
                  >
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="/locations"
            className="mt-8 inline-flex items-center gap-3 text-[13px] uppercase tracking-[0.16em] text-ink border-b hairline pb-1 hover:border-grace-dark hover:text-grace-dark transition-colors"
          >
            See every campus →
          </Link>
        </div>
      </div>
    </section>
  );
}
