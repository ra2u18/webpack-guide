const { MiniHtmlWebpackPlugin } = require("mini-html-webpack-plugin");
const { WebpackPluginServe } = require("webpack-plugin-serve");

exports.devServer = () => ({
  watch: true,
  plugins: [
    new WebpackPluginServe({
      port: parseInt(process.env.PORT, 10) || 8080,
      static: "./dist",
      liveReload: true,
      waitForBuild: true,
    }),
  ],
});

exports.page = ({ title }) => ({
  plugins: [new MiniHtmlWebpackPlugin({ context: { title: "Demo" } })],
});
