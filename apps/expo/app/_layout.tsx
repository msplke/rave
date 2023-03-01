import {
  MD3LightTheme,
  Provider as PaperProvider,
  configureFonts,
} from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

import { TRPCProvider } from "../src/utils/api";

const fontConfig = {
  fontFamily: "Inter-Regular",
};

const theme = {
  ...MD3LightTheme,
  fonts: configureFonts({ config: fontConfig }),
};

// This is the main layout of the app
// It wraps your pages with the providers they need
const RootLayout = () => {
  const [fontsLoaded] = useFonts({
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    "Inter-Regular": require("../src/assets/fonts/Inter-Regular.otf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <TRPCProvider>
      <SafeAreaProvider>
        <PaperProvider theme={theme}>
          <StatusBar />
          {/*           
          The Stack component displays the current page.
          It also allows you to configure your screens 
          */}
          <Stack
            screenOptions={{
              headerStyle: {
                backgroundColor: "#f472b6",
              },
            }}
          />
        </PaperProvider>
      </SafeAreaProvider>
    </TRPCProvider>
  );
};

export default RootLayout;
