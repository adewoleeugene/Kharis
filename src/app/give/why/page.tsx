import Link from "next/link";
import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";

export const metadata: Metadata = {
  title: "Why We Give",
  description:
    "Giving at Kharis is not a transaction — it is worship. A look at the biblical principle of the tithe, cheerful giving, and why the local church is worth your investment.",
};

const principles = [
  {
    n: "01",
    title: "Giving is worship",
    body: "Before it was ever a financial transaction, giving was worship — Abel's first and best, Abraham's tenth, David's refusal to offer what cost him nothing. Our offering is first to God, not to a cause.",
  },
  {
    n: "02",
    title: "Cheerful, not compulsory",
    body: "God loves a cheerful giver. If a gift cannot be given freely, joyfully and with a clear conscience, it is not the gift He is asking for. Give as you have purposed in your heart.",
  },
  {
    n: "03",
    title: "The local church is worth it",
    body: "Your giving pays teachers, keeps the lights on, equips children's ministry, funds outreach, and sends missionaries. In other words — it builds the Kingdom at your doorstep.",
  },
];

export default function WhyWeGivePage() {
  return (
    <>
      <PageHeader
        eyebrow="A theology of giving"
        title="Giving is worship. Not a transaction."
        intro="At Kharis, we do not give to earn God's love — we give because we already have it. What follows is the outline of how we think about generosity, tithes, and offerings."
      >
        <div className="flex flex-wrap gap-5">
          <Link
            href="/give"
            className="inline-flex items-center gap-3 bg-ink text-parchment-50 px-7 py-4 text-[13px] uppercase tracking-[0.16em] rounded-xs hover:bg-ink-700 transition-colors"
          >
            Ways to give <span aria-hidden>→</span>
          </Link>
          <Link
            href="/give/gift-aid"
            className="text-[13px] uppercase tracking-[0.16em] text-ink border-b hairline pb-1 hover:border-grace-dark hover:text-grace-dark transition-colors"
          >
            Gift Aid
          </Link>
        </div>
      </PageHeader>

      <section className="container-x max-w-[1400px] mx-auto py-16 md:py-20 border-b hairline">
        <figure className="max-w-3xl">
          <blockquote className="font-display text-3xl md:text-4xl text-ink leading-snug">
            <span className="text-grace">&ldquo;</span>He who sows sparingly will also reap sparingly, and he who sows bountifully will also reap bountifully. So let each one give as he purposes in his heart, not grudgingly or of necessity; for God loves a cheerful giver.<span className="text-grace">&rdquo;</span>
          </blockquote>
          <figcaption className="mt-5 text-[11px] uppercase tracking-[0.22em] text-ink-500">
            — 2 Corinthians 9:6-7
          </figcaption>
        </figure>
      </section>

      <section className="container-x max-w-[1400px] mx-auto py-20 md:py-24">
        <div className="flex items-center gap-3 mb-10">
          <span className="h-px w-8 bg-grace" />
          <span className="text-[11px] uppercase tracking-[0.22em] text-grace-dark">
            Three convictions
          </span>
        </div>
        <h2 className="font-display text-4xl md:text-5xl text-ink tracking-tight leading-[1.02] max-w-3xl mb-12">
          What we teach about the tithe.
        </h2>

        <ol className="grid grid-cols-1 md:grid-cols-3 gap-px bg-ink/10 border hairline">
          {principles.map((p) => (
            <li
              key={p.n}
              className="bg-parchment-50 p-8 md:p-10 flex flex-col justify-between min-h-[340px]"
            >
              <span className="font-display text-2xl text-grace-dark">{p.n}</span>
              <div>
                <h3 className="font-display text-2xl md:text-3xl text-ink leading-tight">
                  {p.title}
                </h3>
                <p className="mt-4 text-sm text-ink-500 leading-relaxed">{p.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-ink text-parchment-50 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(ellipse at 20% 80%, rgba(212,168,90,0.22), transparent 55%)",
          }}
          aria-hidden
        />
        <div className="container-x max-w-[1400px] mx-auto py-24 md:py-28 relative">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-grace-light" />
              <span className="text-[11px] uppercase tracking-[0.22em] text-grace-light">
                A note to newcomers
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl tracking-tight leading-[1.05]">
              If this is your first visit, keep your wallet closed.
            </h2>
            <p className="mt-8 text-ink-300 text-lg leading-relaxed max-w-xl">
              We mean that. Giving is for those who are part of the family — it is
              covenant work. If you are visiting, we would rather you receive than
              give. There is time for everything.
            </p>
            <div className="mt-10 flex flex-wrap gap-5">
              <Link
                href="/im-new"
                className="inline-flex items-center gap-3 bg-grace-light text-ink px-7 py-4 text-[13px] uppercase tracking-[0.16em] rounded-xs hover:bg-parchment-50 transition-colors"
              >
                New to Kharis <span aria-hidden>→</span>
              </Link>
              <Link
                href="/give"
                className="text-[13px] uppercase tracking-[0.16em] text-parchment-50 border-b border-parchment-50/30 pb-1 hover:border-grace-light transition-colors"
              >
                Ways to give
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
