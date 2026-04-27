import Link from "next/link";
import { ReactNode } from "react";

export type Crumb = { label: string; href?: string };

export function PageHeader({
  eyebrow,
  title,
  intro,
  breadcrumbs,
  children,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  breadcrumbs?: Crumb[];
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-parchment-50 border-b hairline">
      <div className="absolute inset-0 grain opacity-40 pointer-events-none" aria-hidden />
      <div
        className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full bg-grace/10 blur-3xl pointer-events-none"
        aria-hidden
      />
      <div className="container-x max-w-[1400px] mx-auto pt-10 md:pt-14 pb-14 md:pb-20 relative">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-10 md:mb-12">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] uppercase tracking-[0.22em]">
              {breadcrumbs.map((c, i) => {
                const last = i === breadcrumbs.length - 1;
                return (
                  <li key={`${c.label}-${i}`} className="flex items-center gap-2">
                    {c.href && !last ? (
                      <Link
                        href={c.href}
                        className="text-ink-500 hover:text-ink transition-colors"
                      >
                        {c.label}
                      </Link>
                    ) : (
                      <span
                        aria-current={last ? "page" : undefined}
                        className={last ? "text-grace-dark" : "text-ink-500"}
                      >
                        {c.label}
                      </span>
                    )}
                    {!last && (
                      <span aria-hidden className="text-ink-500/40">
                        /
                      </span>
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>
        )}
        <div className="flex items-center gap-3 mb-6">
          <span className="h-px w-8 bg-grace" />
          <span className="text-[11px] uppercase tracking-[0.22em] text-grace-dark font-medium">
            {eyebrow}
          </span>
        </div>
        <h1 className="font-display tracking-tight text-ink leading-[0.95] text-[clamp(2.5rem,6vw,5.5rem)] max-w-4xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-8 max-w-2xl text-lg md:text-xl text-ink-500 leading-relaxed">
            {intro}
          </p>
        )}
        {children && <div className="mt-10">{children}</div>}
      </div>
    </section>
  );
}
