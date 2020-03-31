<template>
    <div>
        <el-card class="box-card el-card__body" shadow="hover">
            <img src="//csdnimg.cn/release/download/static_files/pc/images/minetype/txt.svg" alt="img" class="fileImg">
            <div class="fileTitle"><!--title-->
                FX5U.txt 手册资料
            </div>
            <div class="fileInfo"><!--info-->
                <span>上传者：<el-link type="info" :underline="false">123456</el-link></span>
                <span>上传时间：<el-link type="info" :underline="false">2020-03-31</el-link></span>
                <span>所需硬币：<el-link type="danger" :underline="false" icon="el-icon-s-goods">5</el-link></span>
                <el-button  type="primary" size="medium" class="fileButton">查看详情</el-button>
            </div>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: "resourceCard"
    }
</script>

<style scoped>
    table>tr{
        height: 32px;
        line-height: 32px;
        margin-top: 20px;
    }
    ul li{
        list-style: none;
        float: left;
        margin-left: 15px;
    }
    .fileImg{
        float: left;
    }
    .el-card__body{
        padding-top: 0px;
        padding-left: 0px;
        padding-bottom: 0px;
        text-align: left;
    }
    .fileTitle{
        font-size: 24px;
        font-weight: 400;
    }
    .fileInfo>span{
        font-size: 16px;
        margin-right: 10px;
    }
    .fileButton{
        float: right;
    }
    .resource .el-card__body{
        margin-bottom: 20px;
    }
    .resource .el-card__body>div{
        margin-left: 80px;
        margin-bottom: 12px;
    }
</style>