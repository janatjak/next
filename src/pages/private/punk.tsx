import { NextPage } from "next";
import Layout from "../../ui/Layout";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Page: NextPage = () => {
    const { data } = useSWR("/api", fetcher, { refreshInterval: 10 * 1000 });

    return (
        <Layout title="Private punk">
            <h1>SWC</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </Layout>
    );
};

export default Page;
