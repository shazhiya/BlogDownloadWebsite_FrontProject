<template>
    <div>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span><i class="el-icon-s-promotion"/> 信息中心</span>
            </div>
            <div  class="text item">
               <i class="el-icon-arrow-right"/> 我的消息
            </div>
        </el-card>
        <div class="clears"></div>
    </div>
</template>

<script>
    export default {
        name: "messageLeft"
    }
</script>

<style scoped>
    .text {
        font-size: 14px;
    }

    .item {
        margin-bottom: 18px;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }
    .clearfix:after {
        clear: both
    }

    .box-card {
        width: 150px;
        min-height: 700px;
        margin-right: 25px;
        float: right;
    }

</style>