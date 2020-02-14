<template>
    <div class="recommend">
        <div class="files left">
            <img src="../../assets/file.png" class="fileicon">

        </div>
        <div class="titles left">
            <h3>jdk1.7 64位官方下载</h3>
            <p style="font-style: oblique">jdk1.7 64位官方下载jdk.exe</p>
            <p style="font-style: oblique; padding-bottom: 10px">
                上传者：<span style="padding-right: 25px">李小红</span>时间：<span>2020-01-01</span>
            </p>
        </div>
        <div class="status left">
            <p style="color: #c2c2c2; margin-top: 15px">立即下载</p>
        </div>
        <div class="clears"></div>
    </div>

</template>

<script>
    export default {
        name: "recommend"
    }
</script>

<style scoped>
    .recommend{
        width: 98%;
        margin: auto;
        height: 105px;
        border-bottom: 1px #d6d6d6 dashed;
    }
    .fileicon{
        width: 80px;
        height: 80px;
        margin-left: 35px;
        margin-top: 15px;
    }
    .left{
        float: left;
    }
    .files{
        width: 15%;
    }
    .titles{
        width: 60%;
        margin-top: 15px;
    }
    .status{
        width: 25%;
        text-align: right;
        margin-top: 15px;
        padding-right: 25px;
    }
</style>