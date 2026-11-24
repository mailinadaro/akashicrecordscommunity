import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/inicicion",
        destination: "/iniciacion",
        permanent: false,
      },
      {
        source: "/inicacion",
        destination: "/iniciacion",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
