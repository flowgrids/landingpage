import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "export",
    // Recreate GitHub injection:
    basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
    assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || "",
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
