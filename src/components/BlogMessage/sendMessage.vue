<template>
    <div style="margin-left: 1px;">
        <div class="content">
            <el-form ref="form">
                <el-form-item>
                    <el-input class="inp" placeholder="来回复一下吧" type="textarea" v-model="postedContent"></el-input>
                </el-form-item>
                <el-form-item class="submit">
                    <el-button type="primary" @click="onSubmit">发送</el-button>
                </el-form-item>
                <div style="clear: both"></div>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "sendMessage",
        data(){
            return{
                postedContent:"nmsl",
            }
        },
        methods: {
            onSubmit() {
                // alert("submit");
                // this.postMessage();
                this.$emit('textFunc')
                this.postMessage();
            },
            postMessage(){
                window.console.log("postMessage");
                this.axios.post(
                    "message/postMessage",{
                        "target":{
                            "id": 3,
                        },
                        "content": this.postedContent,
                    }).then((res)=>{
                    window.console.log(res.data)
                    // this.$store.commit("updateBlogList",res.data)
                })
            },
        }
    }
</script>

<style scoped>
    .content{
        width: 100%;
        height: 150px;
        margin: auto;
        margin-top: 2px;
        background: #e5e9f2;
        //border: #D3DCE6 1px solid;
        //border-radius: 5px;
    }
    .inp{
        width: 100%;
        margin: auto;
        margin-top: 20px;
    }
    .submit{
        margin-top: -10px;
        float: right;
        margin-right: 50px;
    }
</style>