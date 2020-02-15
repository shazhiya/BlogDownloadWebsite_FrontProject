<template>
    <div class="upload">
        <div class="authorname">
            <img src="../../assets/headPic.jpg"/>
            <span class="name">冷jing灬</span>
        </div>
        <div class="care">
            <el-row>
                <el-button type="primary" size="mini" plain>关注</el-button>
                <el-button type="primary" size="mini" plain>私信</el-button>
                <div style="text-align: left; margin-top: 10px; font-style: oblique;"><i class="el-icon-arrow-right"/> 查看他的资源</div>
            </el-row>
        </div>
        <div class="clears"></div>

    </div>
</template>

<script>
    export default {
        name: "uploadUser"
    }
</script>

<style scoped>
    .upload{
        width: 70%;
        min-width: 320px;
        min-height: 100px;
        margin-left: 25px;
        background: white;
        box-shadow: 6px 6px 6px 0 rgba(0, 0, 0, 0.1);
        border: #D3DCE6 1px solid;
        border-radius: 5px;
    }
    .authorname{
        max-width: 80%;
        min-width: 165px;
        height: 80px;
        float: left;
    }
    img{
        width: 50px;
        height: 50px;
        float: left;
        margin-left: 20px;
        margin-top: 20px;
        border: #333333 1px solid;
        border-radius: 999px;
        box-shadow: #333333 3px 3px 3px;
    }
    .name{
        margin-left: 10px;
        font-size: 24px;
        line-height: 80px;

    }
    .care{
        float: right;
        margin-top: 10%;
        padding-right: 15px;
    }

</style>