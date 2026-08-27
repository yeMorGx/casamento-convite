import type { NextConfig } from "next";

import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

const nextConfig: NextConfig = {
  experimental: {
    mcpServer: false,
  },
};

initOpenNextCloudflareForDev();

export default nextConfig;
