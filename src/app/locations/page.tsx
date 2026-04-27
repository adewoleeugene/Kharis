import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/ui/page-header";
import { CampusExplorer } from "@/components/locations/campus-explorer";

export const metadata: Metadata = {
  title: "Locations",
  description:
    "Kharis Church meets in thirteen UK cities and two nations overseas — London, Birmingham, Brighton, Bristol, Chatham, Chelmsford, Coventry, Croydon, Luton, Northampton, Nottingham, Orpington, Reading, Accra (Ghana) and Freetown (Sierra Leone).",
};

export default function LocationsPage() {
  return (
    <>
      <PageHeader
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Locations" }]}
        eyebrow="Across the nations"
        title="Fifteen campuses. One family."
        intro="Kharis gathers in thirteen cities across the United Kingdom and in two nations overseas. Filter, search, and find the campus nearest to you — we’ll meet you at the door."
      />
      <CampusExplorer />

      <section className="bg-parchment-100 border-y hairline">
        <div className="container-x max-w-[1400px] mx-auto py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="font-display text-3xl md:text-4xl text-ink tracking-tight leading-[1.05]">
                Can&rsquo;t see your city?
              </h2>
              <p className="mt-4 text-ink-500 leading-relaxed max-w-md">
                We&rsquo;re always praying about where Kharis goes next. If
                you&rsquo;d like a Kharis family in your city, tell us — we read every
                note.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 md:justify-end">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-ink text-parchment-50 px-7 py-4 text-[13px] uppercase tracking-[0.16em] rounded-xs hover:bg-ink-700 transition-colors"
              >
                Write to us <span aria-hidden>→</span>
              </Link>
              <Link
                href="/kp2"
                className="inline-flex items-center gap-3 border hairline px-7 py-4 text-[13px] uppercase tracking-[0.16em] text-ink hover:bg-parchment-50 transition-colors"
              >
                Explore KP2 (youth)
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
