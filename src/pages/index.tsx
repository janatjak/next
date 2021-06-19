import { NextPage } from "next";
import { FC } from "react";
import useSWR from "swr";

const apis = ["go", "node", "ts"];

const fetcher = (url: string) => fetch(url).then((res) => res.text());

const Link: FC<{ api: string }> = ({ api }) => {
    const { data, error } = useSWR(`/api/${api}`, fetcher, { refreshInterval: 1 });

    if (error !== undefined) {
        return <>error</>;
    }

    return (
        <a href={`/api/${api}`} target="_blank" rel="noreferrer">
            {api} ({data})
        </a>
    );
};

const Index: NextPage = () => {
    return (
        <div>
            <ul>
                {apis.map((api) => (
                    <li key={api}>
                        <Link api={api} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Index;
