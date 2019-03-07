<template>
    <div class="top">
        <div class="avatar">
            <img src="images/seller_avatar_256px.jpg" width="64" height="64">
        </div>
       
        <div class="background">
            <img width="100%" height="100%" src="images/seller_avatar_256px.jpg">
        </div>
        <div class="top-footer">
            周攻防
        </div>
    </div>
</template>


<style lang="scss" scoped>
    .top {
        position: relative;
        background: rgba(7, 17, 27, 0.5);

        .avatar {
            padding:24px 12px 18px 24px;
            img {
                border-radius: 2px;
            }
        }

        .top-footer {
            height: 28px;
            width: 100%;
            background:rgba(7,17,27,0.2);
            padding: 4px 12px;
            font-size: 20px;
            color: #fff;
            font-weight: 200;
            line-height: 28px;
        }

        .background {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            filter: blur(10px);
        }
    }
</style>
