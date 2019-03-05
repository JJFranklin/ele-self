<template>
    <div class="app">
        <test></test>
    </div>
</template>

<style lang="scss" scoped>
@import "./lib/scss/rest.scss";
@import "./lib/scss/app.scss";
</style>



<script>
import TEST from "./commponets/hello.vue";
    export default {
        data() {
            return {
                msg: "eg''ge'r'g"
            }
        },
        components:{
            "test":TEST
        }
    }
</script>
