import { createEnv } from "@t3-oss/env-nextjs";
import * as z from "zod";

export const env = createEnv({
  server: {
    NEXTJS_APP_URL: z.preprocess(
      (str) => process.env.VERCEL_URL ?? str,
      process.env.VERCEL ? z.string().min(1) : z.string().url(),
    ),
  },
  runtimeEnv: {
    NEXTJS_APP_URL: process.env.NEXTJS_APP_URL,
  },
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
});
