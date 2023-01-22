import { NextResponse } from "next/server";

export default function handler() {
    return NextResponse.next({
        status: 401,
        headers: {
            "WWW-Authenticate": 'Basic realm="Secure Area"',
        },
    });
}
