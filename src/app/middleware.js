import { authMiddleware } from "@clerk/nextjs/server";

export default authMiddleware({
  // Routes that can be accessed while signed out
  publicRoutes: [
    '/',
    '/contact',
    '/about',
    '/portfolio',
    '/services',
    '/policies/(.*)', // Makes all policy pages public
    '/sign-in',
    '/sign-up'
  ],

  // Routes that can always be accessed, and have
  // no authentication information
  ignoredRoutes: [],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};