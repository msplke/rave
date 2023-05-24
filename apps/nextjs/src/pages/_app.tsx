import type { AppType } from "next/app";
import { Inter } from "next/font/google";
import LocalFont from "next/font/local";
import Head from "next/head";
import type { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

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

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
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
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
