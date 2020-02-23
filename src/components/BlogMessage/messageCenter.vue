<template>
    <div style="box-shadow: 6px 6px 6px 0 rgba(0, 0, 0, 0.5);">
        <div class="senders">
            <senders/>
        </div>
        <div class="contents">
            <message-content/>
            <send-message/>
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
        components:{
            sendMessage,
            senders,
            messageContent
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