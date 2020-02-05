<template>
    <div class="content">
        <el-card class="box-card" shadow="never">
            <div><el-button style="float: right; padding: 3px 0" type="text">阅读</el-button>
                <h2>博客标题</h2>
            </div>

            <div class="text item">
                博客内容简介计算球体顶点数据地球纹理贴图通过MVP矩阵旋转地球计算球体顶点数据我们知道OpenGL中最基本的图元是三角形，任何复杂的图形都可以分解为一个个的三
            </div>
            <div>
                <span class="read tagb">123次阅读</span>
                <span class="time tagb">2020-02-03 16:10:02</span>



            </div>
        </el-card>

    </div>
</template>

<script>
    export default {
        name: "blogList"
    }
</script>

<style scoped>

    .content{
        width: 100%;
        min-height: 160px;
        background: white;
        box-shadow: 6px 6px 6px 0 rgba(0, 0, 0, 0.1);
        /*border: #D3DCE6 1px solid;*/
        margin-top: 10px;
        padding-left: 20%;
        padding-right: 13%;
    }
    .text {
        font-size: 14px;
    }

    .item {
        padding: 18px 0;
    }

    .box-card {
        width: 140%;
        margin-top: 10px;
        margin-left: -24%;

        border: none;
        border-top: #d3dce6 1px dashed;
    }
    .time{
        float: right;
        margin-right: 10px;
    }
    .tagb{
        font-size: 12px;
        font-style: oblique;
        color: #888888;
    }
</style>