import { VercelRequest, VercelResponse } from "@vercel/node";
import dayjs from "dayjs";

export default (request: VercelRequest, response: VercelResponse) => {
    const now = dayjs().format();
    response.status(200).send(`[ts] Now: ${now}`);
};
