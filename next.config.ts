import { withSentryConfig } from "@sentry/nextjs/config";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: true,
    reactCompiler: true,
    experimental: {
        turbopackRustReactCompiler: true,
        useTypeScriptCli: true,
    },
    // typedRoutes: true,
    // Standalone output is only used for Docker; on Vercel (Next 16.3 + Vercel adapter + Turbopack)
    // next-server.js.nft.json is not generated and the standalone copy step fails with ENOENT.
    output: process.env.VERCEL ? undefined : "standalone",
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
