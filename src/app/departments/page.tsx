import Link from "next/link";
import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { departmentGroups, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Departments",
  description:
    "Every believer has a place to serve. Find a Kharis department — Worship, Welcome, Media, Prayer, KGroups, KP2, Creative Arts, Finance and more.",
};

export default function DepartmentsPage() {
  const total = departmentGroups.reduce((n, g) => n + g.items.length, 0);

  return (
    <>
      <PageHeader
        eyebrow="Serve together"
        title={
          "Every believer has a place. " +
          "Find the team that’s already waiting for you."
        }
        intro={`Kharis runs on the gifts of ordinary people. ${total} departments across four disciplines — ministry, production, hospitality and stewardship — keep every campus moving.`}
      >
        <div className="flex flex-wrap items-center gap-5">
          <Link
            href="#apply"
            className="inline-flex items-center gap-3 bg-ink text-parchment-50 px-7 py-4 text-[13px] uppercase tracking-[0.16em] rounded-xs hover:bg-ink-700 transition-colors"
          >
            Apply to a department <span aria-hidden>→</span>
          </Link>
          <Link
            href="/life/kgroups"
            className="text-[13px] uppercase tracking-[0.16em] text-ink border-b hairline pb-1 hover:border-grace-dark hover:text-grace-dark transition-colors"
          >
            Prefer a KGroup?
          </Link>
        </div>
      </PageHeader>

      <section className="container-x max-w-[1400px] mx-auto py-20 md:py-24 space-y-20 md:space-y-28">
        {departmentGroups.map((group, gi) => (
          <div key={group.category} id={group.category.toLowerCase()}>
            <div className="flex items-baseline justify-between mb-8 md:mb-10 pb-5 border-b hairline">
              <div className="flex items-center gap-5">
                <span className="font-display text-grace-dark text-2xl">
                  {String(gi + 1).padStart(2, "0")}
                </span>
                <h2 className="font-display text-3xl md:text-4xl text-ink tracking-tight">
                  {group.category}
                </h2>
              </div>
              <span className="text-[11px] uppercase tracking-[0.22em] text-ink-500">
                {group.items.length} {group.items.length === 1 ? "team" : "teams"}
              </span>
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink/10 border hairline">
              {group.items.map((dept, di) => (
                <li key={dept.id} className="bg-parchment-50">
                  <Link
                    href={`#${dept.id}`}
                    className="group block h-full p-7 md:p-8 hover:bg-parchment-100 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-8">
                      <span className="text-[11px] uppercase tracking-[0.22em] text-ink-500">
                        {String(di + 1).padStart(2, "0")}
                      </span>
                      <span
                        className="w-8 h-8 rounded-full border hairline flex items-center justify-center text-ink-500 group-hover:bg-ink group-hover:text-parchment-50 group-hover:border-ink transition-colors"
                        aria-hidden
                      >
                        →
                      </span>
                    </div>
                    <h3 className="font-display text-xl md:text-2xl text-ink leading-tight">
                      {dept.name}
                    </h3>
                    <p className="mt-3 text-sm text-ink-500 leading-relaxed">
                      {dept.blurb}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section
        id="apply"
        className="bg-ink text-parchment-50 relative overflow-hidden"
      >
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(ellipse at 80% 0%, rgba(212,168,90,0.25), transparent 55%), radial-gradient(ellipse at 0% 100%, rgba(44,74,58,0.3), transparent 60%)",
          }}
          aria-hidden
        />
        <div className="container-x max-w-[1400px] mx-auto py-24 md:py-28 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-8 bg-grace-light" />
                <span className="text-[11px] uppercase tracking-[0.22em] text-grace-light">
                  How to join
                </span>
              </div>
              <h2 className="font-display text-4xl md:text-6xl tracking-tight leading-[1.02]">
                Three simple steps.
              </h2>
            </div>
            <p className="lg:col-span-5 text-ink-300 leading-relaxed max-w-md">
              Every department has a leader who will walk with you from enquiry
              through induction. You don&rsquo;t need prior experience — just a willing
              heart.
            </p>
          </div>

          <ol className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-px bg-parchment-50/15">
            {[
              {
                n: "01",
                h: "Tell us you’re in",
                b: "Speak to the admin desk on a Sunday, or write to us using the form below.",
              },
              {
                n: "02",
                h: "Meet the team",
                b: "The department leader will introduce you to how they work and where you fit.",
              },
              {
                n: "03",
                h: "Start serving",
                b: "A short induction, then you’re on the rota. We grow as we go.",
              },
            ].map((s) => (
              <li key={s.n} className="bg-ink p-8 md:p-10 min-h-[220px] flex flex-col justify-between">
                <span className="font-display text-4xl text-grace-light">{s.n}</span>
                <div>
                  <h3 className="font-display text-2xl text-parchment-50 leading-tight">
                    {s.h}
                  </h3>
                  <p className="mt-3 text-sm text-ink-300 leading-relaxed">{s.b}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-14 border border-parchment-50/15 bg-ink-700/40 backdrop-blur-sm p-8 md:p-10 max-w-2xl">
            <div className="flex items-baseline justify-between mb-6">
              <span className="text-[11px] uppercase tracking-[0.22em] text-ink-300">
                Register interest
              </span>
              <span className="text-[11px] uppercase tracking-[0.22em] text-grace-light">
                We read every reply
              </span>
            </div>
            <form className="space-y-5" action="#" aria-label="Department application form">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <label className="block">
                  <span className="block text-[11px] uppercase tracking-[0.18em] text-ink-300 mb-2">
                    Full name
                  </span>
                  <input
                    type="text"
                    className="w-full bg-transparent border-b border-parchment-50/30 focus:border-grace-light py-2 outline-none transition-colors"
                    required
                  />
                </label>
                <label className="block">
                  <span className="block text-[11px] uppercase tracking-[0.18em] text-ink-300 mb-2">
                    Email
                  </span>
                  <input
                    type="email"
                    className="w-full bg-transparent border-b border-parchment-50/30 focus:border-grace-light py-2 outline-none transition-colors"
                    required
                  />
                </label>
              </div>
              <label className="block">
                <span className="block text-[11px] uppercase tracking-[0.18em] text-ink-300 mb-2">
                  Campus
                </span>
                <input
                  type="text"
                  placeholder="London, Birmingham, Accra…"
                  className="w-full bg-transparent border-b border-parchment-50/30 focus:border-grace-light py-2 outline-none placeholder:text-ink-300/60 transition-colors"
                />
              </label>
              <label className="block">
                <span className="block text-[11px] uppercase tracking-[0.18em] text-ink-300 mb-2">
                  Which department interests you?
                </span>
                <input
                  type="text"
                  placeholder="Worship, Media, Welcome, Children…"
                  className="w-full bg-transparent border-b border-parchment-50/30 focus:border-grace-light py-2 outline-none placeholder:text-ink-300/60 transition-colors"
                />
              </label>
              <button
                type="submit"
                className="mt-4 inline-flex items-center gap-3 bg-grace-light text-ink px-7 py-4 text-[13px] uppercase tracking-[0.16em] rounded-xs hover:bg-parchment-50 transition-colors"
              >
                Send enquiry <span aria-hidden>→</span>
              </button>
            </form>
            <p className="mt-6 pt-5 border-t border-parchment-50/15 text-xs text-ink-300 leading-relaxed">
              Safeguarding applies to every department. Roles working with
              children or vulnerable adults require a DBS check.
              Written to {site.contactEmails.kgroup}.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
