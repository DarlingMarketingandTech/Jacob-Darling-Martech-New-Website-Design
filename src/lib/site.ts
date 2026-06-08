export const site = {
  name: "Darling Martech",
  legalName: "Darling Martech",
  founder: "Jacob Darling",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.darlingmartech.com",
  email: "jacob@darlingmartech.com",
  calendarUrl: process.env.NEXT_PUBLIC_CALENDAR_URL || "",
  location: {
    city: "Indianapolis",
    region: "IN",
    country: "US",
  },
  areaServed: "United States",
  social: {
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || "",
    twitter: process.env.NEXT_PUBLIC_TWITTER_URL || "",
  },
};
