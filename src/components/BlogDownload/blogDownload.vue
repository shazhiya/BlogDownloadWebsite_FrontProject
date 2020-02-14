<template>
    <div class="content">
        <div class="files left">
            <img src="../../assets/file.png" class="fileicon">

        </div>
        <div class="titles left">
            <h2>jdk1.7 64位官方下载</h2>
            <p style="font-style: oblique">jdk1.7 64位官方下载jdk.exe</p>
            <p style="font-style: oblique; padding-bottom: 10px">jdk1.7 64位官方下载jdk.exe</p>
            <p>
                <el-tag type="info">java</el-tag>
                <el-tag style="margin-left: 10px" type="info">1.7</el-tag>
                <el-tag style="margin-left: 10px" type="info">64位</el-tag>
            </p>
        </div>
        <div class="status left">
            <h5 style="font-size: 16px;">资源状态：<span>公开</span></h5>
            <p style="margin-top: 90px;  color: #c2c2c2"><span>2020-01-01</span>上传</p>
        </div>
        <div class="clears"></div>
        <div class="download">
            <div class="left">所需：<span style="font-size: 24px; color: red; padding-right: 5px">5</span>硬币</div>
            <div class="left" style="margin-left: 25px">
                <el-row>
                    <el-button type="primary" plain>立即购买</el-button>
                    <el-button type="warning" plain disabled>立即下载</el-button>
                </el-row>
            </div>
            <div class="clears"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "blogDownload"
    }
</script>

<style scoped>

    .content{
        width: 98%;
        min-width: 740px;
        margin: auto;
        min-height: 240px;
        background: white;
        text-align: left;
        box-shadow: 6px 6px 6px 0 rgba(0, 0, 0, 0.1);
        border: #D3DCE6 1px solid;
        border-radius: 5px;
    }
    .fileicon{
        width: 100px;
        height: 100px;
        margin-left: 25px;
        margin-top: 25px;
    }
    .left{
        float: left;
    }
    .files{
        width: 15%;
    }
    .titles{
        width: 60%;
        margin-top: 30px;
    }
    .status{
        width: 25%;
        text-align: right;
        margin-top: 30px;
        padding-right: 25px;
    }
    .download{
        margin-top: 20px;
        margin-left: 20px;
        font-size: 18px;
    }
</style>