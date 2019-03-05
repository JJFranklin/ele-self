const path = require("path");
const VueLoderPlugin = require("vue-loader/lib/plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const Webpack = require("webpack");

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
                use:[
                    {
                        loader:"style-loader",
                    },{
                        loader:"css-loader",
                    },{
                        loader:"sass-loader",
                        // include:"./src/lib/scss"
                    }
                ]
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
    ],
    resolve:{}
}