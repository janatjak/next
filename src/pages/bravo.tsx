import { GetServerSideProps, NextPage } from "next";
import Layout from "../ui/Layout";
import { ApiData } from "./api";

interface Props {
    data: ApiData;
}

const Page: NextPage<Props> = ({ data }) => {
    return (
        <Layout>
            <h1>getServerSideProps</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </Layout>
    );
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
    return {
        props: {
            data: await (await fetch(process.env.API_URL + "/api")).json(),
        },
    };
};

export default Page;
