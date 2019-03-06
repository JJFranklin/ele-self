<template>
    <div class="app">
        <v-header></v-header>
    </div>
</template>

<style lang="scss" scoped>
    @import "./lib/scss/main.scss";
</style>

<script>
    import Header from "./commponets/header/header.vue";
    export default {
        data() {
            return {
                msg: "eggerg"
            }
        },
        components:{
            "v-header":Header
        }
    }
</script>
