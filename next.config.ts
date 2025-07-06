import type { NextConfig } from "next";

const isGithub = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGithub ? "/cvai-u" : "",
  assetPrefix: isGithub ? "/cvai-u/" : "",
  trailingSlash: true,
  images: {
    unoptimized: true,  // disable built-in image optimization for static export
  },
};

export default nextConfig;