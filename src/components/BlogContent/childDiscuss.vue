<template>
    <div>
        <div class="discuss2">
            <div class="authorintro">
                <img class="headpic" src="../../assets/headPic.jpg">
                <div class="author">冷jing灬</div>
                <i class="el-icon-chat-dot-square" style="float: right; margin-right: 25px; margin-top: 15px"/>
                <div class="time">2020-02-03 16:10:02</div>
                <div style="clear: both"></div>
            </div>
            <div class="discusscontent">
                赞同，我也觉得是这样本人也是经过了深思熟虑，在每个日日夜夜思考这个问题。 而这些并不是完全重要，更加重要的问题是，本人也是经过了深思熟虑，在每个日日夜夜思考这个问题。 而这些并不是完全重要，更加重要的问题是，本人也是经过了深思熟虑，在每个日日夜夜思考这个问题。 而这些并不是完全重要，更加重要的问题是，本人也是经过了深思熟虑，在每个日日夜夜思考这个问题。 而这些并不是完全重要，更加重要的问题是，
            </div>
        </div>
        <div style="clear: both"></div>
    </div>
</template>

<script>
    export default {
        name: "childDiscuss"
    }
</script>

<style scoped>
    .discuss2{
        width: 96%;
        min-height: 120px;
        float: right;
        margin-right: 1%;
        margin-top: 10px;
        box-shadow: 6px 6px 6px 0 rgba(0, 0, 0, 0.1);
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
    .discusscontent{
        text-align: left;
        margin-left: 15px;
        margin-top: 5px;
        padding-bottom: 10px;
    }
</style>