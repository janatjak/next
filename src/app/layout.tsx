import type { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en" className="h-full bg-white">
            <body className="h-full overflow-hidden">
                {children}
                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    );
}
