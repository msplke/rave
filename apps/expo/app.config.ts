import type { ExpoConfig } from "@expo/config";

const defineConfig = (): ExpoConfig => ({
  name: "rave",
  slug: "Rave",
  description:
    "Stay up-to-date on upcoming events happening across your own and other campuses.",
  scheme: "expo",
  version: "0.1.0",
  orientation: "portrait",
  icon: "./src/assets/icon.png",
  userInterfaceStyle: "light",
  splash: {
    image: "./src/assets/icon.png",
    resizeMode: "contain",
    backgroundColor: "#1F104A",
  },
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    supportsTablet: true,
    bundleIdentifier: "your.bundle.identifier",
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./src/assets/icon.png",
      backgroundColor: "#1F104A",
    },
  },
  extra: {
    eas: {
      projectId: "your-project-id",
    },
  },
  plugins: ["./expo-plugins/with-modify-gradle.js"],
});

export default defineConfig;
