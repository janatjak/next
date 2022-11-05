"use client";

import { FC } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export const HeaderLink: FC<{ text: string; href: string; prefetch?: boolean }> = ({ text, href, prefetch }) => {
    const pathname = usePathname();

    return (
        <Link href={href} prefetch={prefetch} className={`my-1 mx-2 ` + (pathname === href ? "text-red-600" : "")}>
            {text}
        </Link>
    );
};
