import type { NextApiRequest, NextApiResponse } from "next";

export type ApiData = {
    name: string;
    time: string;
    info?: string;
};

const handler = (req: NextApiRequest, res: NextApiResponse<ApiData>) => {
    let response: ApiData = {
        name: "🚀 Hello world!",
        time: new Date().toISOString(),
        info: undefined,
    };

    if (typeof req.query["info"] === "string") {
        response.info = req.query["info"];
    }

    res.status(200).json(response);
};

export default handler;
