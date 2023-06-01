import type { Metadata, Route } from "next";
import Link from "next/link";

import { OAuthSignIn } from "../oauth-login";

export const runtime = "edge";

export const metadata: Metadata = {
  title: "Create an account",
  description: "Create an account to get started.",
};

export default function AuthenticationPage() {
  return (
    <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">Register</h1>
        <p className="text-sm text-muted-foreground">
          Sign up to continue with Rave
        </p>
      </div>
      <div className="grid gap-6">
        <OAuthSignIn />
      </div>

      <p className="px-8 text-center text-sm text-muted-foreground">
        <Link
          href="/login"
          className="hover:text-brand underline underline-offset-4"
        >
          Already have an account? Sign in
        </Link>
      </p>

      <p className="px-8 text-center text-sm text-muted-foreground">
        By clicking continue, you agree to our{" "}
        <Link
          href={"/terms" as Route}
          className="underline underline-offset-4 hover:text-primary"
        >
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link
          href={"/privacy" as Route}
          className="underline underline-offset-4 hover:text-primary"
        >
          Privacy Policy
        </Link>
        .
      </p>
    </div>
  );
}
