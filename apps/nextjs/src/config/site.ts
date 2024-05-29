interface SiteConfig {
  name: string;
  description: string;
  url: string;
  creator: string;
  authors: { name: string; url: string }[];
  keywords: string[];
  ogImage?: string;
  links: {
    github: string;
    twitter?: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "Rave",
  description:
    "Stay up-to-date on upcoming events happening across your own and other campuses.",
  url: "https://rave.vercel.app",
  creator: "Peter Kibuchi",
  authors: [{ name: "Peter Kibuchi", url: "https://www.peterkibuchi.com" }],
  keywords: ["Rave", "Events", "Campus", "University", "College"],
  links: {
    github: "https://github.com/msplke",
  },
};
