import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Page() {
    const router = useRouter();

    return (
        <>
            <button onClick={() => router.push("/new")} type="button">
                legacy btn with route/navigation
            </button>
            <ul>
                <li>
                    <Link href="/legacy/1">detail 1</Link>
                </li>
                <li>
                    <Link href="/legacy/A">detail A</Link>
                </li>
                <li>
                    <Link href="/legacy/B?test=ok">detail B with query</Link>
                </li>
            </ul>
        </>
    );
}
