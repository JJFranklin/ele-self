const path = require("path");
const VueLoderPlugin = require("vue-loader/lib/plugin");

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
            }
        ],

    },
    plugins:[
        new VueLoderPlugin()
    ],
    resolve:{}
}