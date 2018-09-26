<template>
    <div>
        {{curNum}}
        <!-- <slot name="header"></slot>
        <slot :data="arrdata"></slot>
        <slot name="footer"></slot> -->
        <!-- <button type="submit">
            <slot>Submit</slot>
        </button> -->
    </div>
</template>

<script>
    export default {
        props: {
            num: {
                type: Number,
                default: 0
            }
        },
        data() {
            return {
                arrdata: [
                    "menu1", "mecccnu2", "menu3"
                ]
            }
        },
        computed: {
            curNum() {
                return this.num * 4;
            }
        }
    }
</script>
