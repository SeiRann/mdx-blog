import type { NextConfig } from "next";
import nextMdx from "@next/mdx";

const withMdx = nextMdx({
  extension: /\.mdx?$/,
  options: {},
});

const nextConfig: NextConfig = withMdx({
  pageExtensions: ["md", "mdx", "tsx", "ts", "jsx", "js"],
  transpilePackages: ["three"],
});

export default nextConfig;
