const { join } = require("path");
const withBundleAnalyzer = require("@next/bundle-analyzer");

const nextPlugins = [
  withBundleAnalyzer({
    enabled: false
  })
];
const baseConfig = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    Object.assign(config.resolve.alias, {
      "@app": join(__dirname, "app"),
      "@shared": join(__dirname, "shared")
    });
    return config;
  }
};

module.exports = nextPlugins.reduce(
  (config, plugin) => plugin(config),
  baseConfig
);
