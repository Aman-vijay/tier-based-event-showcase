import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server"

const isProtectedRoute = createRouteMatcher([
  "/events(.*)",
  "/upgrade(.*)"
])

export default clerkMiddleware(async (auth, req) => {
  const session = await auth();
  if (isProtectedRoute(req) && !session.userId) {
    return Response.redirect(new URL('/sign-in', req.url));
  }
})

export const config = {
  matcher: [
    "/((?!_next|.*\\..*).*)",
    "/(api|trpc)(.*)"
  ]
}
