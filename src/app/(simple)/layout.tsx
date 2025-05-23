import { FC, PropsWithChildren } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "../../../styles/globals.css";
import { HeaderLink } from "./HeaderLink";

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <html className="simple">
            <head></head>
            <body>
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
                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    );
};

export default RootLayout;
