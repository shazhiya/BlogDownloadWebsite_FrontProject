<template>
    <div style="box-shadow: 6px 6px 6px 0 rgba(0, 0, 0, 0.5);">
        <div class="senders">
            <senders @changeMessageList="changeMessageList"/>
        </div>
        <div class="contents">
            <message-content ref="messageContent"/>
            <send-message @textFunc="textFunc" :targetId="targetId" ref="sendMessage"/>
        </div>
        <div class="clears"></div>
    </div>
</template>

<script>
    import senders from "./senders";
    import sendMessage from "./sendMessage";
    import messageContent from "./messageContent";
    export default {
        name: "messageCenter",
        data(){
            return{
                me:this.$store.getters.getUserInfo,
                messageList:[
                    {
                        id:123,
                        content: "测试内容",
                    },
                    {
                        id:123,
                        content: "测试内容",
                    },
                ]
            }
        },
        computed:{
            targetId(){
                return this.$refs.senders.targetId;
            }
        },
        components:{
            sendMessage,
            senders,
            messageContent
        },
        methods:{
            textFunc(){
                window.console.log("子组件调用成功");
                this.$refs.messageContent.parentDoChildFunc();
                // this.$refs.messageContent.postedContent123.content = this.$refs.sendMessage.postedContent;
                let add = {
                    content: this.$refs.sendMessage.postedContent,
                    targetId: null, // 从另一个组件获取
                    senderId: this.me.id
                }
                this.$refs.messageContent.messageList.push(add)
            },
            // sender调用
            changeMessageList(messageUserList){ // messageUserList
                window.console.log("Center:changeMessageList");
                window.console.log(messageUserList);
                this.$refs.messageContent.messageList = messageUserList;
                // window.console.log(this.messageList);
            }
        }
    }
</script>

<style scoped>
    .senders{
        width: 20%;
        height: 700px;
        background: white;
        float: left;
    }
    .contents{
        width: 80%;
        height: 700px;
        background: #888888;
        box-shadow: 6px 6px 6px 0 rgba(0, 0, 0, 0.1);
        float: left;
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


</style>