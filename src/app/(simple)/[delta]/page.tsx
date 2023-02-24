import { ApiData } from "@api";

export const dynamicParams = true;

export async function generateStaticParams() {
    return [];
}

const ucfirst = (s: string | undefined) => (s !== undefined ? s.charAt(0).toUpperCase() + s.slice(1) : "???");

export function generateMetadata({ params }: any) {
    return { title: ucfirst(params.delta) };
}

async function getData(info: string): Promise<ApiData> {
    const res = await fetch(`${process.env.API_URL}/api?info=${info}`);
    return res.json();
}

interface PageProps {
    params: {
        delta: string;
    };
}

const Page = async ({ params }: PageProps) => {
    const data = await getData(params.delta);

    return (
        <>
            <h1>
                server component
                <br />
                with dynamicParams
            </h1>
            <h2>(old getStaticPaths)</h2>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </>
    );
};

export default Page;
