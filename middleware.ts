import { NextRequest, NextResponse } from "next/server";
import { decrypt } from "@/lib/session";
import { cookies } from "next/headers";

// Specify protected and public routes
const protectedRoutes = ["/"];
const publicRoutes = ["/login", "/register"];

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);

  // Decrypt the session from the cookie
  const cookie = cookies().get("accessToken")?.value;
  console.log("Cookie:", cookie);

  // If no cookie and trying to access a protected route, redirect to login

  // If no cookie and trying to access a public route, allow access
  if (!cookie && isPublicRoute) {
    return NextResponse.next();
  }

  // If cookie exists, decrypt the session
  let session;
  try {
    session = await decrypt(cookie);
  } catch (error) {
    // If decryption fails, redirect to login
    console.log("Error decrypting session:", error);

    // return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  console.log("Session:", session);

  // Redirect to login if the user is not authenticated and trying to access a protected route
  if (isProtectedRoute && !session?.id) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  // Redirect to dashboard if the user is authenticated and trying to access a public route
  if (isPublicRoute && session?.id) {
    return NextResponse.redirect(new URL("/", req.nextUrl));
  }

  return NextResponse.next();
}

// Routes Middleware should not run on
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
