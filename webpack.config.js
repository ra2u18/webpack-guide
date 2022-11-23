const { mode } = require("webpack-nano/argv");
const { merge } = require("webpack-merge");
const parts = require("./webpack.parts");
const path = require("path");

const APP_SOURCE = path.join(__dirname, "src");
const cssLoaders = [parts.autoprefix()];

const commonConfig = merge([
  { entry: ["./src"] },
  parts.page({ title: "Demo" }),
  parts.loadSASS({ loaders: cssLoaders }),
  parts.loadImages({ limit: 15000 }),
  parts.loadJS(APP_SOURCE),
]);

const productionConfig = merge([]);

const developmentConfig = merge([
  { entry: ["webpack-plugin-serve/client"] },
  parts.devServer(),
]);

const getConfig = (mode) => {
  switch (mode) {
    case "production":
      return merge(commonConfig, productionConfig, { mode });
    case "development":
      return merge(commonConfig, developmentConfig, { mode });
    default:
      throw new Error(`Trying to use an unknown mode, ${mode}`);
  }
};

module.exports = getConfig(mode);
