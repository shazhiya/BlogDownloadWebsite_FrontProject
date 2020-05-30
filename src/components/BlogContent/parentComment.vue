<template>
  <div class="discuss1">
    <div class="authorintro">
      <img class="headpic" src="../../assets/headPic.jpg" />
      <div class="author">{{comment.uaccount==null?"me":comment.uaccount}}</div>
      <i
        class="el-icon-chat-dot-square"
        style="float: right; margin-right: 25px; margin-top: 15px"
      />
        <div class="time">{{comment.time==null?"刚刚":comment.time}}</div>
      <div style="clear: both"></div>
    </div>
    <div
      class="discusscontent"
      style="min-height: 70px"
    >{{comment.content}}</div>
    <el-button style="float: right; padding: 3px 10px 10px;" @click="response" type="text">回复</el-button>
    <child v-for="ci in comment.childrens" :key="ci.id" :chilc="ci"></child>
  </div>
</template>

<script>
import child from './childrenComment'
export default {
    data(){
        return {}
    },
    components:{
        child
    },
    props:["comment"],
    methods:{
        response(){
            window.console.log('response')
            this.$emit("onSubmit",this.comment.id)
        }
    }
};
</script>

<style>
.discuss1{
        width: 98%;
        min-height: 150px;
        margin: auto;
        margin-top: 10px;
        box-shadow: 6px 6px 6px 0 rgba(0, 0, 0, 0.1);
        border: #D3DCE6 1px solid;
    }

.authorintro{
        height: 40px;
        border-bottom: #B3C0D1 1px dashed;
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
    .discusscontent{
        text-align: left;
        margin-left: 25px;
        margin-top: 5px;
        padding-bottom: 10px;
    }
    .time{
        float: right;
        line-height: 24px;
        margin-right: 35px;
        margin-top: 10px;
    }
</style>