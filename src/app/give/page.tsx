import Link from "next/link";
import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { bankDetails, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Give",
  description:
    "Give tithes, offerings, or toward the Build God A House campaign. Online via Tithe.ly, bank transfer, or text giving. Kharis Ministries is a UK registered charity (no. 1139291).",
};

export default function GivePage() {
  return (
    <>
      <PageHeader
        eyebrow="Partnering with the mission"
        title="Give as worship."
        intro="Giving tithes and offerings is a biblical principle and part of our worship. Choose the path that works for you — every gift supports the teaching, people and places of Kharis."
      >
        <figure className="max-w-2xl">
          <blockquote className="font-display text-xl md:text-2xl text-ink leading-snug italic">
            &ldquo;He who sows sparingly will also reap sparingly, and he who sows bountifully will also reap bountifully.&rdquo;
          </blockquote>
          <figcaption className="mt-3 text-[11px] uppercase tracking-[0.22em] text-ink-500">
            — 2 Corinthians 9:6
          </figcaption>
        </figure>
      </PageHeader>

      <section className="container-x max-w-[1400px] mx-auto py-20 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-ink/10 border hairline">
          {[
            {
              tag: "Most common",
              title: "Online · Tithe.ly",
              body: "Choose a campus, set an amount, one-off or recurring. Secure card payments.",
              cta: { label: "Give online", href: "https://tithe.ly" },
              emphasis: true,
            },
            {
              tag: "UK only",
              title: "Text giving",
              body: "Fast, no account required. Available to UK mobile numbers.",
              cta: { label: "See numbers", href: "#text" },
            },
            {
              tag: "Best for regular giving",
              title: "Bank transfer",
              body: "Standing order from your bank account — the lowest fees to the ministry.",
              cta: { label: "Account details", href: "#bank" },
            },
          ].map((m) => (
            <div
              key={m.title}
              className={`p-8 md:p-10 flex flex-col justify-between min-h-[320px] ${
                m.emphasis ? "bg-ink text-parchment-50" : "bg-parchment-50"
              }`}
            >
              <div>
                <span
                  className={`text-[11px] uppercase tracking-[0.22em] ${
                    m.emphasis ? "text-grace-light" : "text-grace-dark"
                  }`}
                >
                  {m.tag}
                </span>
                <h3
                  className={`mt-5 font-display text-3xl md:text-4xl leading-tight ${
                    m.emphasis ? "text-parchment-50" : "text-ink"
                  }`}
                >
                  {m.title}
                </h3>
                <p
                  className={`mt-4 text-sm leading-relaxed ${
                    m.emphasis ? "text-ink-300" : "text-ink-500"
                  }`}
                >
                  {m.body}
                </p>
              </div>
              <Link
                href={m.cta.href}
                className={`mt-8 inline-flex items-center gap-3 px-6 py-3 text-[13px] uppercase tracking-[0.16em] rounded-xs transition-colors ${
                  m.emphasis
                    ? "bg-grace-light text-ink hover:bg-parchment-50"
                    : "bg-ink text-parchment-50 hover:bg-ink-700"
                }`}
              >
                {m.cta.label} <span aria-hidden>→</span>
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section id="bank" className="bg-parchment-100 border-y hairline">
        <div className="container-x max-w-[1400px] mx-auto py-20 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <span className="text-[11px] uppercase tracking-[0.22em] text-grace-dark">
                Bank transfer
              </span>
              <h2 className="mt-4 font-display text-4xl md:text-5xl text-ink tracking-tight leading-[1.02]">
                Direct to {site.legalName}.
              </h2>
              <p className="mt-6 text-ink-500 leading-relaxed max-w-md">
                Set up a one-time gift or a standing order from your bank. For international transfers use the SWIFT/BIC or IBAN.
              </p>
            </div>

            <dl className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-px bg-ink/10 border hairline">
              {[
                { k: "Account name", v: bankDetails.accountName },
                { k: "Account number", v: bankDetails.accountNumber, mono: true },
                { k: "Sort code", v: bankDetails.sortCode, mono: true },
                { k: "SWIFT / BIC", v: bankDetails.swiftBic, mono: true },
                { k: "IBAN", v: bankDetails.iban, mono: true, wide: true },
              ].map((row) => (
                <div
                  key={row.k}
                  className={`bg-parchment-50 p-6 md:p-7 ${row.wide ? "md:col-span-2" : ""}`}
                >
                  <dt className="text-[11px] uppercase tracking-[0.22em] text-ink-500">
                    {row.k}
                  </dt>
                  <dd
                    className={`mt-3 text-ink ${
                      row.mono
                        ? "font-mono text-lg md:text-xl tracking-wide"
                        : "font-display text-xl md:text-2xl"
                    }`}
                  >
                    {row.v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-12 border hairline bg-parchment-50 p-7 md:p-8 max-w-3xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[11px] uppercase tracking-[0.22em] text-grace-dark">
                UK taxpayers
              </span>
              <span className="h-px flex-1 bg-ink/10" />
            </div>
            <p className="font-display text-xl md:text-2xl text-ink leading-snug">
              Gift Aid adds 25p to every £1 you give — at no cost to you.
            </p>
            <p className="mt-3 text-sm text-ink-500 leading-relaxed">
              If you pay UK income or capital gains tax, completing a Gift Aid
              declaration lets us claim an extra 25% on your donation from HMRC. One
              form covers all future gifts.
            </p>
            <Link
              href="/give/gift-aid"
              className="mt-5 inline-flex text-[13px] uppercase tracking-[0.16em] text-ink border-b hairline pb-1 hover:border-grace-dark hover:text-grace-dark transition-colors"
            >
              Complete Gift Aid declaration →
            </Link>
          </div>
        </div>
      </section>

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
                  Capital campaign
                </span>
              </div>
              <h2 className="font-display text-5xl md:text-7xl tracking-tight leading-[0.92]">
                Build God A House.
              </h2>
              <p className="mt-6 text-lg md:text-xl text-ink-300 max-w-xl leading-relaxed">
                We are believing for a permanent home — a place of teaching, worship
                and refuge for every Kharis family across the nations.
              </p>
              <div className="mt-10 flex flex-wrap gap-5">
                <Link
                  href="/give/build-gods-house"
                  className="inline-flex items-center gap-3 bg-grace-light text-ink px-7 py-4 text-[13px] uppercase tracking-[0.16em] rounded-xs hover:bg-parchment-50 transition-colors"
                >
                  Partner with the vision <span aria-hidden>→</span>
                </Link>
                <Link
                  href="/about"
                  className="text-[13px] uppercase tracking-[0.16em] text-parchment-50 border-b border-parchment-50/30 pb-1 hover:border-grace-light transition-colors"
                >
                  Our story
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 border border-parchment-50/20 p-8 md:p-10 bg-ink-700/40 backdrop-blur-sm">
              <div className="flex items-baseline justify-between mb-8">
                <span className="text-[11px] uppercase tracking-[0.22em] text-ink-300">
                  Campaign progress
                </span>
                <span className="text-[11px] uppercase tracking-[0.22em] text-grace-light">Live</span>
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
                Illustrative figures pending confirmation from the finance team.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-x max-w-[1400px] mx-auto py-16 md:py-20 text-sm text-ink-500 leading-relaxed">
        <p>
          {site.legalName} is a UK registered charity (no. {site.charityNumber}). All
          online payments are processed by secure third-party providers; Kharis does
          not store your card details. Questions about giving? Contact the finance team
          through your local campus.
        </p>
      </section>
    </>
  );
}
