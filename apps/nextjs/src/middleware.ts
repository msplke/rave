import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/"],
});

export const config = {
  /* With this, the entire application is protected; if one tries to access it, 
  they are redirected to the Register page. Exceptions are listed above. */
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
