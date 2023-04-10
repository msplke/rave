import { createEmotionCache } from "@mantine/core";
import rtlPlugin from "stylis-plugin-rtl";

export const rtlCache = createEmotionCache({
  key: "mantine-rtl",
  stylisPlugins: [rtlPlugin],
});
