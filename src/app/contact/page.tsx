import Link from "next/link";
import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { site } from "@/lib/content";
import { campuses } from "@/lib/campuses";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach the Kharis Church team — general enquiries, prayer requests, safeguarding concerns, and campus-specific questions.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Write to us"
        title="We read every message."
        intro="Whether you're new to Kharis, have a question about an event, or need prayer — there's a team member waiting on the other side."
      />

      <section className="container-x max-w-[1400px] mx-auto py-20 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7">
            <h2 className="font-display text-3xl md:text-4xl text-ink tracking-tight mb-8">
              General enquiry
            </h2>
            <form
              className="space-y-6 border hairline bg-parchment-50 p-8 md:p-10"
              action="#"
              method="post"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <label className="block">
                  <span className="block text-[11px] uppercase tracking-[0.18em] text-ink-500 mb-2">
                    First name
                  </span>
                  <input
                    type="text"
                    className="w-full bg-transparent border-b hairline focus:border-grace-dark py-2 outline-none text-ink transition-colors"
                    required
                  />
                </label>
                <label className="block">
                  <span className="block text-[11px] uppercase tracking-[0.18em] text-ink-500 mb-2">
                    Last name
                  </span>
                  <input
                    type="text"
                    className="w-full bg-transparent border-b hairline focus:border-grace-dark py-2 outline-none text-ink transition-colors"
                    required
                  />
                </label>
              </div>
              <label className="block">
                <span className="block text-[11px] uppercase tracking-[0.18em] text-ink-500 mb-2">
                  Email
                </span>
                <input
                  type="email"
                  className="w-full bg-transparent border-b hairline focus:border-grace-dark py-2 outline-none text-ink transition-colors"
                  required
                />
              </label>
              <label className="block">
                <span className="block text-[11px] uppercase tracking-[0.18em] text-ink-500 mb-2">
                  Phone (optional)
                </span>
                <input
                  type="tel"
                  className="w-full bg-transparent border-b hairline focus:border-grace-dark py-2 outline-none text-ink transition-colors"
                />
              </label>
              <label className="block">
                <span className="block text-[11px] uppercase tracking-[0.18em] text-ink-500 mb-2">
                  How can we help?
                </span>
                <select className="w-full bg-transparent border-b hairline focus:border-grace-dark py-2 outline-none text-ink transition-colors">
                  <option>General enquiry</option>
                  <option>Plan a first visit</option>
                  <option>Prayer request</option>
                  <option>Baptism</option>
                  <option>Marriage / pre-marital</option>
                  <option>Children&rsquo;s ministry</option>
                  <option>KGroup</option>
                  <option>Press / media</option>
                </select>
              </label>
              <label className="block">
                <span className="block text-[11px] uppercase tracking-[0.18em] text-ink-500 mb-2">
                  Message
                </span>
                <textarea
                  rows={5}
                  className="w-full bg-transparent border-b hairline focus:border-grace-dark py-2 outline-none text-ink resize-none transition-colors"
                  required
                />
              </label>
              <button
                type="submit"
                className="mt-4 inline-flex items-center gap-3 bg-ink text-parchment-50 px-7 py-4 text-[13px] uppercase tracking-[0.16em] rounded-xs hover:bg-ink-700 transition-colors"
              >
                Send message <span aria-hidden>→</span>
              </button>
            </form>
          </div>

          <aside className="lg:col-span-5 space-y-10 lg:sticky lg:top-28 self-start">
            <div>
              <h3 className="text-[11px] uppercase tracking-[0.22em] text-grace-dark mb-4">
                Direct lines
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center justify-between gap-4 border-b hairline pb-3">
                  <span className="text-ink-500 text-sm">KGroups</span>
                  <a
                    href={`mailto:${site.contactEmails.kgroup}`}
                    className="text-ink font-display text-lg underline decoration-grace-dark/40 underline-offset-4 hover:decoration-grace-dark"
                  >
                    {site.contactEmails.kgroup}
                  </a>
                </li>
                <li className="flex items-center justify-between gap-4 border-b hairline pb-3">
                  <span className="text-ink-500 text-sm">Safeguarding</span>
                  <a
                    href={site.externalLinks.reportIncident}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink text-sm underline decoration-grace-dark/40 underline-offset-4 hover:decoration-grace-dark"
                  >
                    Report an incident ↗
                  </a>
                </li>
                <li className="flex items-center justify-between gap-4 pb-3">
                  <span className="text-ink-500 text-sm">Charity</span>
                  <span className="text-sm text-ink">No. {site.charityNumber}</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-[11px] uppercase tracking-[0.22em] text-grace-dark mb-4">
                Or reach a campus directly
              </h3>
              <ul className="grid grid-cols-2 gap-px bg-ink/10 border hairline">
                {campuses.slice(0, 6).map((c) => (
                  <li key={c.slug} className="bg-parchment-50">
                    <Link
                      href={`/locations/${c.slug}`}
                      className="group flex items-center justify-between p-4 hover:bg-parchment-100 transition-colors"
                    >
                      <span className="font-display text-lg text-ink">{c.city}</span>
                      <span
                        className="text-ink-500 group-hover:text-grace-dark transition-colors"
                        aria-hidden
                      >
                        →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href="/locations"
                className="mt-4 inline-flex text-[13px] uppercase tracking-[0.16em] text-ink border-b hairline pb-1 hover:border-grace-dark hover:text-grace-dark transition-colors"
              >
                All {campuses.length} campuses →
              </Link>
            </div>

            <div className="bg-parchment-100 border hairline p-6 text-sm text-ink-500 leading-relaxed">
              We aim to reply within one working day. Urgent safeguarding
              concerns should use the dedicated route above — replies are
              handled by our designated safeguarding lead.
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
