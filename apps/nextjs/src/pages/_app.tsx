import type { AppProps, AppType } from "next/app";
import { Inter } from "next/font/google";
import LocalFont from "next/font/local";
import Head from "next/head";
import { ClerkProvider } from "@clerk/nextjs";

import {
  Analytics,
  SiteFooter,
  SiteHeader,
  TailwindIndicator,
  ThemeProvider,
  Toaster,
} from "~/components";
import "~/styles/globals.css";
import { api } from "~/utils/api";
import { cn } from "~/utils/cnHelper";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});
const fontCal = LocalFont({
  src: "../styles/calsans.ttf",
  variable: "--font-cal",
});

const MyApp: AppType = ({ Component, pageProps }: AppProps) => {
  return (
    <ClerkProvider {...pageProps}>
      <Head>
        <title>Rave</title>
        <meta name="Rave" content="Rave" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontCal.variable,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <Component className="flex-1" {...pageProps} />
            <SiteFooter />
          </div>

          <Analytics />
          <TailwindIndicator />
          <Toaster />
        </ThemeProvider>
      </div>
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
