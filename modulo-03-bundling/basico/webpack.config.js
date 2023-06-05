const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    context: path.resolve(__dirname, "./src"),
    resolve:{
      extensions: [".js",".ts", ".tsx"],
    },
    entry: {
      // app: "./index.js",
      app: "./index.ts",
    },
      output: {
        filename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, "dist"),
      },
    module: {  
      rules: [ 
        {
            // test: /\.js$/,
            test: /\.ts$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        },
        {
            test: /\.scss$/,
            exclude: /node_modules/,
            use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        },
        {
            test: /\.css$/,
            exclude: /node_modules/,
            use: [
              MiniCssExtractPlugin.loader,
              "css-loader"
            ]
        },
        {
            test: /\.(png|jpg)$/,
            type: 'asset/resource',
        },
        {
            test: /\.html$/,
            loader: 'html-loader',
        },
      ],
    },
    plugins: [
        new HtmlWebpackPlugin({
          filename: "index.html", //Name of file in ./dist/
          template: "./index.html",
          scriptLoading: "blocking", // Load the scripts correctly
        }), 
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
          filename: "[name].css",
          chunkFilename: "[id].css"
        })
    ],

    devServer: {
      devMiddleware: {
        stats: "errors-only",
      },
    }
  };