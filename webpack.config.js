const path = require("path");
const VueLoderPlugin = require("vue-loader/lib/plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const Webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");//提取css到单独文件的插件
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');//压缩css插件


const extractSass = new ExtractTextPlugin({
    filename: "css/[name].css",
    // disable: process.env.NODE_ENV === "development"
});

module.exports = {
    entry:"./src/index.js",
    output:{
        filename:"bundle.js",
        path:path.resolve(__dirname,"dist")
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                use:'babel-loader',
                exclude:/node_modules/
            },
            {
                test:/\.vue$/,
                loader:'vue-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
				loader: 'url'
            },
            {
                test:/\.scss$/,
                use: extractSass.extract({
                    fallback: 'style-loader',
                    //如果需要，可以在 sass-loader 之前将 resolve-url-loader 链接进来
                    use: ['css-loader', 'sass-loader']
                  })
            }
        ]
    },
    devServer:{
        contentBase:path.join(__dirname,"dist"),
        compress:true,
        hot:true,
        port:9090,
    },
    plugins:[
        // 此处有改动，新版需要接受一个对象
        new CleanWebpackPlugin({
            "cleanOnceBeforeBuildPatterns":"./dist"
        }),
        new VueLoderPlugin(), // vue 对象需要应用 Vueloader 插件
        new HtmlWebpackPlugin({template:'./index.html'}),
        new Webpack.NamedModulesPlugin(), // 查看需要修补的依赖
        new Webpack.HotModuleReplacementPlugin(),// 热加载
        extractSass
    ],
    resolve:{}
}