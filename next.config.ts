import { withSentryConfig } from "@sentry/nextjs";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: true,
    // typedRoutes: true,
    output: "standalone",
};

export default withSentryConfig(nextConfig, {
    org: "ifire",
    project: "next",
    silent: !process.env.CI,
    widenClientFileUpload: true,
    webpack: {
        automaticVercelMonitors: true,
        treeshake: {
            removeDebugLogging: true,
        },
    },
});
