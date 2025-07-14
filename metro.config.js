const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);

config.resolver = {
  ...config.resolver,
  assetExts: [...config.resolver.assetExts, "svg", "png", "jpg"],
  sourceExts: [
    ...config.resolver.sourceExts.filter((ext) => ext !== "web.js"),
    "js",
    "jsx",
    "json",
    "ts",
    "tsx",
  ],
};

module.exports = config;
