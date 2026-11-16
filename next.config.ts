import type { NextConfig } from "next";
const config: NextConfig = {
  output: "export",
  basePath: process.env.BASE_PATH || "",
  poweredByHeader: false,
};
export default config;
