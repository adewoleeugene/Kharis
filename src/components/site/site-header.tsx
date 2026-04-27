"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site, type NavItem } from "@/lib/content";

function isActive(item: NavItem, pathname: string): boolean {
  if (item.href) {
    if (item.href === "/") return pathname === "/";
    return pathname === item.href || pathname.startsWith(item.href + "/");
  }
  if (item.items) {
    return item.items.some(
      (sub) => pathname === sub.href || pathname.startsWith(sub.href + "/")
    );
  }
  return false;
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-300 ${
        scrolled
          ? "bg-parchment-50/85 backdrop-blur-md border-b hairline"
          : "bg-transparent"
      }`}
      onMouseLeave={() => setOpen(null)}
    >
      <div className="container-x max-w-[1400px] mx-auto flex items-center justify-between h-16 md:h-20">
        <Link href="/" className="group flex items-baseline gap-2" aria-label="Kharis Church home">
          <span className="font-display text-2xl md:text-3xl tracking-tight font-semibold text-ink">
            Kharis
          </span>
          <span className="hidden md:inline text-[11px] uppercase tracking-[0.18em] text-ink-500 group-hover:text-grace-dark transition-colors">
            Church
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
          {nav.map((item) => {
            const active = isActive(item, pathname);
            return (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.items && setOpen(item.label)}
            >
              {item.href ? (
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative px-3 py-2 text-[13px] uppercase tracking-[0.14em] transition-colors ${
                    active ? "text-ink" : "text-ink-700 hover:text-ink"
                  }`}
                >
                  {item.label}
                  {active && (
                    <span
                      className="absolute left-3 right-3 -bottom-0.5 h-px bg-grace-dark"
                      aria-hidden
                    />
                  )}
                </Link>
              ) : (
                <button
                  className={`relative px-3 py-2 text-[13px] uppercase tracking-[0.14em] transition-colors ${
                    active || open === item.label ? "text-ink" : "text-ink-700 hover:text-ink"
                  }`}
                >
                  {item.label}
                  {active && (
                    <span
                      className="absolute left-3 right-3 -bottom-0.5 h-px bg-grace-dark"
                      aria-hidden
                    />
                  )}
                </button>
              )}
              {item.items && open === item.label && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[320px]">
                  <div className="bg-parchment-50 border hairline rounded-sm shadow-[0_24px_48px_-24px_rgba(11,18,32,0.25)] p-2">
                    {item.description && (
                      <p className="px-3 pt-2 pb-3 text-xs text-ink-500 border-b hairline mb-1">
                        {item.description}
                      </p>
                    )}
                    {item.items.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className="block px-3 py-2.5 rounded-xs hover:bg-parchment-200 transition-colors"
                        onClick={() => setOpen(null)}
                      >
                        <div className="text-sm text-ink font-medium">{sub.label}</div>
                        {sub.description && (
                          <div className="text-xs text-ink-500 mt-0.5">{sub.description}</div>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/give"
            className="hidden md:inline-flex items-center gap-2 bg-ink text-parchment-50 px-5 py-2.5 text-[13px] uppercase tracking-[0.14em] hover:bg-ink-700 transition-colors rounded-xs"
          >
            Give
            <span aria-hidden>→</span>
          </Link>
          <button
            className="lg:hidden p-2 -mr-2"
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span className="block w-6 h-px bg-ink mb-1.5" />
            <span className="block w-6 h-px bg-ink mb-1.5" />
            <span className="block w-4 h-px bg-ink ml-auto" />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t hairline bg-parchment-50 max-h-[80vh] overflow-y-auto">
          <div className="container-x max-w-[1400px] mx-auto py-4">
            {nav.map((item) => {
              const active = isActive(item, pathname);
              return (
              <div key={item.label} className="py-2 border-b hairline last:border-0">
                {item.href ? (
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`flex items-center justify-between py-2 font-display text-xl ${
                      active ? "text-grace-dark" : "text-ink"
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    <span>{item.label}</span>
                    {active && <span className="text-grace-dark text-sm" aria-hidden>●</span>}
                  </Link>
                ) : (
                  <>
                    <div className={`flex items-center justify-between font-display text-xl py-2 ${active ? "text-grace-dark" : "text-ink"}`}>
                      <span>{item.label}</span>
                      {active && <span className="text-grace-dark text-sm" aria-hidden>●</span>}
                    </div>
                    <div className="pl-1 pb-2">
                      {item.items?.map((sub) => {
                        const subActive =
                          pathname === sub.href || pathname.startsWith(sub.href + "/");
                        return (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            aria-current={subActive ? "page" : undefined}
                            className={`block py-1.5 text-sm ${
                              subActive ? "text-grace-dark" : "text-ink-700"
                            }`}
                            onClick={() => setMobileOpen(false)}
                          >
                            {sub.label}
                          </Link>
                        );
                      })}
                    </div>
                  </>
                )}
              </div>
              );
            })}
            <Link
              href="/give"
              className="mt-4 inline-flex items-center gap-2 bg-ink text-parchment-50 px-5 py-3 text-[13px] uppercase tracking-[0.14em] rounded-xs"
              onClick={() => setMobileOpen(false)}
            >
              Give →
            </Link>
            <p className="mt-6 text-xs text-ink-500">
              {site.tagline}
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
