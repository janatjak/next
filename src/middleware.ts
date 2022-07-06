import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest): NextResponse {
    if (!req.nextUrl.pathname.startsWith("/private")) {
        return NextResponse.next();
    }

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
