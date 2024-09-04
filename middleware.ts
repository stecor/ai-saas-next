import { authMiddleware } from "@clerk/nextjs";
 
authMiddleware({ debug: true })

export default authMiddleware({
  publicRoutes: ['/', '/api/webhook', ]
});
 
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};