const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: "./src/main.tsx",

    output: {
        filename: "bundle.[chunkhash].js",
        path: path.resolve(__dirname, "dist")
    },

    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            { 
                test: /\.tsx?$/, 
                enforce: "pre",
                loader: "tslint-loader"
            },
            { 
                test: /\.less$/,
                use: ["style-loader","css-loader", "less-loader"]
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                  fallback: "style-loader",
                  use: ["css-loader", "less-loader"]
                })
            },
            { 
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader" 
            },
            { 
                test: /\.js$/,
                enforce: "pre",
                loader: "source-map-loader" 
            },
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                loader: "file-loader",
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: "Pavel Sušický | CV",
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                keepClosingSlash: true
            },
            inject: true,
            template: "./src/index.ejs",
        }),
        new ExtractTextPlugin({
            filename: "styles.[chunkhash].css",
            disable: false,
            allChunks: true
        }),
        new UglifyJsPlugin({
            sourceMap: true
        })
    ],
}