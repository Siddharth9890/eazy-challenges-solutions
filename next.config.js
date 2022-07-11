/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["avatars.githubusercontent.com", "media-exp2.licdn.com"],
  },
};

module.exports = nextConfig;
