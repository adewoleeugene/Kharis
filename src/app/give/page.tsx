import Link from "next/link";
import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { bankDetails, buildFund, onlineGiving, paypalGiving, site, textGiving } from "@/lib/content";

export const metadata: Metadata = {
  title: "Give",
  description:
    "Give tithes, offerings, or toward the Build God A House campaign. Online via Tithe.ly, bank transfer, or text giving. Kharis Ministries is a UK registered charity (no. 1139291).",
};

export default function GivePage() {
  return (
    <>
      <PageHeader
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Give" }]}
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

      <section aria-label="Ways to give" className="container-x max-w-[1400px] mx-auto pt-14 md:pt-16">
        <ol className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-ink/10 border hairline">
          {[
            {
              n: "01",
              title: "Online · Tithe.ly",
              caption: "Most common · card payments",
              href: "#online",
            },
            {
              n: "02",
              title: "Text giving",
              caption: "UK only · up to £20 per text",
              href: "#text",
            },
            {
              n: "03",
              title: "Bank transfer",
              caption: "Best for regular giving",
              href: "#bank",
            },
            {
              n: "04",
              title: "PayPal",
              caption: "International friendly",
              href: "#paypal",
            },
            {
              n: "05",
              title: "Build God A House",
              caption: "Capital campaign",
              href: "#capital-campaign",
            },
          ].map((m) => (
            <li key={m.n} className="bg-parchment-50 text-ink">
              <Link
                href={m.href}
                className="group flex flex-col justify-between h-full p-6 md:p-7 min-h-[200px] hover:bg-ink hover:text-parchment-50 transition-colors"
              >
                <span className="font-mono text-[11px] tracking-[0.18em] text-ink-500 group-hover:text-grace-light transition-colors">
                  Nº {m.n}
                </span>
                <div>
                  <h2 className="font-display text-2xl md:text-[1.65rem] leading-tight">
                    {m.title}
                  </h2>
                  <p className="mt-3 text-[11px] uppercase tracking-[0.18em] text-ink-500 group-hover:text-grace-light transition-colors">
                    {m.caption}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ol>
      </section>

      <section id="online" className="bg-parchment-100 border-y hairline">
        <div className="container-x max-w-[1400px] mx-auto py-20 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <span className="text-[11px] uppercase tracking-[0.22em] text-grace-dark">
                Online · Tithe.ly · Most common
              </span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-ink tracking-tight leading-[1.02]">
              Give online.
            </h2>
            <p className="mt-6 text-ink-500 leading-relaxed max-w-md">
              Choose your campus, set an amount, one-off or recurring — secure card payments through Tithe.ly. Branch selection happens on the form.
            </p>
          </div>

          <div className="lg:col-span-7 border hairline bg-parchment-50 p-8 md:p-10">
            <p className="font-display text-2xl md:text-3xl text-ink leading-snug">
              Set up a one-time gift or a recurring partner schedule.
            </p>
            <p className="mt-4 text-sm text-ink-500 leading-relaxed max-w-xl">
              You&rsquo;ll arrive on Tithe.ly&rsquo;s secure form. We never see your card details. Gift Aid can be added on the next page if you&rsquo;re a UK taxpayer.
            </p>
            <a
              href={onlineGiving.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 bg-ink text-parchment-50 px-7 py-4 text-[13px] uppercase tracking-[0.16em] rounded-xs hover:bg-ink-700 transition-colors"
            >
              Give online <span aria-hidden>→</span>
            </a>
          </div>
        </div>
        </div>
      </section>

      <section id="text" className="container-x max-w-[1400px] mx-auto py-20 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <span className="text-[11px] uppercase tracking-[0.22em] text-grace-dark">
              Text giving · UK only
            </span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-ink tracking-tight leading-[1.02]">
              Give in a single text.
            </h2>
            <p className="mt-6 text-ink-500 leading-relaxed max-w-md">
              No app, no account. Send one SMS and the gift is added to your phone bill or deducted from your pay-as-you-go balance. Up to £{textGiving.maxAmountGBP} per text.
            </p>
          </div>

          <div className="lg:col-span-7">
            <ol className="grid grid-cols-1 md:grid-cols-3 gap-px bg-ink/10 border hairline">
              <li className="bg-parchment-50 p-7 md:p-8">
                <span className="font-display text-3xl text-grace-dark">01</span>
                <p className="mt-5 text-[11px] uppercase tracking-[0.22em] text-ink-500">
                  Compose a text
                </p>
                <p className="mt-2 font-display text-xl text-ink leading-snug">
                  {textGiving.keywordPrefix}&nbsp;[amount]
                </p>
                <p className="mt-3 text-xs text-ink-500 leading-relaxed">
                  e.g.{" "}
                  <span className="font-mono text-ink">{textGiving.example}</span>{" "}
                  to give £10.
                </p>
              </li>
              <li className="bg-parchment-50 p-7 md:p-8">
                <span className="font-display text-3xl text-grace-dark">02</span>
                <p className="mt-5 text-[11px] uppercase tracking-[0.22em] text-ink-500">
                  Send it to
                </p>
                <p className="mt-2 font-display text-3xl md:text-4xl text-ink tabular-nums">
                  {textGiving.shortCode}
                </p>
                <p className="mt-3 text-xs text-ink-500 leading-relaxed">
                  Standard rate · UK numbers only.
                </p>
              </li>
              <li className="bg-parchment-50 p-7 md:p-8">
                <span className="font-display text-3xl text-grace-dark">03</span>
                <p className="mt-5 text-[11px] uppercase tracking-[0.22em] text-ink-500">
                  Confirmation
                </p>
                <p className="mt-2 font-display text-xl text-ink leading-snug">
                  You&rsquo;ll receive a reply.
                </p>
                <p className="mt-3 text-xs text-ink-500 leading-relaxed">
                  Charges appear on your next phone bill.
                </p>
              </li>
            </ol>
          </div>
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
        </div>
      </section>

      <section id="paypal" className="container-x max-w-[1400px] mx-auto py-20 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <span className="text-[11px] uppercase tracking-[0.22em] text-grace-dark">
              PayPal · International friendly
            </span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-ink tracking-tight leading-[1.02]">
              Give with PayPal.
            </h2>
            <p className="mt-6 text-ink-500 leading-relaxed max-w-md">
              Use your PayPal balance, linked bank account or card. Convenient if you give from outside the UK or already use PayPal regularly.
            </p>
          </div>

          <div className="lg:col-span-7 border hairline bg-parchment-50 p-8 md:p-10">
            <p className="font-display text-2xl md:text-3xl text-ink leading-snug">
              One click to PayPal&rsquo;s secure donation form.
            </p>
            <p className="mt-4 text-sm text-ink-500 leading-relaxed max-w-xl">
              You&rsquo;ll arrive on PayPal&rsquo;s site to confirm the amount and complete the gift. We never see your card or bank details.
            </p>
            <a
              href={paypalGiving.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 bg-ink text-parchment-50 px-7 py-4 text-[13px] uppercase tracking-[0.16em] rounded-xs hover:bg-ink-700 transition-colors"
            >
              Give with PayPal <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </section>

      <section id="capital-campaign" className="relative bg-ink text-parchment-50 overflow-hidden">
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
                <a
                  href={buildFund.donateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-grace-light text-ink px-7 py-4 text-[13px] uppercase tracking-[0.16em] rounded-xs hover:bg-parchment-50 transition-colors"
                >
                  Partner with the vision <span aria-hidden>→</span>
                </a>
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

    </>
  );
}
