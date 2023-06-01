import { type Metadata } from "next";
import Link from "next/link";

import { OAuthSignIn } from "../oauth-login";

export const runtime = "edge";

export const metadata: Metadata = {
  title: "Login",
  description: "Login to your account",
};

export default function LoginPage() {
  return (
    <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">Login</h1>
        <p className="text-sm text-muted-foreground">
          Sign in to continue with Rave
        </p>
      </div>
      <div className="grid gap-6">
        <OAuthSignIn />
      </div>

      <p className="px-8 text-center text-sm text-muted-foreground">
        <Link
          href="/register"
          className="hover:text-brand underline underline-offset-4"
        >
          Don&apos;t have an account? Sign up
        </Link>
      </p>
    </div>
  );
}
