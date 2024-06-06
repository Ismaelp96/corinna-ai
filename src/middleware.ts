import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const publicRoutes = createRouteMatcher(['/', 'auth(.*)', '/portal(.*)']);
const ignoredRoutes = ['/chatbot'];

export default clerkMiddleware((auth, request) => {
  if (!publicRoutes(request)) {
    auth().protect();
  }
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
