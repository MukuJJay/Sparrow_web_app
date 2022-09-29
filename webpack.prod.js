const path = require('path');
const common = require("./webpack.common");
const {merge} = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].[contenthash].js",
        clean: true,
        assetModuleFilename: 'img/[hash][ext]'
    },
    plugins: [new MiniCssExtractPlugin({filename: "[name].[contentHash].css"})],
    module: {
        rules: [
            {
                test:/\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
        ]
    }
});