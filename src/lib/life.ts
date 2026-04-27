export type LifeBlock =
  | { type: "prose"; heading?: string; body: string }
  | {
      type: "cards";
      heading?: string;
      items: { meta?: string; title: string; body: string }[];
    }
  | {
      type: "steps";
      heading?: string;
      items: { n: string; title: string; body: string }[];
    };

export type LifeSection = {
  slug: string;
  eyebrow: string;
  title: string;
  intro: string;
  scripture?: { quote: string; ref: string };
  blocks?: LifeBlock[];
  ctaPrimary?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
  next?: { slug: string; label?: string; href?: string };
};

export const lifeSections: LifeSection[] = [
  {
    slug: "become-a-believer",
    eyebrow: "The first step",
    title: "Become a believer.",
    intro:
      "Meeting Jesus is the first invitation of the Christian life. No prior experience required — just a willing heart.",
    scripture: {
      quote:
        "For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.",
      ref: "John 3:16",
    },
    blocks: [
      {
        type: "steps",
        heading: "What it looks like",
        items: [
          {
            n: "01",
            title: "Admit your need",
            body: "We have all fallen short. The first step is honest — a simple admission that we cannot save ourselves.",
          },
          {
            n: "02",
            title: "Trust in Christ",
            body: "Jesus died for your sins and rose again. Put your trust in Him, not in your record.",
          },
          {
            n: "03",
            title: "Speak to God",
            body: "A simple prayer in your own words invites Him into your life. There are no magic words.",
          },
          {
            n: "04",
            title: "Tell someone",
            body: "Come to a service, write to a pastor — let our team walk with you from here.",
          },
        ],
      },
    ],
    ctaPrimary: { label: "Tell us you said yes", href: "/contact" },
    ctaSecondary: { label: "Plan a visit", href: "/locations" },
    next: { slug: "baptism", label: "On to baptism" },
  },
  {
    slug: "baptism",
    eyebrow: "Water baptism",
    title: "Declare it publicly.",
    intro:
      "Baptism is a public declaration of faith — identifying with Jesus's death, burial and resurrection. At Kharis, we baptise believers of any age after a short preparation course.",
    scripture: {
      quote:
        "Therefore we are buried with him by baptism into death: that like as Christ was raised up from the dead by the glory of the Father, even so we also should walk in newness of life.",
      ref: "Romans 6:3-4",
    },
    blocks: [
      {
        type: "prose",
        heading: "What we teach",
        body:
          "Baptism is an outward sign of an inward change. It does not save — salvation is by grace alone through faith (Ephesians 2:8-9). But Jesus commanded every disciple to be baptised (Matthew 28:19), and every believer ought to take that step as soon as they are able.",
      },
      {
        type: "cards",
        heading: "Before you are baptised",
        items: [
          {
            title: "Baptism classes",
            body: "A short course covering the meaning of baptism, what happens on the day, and what comes next.",
          },
          {
            title: "A conversation with your pastor",
            body: "We'll hear your story, answer questions, and pray with you before the service.",
          },
          {
            title: "Your baptism day",
            body: "Family welcome. Plan on a second outfit — full-immersion water baptism.",
          },
        ],
      },
    ],
    next: { slug: "kgroups", label: "Next: join a KGroup" },
  },
  {
    slug: "kgroups",
    eyebrow: "Small home fellowships",
    title: "Growing larger and smaller at once.",
    intro:
      "KGroups meet every Friday 7:00–8:30pm across every Kharis campus, in homes and cafés, for Scripture, prayer and genuine friendship.",
    ctaPrimary: { label: "Join a KGroup", href: "/life/kgroups" },
    next: { slug: "volunteer", label: "Next: serve on a team" },
  },
  {
    slug: "marriage",
    eyebrow: "Marriage ministry",
    title: "Foundations that last.",
    intro:
      "Whether engaged or already married, Kharis walks couples through the foundations of a Christian marriage — Scripture, honest conversation, and real work on what matters.",
    scripture: {
      quote:
        "Therefore shall a man leave his father and his mother, and shall cleave unto his wife: and they shall be one flesh.",
      ref: "Genesis 2:24",
    },
    blocks: [
      {
        type: "cards",
        heading: "Two pathways",
        items: [
          {
            meta: "4 sessions · hybrid",
            title: "Eden School of Marriage",
            body: "Foundations of Christian marriage, love and communication, finances, conflict, sexuality.",
          },
          {
            meta: "6–8 sessions",
            title: "Pre-Marital Counselling",
            body: "For engaged couples. A trained counsellor walks with you, customised to your story.",
          },
        ],
      },
      {
        type: "prose",
        body: "To enrol, complete the enquiry form at your local branch or message us directly. A counsellor will be assigned to your couple based on availability and your campus.",
      },
    ],
    ctaPrimary: { label: "Start the enquiry", href: "/contact" },
    next: { slug: "kgroups", label: "Next: join a KGroup" },
  },
  {
    slug: "children",
    eyebrow: "Children's ministry",
    title: "Where the smallest feet feel most welcome.",
    intro:
      "Sunday mornings, Kharis children are split into three age-appropriate rooms — Kinder, Super, and Transition — each with trained, DBS-checked leaders.",
    blocks: [
      {
        type: "cards",
        heading: "Three age bands",
        items: [
          {
            meta: "Ages 3 – 6",
            title: "Kinder",
            body: "Foundational Bible stories, songs, crafts and structured play.",
          },
          {
            meta: "Ages 7 – 11",
            title: "Super",
            body: "Salvation, faith, the Holy Spirit — getting to know Christ.",
          },
          {
            meta: "Ages 12 – 16",
            title: "Transition",
            body: "Interactive lessons preparing teens for full participation in the church.",
          },
        ],
      },
      {
        type: "prose",
        heading: "Safeguarding",
        body: "All children's leaders are DBS-checked and trained in Kharis's safeguarding policy. We would be glad to walk you through our procedures — please ask on arrival.",
      },
    ],
    ctaPrimary: { label: "Register your children", href: "/contact" },
    next: { slug: "kgroups", label: "Next: join a KGroup" },
  },
  {
    slug: "volunteer",
    eyebrow: "Serve with a team",
    title: "Every believer has a place.",
    intro:
      "Kharis runs on the gifts of ordinary people. Whatever you bring — from welcoming guests to mixing sound — there is a team already waiting for you.",
    ctaPrimary: { label: "See departments", href: "/departments" },
    ctaSecondary: { label: "Ask a question", href: "/contact" },
    next: { slug: "evangelism", label: "Next: go and tell" },
  },
  {
    slug: "testimonies",
    eyebrow: "Your story matters",
    title: "Grace, remembered and retold.",
    intro:
      "Every Sunday someone takes the microphone and tells us what God has done. Share yours in writing, or volunteer to share it live — we'll take it from there.",
    scripture: {
      quote:
        "Then one of them, when he saw that he was healed, returned, and with a loud voice glorified God.",
      ref: "Luke 17:15",
    },
    ctaPrimary: { label: "Share your testimony", href: "/contact" },
    next: { slug: "membership", label: "Next: covenant membership" },
  },
  {
    slug: "fasting",
    eyebrow: "Prayer & fasting",
    title: "Adding power to our prayers.",
    intro:
      "Fasting is not merely going without food — it is deliberate dependence on God, paired with prayer. At Kharis, we fast corporately at the start of each year and regularly throughout.",
    scripture: {
      quote:
        "Moreover when ye fast, be not, as the hypocrites, of a sad countenance…",
      ref: "Matthew 6:16",
    },
    blocks: [
      {
        type: "prose",
        body: "Every January we lead a 21-day church-wide fast, with daily prayer broadcasts and a downloadable guide. You choose the fasting rhythm that fits you; we hold the line together.",
      },
    ],
    ctaPrimary: { label: "Upcoming fasts", href: "/events" },
    next: { slug: "evangelism", label: "Next: go and tell" },
  },
  {
    slug: "evangelism",
    eyebrow: "Reach the city",
    title: "Go and tell.",
    intro:
      "Evangelism at Kharis is not a department — it is every believer's call. But we coordinate Bring-A-Soul Sundays, street outreach, and training so the work happens together.",
    ctaPrimary: { label: "Next outreach", href: "/events" },
    ctaSecondary: { label: "Evangelism team", href: "/departments" },
    next: { slug: "testimonies", label: "Next: share your testimony" },
  },
  {
    slug: "young-adults",
    eyebrow: "Students & young people",
    title: "KP2 — a spirit-filled generation.",
    intro:
      "Our youth and student services meet under the KP2 banner across five UK cities — including a growing presence on university campuses. If you are between 14 and 24, that is your home at Kharis.",
    ctaPrimary: { label: "Visit KP2", href: "/kp2" },
    next: { slug: "kgroups", label: "Next: join a KGroup" },
  },
  {
    slug: "membership",
    eyebrow: "Commitment",
    title: "Become a covenant member.",
    intro:
      "Beyond regular attendance, membership is a covenant with the Kharis family — a declaration of intent to grow together, serve together and be accountable together. Speak to your campus lead to begin.",
    ctaPrimary: { label: "Talk to a pastor", href: "/contact" },
    next: { label: "Back to Kharis Life", href: "/life", slug: "" },
  },
];

export function getLifeSection(slug: string) {
  return lifeSections.find((s) => s.slug === slug);
}

// The canonical Kharis Life journey, in order. Topical sections (marriage,
// children, fasting, young-adults) are not part of the linear chain — they're
// optional alongside the main path.
export const JOURNEY_ORDER = [
  "become-a-believer",
  "baptism",
  "kgroups",
  "volunteer",
  "evangelism",
  "testimonies",
  "membership",
] as const;

export function getJourneyIndex(slug: string): number {
  return (JOURNEY_ORDER as readonly string[]).indexOf(slug);
}
