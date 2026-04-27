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
  campusLead?: { name: string; title: string; image?: string };
  // Summary fields used by the explorer grid on /locations
  primaryService?: { day: string; time: string };
  midweek?: { day: string; time: string };
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
    midweek: { day: "Thursdays", time: "19:00" },
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
  {
    slug: "birmingham",
    city: "Birmingham",
    country: "United Kingdom",
    region: "uk",
    primaryService: { day: "Sundays", time: "14:00" },
    venueHint: "Anchor Point Church, B6",
    services: [
      { day: "Sunday", time: "14:00", venue: "Anchor Point Church", address: "Hubert Street / 58 Chester Street, Birmingham, B6 4BE" },
      { day: "Wednesday", time: "19:00", venue: "Anchor Point Church", address: "Hubert Street / 58 Chester Street, Birmingham, B6 4BE" },
    ],
  },
  {
    slug: "brighton",
    city: "Brighton",
    country: "United Kingdom",
    region: "uk",
    primaryService: { day: "Sundays", time: "11:00" },
    venueHint: "Richmond Parade, BN2",
    services: [
      { day: "Sunday", time: "11:00", venue: "Kharis Church Brighton", address: "Richmond Parade, Brighton, BN2 9AA" },
      { day: "Wednesday", time: "19:30", venue: "Online (Microsoft Teams)", note: "Link via @kharis.brighton on Instagram." },
    ],
  },
  {
    slug: "bristol",
    city: "Bristol",
    country: "United Kingdom",
    region: "uk",
    primaryService: { day: "Sundays", time: "11:00" },
    venueHint: "Abbeywood Community School",
    services: [
      { day: "Sunday", time: "11:00", venue: "Abbeywood Community School", address: "Stoke Gifford, Bristol, BS34 8SF" },
      { day: "Midweek", time: "18:30", venue: "The Salvation Army Bristol Citadel", address: "6 Ashley Road, St. Paul's, Bristol, BS6 5NL" },
    ],
  },
  {
    slug: "chatham",
    city: "Chatham",
    country: "United Kingdom",
    region: "uk",
    primaryService: { day: "Sundays", time: "12:00" },
    venueHint: "Strood Academy",
    services: [
      { day: "Sunday", time: "12:00", venue: "Strood Academy", address: "Carnation Road, Rochester, ME2 2SX" },
      { day: "Wednesday", time: "19:00", venue: "Leigh Academy", address: "Otterham Quay Lane, Rainham, ME8 8GS" },
    ],
  },
  {
    slug: "chelmsford",
    city: "Chelmsford",
    country: "United Kingdom",
    region: "uk",
    primaryService: { day: "Sundays", time: "12:30" },
    venueHint: "YMCA Chelmsford",
    services: [
      { day: "Sunday", time: "12:30", venue: "YMCA Chelmsford", address: "16 Victoria Road, Chelmsford, CM1 1NZ" },
      { day: "Midweek", time: "19:00", venue: "YMCA Chelmsford", address: "16 Victoria Road, Chelmsford, CM1 1NZ" },
    ],
  },
  {
    slug: "coventry",
    city: "Coventry",
    country: "United Kingdom",
    region: "uk",
    primaryService: { day: "Sundays", time: "11:00" },
    venueHint: "The Caribbean Centre",
    services: [
      { day: "Sunday", time: "11:00", venue: "The Caribbean Centre", address: "159 Spon Street, Coventry, CV1 3BB" },
      { day: "Wednesday", time: "18:30", venue: "The Caribbean Centre", address: "159 Spon Street, Coventry, CV1 3BB" },
    ],
  },
  {
    slug: "croydon",
    city: "Croydon",
    country: "United Kingdom",
    region: "uk",
    primaryService: { day: "Sundays", time: "11:00" },
    venueHint: "Harris City Academy",
    services: [
      { day: "Sunday", time: "11:00", venue: "Harris City Academy", address: "Maberley Road, London, SE19 2JH" },
      { day: "Wednesday", time: "19:00", venue: "Harris City Academy", address: "Maberley Road, London, SE19 2JH" },
    ],
  },
  {
    slug: "luton",
    city: "Luton",
    country: "United Kingdom",
    region: "uk",
    primaryService: { day: "Sundays", time: "12:00" },
    venueHint: "The Linden Academy",
    services: [
      { day: "Sunday", time: "12:00", venue: "The Linden Academy", address: "Osborne Road, Luton, LU1 3HJ" },
      { day: "Wednesday", time: "18:30", venue: "Methodist Church Building", address: "45/47 High Town Road, Luton, LU2 0BW" },
      { day: "Friday", time: "18:30", venue: "Online (Zoom)", note: "Bible study." },
    ],
  },
  {
    slug: "northampton",
    city: "Northampton",
    country: "United Kingdom",
    region: "uk",
    primaryService: { day: "Sundays", time: "14:00" },
    venueHint: "New Life Centre",
    services: [
      { day: "Sunday", time: "14:00", venue: "New Life Centre", address: "9 Tower Street, Northampton, NN1 2SN" },
      { day: "Wednesday", time: "18:30", venue: "New Life Centre", address: "9 Tower Street, Northampton, NN1 2SN" },
    ],
  },
  {
    slug: "nottingham",
    city: "Nottingham",
    country: "United Kingdom",
    region: "uk",
    primaryService: { day: "Sundays", time: "11:00" },
    venueHint: "Bluecoat Wollaton Academy",
    services: [
      { day: "Sunday", time: "11:00", venue: "Bluecoat Wollaton Academy", address: "Sutton Passeys Crescent, Wollaton Park, Nottingham, NG8 1EA" },
      { day: "Wednesday", time: "19:00", venue: "Bluecoat Wollaton Academy", address: "Sutton Passeys Crescent, Wollaton Park, Nottingham, NG8 1EA" },
    ],
  },
  {
    slug: "orpington",
    city: "Orpington",
    country: "United Kingdom",
    region: "uk",
    primaryService: { day: "Sundays", time: "12:00" },
    venueHint: "Harris Academy Orpington",
    services: [
      { day: "Sunday", time: "12:00", venue: "Harris Academy Orpington (The Drama Studio)", address: "Tintagel Road, Orpington, BR5 4LG" },
      { day: "Wednesday", time: "19:00", venue: "Harris Academy Orpington (The Drama Studio)", address: "Tintagel Road, Orpington, BR5 4LG" },
    ],
  },
  {
    slug: "reading",
    city: "Reading",
    country: "United Kingdom",
    region: "uk",
    primaryService: { day: "Sundays", time: "11:00" },
    venueHint: "The Wren School",
    services: [
      { day: "Sunday", time: "11:00", venue: "The Wren School", address: "61–63 Bath Road, Reading, RG30 2BB" },
      { day: "Wednesday", time: "18:30", venue: "The Wren School", address: "61–63 Bath Road, Reading, RG30 2BB" },
    ],
  },
  {
    slug: "accra",
    city: "Accra",
    country: "Ghana",
    region: "international",
    primaryService: { day: "Sundays", time: "10:00" },
    venueHint: "Narpo Hotels, Achimota",
    services: [
      { day: "Sunday", time: "10:00", venue: "Narpo Hotels", address: "Nsawam Road (near Mile 7 Police Station), Achimota, Accra" },
    ],
  },
  {
    slug: "freetown",
    city: "Freetown",
    country: "Sierra Leone",
    region: "international",
    primaryService: { day: "Sundays", time: "11:00" },
    venueHint: "Robert Hall, central Freetown",
    services: [
      { day: "Sunday", time: "11:00", venue: "Robert Hall", address: "23 Robert Street, Freetown" },
      { day: "Wednesday", time: "18:00", venue: "Robert Hall", address: "23 Robert Street, Freetown" },
      { day: "Friday", time: "18:00", venue: "Robert Hall", address: "23 Robert Street, Freetown", note: "Revival prayers." },
    ],
  },
];

export function getCampus(slug: string): Campus | undefined {
  return campuses.find((c) => c.slug === slug);
}
