<template>
    <div>
        <div class="discuss1">
            <div class="authorintro">
                <img class="headpic" src="../../assets/headPic.jpg">
                <div class="author">{{com.commenterAccount==null?"me":com.commenterAccount}}</div>
                <i class="el-icon-chat-dot-square" style="float: right; margin-right: 25px; margin-top: 15px"/>
                <div class="time">{{com.time==null?"刚刚":com.time}}</div>
                <div style="clear: both"></div>
            </div>
            <div class="discuss" style="min-height: 50px">
               {{com.content}}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "discussContent",
        props:['com']
    }
</script>

<style scoped>
    .discuss1{
        width: 98%;
        min-height: 100px;
        margin: auto;
        margin-top: 10px;
        /*box-shadow: 6px 6px 6px 0 rgba(0, 0, 0, 0.1);*/
        border: #D3DCE6 1px solid;
    }
    .headpic{
        width: 24px;
        height: 24px;
        float: left;
        margin-left: 10px;
        margin-top: 10px;
        border: #333333 1px solid;
        border-radius: 999px;
    }
    .author{
        float: left;
        line-height: 24px;
        margin-left: 10px;
        margin-top: 10px;
    }
    .time{
        float: right;
        line-height: 24px;
        margin-right: 35px;
        margin-top: 10px;
    }
    .authorintro{
        height: 40px;
        border-bottom: #B3C0D1 1px dashed;
    }
    .discuss{
        text-align: left;
        margin-left: 25px;
        margin-top: 5px;
        padding-bottom: 10px;
    }
</style>