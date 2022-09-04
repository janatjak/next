import { FC, PropsWithChildren } from "react";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import { styled } from "@linaria/react";

const Header = styled.div`
    text-align: center;
`;

const HeaderA = styled.a<{ active: boolean }>`
    color: ${(props) => (props.active ? "red" : "black")};
    margin: 5px 10px;
`;

const Main = styled.div`
    text-align: center;
    padding-top: 20px;
`;

const HeaderLink: FC<{ text: string; href: string; prefetch?: boolean }> = ({ text, href, prefetch = true }) => {
    const router = useRouter();

    return (
        <Link href={href} passHref={true} prefetch={prefetch}>
            <HeaderA active={router.asPath === href}>{text}</HeaderA>
        </Link>
    );
};

const Layout: FC<PropsWithChildren<{ title: string }>> = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <Header>
                <HeaderLink href="/" text="home" />
                <HeaderLink href="/alpha" text="alpha" />
                <HeaderLink href="/bravo" text="bravo" />
                <HeaderLink href="/charlie" text="charlie" />
                <HeaderLink href="/delta" text="delta" />
                <HeaderLink href="/echo" text="echo" />
                <HeaderLink href="/private/metal" text="metal" prefetch={false} />
                <HeaderLink href="/private/punk" text="punk" prefetch={false} />
            </Header>
            <Main>{children}</Main>
        </>
    );
};

export default Layout;
