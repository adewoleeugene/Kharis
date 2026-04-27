export const site = {
  name: "Kharis Church",
  legalName: "Kharis Ministries",
  tagline: "Changing the World With a Touch of His Grace",
  etymology: "Kharis (χάρις) — the Greek word for grace.",
  charityNumber: "1139291",
  founded: 2003,
  pastors: {
    primary: {
      name: "Pastor David Antwi",
      fullName: "Rev. Dr. David Antwi",
      role: "Founder & Senior Pastor",
    },
    cofounder: {
      name: "Pastor Awo Antwi",
      role: "Co-Founder",
    },
  },
  contactEmails: {
    kgroup: "kgroup@kharis.org",
    kp2: "kp2@kharis.org",
  },
  externalLinks: {
    reportIncident:
      "https://forms.office.com/Pages/ResponsePage.aspx?id=ktmX28Fl60WkrVF3jBeQnyCe1UcjuqNNks_4xo4RQiRURFJUMkZDOVpIVFlISUpKMkc5RlQxRksyMC4u",
  },
  socials: [
    { label: "YouTube", href: "https://www.youtube.com/@KharisMinistries" },
    { label: "Instagram", href: "https://www.instagram.com/kharischurch" },
    { label: "Facebook", href: "https://www.facebook.com/KharisMinistries" },
    { label: "X", href: "https://x.com/KharisChurch" },
  ],
} as const;

export const bankDetails = {
  accountName: "Kharis Ministries",
  accountNumber: "80608335",
  sortCode: "20-71-82",
  swiftBic: "BUKBGB22",
  iban: "GB88BUKB20718280608335",
} as const;

export const textGiving = {
  // UK SMS giving — verified against kharis.org/giving
  keywordPrefix: "KCGIVE",
  shortCode: "70085",
  maxAmountGBP: 20,
  example: "KCGIVE 10",
} as const;

export const onlineGiving = {
  // Placeholder Tithe.ly form — branch selection happens on the form itself.
  // Replace with the per-branch form ID once finalised.
  url: "https://give.tithe.ly/?formId=3aeb802d-19d5-4952-bff3-0fa4085971be",
} as const;

export const podcastPlatforms = [
  { label: "YouTube", href: "https://www.youtube.com/@KharisMinistries" },
  { label: "Spotify", href: "https://open.spotify.com/show/6EfmpLAHngHDBsLjrQwnS7" },
  {
    label: "Apple Podcasts",
    href: "https://podcasts.apple.com/gb/podcast/messages-by-david-antwi/id1069725119",
  },
  { label: "SoundCloud", href: "https://soundcloud.com/kharismedia" },
  {
    label: "Amazon Music",
    href: "https://music.amazon.com/podcasts/60953161-8353-4278-a33c-592454d9157d/messages-by-david-antwi",
  },
  {
    label: "Google Podcasts",
    href: "https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5zb3VuZGNsb3VkLmNvbS91c2Vycy9zb3VuZGNsb3VkOnVzZXJzOjU4NjI1MjIxL3NvdW5kcy5yc3M=",
  },
] as const;

export type NavItem = {
  label: string;
  href?: string;
  description?: string;
  items?: { label: string; href: string; description?: string }[];
};

export const nav: NavItem[] = [
  { label: "About", href: "/about" },
  {
    label: "Messages",
    href: "/messages",
    description: "Teaching at the centre of our life together.",
    items: [
      { label: "Latest Message", href: "/messages" },
      { label: "Acts — Verse by Verse", href: "/messages/series/acts" },
      { label: "Issues of Life", href: "/messages/series/issues-of-life" },
      { label: "All Series", href: "/messages/series" },
      { label: "Audio & Podcast", href: "/messages/audio", description: "Spotify · Apple · SoundCloud · more." },
    ],
  },
  {
    label: "Kharis Life",
    description: "A path from first faith to full participation.",
    items: [
      { label: "I'm New", href: "/im-new", description: "What to expect on your first visit." },
      { label: "Become a Believer", href: "/life/become-a-believer" },
      { label: "Baptism", href: "/life/baptism" },
      { label: "KGroups", href: "/life/kgroups", description: "Fridays · 7:00–8:30pm." },
      { label: "Marriage", href: "/life/marriage", description: "Eden School + pre-marital counselling." },
      { label: "Children", href: "/life/children", description: "Kinder · Super · Transition." },
      { label: "KP2 (Young Adults)", href: "/kp2" },
      { label: "Departments", href: "/departments", description: "Serve with a team." },
      { label: "Fasting", href: "/life/fasting" },
      { label: "Volunteer", href: "/life/volunteer" },
      { label: "Testimonies", href: "/life/testimonies" },
      { label: "Membership", href: "/life/membership", description: "Covenant with the Kharis family." },
    ],
  },
  { label: "Locations", href: "/locations" },
  { label: "Events", href: "/events" },
];

