<template>
    <div class="discusscontent">
        <h3 style="margin-left: 15px; margin-top: 15px;">评论</h3>
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
        <i><discuss-content/></i>
        <i><discuss-content/></i>
    </div>
</template>

<script>
    import discussContent from "./discussContent";
    export default {
        name: "downDiscuss",
        methods: {
            onSubmit() {
                alert("submit")
            }
        },
        components:{
            discussContent
        }
    }
</script>

<style scoped>

    .discusscontent{
        width: 98%;
        margin: auto;
        margin-top: 40px;
        padding-bottom: 15px;
        min-height: 280px;
        background: white;
        text-align: left;
        box-shadow: 6px 6px 6px 0 rgba(0, 0, 0, 0.1);
        border: #D3DCE6 1px solid;
        border-radius: 5px;
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