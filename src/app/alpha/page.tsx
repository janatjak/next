"use client";

import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Page = () => {
    const { data } = useSWR("/api", fetcher, { refreshInterval: 10 * 1000 });
    console.log(data);

    return (
        <>
            <h1>SWC + client component</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </>
    );
};

export default Page;
