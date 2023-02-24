import { ApiData } from "@api";

const Page = async () => {
    const data: ApiData = await (await fetch(process.env.API_URL + "/api", { cache: "no-store" })).json();

    return (
        <>
            <h1>
                server component
                <br />
                <i>&#123;cache:&apos;no-store&apos;&#125;</i>
            </h1>
            <h2>(old getServerSideProps)</h2>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </>
    );
};

export default Page;

export const metadata = {
    title: "Bravo",
};
