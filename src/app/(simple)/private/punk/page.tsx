import { notFound } from "next/navigation";
import { PHASE_PRODUCTION_BUILD } from "next/dist/shared/lib/constants";

export const revalidate = 0; // TODO fix notFound

const fetchData = async () => {
    if (process.env.NEXT_PHASE === PHASE_PRODUCTION_BUILD) {
        notFound();
    }

    return await (await fetch(process.env.API_URL + "/api")).json();
};

const Page = async () => {
    const data = await fetchData();

    return (
        <>
            <h1>server component</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </>
    );
};

export default Page;

export const metadata = {
    title: "Private punk",
};
