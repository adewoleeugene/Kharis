import Link from "next/link";
import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { bankDetails, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Build God A House",
  description:
    "Kharis Church's capital campaign to purchase a permanent home — a place of teaching, worship and refuge for every Kharis family across the nations.",
};

const pledgeOptions = [
  {
    tier: "One-time",
    amount: "£250+",
    blurb: "A single gift that moves the needle.",
  },
  {
    tier: "Monthly",
    amount: "£25 / mo",
    blurb: "Standing order over 24 months — the most common way to partner.",
    emphasis: true,
  },
  {
    tier: "Significant",
    amount: "£10,000+",
    blurb: "Larger gifts transform the project. Talk to us — we will handle carefully.",
  },
];

export default function BuildFundPage() {
  return (
    <>
      <PageHeader
        eyebrow="Capital campaign · Build God A House"
        title="A permanent home for the Kharis family."
        intro="For twenty years we have rented our gathering spaces. We are now believing for a permanent home — a place of teaching, worship and refuge we can steward for the generations ahead."
      >
        <div className="flex flex-wrap gap-5">
          <Link
            href="#partner"
            className="inline-flex items-center gap-3 bg-ink text-parchment-50 px-7 py-4 text-[13px] uppercase tracking-[0.16em] rounded-xs hover:bg-ink-700 transition-colors"
          >
            Partner with the vision <span aria-hidden>→</span>
          </Link>
          <Link
            href="/give"
            className="text-[13px] uppercase tracking-[0.16em] text-ink border-b hairline pb-1 hover:border-grace-dark hover:text-grace-dark transition-colors"
          >
            Other ways to give
          </Link>
        </div>
      </PageHeader>

      <section className="bg-ink text-parchment-50 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(ellipse at 80% 0%, rgba(212,168,90,0.22), transparent 55%), radial-gradient(ellipse at 0% 100%, rgba(44,74,58,0.32), transparent 60%)",
          }}
          aria-hidden
        />
        <div className="container-x max-w-[1400px] mx-auto py-20 md:py-24 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <span className="text-[11px] uppercase tracking-[0.22em] text-grace-light">
                Campaign progress
              </span>
              <div className="mt-6 font-display text-[clamp(4rem,9vw,8rem)] leading-[0.9]">
                62<span className="text-grace-light">%</span>
              </div>
              <p className="mt-6 text-lg text-ink-300 max-w-md leading-relaxed">
                of our campaign target is raised. The next chapter is in sight —
                and every gift carries us closer.
              </p>
              <p className="mt-3 text-xs text-ink-300/70">
                Figures illustrative pending confirmation from the finance team.
              </p>
            </div>

            <dl className="lg:col-span-5 grid grid-cols-2 gap-px bg-parchment-50/15 border border-parchment-50/15">
              {[
                { k: "Campuses benefiting", v: "15" },
                { k: "Nations reached", v: "3" },
                { k: "Years renting", v: "20+" },
                { k: "Pledge window", v: "24 mo" },
              ].map((s) => (
                <div key={s.k} className="bg-ink p-6 md:p-7 min-h-[150px] flex flex-col justify-between">
                  <span className="text-[11px] uppercase tracking-[0.22em] text-ink-300">
                    {s.k}
                  </span>
                  <span className="font-display text-4xl md:text-5xl text-parchment-50">
                    {s.v}
                  </span>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="container-x max-w-[1400px] mx-auto py-20 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-grace" />
              <span className="text-[11px] uppercase tracking-[0.22em] text-grace-dark">
                The vision
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-ink tracking-tight leading-[1.02]">
              A space we can steward for generations.
            </h2>
          </div>
          <div className="lg:col-span-7 text-ink-500 leading-relaxed text-lg space-y-5">
            <p>
              For twenty years Kharis has been a family on the move — town halls,
              school assembly rooms, borrowed spaces. God has blessed that season
              with growth, but we are believing for something different in the next:
              a permanent home where teaching, prayer, children&rsquo;s ministry, and
              community can find rest.
            </p>
            <p>
              The building will be a gift to the wider community, not just the Kharis
              family — a place of teaching, worship and refuge that will outlast any
              one of us.
            </p>
          </div>
        </div>
      </section>

      <section
        id="partner"
        className="bg-parchment-100 border-y hairline"
      >
        <div className="container-x max-w-[1400px] mx-auto py-20 md:py-24">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-6">
            <h2 className="font-display text-4xl md:text-5xl text-ink tracking-tight leading-[1.02]">
              How to partner.
            </h2>
            <Link
              href="/give/gift-aid"
              className="text-[13px] uppercase tracking-[0.16em] text-ink border-b hairline pb-1 hover:border-grace-dark hover:text-grace-dark transition-colors"
            >
              Adding Gift Aid →
            </Link>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-3 gap-px bg-ink/10 border hairline">
            {pledgeOptions.map((p) => (
              <li
                key={p.tier}
                className={`p-8 md:p-10 flex flex-col justify-between min-h-[300px] ${
                  p.emphasis ? "bg-ink text-parchment-50" : "bg-parchment-50"
                }`}
              >
                <span
                  className={`text-[11px] uppercase tracking-[0.22em] ${
                    p.emphasis ? "text-grace-light" : "text-grace-dark"
                  }`}
                >
                  {p.tier}
                </span>
                <div>
                  <div
                    className={`font-display text-5xl md:text-6xl leading-none ${
                      p.emphasis ? "text-parchment-50" : "text-ink"
                    }`}
                  >
                    {p.amount}
                  </div>
                  <p
                    className={`mt-4 text-sm leading-relaxed ${
                      p.emphasis ? "text-ink-300" : "text-ink-500"
                    }`}
                  >
                    {p.blurb}
                  </p>
                </div>
                <Link
                  href={p.emphasis ? "#bank" : "/give"}
                  className={`mt-8 inline-flex items-center gap-3 px-6 py-3 text-[13px] uppercase tracking-[0.16em] rounded-xs transition-colors ${
                    p.emphasis
                      ? "bg-grace-light text-ink hover:bg-parchment-50"
                      : "bg-ink text-parchment-50 hover:bg-ink-700"
                  }`}
                >
                  {p.emphasis ? "Set up standing order" : "Give online"} <span aria-hidden>→</span>
                </Link>
              </li>
            ))}
          </ul>

          <div id="bank" className="mt-14 border hairline bg-parchment-50 p-7 md:p-9">
            <h3 className="font-display text-2xl md:text-3xl text-ink leading-tight mb-6">
              Bank details for standing orders or transfers
            </h3>
            <dl className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              {[
                { k: "Account name", v: bankDetails.accountName },
                { k: "Account number", v: bankDetails.accountNumber, mono: true },
                { k: "Sort code", v: bankDetails.sortCode, mono: true },
                { k: "Reference", v: "BUILD — your name", mono: true },
              ].map((row) => (
                <div key={row.k}>
                  <dt className="text-[11px] uppercase tracking-[0.22em] text-ink-500">
                    {row.k}
                  </dt>
                  <dd
                    className={`mt-1 text-ink ${
                      row.mono
                        ? "font-mono text-lg tracking-wide"
                        : "font-display text-lg"
                    }`}
                  >
                    {row.v}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 pt-5 border-t hairline text-xs text-ink-500 leading-relaxed">
              Please use the reference <strong className="text-ink">BUILD</strong> so your
              gift is allocated correctly. {site.legalName} is a UK registered charity
              (no. {site.charityNumber}).
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
