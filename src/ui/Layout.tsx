import { FC } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Layout.module.css";

interface Props {
    text: string;
    href: string;
    route?: string;
}

const HeaderLink: FC<Props> = ({ text, href, route }) => {
    const router = useRouter();

    return (
        <Link href={href} passHref={true}>
            <a className={`${styles.headerLink} ${router.route === (route ?? href) ? styles.headerLink_active : ""}`}>
                {text}
            </a>
        </Link>
    );
};

const Layout: FC = ({ children }) => {
    return (
        <>
            <header className={styles.header}>
                <HeaderLink href="/" text="home" />
                <HeaderLink href="/alpha" text="alpha" />
                <HeaderLink href="/bravo" text="bravo" />
                <HeaderLink href="/charlie" text="charlie" />
                <HeaderLink href="/delta" text="delta" route="/[...delta]" />
                <HeaderLink href="/echo" text="echo" route="/[...delta]" />
            </header>
            <main className={styles.main}>{children}</main>
        </>
    );
};

export default Layout;
