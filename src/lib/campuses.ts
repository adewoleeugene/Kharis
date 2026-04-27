export type Region = "uk" | "international";

export type CampusService = {
  day: string;
  time: string;
  venue?: string;
  address?: string;
  transport?: string;
  note?: string;
};

export type Campus = {
  slug: string;
  city: string;
  country: string;
  region: Region;
  flagship?: boolean;
  tagline?: string;
  intro?: string;
  services?: CampusService[];
  campusLead?: { name: string; title: string };
  // Summary fields used by the explorer grid on /locations
  primaryService?: { day: string; time: string };
  venueHint?: string;
};

export const campuses: Campus[] = [
  {
    slug: "london",
    city: "London",
    country: "United Kingdom",
    region: "uk",
    flagship: true,
    tagline: "Our original campus and the heart of the Kharis family.",
    intro:
      "Gathering in Kensington and Walworth every week under the teaching of Rev. Dr. David Antwi — our flagship campus and the birthplace of the Kharis ministry.",
    campusLead: { name: "Rev. Dr. David Antwi", title: "Head Pastor & Founder" },
    primaryService: { day: "Sundays", time: "10:00" },
    venueHint: "Kensington Town Hall · Ark Walworth Academy",
    services: [
      {
        day: "Sunday",
        time: "10:00",
        venue: "Kensington Town Hall",
        address: "Hornton Street, London, W8 7NX",
        transport: "High Street Kensington (tube)",
        note: "Our main gathering — worship, the Word, children's ministry in session.",
      },
      {
        day: "Thursday",
        time: "19:00",
        venue: "Ark Walworth Academy",
        address: "Shorncliffe Road, London, SE1 5UJ",
        transport: "Elephant & Castle (tube)",
        note: "Midweek teaching and prayer — come as you are, straight from work.",
      },
      {
        day: "Friday",
        time: "19:00 – 20:30",
        venue: "KGroups",
        address: "Homes and cafés across London",
        note: "Small fellowships focused on Scripture, prayer and relationships.",
      },
    ],
  },
  { slug: "birmingham", city: "Birmingham", country: "United Kingdom", region: "uk" },
  { slug: "brighton", city: "Brighton", country: "United Kingdom", region: "uk" },
  { slug: "bristol", city: "Bristol", country: "United Kingdom", region: "uk" },
  { slug: "chatham", city: "Chatham", country: "United Kingdom", region: "uk" },
  { slug: "chelmsford", city: "Chelmsford", country: "United Kingdom", region: "uk" },
  { slug: "coventry", city: "Coventry", country: "United Kingdom", region: "uk" },
  { slug: "croydon", city: "Croydon", country: "United Kingdom", region: "uk" },
  { slug: "luton", city: "Luton", country: "United Kingdom", region: "uk" },
  { slug: "northampton", city: "Northampton", country: "United Kingdom", region: "uk" },
  { slug: "nottingham", city: "Nottingham", country: "United Kingdom", region: "uk" },
  { slug: "orpington", city: "Orpington", country: "United Kingdom", region: "uk" },
  { slug: "reading", city: "Reading", country: "United Kingdom", region: "uk" },
  { slug: "accra", city: "Accra", country: "Ghana", region: "international" },
  { slug: "freetown", city: "Freetown", country: "Sierra Leone", region: "international" },
];

export function getCampus(slug: string): Campus | undefined {
  return campuses.find((c) => c.slug === slug);
}
