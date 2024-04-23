/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'ko-fi.com',
            },
        ],
    },
};

export default nextConfig;
