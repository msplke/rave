import { type Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import LocalFont from "next/font/local";
import { headers } from "next/headers";
import { ClerkProvider } from "@clerk/nextjs";

import "~/styles/globals.css";

import { TRPCReactProvider } from "~/app/providers";
import { Analytics, TailwindIndicator, ThemeProvider } from "~/components";
import { Toaster } from "~/components/ui/toaster";
import { siteConfig } from "~/config/site";
import { cn } from "~/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});
const fontCal = LocalFont({
  src: "../styles/CalSans-SemiBold.woff2",
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
  creator: siteConfig.creator,
  authors: siteConfig.authors,
  keywords: siteConfig.keywords,
  icons: {
    icon: "/favicon.ico",
    // shortcut: "/favicon-16x16.png",
    // apple: "/apple-touch-icon.png",
  },
  // manifest: `${siteConfig.url}/site.webmanifest`,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    url: siteConfig.url,
    type: "website",
    locale: "en_US",
    // images: [
    //   {
    //     url: siteConfig.ogImage,
    //     width: 1200,
    //     height: 630,
    //     alt: siteConfig.name,
    //   },
    // ],
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
  metadataBase: new URL(siteConfig.url),
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <ClerkProvider>
        <html lang="en" suppressHydrationWarning>
          <body
            className={cn(
              "min-h-screen bg-background font-sans antialiased",
              fontSans.variable,
              fontCal.variable,
            )}
          >
            <TRPCReactProvider headers={headers()}>
              <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
              >
                {children}

                <Analytics />
                <TailwindIndicator />
                <Toaster />
              </ThemeProvider>
            </TRPCReactProvider>
          </body>
        </html>
      </ClerkProvider>
    </>
  );
}
