<template>
  <div class="discuss2">
                <div class="authorintro">
                    <img class="headpic" src="../../assets/headPic.jpg">
                    <div class="author">{{chilc.uaccount}}</div>
                    <i class="el-icon-chat-dot-square" style="float: right; margin-right: 25px; margin-top: 15px"/>
                    <div class="time">{{chilc.time}}</div>
                    <div style="clear: both"></div>
                </div>
                <div class="discusscontent">
                    {{chilc.content}}
                </div>
                <el-button style="float: right; padding: 3px 10px 10px" type="text">回复</el-button>
            </div>
</template>

<script>
export default {
    props:['chilc']
}
</script>

<style>
.discuss2{
        width: 96%;
        min-height: 120px;
        float: right;
        margin-right: 1%;
        margin-top: 10px;
        box-shadow: 6px 6px 6px 0 rgba(0, 0, 0, 0.1);
        border: #D3DCE6 1px solid;
    }

discuss{
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
</style>