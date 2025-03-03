/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Ensures compatibility with static export
  },
};

module.exports = nextConfig;
