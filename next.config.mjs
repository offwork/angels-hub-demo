/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  skipTrailingSlashRedirect: true,
  httpAgentOptions: {
    keepAlive: true,
  },
  generateBuildId: () => `build-${new Date().getTime()}`,
  images: {
    formats: ["image/webp"],
  },
};

export default nextConfig;
