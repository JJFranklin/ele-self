import Vue from "Vue";
import VueRouter from "vue-router";
import App from "./App.vue";


Vue.use(VueRouter);

new Vue({
    el: "#app",
    data() {
        return {
            msg: "加班进行时"
        }
    },
    // 此处这样写，避免引入 vue-template-complier 插件,在webpack 中写别名
    // 直接渲染函数
    render: h => h(App)
});