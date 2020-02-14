<template>
    <div class="discuss">
        <div class="content">
            <el-form ref="form">
                <el-form-item>
                    <el-input class="inp" placeholder="请输入你的评论" type="textarea"></el-input>
                </el-form-item>
                <el-form-item class="submit">
                    <el-button type="primary" @click="onSubmit">立即评论</el-button>
                </el-form-item>
                <div style="clear: both"></div>
            </el-form>
        </div>
        <i class="el-icon-caret-bottom" style="float: left; margin-left: 1%"/>
        <div style="clear: both"></div>
        <div class="alldiscuss"> 
            <div class="discuss1">
                <div class="authorintro">
                    <img class="headpic" src="../../assets/headPic.jpg">
                    <div class="author">冷jing灬</div>
                    <i class="el-icon-chat-dot-square" style="float: right; margin-right: 25px; margin-top: 15px"/>
                    <div class="time">2020-02-03 16:10:02</div>
                    <div style="clear: both"></div>
                </div>
                <div class="discusscontent" style="min-height: 70px">
                    这篇文章写得真不错本人也是经过了深思熟虑，在每个日日夜夜思考这个问题。 而这些并不是完全重要，更加重要的问题是，本人也是经过了深思熟虑，在每个日日夜夜思考这个问题。 而这些并不是完全重要，更加重要的问题是，
                </div>
                <el-button style="float: right; padding: 3px 10px 10px;" type="text">回复</el-button>
            </div>
            <i class="el-icon-caret-bottom"/>
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
                <el-button style="float: right; padding: 3px 10px 10px" type="text">回复</el-button>
            </div>
            <div style="clear: both"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "blogDiscuss",
        methods: {
            onSubmit() {
                alert("submit")
            }
        }
    }
</script>

<style scoped>

    .discuss{
        width: 100%;
        min-height: 300px;
        background: white;
        margin-top: 5px;
        padding-bottom: 25px;
        box-shadow: 6px 6px 6px 0 rgba(0, 0, 0, 0.1);
        border: #D3DCE6 1px solid;
    }
    .content{
        width: 98%;
        height: 150px;
        margin: auto;
        margin-top: 10px;
        background: #e5e9f2;
        border: #D3DCE6 1px solid;
        border-radius: 5px;
    }
    .inp{
        width: 90%;
        margin: auto;
        margin-top: 20px;
    }
    .submit{
        margin-top: -10px;
        float: right;
        margin-right: 50px;
    }
    .discuss1{
        width: 98%;
        min-height: 150px;
        margin: auto;
        margin-top: 10px;
        box-shadow: 6px 6px 6px 0 rgba(0, 0, 0, 0.1);
        border: #D3DCE6 1px solid;
    }
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
        margin-left: 25px;
        margin-top: 5px;
        padding-bottom: 10px;
    }

</style>