export const ukCities = [
  "London",
  "Birmingham",
  "Brighton",
  "Bristol",
  "Chatham",
  "Chelmsford",
  "Coventry",
  "Croydon",
  "Luton",
  "Northampton",
  "Nottingham",
  "Orpington",
  "Reading",
] as const;

export const internationalCities = [
  { city: "Accra", country: "Ghana" },
  { city: "Freetown", country: "Sierra Leone" },
] as const;

export const currentSeries = {
  eyebrow: "Now teaching",
  title: "The Acts of the Apostles",
  subtitle: "A verse-by-verse journey through the birth of the Church — part of our ongoing expository series.",
  preacher: "Pastor David Antwi",
  quote:
    "Good teaching is Christ-centred, does not go silent on the power of God, and points us to the second coming.",
  ctaLabel: "Watch the latest message",
  ctaHref: "/messages",
  secondaryLabel: "Listen on the go",
  secondaryHref: "/messages/audio",
  latestMessage: {
    title: "Can Suffering Be Part Of God's Will?",
    reference: "Acts 21:1–14",
  },
};

// Flagship London times — other campuses vary. Always link to /locations for specifics.
export const thisSunday = {
  eyebrow: "This Sunday",
  heading: "You have a home in every city we serve.",
  body: "Our London flagship gathers Sunday mornings and Thursday evenings. Times vary campus to campus — find yours and we'll meet you at the door.",
  primaryLabel: "Find a campus",
  primaryHref: "/locations",
  secondaryLabel: "I'm new here",
  secondaryHref: "/im-new",
  schedule: [
    {
      label: "Sunday Service",
      time: "10:00",
      note: "Kensington Town Hall, W8 7NX",
    },
    {
      label: "Thursday Service",
      time: "19:00",
      note: "Ark Walworth Academy, SE1 5UJ",
    },
    {
      label: "KGroups",
      time: "Fri 19:00",
      note: "Homes & cafés across the city",
    },
  ],
};

export const kharisLife = [
  {
    step: "01",
    title: "Become a Believer",
    blurb: "The first step — meet Jesus and begin a new life in Christ.",
    href: "/life/become-a-believer",
  },
  {
    step: "02",
    title: "Get Baptised",
    blurb: "A public declaration of faith after our baptism classes.",
    href: "/life/baptism",
  },
  {
    step: "03",
    title: "Join a KGroup",
    blurb: "Small home fellowships — Fridays, 7:00–8:30pm.",
    href: "/life/kgroups",
  },
  {
    step: "04",
    title: "Serve",
    blurb: "Put your gifts to work across our ministries.",
    href: "/life/volunteer",
  },
  {
    step: "05",
    title: "Go & Tell",
    blurb: "Share your testimony. Reach the world with the gospel.",
    href: "/life/evangelism",
  },
] as const;

// The 4 implementation pillars from the Mission page
export const missionPillars = [
  { name: "Discipleship", blurb: "Making disciples at the heart of Christian practice." },
  { name: "Care", blurb: "Love, support, and proper guidance for every person." },
  { name: "Outreach", blurb: "Extending Christ's love to others globally." },
  { name: "Leadership", blurb: "Raising godly leaders to influence society." },
] as const;

// Vision characteristics drawn from /vision/ — eight in total
export const visionCharacteristics = [
  { heading: "Foundation", body: "Christ Centred, Purpose Driven, People Developing and Disciple Making." },
  { heading: "Culture", body: "Exciting and full of life — with both numerical growth and spiritual depth." },
  { heading: "Character", body: "Non-religious, naturally supernatural, and fun; glorifying God and sharing Christ." },
  { heading: "Impact", body: "Attractive, confident, victorious and overcoming. Proclamation and worship broadcast globally." },
  { heading: "Development", body: "Equipping ordinary people to live extraordinary lives." },
  { heading: "Community", body: "A loving family providing refuge, hope and belonging for the lonely and broken." },
  { heading: "Structure", body: "A church built on strong, effective small groups." },
  { heading: "Mission", body: "Sends missionaries and church workers worldwide." },
] as const;

