import Link from "next/link";
import { testimonies } from "@/lib/content";

const stories = [
  {
    name: "Adwoa, London",
    excerpt:
      "I walked in carrying grief I hadn&rsquo;t spoken about in years. By the third Sunday, I was free.",
  },
  {
    name: "Michael, Birmingham",
    excerpt:
      "KGroup became my family before I knew I needed one. They prayed me through a season I couldn&rsquo;t name.",
  },
  {
    name: "Ama, Accra",
    excerpt:
      "The Word taught here changed how I read my Bible — and how I read my own life.",
  },
];

export function Testimonies() {
  return (
    <section className="container-x max-w-[1400px] mx-auto py-20 md:py-28">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-grace" />
            <span className="text-[11px] uppercase tracking-[0.22em] text-grace-dark">
              {testimonies.eyebrow}
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl tracking-tight text-ink leading-[1.02]">
            Grace, remembered <br className="hidden md:inline" />
            and retold.
          </h2>
          <p className="mt-6 font-display text-xl md:text-2xl text-ink-500 leading-snug italic">
            {testimonies.scripture}
          </p>
          <p className="mt-6 text-ink-500 max-w-md">{testimonies.body}</p>
          <Link
            href={testimonies.primaryHref}
            className="mt-8 inline-flex items-center gap-3 bg-ink text-parchment-50 px-7 py-4 text-[13px] uppercase tracking-[0.16em] rounded-xs hover:bg-ink-700 transition-colors"
          >
            {testimonies.primaryLabel} <span aria-hidden>→</span>
          </Link>
        </div>

        <ul className="lg:col-span-7 space-y-4">
          {stories.map((s, i) => (
            <li
              key={s.name}
              className="border hairline bg-parchment-50 p-7 md:p-9 flex gap-6 md:gap-8 hover:border-grace transition-colors"
            >
              <div className="font-display text-3xl text-grace-dark shrink-0 w-10 pt-1">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div>
                <p
                  className="font-display text-xl md:text-2xl text-ink leading-snug"
                  dangerouslySetInnerHTML={{ __html: `&ldquo;${s.excerpt}&rdquo;` }}
                />
                <p className="mt-4 text-[11px] uppercase tracking-[0.22em] text-ink-500">
                  — {s.name}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
