<template>
    <div class="author">
        <div class="authorname">
            <img src="../../assets/headPic.jpg"/>
            <span class="name">冷jing灬</span>
        </div>
        <div class="introduce">
            <p style="text-align: left; font-style: oblique" >这里是作者的个人介绍,可以通过这个地方来稍微的了解一下作者，看看作者是个什么人</p>
        </div>
        <div class="caare">
            <el-button type="primary" icon="el-icon-plus" style="width: 100%">关注</el-button>
        </div>
        <div class="information">
<!--            <el-tag type="info" size="mini">邮箱</el-tag>-->
<!--            <p>123456@qq.com</p>-->
<!--            <el-tag type="info" size="mini">性别</el-tag>-->
<!--            <p>男</p>-->
            <el-tag type="info" size="mini">职业</el-tag>
            <p>学生</p>
            <el-tag type="info" size="mini">职位</el-tag>
            <p>成员</p>
            <el-tag type="info" size="mini">粉丝数</el-tag>
            <p>111</p>
            <el-tag type="info" size="mini">注册时间</el-tag>
            <p>2020-01-01</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "blogAuthor"
    }
</script>

<style scoped>
    .author{
        background: white;
        width: 300px;
        min-height: 400px;
        box-shadow: 6px 6px 6px 0 rgba(0, 0, 0, 0.1);
        border: #D3DCE6 1px solid;
        padding-bottom: 10px;
        position:fixed;
        left:80%;
        //top:15%;
    }
    .authorname{
        width: 100%;
        height: 80px;

    }
    .introduce{
        width: 100%;
        min-height: 30px;

    }
    .caare{
        width: 80%;
        height: 40px;
        margin: auto;

    }
    .information{
        margin-top: 20px;
        text-align: left;
    }
    p{
        padding-left: 40px;
        padding-right: 20px;
    }
    img{
        width: 50px;
        height: 50px;
        float: left;
        margin-left: 30px;
        margin-top: 10px;
        border: #333333 1px solid;
        border-radius: 999px;
        box-shadow: #333333 3px 3px 3px;
    }
    .name{
        margin-left: -70px;
        font-size: 24px;
        line-height: 80px;

    }
</style>