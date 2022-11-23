const { MiniHtmlWebpackPlugin } = require("mini-html-webpack-plugin");
const { WebpackPluginServe } = require("webpack-plugin-serve");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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

/**
 * Plugins to create the index.html file dynamically
 */
exports.page = ({ title }) => ({
  plugins: [new MiniHtmlWebpackPlugin({ context: { title: "Demo" } })],
});

/** Loaders for CSS files
 *
 * style-loader -> inject css into javascript as inline styles
 * css-loader -> resolve @imports and @url
 */
exports.loadCSS = () => ({
  module: {
    rules: [{ test: /\.css$/, use: ["style-loader", "css-loader"] }],
  },
});

/** Loaders for SCSS/SASS files
 *
 *  MiniCssExtractPlugin.loader -> will mark css files for the plugin
 *  fast-sass-loader -> faster loader than sass-loader
 *  MiniCssExtractPlugin -> will extract the marked scss files into a main css file
 */
exports.loadSASS = () => ({
  module: {
    rules: [
      {
        test: /\.(s[ac]|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: "css-loader", options: { importLoaders: 1 } },
          "fast-sass-loader",
        ],
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
});
