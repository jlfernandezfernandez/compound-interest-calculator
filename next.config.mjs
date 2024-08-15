/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/calculadora-interes-compuesto",
        permanent: true,
      },
    ];
  },
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ko-fi.com",
      },
      {
        protocol: "https",
        hostname: "api.producthunt.com",
      },
    ],
  },
};

export default nextConfig;
