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
    try {
        return {
            props: {
                data: await (await fetch(process.env.API_URL + "/api")).json(),
            },
            revalidate: 60,
        };
    } catch (e) {
        // TODO - resolve build time error
        return {
            notFound: true,
            revalidate: 1,
        };
    }
};

export default Page;
