import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gimnet.gimdes.com",
      },
      {
        protocol: "https",
        hostname:
          "kc3fwedf6dvzii2ff4ga37mrqq0rrtae.lambda-url.eu-central-1.on.aws",
      },
    ],
    //
    minimumCacheTTL: 60 * 60 * 24, // 1 gün minimum cache
  },
  experimental: {
    viewTransition: true,
    ppr: "incremental",
  },
};

export default nextConfig;
