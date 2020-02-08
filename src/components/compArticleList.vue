<template>
<div class="article">
    <!-- 作者头像 -->
    <div class="userPic">
        <a>
            <img src="../assets/defaultPic.png"  class="userPicImg">
        </a>
    </div>
    <!-- 文章标题 -->
    <a class="">
        <div class="content">
            The Ember Times - Issue No. 134
        </div>
    </a>
    <!-- 文章作者 -->
    <h4>
        <a href="" class="userH4A">
            Supper Tiny Red・<time>Feb  8</time>
            <span class="time-ago-indicator">(2 hours ago)</span>
        </a>
    </h4>
    <!-- 文章tags -->
    <div class="tags">
        <a href="">
            <span class="tag">#Java</span>
        </a>
        <a href="">
            <span class="tag">#Web</span>
        </a>
        <a href="">
            <span class="tag">#SSH</span>
        </a>
    </div>
    <!-- 投币点赞收藏 阅读数 阅读按钮-->
    <div class="foot">
        <span>
            <FAIcon :icon="['far','thumbs-up']"></FAIcon>
            999+
        </span>
        <span>
            <FAIcon :icon="['fas','donate']"></FAIcon>
            999+
        </span>
        <span>
            <FAIcon :icon="['far','star']"></FAIcon>
            999+
        </span>
        <span class="readNum">
            阅读数:15675
        </span>
        <el-button type="primary" class="readButton">
            Read
        </el-button>
    </div>
</div>
</template>

<script>
    export default {
        name: "compArticleList"
    }
</script>

<style scoped>
    a{
        text-decoration:none;
        color:#333;
    }
    .article{
        margin-top: 12px;
        width: 100%;
        background: #ffffff;
        text-align: left;
        vertical-align: top;
        overflow: hidden;
        border: 1px solid #d6d6d6;
        box-shadow: var(--theme-container-box-shadow, 1px 1px 0px #c2c2c2);
        border-radius: 3px;
        cursor: pointer;
        position: relative;
    }
    .userPic{
        padding: 23px 0px 27px;
        height: 50px;
        width: 50px;
        float: left;
        margin-left: 12px;
        margin-top: 3px;
        border-radius: 999px;
    }
    .userPicImg {
        height: 100%;
        width: 100%;
        border-radius: 50px;
    }
    .content{
        font-weight: bolder;
        font-size: 24px;
        display: block;
        float: left;
        width: calc(100% - 88px);
        padding: calc(1vw + 7px) 9px;
        padding-bottom: 0px;
    }
    .content h3 {
        margin: 0px;
        font-size: 27px;
        line-height: 32px;
    }

    .article h4 {
        max-width: 80%;
        padding: 0px;
        font-weight: 500;
        display: inline-block;
        overflow: hidden;
        text-overflow: ellipsis;
        left: 72px;
        font-size: 17px;
        margin-left: 9px;
    }
    .userH4A{
        color: var(--theme-secondary-color, #666);
        font-weight: 500;
    }
    .userH4A span{
        font-weight: lighter;
    }
    .tags{
        margin-left: 65px;
        margin-bottom: 25px;
    }
    .tags .tag{
        margin-left: 7px;
    }
    .foot{
        margin-left: 4px;
        margin-bottom: 10px;
    }
    .foot span{
        font-size: 13px;
        margin-left: 10px;
    }
    .foot .readNum{
        color: #888888;
        margin-left: 40%;
    }
    .readButton{
        margin-left: 2%;
    }
</style>