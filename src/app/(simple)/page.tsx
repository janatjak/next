import Link from "next/link";

const Page = () => (
    <div className="space-y-2 grid columns-1">
        <div>Select page &#8593;</div>
        <Link href="/new">Go to new layout</Link>
        <Link href="/legacy">Go to legacy page</Link>
    </div>
);
export default Page;

export const metadata = {
    title: "Intro",
};
