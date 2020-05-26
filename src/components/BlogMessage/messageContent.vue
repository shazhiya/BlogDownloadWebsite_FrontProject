<template>
    <div class="message">
        <div class="sendername">
            李小红
            <span style="float: right; margin-right: 20px"><i class="el-icon-user-solid"/> </span>
        </div>

        <div class="messagecontent" id="messagecontent">
            <message
                    v-for="(item,index) in messageList"
                    :key="index"
                    :postedMessage="item"
            ></message>
        </div>

    </div>
</template>

<script>
    import message from "./message";
    export default {
        name: "messageContent",
        components:{
            message
        },
        data(){
            return{
                messageList:[],
            }
        },
        methods:{
            parentDoChildFunc(){
                window.console.log("父组件调用子组件成功");
                // this.comName.push({
                //     name: "message"
                // });
                this.judgeMessageClass();
            },
            judgeMessageClass(){
                let com = document.getElementById("messagecontent");
                let len = com.children.length
                window.console.log(len);
            }

        },
        updated:function(){
            this.$nextTick(function(){
                var div = document.getElementById('messagecontent');
                div.scrollTop = div.scrollHeight;
            })
        },

    }

</script>

<style scoped>
    .message{
        width: 100%;
        height: 548px;
        margin-left: 1px;
        background: #e5e9f2;

    }
    .sendername{
        min-width: 620px;
        height: 40px;
        background: white;
        line-height: 40px;
        border-radius: 5px;
    }
    .messagecontent{
        min-width: 620px;
        height: 508px;
        overflow-y: auto;
    }
    .messagecontent::-webkit-scrollbar {/*滚动条整体样式*/
        width: 5px;     /*高宽分别对应横竖滚动条的尺寸*/
        height: 1px;
    }
    .messagecontent::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
        background: #05b2d2;
    }
    .messagecontent::-webkit-scrollbar-track {/*滚动条里面轨道*/
        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
        border-radius: 10px;
        background: #EDEDED;
    }

</style>