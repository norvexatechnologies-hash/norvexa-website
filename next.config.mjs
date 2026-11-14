/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',          // static HTML for every route: fully crawlable, host anywhere
  trailingSlash: true,
  images: { unoptimized: true },
  poweredByHeader: false,
};
export default nextConfig;
