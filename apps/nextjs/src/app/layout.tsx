import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { TailwindIndicator, ThemeProvider } from "~/components";
import { siteConfig } from "~/config/site";
import "~/styles/globals.css";
import { cn } from "~/utils/cnHelper";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ["Rave"],
  authors: [
    {
      name: "petetkibuchi",
      url: "https://www.peterkibuchi.com",
    },
  ],
  creator: "peterkibuchi",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <>
      <html lang="en" suppressHydrationWarning className={inter.className}>
        <head />
        <body
          className={cn(
            "bg-background min-h-screen font-sans antialiased",
            inter.variable,
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="relative flex min-h-screen flex-col">
              <div className="flex-1">{children}</div>
            </div>
            <TailwindIndicator />
          </ThemeProvider>
        </body>
      </html>
    </>
  );
};

export default RootLayout;
