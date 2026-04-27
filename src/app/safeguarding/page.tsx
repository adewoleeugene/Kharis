import Link from "next/link";
import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Safeguarding",
  description:
    "Kharis Church's commitment to protecting children and vulnerable adults across every campus — our policy, our training, and how to report an incident.",
};

export default function SafeguardingPage() {
  return (
    <>
      <PageHeader
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Safeguarding" }]}
        eyebrow="Our commitment"
        title="Safeguarding is non-negotiable."
        intro="Every person who walks through a Kharis door — especially children and vulnerable adults — has the right to be safe, heard, and treated with dignity. We take that responsibility seriously across every campus."
      >
        <div className="flex flex-wrap gap-5">
          <a
            href={site.externalLinks.reportIncident}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-ink text-parchment-50 px-7 py-4 text-[13px] uppercase tracking-[0.16em] rounded-xs hover:bg-ink-700 transition-colors"
          >
            Report an incident <span aria-hidden>↗</span>
          </a>
          <Link
            href="/about/governance"
            className="text-[13px] uppercase tracking-[0.16em] text-ink border-b hairline pb-1 hover:border-grace-dark hover:text-grace-dark transition-colors"
          >
            Governance & trustees
          </Link>
        </div>
      </PageHeader>

      <section className="container-x max-w-[1400px] mx-auto py-20 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-grace" />
              <span className="text-[11px] uppercase tracking-[0.22em] text-grace-dark">
                Our policy in summary
              </span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl text-ink tracking-tight leading-[1.05]">
              Four commitments, every campus.
            </h2>
          </div>
          <ol className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-px bg-ink/10 border hairline">
            {[
              {
                n: "01",
                h: "DBS for every leader",
                b: "Everyone working with children or vulnerable adults completes an enhanced DBS check.",
              },
              {
                n: "02",
                h: "Annual training",
                b: "Every leader refreshes safeguarding training each year; new leaders complete induction before they serve.",
              },
              {
                n: "03",
                h: "Designated safeguarding lead",
                b: "Each campus has a named safeguarding lead. Concerns go to them directly.",
              },
              {
                n: "04",
                h: "Listen. Act. Report.",
                b: "We believe disclosures. We act on them. We report externally where the law requires.",
              },
            ].map((item) => (
              <li
                key={item.n}
                className="bg-parchment-50 p-7 md:p-8 flex flex-col justify-between min-h-[200px]"
              >
                <span className="font-display text-2xl text-grace-dark">{item.n}</span>
                <div>
                  <h3 className="font-display text-xl text-ink leading-tight">{item.h}</h3>
                  <p className="mt-3 text-sm text-ink-500 leading-relaxed">{item.b}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-ink text-parchment-50 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(212,168,90,0.2), transparent 55%)",
          }}
          aria-hidden
        />
        <div className="container-x max-w-[1400px] mx-auto py-20 md:py-24 relative">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-grace-light" />
              <span className="text-[11px] uppercase tracking-[0.22em] text-grace-light">
                Reporting
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl tracking-tight leading-[1.05]">
              Something doesn&rsquo;t feel right?
            </h2>
            <p className="mt-6 text-ink-300 text-lg leading-relaxed">
              Tell us. Whether it concerns a specific person, a past incident, or
              simply a situation that didn&rsquo;t feel right — every report reaches
              our designated safeguarding lead and is investigated with care and
              confidentiality.
            </p>
            <p className="mt-4 text-ink-300 leading-relaxed">
              If someone is in immediate danger, please call emergency services
              (999) first.
            </p>
            <div className="mt-10 flex flex-wrap gap-5">
              <a
                href={site.externalLinks.reportIncident}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-grace-light text-ink px-7 py-4 text-[13px] uppercase tracking-[0.16em] rounded-xs hover:bg-parchment-50 transition-colors"
              >
                Open the incident form <span aria-hidden>↗</span>
              </a>
              <Link
                href="/contact"
                className="text-[13px] uppercase tracking-[0.16em] text-parchment-50 border-b border-parchment-50/30 pb-1 hover:border-grace-light transition-colors"
              >
                Or write to the pastoral team
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container-x max-w-[1400px] mx-auto py-16 md:py-20 text-sm text-ink-500 leading-relaxed max-w-3xl">
        <p>
          {site.legalName} is a UK registered charity (no. {site.charityNumber}) and
          complies with the Charity Commission&rsquo;s safeguarding guidance. A full
          copy of our safeguarding policy and associated procedures is available on
          request from any campus.
        </p>
      </section>
    </>
  );
}
