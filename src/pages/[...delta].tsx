import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Layout from "../ui/Layout";
import { ApiData } from "./api";

interface Props {
    data: ApiData;
}

const Page: NextPage<Props> = ({ data }) => {
    return (
        <Layout>
            <h1>getStaticPaths</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </Layout>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [],
        fallback: true,
    };
};

export const getStaticProps: GetStaticProps<Props> = async (context) => {
    const info = context.params?.delta;

    return {
        props: {
            data: await (await fetch(`${process.env.API_URL}/api/?info=${info}`)).json(),
        },
        revalidate: 60,
    };
};

export default Page;
