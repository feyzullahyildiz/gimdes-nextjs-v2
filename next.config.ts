import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gimnet.gimdes.com",
      },
    ],
  },
  experimental: {
    viewTransition: true,
  },
};

export default nextConfig;
