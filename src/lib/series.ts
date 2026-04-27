export type Sermon = {
  title: string;
  reference?: string;
};

export type Series = {
  slug: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  preacher: string;
  kind: "Expository" | "Thematic" | "Special";
  tone: "ink" | "sage" | "gold";
  sermons: Sermon[];
};

export const series: Series[] = [
  {
    slug: "acts",
    eyebrow: "Now teaching · Expository",
    title: "The Acts of the Apostles",
    subtitle:
      "A verse-by-verse journey through the birth of the Church.",
    description:
      "Luke's second volume — the history of the Spirit-powered Church and the launch of the gospel into the nations. We work through Acts one passage at a time, letting the text set the pace.",
    preacher: "Pastor David Antwi",
    kind: "Expository",
    tone: "ink",
    sermons: [
      { title: "Can Suffering Be Part Of God's Will?", reference: "Acts 21:1–14" },
      { title: "I Commend You To God", reference: "Acts 20:30–38" },
      { title: "Future-Proofing the Church", reference: "Acts 20:25–29" },
      { title: "Why I Do What I Do For God", reference: "Acts 20:20–24" },
    ],
  },
  {
    slug: "issues-of-life",
    eyebrow: "Thematic series",
    title: "Issues of Life",
    subtitle:
      "The Word on the ordinary places where life actually happens.",
    description:
      "Marriage, money, fear, fellowship, purpose. Practical teaching from across the Scriptures, shaped for the questions we're actually asking in the moments we're actually in.",
    preacher: "Pastor David Antwi",
    kind: "Thematic",
    tone: "gold",
    sermons: [
      { title: "A life without restrictions leads to destruction" },
      { title: "The Christian life is about fellowship" },
      { title: "Instead of looking around you for help, look up to God" },
      { title: "Save your best for the one who commits their future to you" },
      { title: "It takes sacrifice to be a wife of a man in ministry" },
      { title: "Here's why the woman you choose to marry matters" },
      { title: "Jesus promises to quench your thirst, but it starts with your humility" },
      { title: "There are 365 'fear nots' in the Bible for a reason" },
    ],
  },
  {
    slug: "easter-2026",
    eyebrow: "Seasonal · Special",
    title: "The Implications of the Resurrection",
    subtitle: "Our Easter weekend teaching.",
    description:
      "Good Friday through Resurrection Sunday. Four messages that carry us from the cross to the empty tomb and out into Monday morning with the same risen Lord.",
    preacher: "Pastor David Antwi",
    kind: "Special",
    tone: "sage",
    sermons: [
      { title: "The Glorious Cross — Good Friday Broadcast" },
      { title: "My God Died For Me — Special Easter Message" },
      { title: "The Implications of the Resurrection" },
      { title: "Resurrection Praise Night" },
    ],
  },
];

export function getSeries(slug: string) {
  return series.find((s) => s.slug === slug);
}
