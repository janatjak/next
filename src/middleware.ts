import { NextRequest, NextResponse } from "next/server";

export const config = {
    matcher: "/private/:path*",
};

export function middleware(req: NextRequest): NextResponse {
    const basicAuth = req.headers.get("authorization");

    if (basicAuth) {
        const auth = basicAuth.split(" ")[1];
        const [user, pwd] = atob(auth).split(":");

        if (user === "user" && pwd === "pass") {
            return NextResponse.next();
        }
    }

    const url = req.nextUrl;
    url.pathname = "/api/auth";
    return NextResponse.rewrite(url);
}
