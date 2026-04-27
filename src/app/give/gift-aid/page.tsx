import Link from "next/link";
import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Gift Aid",
  description:
    "UK taxpayers can add 25% to every pound they give to Kharis Church through Gift Aid — at no cost. Complete the declaration once and we'll claim it on every gift.",
};

export default function GiftAidPage() {
  return (
    <>
      <PageHeader
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Give", href: "/give" },
          { label: "Gift Aid" },
        ]}
        eyebrow="UK taxpayers"
        title="Add 25p to every £1 you give — at no cost."
        intro="If you pay UK income or capital gains tax, Gift Aid lets us reclaim an extra 25% on your donation from HMRC. One declaration covers every future gift you make to Kharis."
      >
        <div className="flex flex-wrap gap-5">
          <Link
            href="#declare"
            className="inline-flex items-center gap-3 bg-ink text-parchment-50 px-7 py-4 text-[13px] uppercase tracking-[0.16em] rounded-xs hover:bg-ink-700 transition-colors"
          >
            Complete declaration <span aria-hidden>→</span>
          </Link>
          <Link
            href="/give"
            className="text-[13px] uppercase tracking-[0.16em] text-ink border-b hairline pb-1 hover:border-grace-dark hover:text-grace-dark transition-colors"
          >
            Back to Give
          </Link>
        </div>
      </PageHeader>

      <section className="container-x max-w-[1400px] mx-auto py-20 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-grace" />
              <span className="text-[11px] uppercase tracking-[0.22em] text-grace-dark">
                How it works
              </span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl text-ink tracking-tight leading-[1.05]">
              Three-minute job. Lasts forever.
            </h2>
          </div>
          <ol className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-px bg-ink/10 border hairline">
            {[
              { n: "01", h: "You declare", b: "Complete the Gift Aid declaration below." },
              { n: "02", h: "We claim", b: "Kharis reclaims the 25% from HMRC on every gift you make." },
              { n: "03", h: "Your gift grows", b: "£100 becomes £125 for the ministry — at no cost to you." },
            ].map((s) => (
              <li key={s.n} className="bg-parchment-50 p-7 md:p-8 flex flex-col justify-between min-h-[220px]">
                <span className="font-display text-2xl text-grace-dark">{s.n}</span>
                <div>
                  <h3 className="font-display text-xl text-ink leading-tight">{s.h}</h3>
                  <p className="mt-3 text-sm text-ink-500 leading-relaxed">{s.b}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="declare" className="bg-parchment-100 border-y hairline">
        <div className="container-x max-w-[1400px] mx-auto py-20 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <h2 className="font-display text-4xl md:text-5xl text-ink tracking-tight leading-[1.02]">
                Your declaration.
              </h2>
              <p className="mt-5 text-ink-500 leading-relaxed max-w-md">
                By completing this form you confirm you are a UK taxpayer and wish {site.legalName} to treat all qualifying gifts (past, present and future) as Gift Aid donations.
              </p>
              <div className="mt-8 bg-parchment-50 border hairline p-6 text-xs text-ink-500 leading-relaxed">
                <p>
                  <strong className="text-ink">Please remember:</strong> You must pay an
                  amount of UK Income or Capital Gains Tax at least equal to the tax
                  reclaimed on all your donations in that tax year, otherwise it is your
                  responsibility to pay any difference.
                </p>
              </div>
            </div>

            <form
              className="lg:col-span-7 space-y-6 border hairline bg-parchment-50 p-8 md:p-10"
              action="#"
              method="post"
              aria-label="Gift Aid declaration"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <label className="block">
                  <span className="block text-[11px] uppercase tracking-[0.18em] text-ink-500 mb-2">Title</span>
                  <select className="w-full bg-transparent border-b hairline focus:border-grace-dark py-2 outline-none text-ink">
                    <option>Mr</option>
                    <option>Mrs</option>
                    <option>Ms</option>
                    <option>Miss</option>
                    <option>Dr</option>
                    <option>Rev</option>
                  </select>
                </label>
                <label className="block">
                  <span className="block text-[11px] uppercase tracking-[0.18em] text-ink-500 mb-2">Full name</span>
                  <input type="text" className="w-full bg-transparent border-b hairline focus:border-grace-dark py-2 outline-none text-ink" required />
                </label>
              </div>
              <label className="block">
                <span className="block text-[11px] uppercase tracking-[0.18em] text-ink-500 mb-2">Home address</span>
                <input type="text" className="w-full bg-transparent border-b hairline focus:border-grace-dark py-2 outline-none text-ink" required />
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <label className="block">
                  <span className="block text-[11px] uppercase tracking-[0.18em] text-ink-500 mb-2">Postcode</span>
                  <input type="text" className="w-full bg-transparent border-b hairline focus:border-grace-dark py-2 outline-none text-ink" required />
                </label>
                <label className="block">
                  <span className="block text-[11px] uppercase tracking-[0.18em] text-ink-500 mb-2">Email</span>
                  <input type="email" className="w-full bg-transparent border-b hairline focus:border-grace-dark py-2 outline-none text-ink" required />
                </label>
              </div>
              <label className="flex items-start gap-3 pt-3">
                <input type="checkbox" className="mt-1 accent-grace-dark" required />
                <span className="text-sm text-ink-500 leading-relaxed">
                  I confirm I am a UK taxpayer and wish {site.legalName} to treat all qualifying donations as Gift Aid donations until further notice.
                </span>
              </label>
              <button
                type="submit"
                className="mt-4 inline-flex items-center gap-3 bg-ink text-parchment-50 px-7 py-4 text-[13px] uppercase tracking-[0.16em] rounded-xs hover:bg-ink-700 transition-colors"
              >
                Submit declaration <span aria-hidden>→</span>
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
