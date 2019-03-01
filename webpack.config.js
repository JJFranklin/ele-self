const path = require("path");
const vueLoaderPlugins = require("vue-loader/lib/plugin");
const htmlWebpackPliugin = require("html-webpack-plugin");
const cleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
    mode: "development", // 开发模式
    // mode:"production", // 发布模式
    entry: {
        main: "./index.js"
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        // 每次添加一个新的loader 就要关闭窗口重新运行命令行
        rules: [{
                test: /\.(js|jsx)$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                options: { 
                    // 将es6代码转换成浏览器都支持的es5代码,添加 stage-3 以支持 ... 解构函数 
                    presets: ['es2015','stage-3'],
                    plugins: ['transform-runtime']
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.scss$/,
                use: [{
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    },
                    // postcss预处理的方式需要在css-loader 之前，在sass-loader之后
                    {
                        loader: "postcss-loader",
                        options: {
                            config: {
                                path: "./postcss.config.js"
                            }
                        }
                    },
                    {
                        loader: "sass-loader"
                    },
                ]
            }
        ]
    },
    plugins: [
        new vueLoaderPlugins(),
        // 按照index.html 模板生成主页面
        new htmlWebpackPliugin({
            "template": "./index.html"
        }),
        // 打包前清除dist 目录下文件
        new cleanWebpackPlugin(["dist"])
    ],
    devServer: {
        // 来自于dist 目录下的文件都压缩处理
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 3001,
        inline: true // inline 模式热替换加载
    }
}