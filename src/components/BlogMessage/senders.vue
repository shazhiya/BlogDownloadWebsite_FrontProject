<template>
    <div style="height: 700px; overflow-y: auto;" class="listleft">
        <div style=" width:100%; text-align: left; padding-left: 15px; font-style: oblique; margin-top: 10px; margin-bottom: 10px">近期信息</div>
        <ul id="tabUL">
            <li v-for="(item,index) in MessageUserList" :key="index" :class="[index==currentnum?class2:class1]" @click="tabfun(index,item.senderId)">
                <img class="headpic" src="../../assets/headPic.jpg"> <!-- :src="item.headpic"  -->
                <div class="author">{{item.sernderAccount}}</div>
                <div style="clear: both"></div>
            </li>
        </ul>

    </div>
</template>

<script>
    export default {
        name: "senders",
        data() {
            return {
                class1:'senderlist',
                class2:'senderlist current',
                currentnum: 0,
                targetId: null,
            }
        },
        computed:{
            MessageUserList(){
                return this.$store.getters.getMessageUserList;
            },
            // UnreadMessageList(){
            //     return this.$store.getters.getUnreadMessageList;
            // }
        },
        methods:{
            tabfun:function (t,senderId) {
                this.currentnum = t;
                window.console.log(senderId);
                this.targetId = senderId;
                // this.getUnreadMessageList(senderId);
                // this.parent.changeMessageList(this.MessageUserList);
                this.getHistoryMessageList(senderId);
            },
            //请求谁给我发的消息userList
            getMessageUserList(){
                this.axios.post(
                    "message/index",{
                    }).then((res)=>{
                    // window.console.log(res.data)
                    this.$store.commit("updateMessageUserList",res.data)
                    // window.console.log(this.$store.getters.getMessageUserList)
                })
            },
            //请求与某人的未读聊天信息 单方
            getUnreadMessageList(senderId){ // sender 某人
                this.axios.post(
                    "message/messages",{
                        "sender": {
                            "id": senderId,
                        },
                    }).then((res)=>{
                    // window.console.log(res.data)
                    // this.$store.commit("updateUnreadMessageList",res.data)
                    this.$emit('changeMessageList',res.data);
                })
            },
            //请求与某人的历史聊天信息 双方
            getHistoryMessageList(senderId){
                this.axios.post(
                    "message/history",{
                        "sender": {
                            "id": senderId,
                        },
                        "time": 1590588342415,
                    }).then((res)=>{
                    window.console.log(res.data)
                    // this.$store.commit("updateBlogList",res.data)
                    this.$emit('changeMessageList',res.data);
                })
            },
        },
        created() {
            this.getMessageUserList();
            // window.console.log(this.MessageUserList[0].sernderAccount);
        }
    }
</script>

<style scoped>
    .listleft::-webkit-scrollbar {/*滚动条整体样式*/
        width: 5px;     /*高宽分别对应横竖滚动条的尺寸*/
        height: 1px;
    }
    .listleft::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
        background: #05b2d2;
    }
    .listleft::-webkit-scrollbar-track {/*滚动条里面轨道*/
        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
        border-radius: 10px;
        background: #EDEDED;
    }
    .senderlist{
        cursor: pointer;
        line-height: 50px;

    }
    .senderlist:hover{
        background: #d6d6d6;
    }
    .headpic{
        width: 48px;
        height: 48px;
        float: left;
        margin-left: 15%;
        margin-top: 10px;
        border: #333333 1px solid;
        border-radius: 999px;
    }
    .author{
        float: left;
        line-height: 72px;
        margin-left: 10px;
        margin-top: 0px;
    }
    .current{
        background: #d6d6d6;
    }

</style>