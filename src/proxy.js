import { NextResponse } from "next/server";
import { auth } from "./lib/auth";
import { headers } from "next/headers";

export async function proxy(request) {
  // Check if the user is authenticated
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  // Extract the pathname from the request URL
  const { pathname } = new URL(request.url);

  // Allow access to the /animals page without authentication
  if (pathname === "/animals") {
    return NextResponse.next();
  }

  // If the user is authenticated, allow the request to proceed; otherwise, redirect to the login page
  if (session) {
    return NextResponse.next();
  } else {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/animals/:path*", "/profile", "/update-profile"],
};
