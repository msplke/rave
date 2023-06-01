import { type Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import LocalFont from "next/font/local";
import { ClerkProvider } from "@clerk/nextjs";

import "~/styles/globals.css";
import { cn } from "~/utils/cnHelpers";
import { Toaster } from "~/components/ui/toaster";
import { Analytics, TailwindIndicator, ThemeProvider } from "~/components";
import { siteConfig } from "~/config/site";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});
const fontCal = LocalFont({
  src: "../styles/calsans.ttf",
  variable: "--font-cal",
});

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ["Rave"],
  creator: "Peter Kibuchi",
  authors: [
    {
      name: "Peter Kibuchi",
      url: "https://github.com/peterkibuchi",
    },
  ],
  icons: {
    icon: "/favicon.ico",
    // shortcut: "/favicon-16x16.png",
    // apple: "/apple-touch-icon.png",
  },
  // manifest: `${siteConfig.url}/site.webmanifest`,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    // images: [`${siteConfig.url}/og.jpg`],
    // creator: "@example",
  },
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <ClerkProvider>
        <html lang="en" suppressHydrationWarning>
          <head />
          <body
            className={cn(
              "min-h-screen bg-background font-sans antialiased",
              fontSans.variable,
              fontCal.variable,
            )}
          >
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              {children}
              <Analytics />
              <TailwindIndicator />
              <Toaster />
            </ThemeProvider>
          </body>
        </html>
      </ClerkProvider>
    </>
  );
}
