<template>
    <div id="header-wrap">
        <div class="left header-icon">
            <i class="el-icon-s-fold"></i>
        </div>
        <div class="right header-icon">
            <img src="../../assets/headPic.jpg" alt="" class="left user-img"> <!-- 这里获取不到图片，不知道为什么 -->
            <div class="left user-info">
                小红
            </div>
            <div class="left header-icon">
                <router-link to="/bindex">
                    <i class="el-icon-switch-button"></i>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "blogMngHeader"
    }
</script>

<style scoped>
    #header-wrap {
        position: fixed;
        top: 0;
        right: 0;
        left: 250px;
        height: 75px;
        background-color: #fff;
        -webkit-box-shadow: 0 3px 16px 0 rgba(0, 0, 0, .1);
    }

    .left {
        float: left;
    }

    .right {
        float: right;
    }

    .header-icon {
        padding: 24px 32px;
    }

    .header-icon i {
        margin-bottom: -8px;
        font-size: 25px;
        cursor: pointer;
    }

    .user-info {
        height: 100%;
        padding: 0 32px;
        border-right: 1px solid #ededed;
    }

    .user-info + .header-icon {
        padding: 0 28px;
    }

    .user-img {
        margin-top: -7px;
        height: 40px;
        width: 40px;
        border-radius: 25px;
        cursor: pointer;
    }

</style>