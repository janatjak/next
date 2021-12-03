import { FC } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { styled } from "@linaria/react";

interface Props {
    text: string;
    href: string;
    route?: string;
}

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

const HeaderLink: FC<Props> = ({ text, href, route }) => {
    const router = useRouter();

    return (
        <Link href={href} passHref={true}>
            <HeaderA active={router.route === (route ?? href)}>{text}</HeaderA>
        </Link>
    );
};

const Layout: FC = ({ children }) => {
    return (
        <>
            <Header>
                <HeaderLink href="/" text="home" />
                <HeaderLink href="/alpha" text="alpha" />
                <HeaderLink href="/bravo" text="bravo" />
                <HeaderLink href="/charlie" text="charlie" />
                <HeaderLink href="/delta" text="delta" route="/[...delta]" />
                <HeaderLink href="/echo" text="echo" route="/[...delta]" />
            </Header>
            <Main>{children}</Main>
        </>
    );
};

export default Layout;
