### 项目描述
- 模拟饿了么点餐平台布局
- 熟悉Vuex和VueResource 的使用，已经Vue相关的知识点运用
- 时间规划，一周内做完

### 功能描述
- 商品列表页面
- 购物车页面
- 店家详情页面

### 技术
- css: scss
- webpack 打包
- express 作为简易的网络服务端
- Vue + Vuex + VueRouter 作为前端构建框架
- 前端页面样式框架:iview


### 需要注意的地方
- 使用sass 需要安装node-sass style-loader css-loader 
- 安装完毕，运行 npm rebuild node-sass
- Vue 模板项目的构建需要安装 vue-loader 插件
- webpack 的 clean插件，需要接受一个对象
```
 new CleanWebpackPlugin({
            "cleanOnceBeforeBuildPatterns":"./dist"
        })
``` 
- webpack>4.1.1 版本 需要安装 extract-text-webpack-plugin@next 安装包才不报错
