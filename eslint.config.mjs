import nextConfig from "eslint-config-next";

const config = [...nextConfig, { ignores: [".next/**", "out/**"] }];

export default config;
