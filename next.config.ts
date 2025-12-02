import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/DeiviTech-Monte-Seu-Notebook",
  assetPrefix: "/DeiviTech-Monte-Seu-Notebook",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
