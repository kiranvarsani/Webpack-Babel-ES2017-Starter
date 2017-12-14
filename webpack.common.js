const path = require("path");
const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

//whatwg-fetch is a fetch promise polyfill for IE
module.exports = {
  entry: {
    polyfills: './src/polyfills.js',
    app: ['bootstrap-loader','./src/app.js']
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: "/node_modules/",
        loader: "babel-loader",
        query: {
          presets: ["env", "stage-0"]
        }
      },
      {
        test: /.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true
            }
          }
        ]
      },      
      {
        test: /\.(eot|svg)$/,
        loader: "file-loader",
        options: { name: "[name].[hash:20].[ext]", limit: 10000 }
      },
      {
        test: /\.(ttf|woff|woff2)$/,
        loader: "url-loader",
        options: { name: "[name].[hash:20].[ext]", limit: 10000 }
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jQuery",
      jQuery: "jQuery"
    }),
    new CleanWebpackPlugin(["build"]),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      inject: "body"
    })
  ]
};
