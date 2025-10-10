import { NextRequest, NextResponse } from "next/server";

export const config = {
    matcher: "/private/:path*",
};

export function proxy(req: NextRequest): NextResponse {
    const basicAuth = req.headers.get("authorization");

    if (basicAuth) {
        const auth = basicAuth.split(" ")[1];
        const [user, pwd] = atob(auth).split(":");

        if (user === "user" && pwd === "pass") {
            return NextResponse.next();
        }
    }

    return new NextResponse("", {
        status: 401,
        headers: {
            "WWW-Authenticate": 'Basic realm="Secure Area"',
        },
    });
}
