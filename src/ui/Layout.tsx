import { FC, PropsWithChildren } from "react";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";

const HeaderLink: FC<{ text: string; href: string; prefetch?: boolean }> = ({ text, href, prefetch }) => {
    const router = useRouter();

    return (
        <Link href={href} passHref={true} prefetch={prefetch}>
            <a className={`my-1 mx-2 ` + (router.asPath === href ? "text-red-600" : "")}>{text}</a>
        </Link>
    );
};

const Layout: FC<PropsWithChildren<{ title: string }>> = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <div className="text-center">
                <HeaderLink href="/" text="home" />
                <HeaderLink href="/alpha" text="alpha" />
                <HeaderLink href="/bravo" text="bravo" />
                <HeaderLink href="/charlie" text="charlie" />
                <HeaderLink href="/delta" text="delta" />
                <HeaderLink href="/echo" text="echo" />
                <HeaderLink href="/private/metal" text="metal" prefetch={false} />
                <HeaderLink href="/private/punk" text="punk" prefetch={false} />
            </div>
            <div className="text-center pt-4">{children}</div>
        </>
    );
};

export default Layout;
