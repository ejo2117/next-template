// /** @type {import('next').NextConfig} */
// const nextConfig = {

// }

// module.exports = nextConfig

// /* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");

/** @type {import('next').NextConfig} */
const moduleExports = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  // sassOptions: {
  //   includePaths: [path.resolve(__dirname, "styles")],
  //   prependData: `@import '__importable.scss';`,
  // },
  images: {
    deviceSizes: [200, 400, 600, 800, 1000, 1200, 2000],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
    ],
  },
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
  ) => {
    let configCopy = { ...config };
    configCopy.resolve.alias = {
      ...config.resolve.alias,
      "@animations": path.resolve(".styles/animations.styles.js"),
      "@assets": path.resolve("./assets"),
      "@components": path.resolve("./components"),
      "@constants": path.resolve("./utils/constants.js"),
      "@public": path.resolve("./public"),
      "@lib": path.resolve("./lib"),
      "@types": path.resolve("./lib/types"),
      "@utils": path.resolve("./utils"),
    };

    return configCopy;
  },
};

module.exports = moduleExports;
