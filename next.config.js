/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed 'output: export' to enable dynamic admin page
  // This is needed for Tina CMS admin to work on Vercel
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
