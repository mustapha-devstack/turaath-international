/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com"], // ✅ Allow Unsplash images
  },
  reactStrictMode: true,
};

export default nextConfig;