// Departments — our proposal to replace the 404 on current site.
// Edit freely to match actual teams / leaders.
export const departmentGroups = [
  {
    category: "Ministry",
    items: [
      { id: "worship", name: "Worship & Praise", blurb: "Leading the congregation in sung worship across every service." },
      { id: "intercession", name: "Intercession & Prayer", blurb: "Corporate prayer before, during and beyond our gatherings." },
      { id: "evangelism", name: "Evangelism", blurb: "Bring-A-Soul Sundays, street outreach and personal witness." },
      { id: "children", name: "Children's Ministry", blurb: "Kinder · Super · Transition — ages 3 to 16." },
      { id: "kp2", name: "KP2 Young Adults", blurb: "Our students' and young people's services." },
      { id: "marriage", name: "Marriage Ministry", blurb: "Eden School of Marriage and pre-marital counselling." },
      { id: "kgroups", name: "KGroup Leadership", blurb: "Hosting and facilitating home fellowships every Friday." },
    ],
  },
  {
    category: "Production",
    items: [
      { id: "media", name: "Media & Livestream", blurb: "Broadcast, video, photography and social content." },
      { id: "sound", name: "Sound Engineering", blurb: "Audio production for services and events." },
      { id: "creative", name: "Creative Arts", blurb: "Dance, drama and visual storytelling." },
    ],
  },
  {
    category: "Hospitality",
    items: [
      { id: "welcome", name: "Welcome & Ushering", blurb: "First impressions, seating, and the offering." },
    ],
  },
  {
    category: "Stewardship",
    items: [
      { id: "finance", name: "Finance & Administration", blurb: "Treasury, Gift Aid and day-to-day operations." },
      { id: "safeguarding", name: "Safeguarding", blurb: "Protecting children and vulnerable adults across every campus." },
    ],
  },
] as const;

export const buildFund = {
  eyebrow: "Capital Campaign",
  title: "Build God A House",
  body: "We are believing for a permanent home — a place of teaching, worship, and refuge for every Kharis family across the nations. Partner with a one-time gift or a 24-month pledge.",
  primaryLabel: "Partner with the vision",
  // Direct Tithe.ly link earmarked for the Building Fund.
  primaryHref:
    "https://tithe.ly/give_new/www/#/tithely/give-one-time/6177752?giving_to=Building%20Fund",
  primaryExternal: true,
  secondaryLabel: "Other ways to give",
  secondaryHref: "/give",
  donateUrl:
    "https://tithe.ly/give_new/www/#/tithely/give-one-time/6177752?giving_to=Building%20Fund",
};

export const paypalGiving = {
  url:
    "https://www.paypal.com/donate?token=DxQU2f35Y2sc1EQazW70D0jM8ry2xLbETH6SNCBIOItOpa66s1AO4Ol5VjOJuDE48f1wL5R49-JH93PV",
} as const;

export const testimonies = {
  eyebrow: "Testimonies",
  scripture:
    '"Then one of them, when he saw that he was healed, returned, and with a loud voice glorified God." — Luke 17:15',
  body: "Grace is never abstract. It is remembered, recounted, and passed on. Tell us what God has done.",
  primaryLabel: "Share your testimony",
  primaryHref: "/life/testimonies",
};

export const announcements = [
  {
    category: "Series",
    title: "The Acts of the Apostles — verse by verse",
    blurb:
      "Pastor David Antwi continues our expository journey through Acts across every campus.",
    href: "/messages",
  },
  {
    category: "Young Adults",
    title: "KP2 — a revival-seeking church for the next generation",
    blurb:
      "Students and young adults gathering in London, Birmingham, Romford, Southampton and Peterborough.",
    href: "/kp2",
  },
  {
    category: "Serve",
    title: "Departments — find a team and join in",
    blurb:
      "From worship to welcome, media to intercession — every believer has a place to contribute.",
    href: "/departments",
  },
] as const;

export const footerColumns = [
  {
    heading: "Church",
    links: [
      { label: "About", href: "/about" },
      { label: "Mission", href: "/about/mission" },
      { label: "Vision", href: "/about/vision" },
      { label: "Beliefs", href: "/about/beliefs" },
      { label: "Leadership", href: "/about/leadership" },
      { label: "Governance", href: "/about/governance" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Get Involved",
    links: [
      { label: "I'm New", href: "/im-new" },
      { label: "KGroups", href: "/life/kgroups" },
      { label: "Departments", href: "/departments" },
      { label: "Volunteer", href: "/life/volunteer" },
      { label: "Testimonies", href: "/life/testimonies" },
      { label: "KP2 (Young Adults)", href: "/kp2" },
    ],
  },
  {
    heading: "Give",
    links: [
      { label: "Tithes & Offerings", href: "/give" },
      { label: "Build God A House", href: "https://tithe.ly/give_new/www/#/tithely/give-one-time/6177752?giving_to=Building%20Fund" },
      { label: "Bank Transfer / IBAN", href: "/give#bank" },
      { label: "Text Giving (UK)", href: "/give#text" },
      { label: "Why We Give", href: "/give/why" },
    ],
  },
  {
    heading: "Members",
    links: [
      { label: "iKharis", href: "https://ikharis.org" },
      { label: "K-Hub", href: "https://khub.kharis.org" },
      { label: "Webmail", href: "https://outlook.office.com" },
      {
        label: "Report an Incident",
        href: "https://forms.office.com/Pages/ResponsePage.aspx?id=ktmX28Fl60WkrVF3jBeQnyCe1UcjuqNNks_4xo4RQiRURFJUMkZDOVpIVFlISUpKMkc5RlQxRksyMC4u",
      },
    ],
  },
] as const;
