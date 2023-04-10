import type { AppType } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import type { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { api } from "~/utils/api";
import { rtlCache } from "~/utils/rtl-cache";
import "~/styles/globals.css";

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

      <MantineProvider
        emotionCache={rtlCache}
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: "light",
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
