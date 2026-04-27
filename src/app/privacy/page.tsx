import Link from "next/link";
import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "Kharis Church privacy notice — what personal data we collect, how we use it, the legal basis under UK GDPR, and how to exercise your rights.",
};

const sections = [
  {
    heading: "Who we are",
    body: `${site.legalName} is a UK registered charity (no. ${site.charityNumber}). We are the data controller responsible for any personal data you provide to us through this website or in person at any Kharis campus.`,
  },
  {
    heading: "What we collect",
    body: "Contact details you provide (name, email, phone, postal address), Gift Aid declarations, attendance and membership records, photos taken at events where we have appropriate consent, and website analytics data such as pages visited and device type.",
  },
  {
    heading: "How we use it",
    body: "To communicate with you about services, events, prayer and pastoral care; to process donations and claim Gift Aid where applicable; to keep statutory records required of a UK charity; and to improve our website and ministry over time.",
  },
  {
    heading: "Legal basis under UK GDPR",
    body: "We process personal data under one of four lawful bases: your consent (e.g. newsletter signup), legitimate interest (e.g. pastoral follow-up with members), legal obligation (e.g. Gift Aid and charity reporting) and contract (e.g. event registration).",
  },
  {
    heading: "Sharing",
    body: "We do not sell your data. We share limited data only with processors who help us operate — payment providers (Tithe.ly), email platforms, hosting partners — all bound by equivalent data protection obligations.",
  },
  {
    heading: "Your rights",
    body: "You have the right to be informed; to access, rectify and erase your data; to restrict or object to processing; to data portability; and to complain to the ICO (ico.org.uk). Write to us at any time to exercise these rights.",
  },
  {
    heading: "Cookies",
    body: "This website uses only essential cookies to function and anonymous analytics to understand which pages are useful. No marketing or tracking cookies are used.",
  },
  {
    heading: "Retention",
    body: "We keep data only as long as needed for the purpose it was collected, and as long as required by law for Gift Aid (6 years) and charity records.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Privacy" }]}
        eyebrow="Privacy notice"
        title="Your data. Our duty of care."
        intro={`Last updated ${new Date().toLocaleDateString("en-GB", {
          year: "numeric",
          month: "long",
        })}. We take the stewardship of your personal data as seriously as any other trust you place with us.`}
      />

      <section className="container-x max-w-[1400px] mx-auto py-20 md:py-24">
        <dl className="max-w-4xl divide-y divide-ink/10 border hairline bg-parchment-50">
          {sections.map((s, i) => (
            <div key={s.heading} className="grid grid-cols-12 gap-4 md:gap-8 p-6 md:p-8">
              <dt className="col-span-12 md:col-span-4">
                <span className="text-[11px] uppercase tracking-[0.22em] text-grace-dark">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-2 font-display text-xl md:text-2xl text-ink leading-snug">
                  {s.heading}
                </h2>
              </dt>
              <dd className="col-span-12 md:col-span-8 text-ink-500 leading-relaxed">
                {s.body}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-12 max-w-2xl">
          <p className="text-sm text-ink-500 leading-relaxed">
            To exercise any of your rights, to report a concern, or to ask a
            question about this notice —
          </p>
          <Link
            href="/contact"
            className="mt-4 inline-flex items-center gap-3 bg-ink text-parchment-50 px-7 py-4 text-[13px] uppercase tracking-[0.16em] rounded-xs hover:bg-ink-700 transition-colors"
          >
            Write to us <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
