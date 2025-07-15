import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "export",
    // Recreate GitHub injection:
    basePath: "/landingpage",
    assetPrefix: "/landingpage",
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
