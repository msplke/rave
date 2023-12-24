import type { Metadata } from "next";
import Link from "next/link";

import { OAuthLogin } from "../oauth-login";

export const runtime = "edge";

export const metadata: Metadata = {
  title: "Login",
  description: "Login to your account",
};

export default function LoginPage() {
  return (
    <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
        <p className="text-sm text-muted-foreground">
          Pick up where you left off
        </p>
      </div>

      <div className="grid gap-6">
        {/* <EmailSignIn /> */}

        {/* <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div> */}

        <OAuthLogin />
      </div>

      <p className="px-8 text-center text-sm text-muted-foreground">
        New to Rave?{" "}
        <Link
          href="/register"
          className="hover:text-brand underline underline-offset-4"
        >
          Sign up
        </Link>
      </p>
    </div>
  );
}
