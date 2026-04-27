export type Pastor = {
  name: string;
  title: string;
  campus?: string;
  campusSlug?: string;
  bio?: string;
  founder?: boolean;
};

// David & Awo Antwi are confirmed from kharis.org. Campus pastors are
// placeholder slots tied to each campus — fill the `name` field as
// confirmed. An entry without a name will render a "to be introduced"
// placeholder card.
export const pastors: Pastor[] = [
  {
    name: "Rev. Dr. David Antwi",
    title: "Senior Pastor & Founder",
    bio: "Founder of Kharis Church (2003) and Kharis Phase 2 (KP2). His teaching anchors every campus across the United Kingdom, Ghana and Sierra Leone.",
    founder: true,
    campus: "London",
    campusSlug: "london",
  },
  {
    name: "Pastor Awo Antwi",
    title: "Co-Founder",
    bio: "Co-founder of Kharis Church alongside her husband David. Twenty-plus years of pastoral ministry shaped around establishing believers and building family.",
    founder: true,
    campus: "London",
    campusSlug: "london",
  },
];

// Campus-level pastor slots — names to be confirmed with each campus.
export const campusPastorSlots: {
  campus: string;
  campusSlug: string;
  country: string;
}[] = [
  { campus: "Birmingham", campusSlug: "birmingham", country: "United Kingdom" },
  { campus: "Brighton", campusSlug: "brighton", country: "United Kingdom" },
  { campus: "Bristol", campusSlug: "bristol", country: "United Kingdom" },
  { campus: "Chatham", campusSlug: "chatham", country: "United Kingdom" },
  { campus: "Chelmsford", campusSlug: "chelmsford", country: "United Kingdom" },
  { campus: "Coventry", campusSlug: "coventry", country: "United Kingdom" },
  { campus: "Croydon", campusSlug: "croydon", country: "United Kingdom" },
  { campus: "Luton", campusSlug: "luton", country: "United Kingdom" },
  { campus: "Northampton", campusSlug: "northampton", country: "United Kingdom" },
  { campus: "Nottingham", campusSlug: "nottingham", country: "United Kingdom" },
  { campus: "Orpington", campusSlug: "orpington", country: "United Kingdom" },
  { campus: "Reading", campusSlug: "reading", country: "United Kingdom" },
  { campus: "Accra", campusSlug: "accra", country: "Ghana" },
  { campus: "Freetown", campusSlug: "freetown", country: "Sierra Leone" },
];
