export interface SiteConfig {
  name: string;
  url: string;
  description: string;
  ogImage?: string;
  links: {
    github: string;
    twitter?: string;
  };
  creator: string;
  authors: { name: string; url: string }[];
}
