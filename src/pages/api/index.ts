import { NextRequest, NextResponse } from "next/server";

export type ApiData = {
    name: string;
    time: string;
    info?: string;
};

const handler = (req: NextRequest) => {
    let response: ApiData = {
        name: "🚀 Hello world!",
        time: new Date().toISOString(),
        info: undefined,
    };

    const info = req.nextUrl.searchParams.get("info");
    if (info) {
        response.info = info;
    }

    return NextResponse.json(response);
};

export default handler;
