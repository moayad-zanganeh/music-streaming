// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // ✅ Ignore all ESLint errors during build
  eslint: {
    ignoreDuringBuilds: true,
  },

  // ✅ Ignore all TypeScript errors during build
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
