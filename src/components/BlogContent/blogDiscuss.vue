<template>
    <div class="discuss">
        <div class="content">
            <el-form ref="form">
                <el-form-item>
                    <el-input class="inp" placeholder="请输入你的评论" v-model="content" type="textarea"></el-input>
                </el-form-item>
                <el-form-item class="submit">
                    <el-button type="primary" @click="onSubmit()">立即评论</el-button>
                </el-form-item>
                <div style="clear: both"></div>
            </el-form>
        </div>
        <i class="el-icon-caret-bottom" style="float: left; margin-left: 1%"/>
        <div style="clear: both"></div>

        <div class="alldiscuss">
            <parentComment v-for="com in coms" :key="com.id" :comment="com" @onSubmit="onSubmit"></parentComment>
            <i class="el-icon-caret-bottom"/>
            
            <div style="clear: both"></div>
        </div>    
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import parentComment from './parentComment'
    export default {
        data(){
            return{
                content: null
                
            }
        },
        components:{
            parentComment
        },
        name: "blogDiscuss",
        props:['comment'],
        methods: {
            onSubmit(cid){
                if(this.content==null || this.content=="") return;
                this.$store.dispatch('releaseComment',{
                    commenter:{id:this.me.id},
                    blogArticle:{id:this.blog.id},
                    content:this.content,
                    parentComment:{id:cid}
                }).then(()=>{
                    this.content = "";
                })
            }
        },
        computed: {
            ...mapGetters({
                me: 'getUserInfo',
                blog:'getBlogContent'
            }),
            coms(){
                window.console.log(this.$store.getters.getCommens)
                
                return this.$store.getters.getCommens
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
    
    
    
    
    
    

</style>