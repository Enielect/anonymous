import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { decrypt } from "./lib/session";

const protectedRoute = ["/", "/inbox", "/profile", "/inbox/[id]"];

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const inProtectedRoute = protectedRoute.includes(path);

  const cookie = cookies().get("session")?.value;
  const session = await decrypt(cookie);

  if (inProtectedRoute && !session?.userId) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};