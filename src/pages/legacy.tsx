import { useRouter } from "next/navigation";

export default function Page() {
    const router = useRouter();

    return <button onClick={() => router.push("/new")}>legacy btn with route/navigation</button>;
}
