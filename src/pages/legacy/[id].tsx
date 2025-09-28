import { useParams, usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

function useQuery() {
    const searchParams = useSearchParams();

    const query: Record<string, string | string[] | undefined> = {};
    searchParams?.forEach((value, key) => {
        if (typeof query[key] === "string") {
            query[key] = [query[key], value];
        } else if (typeof query[key] !== "undefined") {
            query[key].push(value);
        } else {
            query[key] = value;
        }
    });

    return query;
}

export default function Page() {
    const pathname = usePathname();
    const params = useParams();
    const query = useQuery();
    const [initial] = useState(() => ({
        pathname,
        params,
        query,
    }));

    return (
        <>
            <Link href="/legacy">back to parent</Link>
            <hr />
            initial
            <pre>{JSON.stringify(initial, null, 2)}</pre>
            current
            <pre>
                {JSON.stringify(
                    {
                        pathname,
                        params,
                        query,
                    },
                    null,
                    2,
                )}
            </pre>
        </>
    );
}
