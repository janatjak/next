/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    reactStrictMode: true,
    // output: "standalone", not supported for now
};

module.exports = nextConfig;
