<template>
    <div class="left">
        <div class="left1">
            <div class="content">粉丝<span class="fans">123</span></div>
            <div class="content">硬币<span class="coins">321</span></div>
        </div>
        <div class="left2">
            <el-tag type="info" size="mini">个人简介</el-tag>
            <div class="introduction">
                这是我的个人简介
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "blogInformation"
    }
</script>

<style scoped>
    .left1{
        width: 65%;
        min-width: 260px;
        height: 100px;
        box-shadow: 6px 6px 6px 0 rgba(0, 0, 0, 0.1);
        margin-left: 30%;
        border-top: white 1px solid;
        border: #D3DCE6 1px solid;
        margin-bottom: 10px;
        margin-top: 10px;
    }
    .left2{
        width: 65%;
        min-width: 260px;
        height: 300px;
        box-shadow: 6px 6px 6px 0 rgba(0, 0, 0, 0.1);
        border: #D3DCE6 1px solid;
        margin-left: 30%;

    }
    .content{
        margin-top: 20px;
        padding-left: 25px;
    }
    .fans,.coins{
        padding-left: 20px;
    }
    .introduction{
        margin-top: 10px;
        padding-left: 25px;
    }
</style>