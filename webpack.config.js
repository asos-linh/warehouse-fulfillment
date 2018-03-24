// const path = require("path");

const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

// const APP_DIR = path.resolve(__dirname, "src/");

module.exports = {
  entry: "./src/app.js",
  // [APP_DIR + "/app.js"]
  // output: {
  //   filename: "bundle.js"
  // },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [htmlWebpackPlugin]
};
