/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "localhost",
    //     port: "1337",
    //     pathname: "*",
    //   },
    // ],
    domains: ["localhost"],
  },
};

module.exports = nextConfig;
