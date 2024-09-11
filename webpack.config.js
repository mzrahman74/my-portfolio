const currentTask = process.env.npm_lifecycle_event;
const path = require("path");
const Dotenv = require("dotenv-webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackHarddiskPlugin = require("html-webpack-harddisk-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const fse = require("fs-extra");

class RunAfterCompile {
  apply(compiler) {
    compiler.hooks.done.tap("Copy files", function () {
      fse.copySync("./app/public/images/contact_me.jpeg", "./dist/public/images/contact_me.jpeg");
      fse.copySync("./app/public/images/hero.png", "./dist/public/images/hero.png");
      fse.copySync("./app/public/images/favicon.ico", "./dist/public/images/favicon.ico");
      fse.copySync("./app/public/images/logo-github.svg", "./dist/public/images/logo-github.svg");
      fse.copySync("./app/public/images/logo-linkedin.svg", "./dist/public/images/logo-linkedin.svg");
      fse.copySync("./app/public/images/logo.png", "./dist/public/images/logo.png");
      fse.copySync("./app/public/images/Mohammad_Rahman.JPG", "./dist/public/images/Mohammad_Rahman.JPG");
      fse.copySync("./app/public/images/aws_spring_boot_deployment.jpg", "./dist/public/images/aws_spring_boot_deployment.jpg");
      fse.copySync("./app/public/images/cyber_security.png", "./dist/public/images/cyber_security.png");
      fse.copySync("./app/public/images/playwright_js_automation.jpg", "./dist/public/images/playwright_js_automation.jpg");
      fse.copySync("./app/public/styles/content.css", "./dist/public/styles/content.css");
      fse.copySync("./app/public/styles/layout.css", "./dist/public/styles/layout.css");
    });
  }
}

config = {
  entry: "./app/index.js",
  output: {
    publicPath: "/",
    path: path.resolve(__dirname, "app"),
    filename: "bundled.js"
  },
  plugins: [
    new Dotenv(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "app/index-template.html",
      alwaysWriteToDisk: true
    }),
    new HtmlWebpackHarddiskPlugin()
  ],
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", ["@babel/preset-env", { targets: { node: "21" } }]]
          }
        }
      },
      {
        test: /\.css$/i,
        use: ["css-loader", "postcss-loader"]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|jpeg|gif)$/i,
        type: "asset"
      }
    ]
  }
};

if (currentTask == "webpackDev" || currentTask == "dev") {
  config.devtool = "source-map";
  config.devServer = {
    port: 3000,
    static: {
      directory: path.join(__dirname, "app")
    },
    hot: true,
    liveReload: false,
    historyApiFallback: { index: "index.html" }
  };
}

if (currentTask == "webpackBuild") {
  config.plugins.push(new CleanWebpackPlugin(), new RunAfterCompile());
  config.mode = "production";
  config.output = {
    publicPath: "/",
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[chunkhash].js",
    chunkFilename: "[name].[chunkhash].js"
  };
}

module.exports = config;
