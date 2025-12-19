"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

interface Props {
    text: string;
    href: string;
    prefetch?: boolean;
}

export function HeaderLink(props: Props) {
    const pathname = usePathname();

    return (
        <Link
            href={props.href}
            prefetch={props.prefetch}
            className={`my-1 mx-2 ${pathname === props.href ? "text-red-600" : ""}`}
        >
            {props.text}
        </Link>
    );
}
