const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    configureWebpack: {
        devtool: 'source-map'
    },
    //outputDir: path.resolve(__dirname, "./wwwroot"),
    assetsDir: 'cointossbookie',
    //chainWebpack: config => {
    //    config.resolve.alias
    //        .set("@api", path.resolve(__dirname, "./src/api"));
    //}
    /*,
    configureWebpack: {
        output: {
            path: path.resolve(__dirname, './server/assets/static'),
            filename: '[name].js',
            publicPath: '../assets/static/',
        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: path.resolve(__dirname, './server/templates/test.html'),
                template: path.resolve(__dirname, './public/test.html'),
            }),
        ],
    }*/
}