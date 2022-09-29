const path = require('path');
const common = require("./webpack.common");
const {merge} = require("webpack-merge");

module.exports = merge(common, {
    mode: 'development',
    entry: {
        bundle: path.resolve(__dirname, './src/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].js",
        clean: true,
        assetModuleFilename: '[name][ext]'
    },
    devtool: 'source-map',
    devServer:{
        static:{
            directory: path.resolve(__dirname, 'dist')
        },
        watchFiles: ["./src/html/*"],
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test:/\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
        ]
    }
});