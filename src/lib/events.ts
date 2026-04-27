export type EventCategory =
  | "KP2"
  | "Conference"
  | "Fasting"
  | "Outreach"
  | "Marriage"
  | "Prayer";

export type KharisEvent = {
  slug: string;
  title: string;
  category: EventCategory;
  tagline: string;
  summary: string;
  startsAt: string; // ISO
  endsAt?: string;
  location: string;
  venueLine?: string;
  campus?: string;
  capacity?: string;
  registerHref?: string;
  tone: "ink" | "sage" | "gold"; // colour accent for the poster
  featured?: boolean;
};

// Representative slate based on known Kharis recurring events.
// Dates are illustrative — replace with confirmed dates.
export const events: KharisEvent[] = [
  {
    slug: "bring-a-soul-sunday",
    title: "Bring A Soul Sunday",
    category: "Outreach",
    tagline: "One invitation. One Sunday. One new life.",
    summary:
      "Our family-wide outreach Sunday — every believer brings someone who doesn't yet know the Lord. Extra welcome teams, follow-up prayer, and pastoral care ready at every campus.",
    startsAt: "2026-05-17T10:00:00+01:00",
    location: "Every campus",
    venueLine: "Across all Kharis locations",
    tone: "ink",
    featured: true,
  },
  {
    slug: "kp2-summer-camp",
    title: "KP2 Summer Camp",
    category: "KP2",
    tagline: "Five days. One revival-seeking generation.",
    summary:
      "Our annual students' and young people's residential — teaching, worship, sports, and the God encounters that shape a generation. Open to ages 14–24.",
    startsAt: "2026-08-04T16:00:00+01:00",
    endsAt: "2026-08-08T14:00:00+01:00",
    location: "Midlands, UK",
    venueLine: "Venue confirmed on registration",
    campus: "London · Birmingham · Romford · Southampton · Peterborough",
    capacity: "400 places",
    tone: "gold",
    featured: true,
  },
  {
    slug: "21-day-corporate-fast",
    title: "21 Days of Prayer & Fasting",
    category: "Fasting",
    tagline: "Starting the year on our knees.",
    summary:
      "A church-wide fast to begin the year — daily prayer broadcasts, Scripture readings, and a downloadable guide. Choose your fasting rhythm; we'll hold the line together.",
    startsAt: "2026-01-06T06:00:00+00:00",
    endsAt: "2026-01-26T06:00:00+00:00",
    location: "Every campus + online",
    tone: "sage",
  },
  {
    slug: "sports-day",
    title: "Kharis Sports Day",
    category: "Outreach",
    tagline: "A family day in the sun.",
    summary:
      "Football, races, food, laughter — a full day where the Kharis family and our guests play together. Bring the kids, bring a friend.",
    startsAt: "2026-07-12T11:00:00+01:00",
    endsAt: "2026-07-12T17:00:00+01:00",
    location: "London",
    venueLine: "Venue TBC",
    tone: "gold",
  },
  {
    slug: "resurrection-praise-night",
    title: "Resurrection Praise Night",
    category: "Prayer",
    tagline: "An evening of worship and the Word.",
    summary:
      "A high-worship, high-expectation night of praise and prophetic ministry — part of our Easter weekend gatherings.",
    startsAt: "2026-04-04T19:00:00+01:00",
    endsAt: "2026-04-04T22:00:00+01:00",
    location: "London",
    venueLine: "Kensington Town Hall · W8 7NX",
    tone: "ink",
  },
  {
    slug: "eden-school-of-marriage",
    title: "Eden School of Marriage",
    category: "Marriage",
    tagline: "Four sessions. Foundations that last.",
    summary:
      "Engaged or married? Join us for four hybrid sessions on the foundations of Christian marriage — love, communication, finances, conflict and more.",
    startsAt: "2026-09-06T14:00:00+01:00",
    endsAt: "2026-09-27T16:00:00+01:00",
    location: "London + online",
    tone: "sage",
  },
];

export function formatEventDate(iso: string) {
  const d = new Date(iso);
  return {
    day: d.toLocaleString("en-GB", { day: "2-digit" }),
    monthShort: d.toLocaleString("en-GB", { month: "short" }).toUpperCase(),
    weekday: d.toLocaleString("en-GB", { weekday: "long" }),
    year: d.toLocaleString("en-GB", { year: "numeric" }),
    time: d.toLocaleString("en-GB", { hour: "2-digit", minute: "2-digit", hour12: false }),
  };
}

export function formatDateRange(startsAt: string, endsAt?: string) {
  const s = formatEventDate(startsAt);
  if (!endsAt) return `${s.weekday}, ${s.day} ${s.monthShort} ${s.year} · ${s.time}`;
  const e = formatEventDate(endsAt);
  // Same day: show times
  if (s.day === e.day && s.monthShort === e.monthShort && s.year === e.year) {
    return `${s.weekday}, ${s.day} ${s.monthShort} ${s.year} · ${s.time}–${e.time}`;
  }
  return `${s.day} ${s.monthShort} – ${e.day} ${e.monthShort} ${e.year}`;
}
