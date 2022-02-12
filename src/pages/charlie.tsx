import { GetStaticProps, NextPage } from "next";
import Layout from "../ui/Layout";
import { ApiData } from "./api";

interface Props {
    data: ApiData;
}

const Page: NextPage<Props> = ({ data }) => {
    return (
        <Layout title="Charlie">
            <h1>getStaticProps</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </Layout>
    );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
    if (process.env.NEXT_BUILD) {
        return {
            notFound: true,
            revalidate: 1,
        };
    }

    return {
        props: {
            data: await (await fetch(process.env.API_URL + "/api")).json(),
        },
        revalidate: 1,
    };
};

export default Page;
