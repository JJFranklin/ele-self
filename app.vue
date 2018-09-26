<template>
    <div>
        <good-detail :num="num">
            <!-- 提交 -->
            <!-- <h4 slot="header">头部</h4>
            <div slot-scope="menu" >
                <h4 v-for="item in menu.data" :key="item"> {{item}} </h4><br>
            </div>
            <h4 slot="footer">尾s部</h4> -->
        </good-detail>
    </div>
</template>

<script>
    import GoodDetail from "./components/goods-detail.vue";
    import "./src/scss/app.scss";
    export default {
        data() {
            return {
                msg: "hello w0rrld",
                num:2
            }
        },
        components: {
            "good-detail": GoodDetail
        }
    }
</script>
