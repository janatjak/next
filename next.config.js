/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    experimental: {
        appDir: true,
        runtime: "edge"
    },
    reactStrictMode: true,
    // output: "standalone", not supported for now
};

module.exports = nextConfig;
