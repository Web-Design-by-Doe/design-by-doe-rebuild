/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.graphassets.com",
      },
      {
        protocol: "https",
        hostname: "www.free-mockup.com",
      },

      {
        protocol: "https",
        hostname: "zippypixels.com",
      },
    ],
  },
};

export default nextConfig;
