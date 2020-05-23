<template>
    <div>
        <el-container>
            <el-header style="padding: 0">
                <navigation/>
            </el-header>
            <el-container>
                <el-main>
                    <el-row>
                        <el-col :span="24">
<!--                            <div class="grid-img">-->
<!--                                <img style=" width:100%;" src="../../assets/coin.jpg"/>-->
<!--                            </div>-->
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="6"><div class="grid-content bg-purple-light">
                            <message-left/>
                        </div></el-col>
                        <el-col :span="14"><div class="grid-content bg-purple">
                            <message-center/>
                        </div></el-col>
                        <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
                    </el-row>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    import navigation from "../../components/navigation";
    import messageCenter from "../../components/BlogMessage/messageCenter";
    import messageLeft from "../../components/BlogMessage/messageLeft";

    export default {
        name: "index",
        components:{
            navigation,
            messageLeft,
            messageCenter,
        },
        methods:{
            postMessage(){
                this.axios.post(
                    "message/postMessage",{
                        "target":{
                            "id": 1,
                        },
                        "content": "你好帅",
                    }).then((res)=>{
                    window.console.log(res.data)
                    // this.$store.commit("updateBlogList",res.data)
                })
            },
            //请求谁给我发的消息userList
            getMessageUserList(){
                this.axios.post(
                    "message/index",{
                    }).then((res)=>{
                    window.console.log(res.data)
                    // this.$store.commit("updateBlogList",res.data)
                })
            },
            //请求与某人的未读聊天信息 单方
            getUnreadMessageList(){ // sender 某人
                this.axios.post(
                    "message/messages",{
                        "sender": {
                            "id": 1,
                        },
                    }).then((res)=>{
                    window.console.log(res.data)
                    // this.$store.commit("updateBlogList",res.data)
                })
            },
            //请求与某人的历史聊天信息 双方
            getHistoryMessageList(){
                this.axios.post(
                    "message/history",{
                        "sender": {
                            "id": 1,
                        },
                        "time": 1585405662347,
                    }).then((res)=>{
                    window.console.log(res.data)
                    // this.$store.commit("updateBlogList",res.data)
                })
            },

        },
        created() {
            //this.postMessage();
            // this.getMessageUserList();
            // this.getUnreadMessageList();
            // this.getHistoryMessageList();
        }
    }
</script>

<style scoped>
    .el-header, .el-footer {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
    }

    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        min-height: 800px;
    }

    body > .el-container {
        margin-bottom: 40px;
    }
    .bg-purple-dark {
    //background: #99a9bf;
    }
    .bg-purple {
    //background: #d3dce6;
    }
    .bg-purple-light {
    //background: #e5e9f2;
    }
    .grid-img{
        min-height: 36px;
        margin-bottom: 25px;
    }
    .grid-content {
        border-radius: 4px;
        min-height: 700px;
    }
    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
        line-height: 260px;
    }

    .el-container:nth-child(7) .el-aside {
        line-height: 320px;
    }

</style>