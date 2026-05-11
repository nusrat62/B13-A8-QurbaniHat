import { NextResponse } from "next/server";

export function middleware(request) {
  // Extract the pathname from the request URL
  const { pathname } = new URL(request.url);

  // Allow access to public routes without authentication
  const publicRoutes = ["/", "/animals", "/login", "/register", "/api"];
  
  const isPublicRoute = publicRoutes.some(route => 
    pathname === route || pathname.startsWith(route)
  );

  if (isPublicRoute) {
    return NextResponse.next();
  }

  // For protected routes (/profile, /update-profile), you can add auth check here later
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
