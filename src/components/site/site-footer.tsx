import Link from "next/link";
import { footerColumns, site } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-parchment-50 mt-24">
      <div className="container-x max-w-[1400px] mx-auto py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div className="flex items-baseline gap-3">
              <span className="font-display text-4xl md:text-5xl tracking-tight">Kharis</span>
              <span className="text-[11px] uppercase tracking-[0.22em] text-ink-300">Church</span>
            </div>
            <p className="mt-6 font-display text-xl md:text-2xl leading-snug max-w-md">
              {site.tagline}.
            </p>
            <p className="mt-6 text-sm text-ink-300 max-w-md">{site.etymology}</p>

            <form
              className="mt-10 border-t hairline pt-8 max-w-md"
              aria-label="Newsletter signup"
              action="#"
            >
              <label className="block text-[11px] uppercase tracking-[0.2em] text-ink-300 mb-3">
                Stay in the loop
              </label>
              <div className="flex gap-0 border-b border-parchment-50/30 focus-within:border-grace-light transition-colors">
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="flex-1 bg-transparent py-3 text-parchment-50 placeholder:text-ink-300 outline-none"
                  required
                />
                <button
                  type="submit"
                  className="px-4 text-[12px] uppercase tracking-[0.18em] text-grace-light hover:text-parchment-50 transition-colors"
                >
                  Subscribe →
                </button>
              </div>
            </form>
          </div>

          <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerColumns.map((col) => (
              <div key={col.heading}>
                <h3 className="text-[11px] uppercase tracking-[0.2em] text-ink-300 mb-4">
                  {col.heading}
                </h3>
                <ul className="space-y-2.5">
                  {col.links.map((link) => {
                    const external = link.href.startsWith("http");
                    return (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          {...(external
                            ? { target: "_blank", rel: "noopener noreferrer" }
                            : {})}
                          className="text-sm text-parchment-50/85 hover:text-grace-light transition-colors"
                        >
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-parchment-50/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex flex-wrap gap-4 text-xs text-ink-300">
            <span>© {new Date().getFullYear()} {site.legalName}</span>
            <span aria-hidden>·</span>
            <span>Registered charity {site.charityNumber}</span>
            <span aria-hidden>·</span>
            <Link href="/safeguarding" className="hover:text-parchment-50 transition-colors">
              Safeguarding
            </Link>
            <Link href="/privacy" className="hover:text-parchment-50 transition-colors">
              Privacy
            </Link>
          </div>
          <ul className="flex items-center gap-5">
            {site.socials.map((s) => (
              <li key={s.label}>
                <Link
                  href={s.href}
                  className="text-xs uppercase tracking-[0.18em] text-ink-300 hover:text-grace-light transition-colors"
                >
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
