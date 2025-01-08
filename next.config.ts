import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['192.168.68.200'],
  },
  // webpack: (config) => {
  //   config.optimization.minimize = false;
  //   return config;
  // },
};

export default nextConfig;
