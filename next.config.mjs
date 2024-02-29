/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  skipTrailingSlashRedirect: true,
  httpAgentOptions: {
    keepAlive: true,
  },
  images: {
    formats: ["image/webp"],
  },
};

export default nextConfig;
