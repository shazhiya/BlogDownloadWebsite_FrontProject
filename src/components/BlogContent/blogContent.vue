<template>
    <div class="content">
        <H1 style="font-size: 48px; margin-left: 30px">{{this.blogArticle.title}}</H1>
        <div style="margin-left: 30px">
            <img class="headpic" src="../../assets/headPic.jpg">
            <div class="author">作者：{{this.blogArticle.account}}</div>
            <div class="time">发布时间：{{this.timestamp13ToTime(this.blogArticle.releaseTime)}}</div>
            <div style="clear: both"></div>
        </div>
        <div class="tag-group">
            <el-tag
                    v-for="item in this.blogArticle.tags"
                    :key="item.tid"
                    effect="plain">
                {{ item.tagName }}
            </el-tag>
        </div>
        <div class="blogcontent">
            {{this.blogArticle.content}}
        </div>

    </div>
</template>

<script>
    export default {
        name: "blogContent",
        props:['article'],
        data() {
            return {
                blogArticle:this.article,
            }
        },
        methods:{
            timestamp13ToTime(timestamp) {
                const date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
                const Y = date.getFullYear() + '-';
                const M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
                const D = date.getDate() + ' ';
                const h = date.getHours() + ':';
                const m = date.getMinutes() + ':';
                const s = date.getSeconds();
                return Y + M + D + h + m + s;
            },
        }
    }
</script>

<style scoped>
    H1{
        margin-top: 20px;
    }
    .tag-group{
        margin-left: 30px;
        margin-top: 15px;
        margin-bottom: 15px;
    }
    .headpic{
        width: 24px;
        height: 24px;
        float: left;
        border: #333333 1px solid;
        border-radius: 999px;
    }
    .time, .author{
        float: left;
        line-height: 24px;
        margin-left: 10px;
    }
    .content{
        width: 100%;
        min-height: 480px;
        background: white;
        text-align: left;
        box-shadow: 6px 6px 6px 0 rgba(0, 0, 0, 0.1);
        border: #D3DCE6 1px solid;
    }

    .blogcontent{
        margin-top: 25px;
        margin-left: 25px;
        margin-right: 15px;
        font-size: 14px;
        margin-bottom: 25px;
        text-align: left;
    }
</style>
