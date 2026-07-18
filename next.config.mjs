/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/compound-interest-calculator",
  images: { unoptimized: true },
};

export default nextConfig;
