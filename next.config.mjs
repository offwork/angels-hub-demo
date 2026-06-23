/** @type {import('next').NextConfig} */
import BundleAnalyzer from "@next/bundle-analyzer";
const withBundleAnalyzer = BundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
  bundlePagesRouterDependencies: true,
});
let nextConfig = {
  reactStrictMode: true,
  httpAgentOptions: {
    keepAlive: true,
  },
  generateBuildId: () => `build-${new Date().getTime()}`,
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "eu-west-2.graphassets.com",
        port: "",
        pathname: "/clyox76wa4lk307l415oq833x/**",
      },
    ],
  },
};

nextConfig = withBundleAnalyzer(nextConfig);

export default nextConfig;
