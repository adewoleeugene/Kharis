export type AboutAction = {
  label: string;
  href: string;
  external?: boolean;
  primary?: boolean;
};

export type AboutBlock =
  | { type: "prose"; heading?: string; body: string; actions?: AboutAction[] }
  | { type: "pillars"; heading?: string; items: { name: string; body: string }[] }
  | { type: "list"; heading?: string; items: string[] };

export type AboutPage = {
  slug: string;
  eyebrow: string;
  title: string;
  intro: string;
  blocks?: AboutBlock[];
  actions?: AboutAction[];
};

export const aboutPages: AboutPage[] = [
  {
    slug: "mission",
    eyebrow: "Our mission",
    title: "To minister to the whole person.",
    intro:
      "We are a friendly, caring and exciting family church that seeks to influence our society with the reality of God's love and the reliability of His principles — by ministering to the spiritual, physical, social and emotional needs of people who care to experience God in a dynamic and a living way.",
    blocks: [
      {
        type: "pillars",
        heading: "The four pillars",
        items: [
          {
            name: "Discipleship",
            body: "Making disciples at the heart of Christian practice.",
          },
          {
            name: "Care",
            body: "Love, support and proper guidance for every person.",
          },
          {
            name: "Outreach",
            body: "Extending Christ's love to others globally.",
          },
          {
            name: "Leadership",
            body: "Raising godly leaders to influence society.",
          },
        ],
      },
      {
        type: "prose",
        heading: "Our mandate",
        body:
          "We ground our work in passages emphasising God's power to uplift the poor and marginalised — 1 Samuel 2:7-8 and the David narrative of gathering those in distress to become leaders.",
      },
    ],
  },
  {
    slug: "vision",
    eyebrow: "Our vision",
    title: "Changing the world with a touch of His grace.",
    intro:
      "Eight characteristics shape the church we are becoming. Read them as aspirations we refuse to let go of.",
    blocks: [
      {
        type: "pillars",
        heading: "Eight characteristics",
        items: [
          {
            name: "Foundation",
            body: "Christ Centred, Purpose Driven, People Developing and Disciple Making.",
          },
          {
            name: "Culture",
            body: "Exciting and full of life — with both numerical growth and spiritual depth.",
          },
          {
            name: "Character",
            body: "Non-religious, naturally supernatural, and fun; glorifying God and sharing Christ.",
          },
          {
            name: "Impact",
            body: "Attractive, confident, victorious and overcoming. Proclamation and worship broadcast globally.",
          },
          {
            name: "Development",
            body: "Equipping ordinary people to live extraordinary lives.",
          },
          {
            name: "Community",
            body: "A loving family providing refuge, hope and belonging for the lonely and broken.",
          },
          {
            name: "Structure",
            body: "A church built on strong, effective small groups.",
          },
          {
            name: "Mission",
            body: "Sends missionaries and church workers worldwide.",
          },
        ],
      },
    ],
  },
  {
    slug: "beliefs",
    eyebrow: "Statement of faith",
    title: "What we believe.",
    intro:
      "Kharis stands in the historic, orthodox Christian tradition. The following eight points summarise the convictions we preach, teach and live by.",
    blocks: [
      {
        type: "list",
        heading: "The eight points",
        items: [
          "We believe in one God — Father, Creator and Ruler of all things.",
          "We believe in the divinity of Jesus Christ — His sinless life, His substitutionary death on the cross, His bodily resurrection, and His promised return.",
          "We believe in the present reality and empowering work of the Holy Spirit in every believer.",
          "We believe the Bible is the inspired, infallible and authoritative Word of God.",
          "We believe that every human being is created in the image of God and is redeemed through the shed blood of Christ.",
          "We believe salvation is a gift of God's grace that must be received by personal faith.",
          "We believe every believer is eternally secure through the grace of God.",
          "We believe in the afterlife, the bodily resurrection of the dead, and the final judgement.",
        ],
      },
    ],
  },
  {
    slug: "leadership",
    eyebrow: "Founders & team",
    title: "Pastors David & Awo Antwi.",
    intro:
      "Pastors David and Awo founded Kharis Church in 2003 — a multifaceted ministry headquartered in London with branches across the United Kingdom, Ghana and Sierra Leone.",
    blocks: [
      {
        type: "prose",
        body: "They also founded Kharis Phase 2 (KP2), our students' and young people's services, and have established a presence on UK university campuses. Married for over twenty years with two children, their focus is on establishing believers in the faith, strengthening local churches, and pursuing revival across nations.",
      },
      {
        type: "prose",
        heading: "Wider team",
        body:
          "Each campus is shepherded by a local lead pastor supported by department heads, KGroup facilitators, and a trustee board. We're in the process of publishing full profiles — contact your campus to be introduced to the team nearest to you.",
      },
    ],
  },
  {
    slug: "governance",
    eyebrow: "Governance & trustees",
    title: "How Kharis is governed.",
    intro:
      "Kharis Ministries is a UK registered charity (no. 1139291), overseen by a board of trustees, stewarded by our senior leadership, and anchored in a set of published policies. Every campus operates under the same framework.",
    blocks: [
      {
        type: "pillars",
        heading: "Three lines of responsibility",
        items: [
          {
            name: "Trustees",
            body: "The board bears ultimate legal responsibility for the charity and its mission.",
          },
          {
            name: "Senior leadership",
            body: "Day-to-day ministry, campus oversight and pastoral care.",
          },
          {
            name: "Members",
            body: "Volunteer leaders, department heads and the wider Kharis family.",
          },
        ],
      },
      {
        type: "prose",
        heading: "The trustee board",
        body:
          "The trustees meet quarterly to review finance, safeguarding, risk and strategic direction. Our current trustee list is maintained on the Charity Commission register under charity number 1139291 — and a current printed copy is available on request from any campus.",
      },
      {
        type: "pillars",
        heading: "Published policies",
        items: [
          {
            name: "Safeguarding",
            body: "The protection of children and vulnerable adults, across every campus.",
          },
          {
            name: "Privacy",
            body: "How we collect, store and use personal data under UK GDPR.",
          },
          {
            name: "Disclaimer",
            body: "Terms governing the use of kharis.org and linked resources.",
          },
        ],
      },
      {
        type: "prose",
        heading: "Reporting an incident",
        body:
          "If something has happened that causes you concern — whether or not it is a safeguarding matter — please tell us. Reports go directly to our designated safeguarding lead via the Microsoft Forms incident reporter. We investigate every report with care and confidentiality, and report externally where required by law.",
        actions: [
          {
            label: "Report an incident",
            href: "https://forms.office.com/Pages/ResponsePage.aspx?id=ktmX28Fl60WkrVF3jBeQnyCe1UcjuqNNks_4xo4RQiRURFJUMkZDOVpIVFlISUpKMkc5RlQxRksyMC4u",
            external: true,
            primary: true,
          },
        ],
      },
    ],
  },
];

export function getAboutPage(slug: string) {
  return aboutPages.find((p) => p.slug === slug);
}
