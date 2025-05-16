import createNextIntlPlugin from "next-intl/plugin";
import { NextConfig } from "next";

const withNextIntl = createNextIntlPlugin();
const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    domains: ["cms.thanhnn16.io.vn"],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "8055",
        pathname: "/assets/**",
      },
    ],
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
};

export default withNextIntl(nextConfig);
