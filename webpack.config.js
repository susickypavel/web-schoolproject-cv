const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: "./src/main.tsx",

    output: {
        filename: "bundle.[chunkhash].js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "/"
    },

    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    devtool: "source-map",

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

    devServer: {
        contentBase: path.join(__dirname, "dist"),
        stats: "errors-only",
        port: 8080,
        compress: true,
        open: true,
        historyApiFallback: true
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: "Development Build",
            hash: true,
            template: "./src/index.ejs",
        }),
        new ExtractTextPlugin({
            filename: "styles.[chunkhash].css",
            disable: false,
            allChunks: true
        })
    ],
}