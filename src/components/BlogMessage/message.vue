<template>
    <div>
        <div id="msg">
            <div>{{this.timestamp13ToTime(postedMessage.time)}}</div>
            <div :class="{'head1':postedMessage.senderId == me.id,'head':postedMessage.senderId != me.id}" >
                <img class="headpic" src="../../assets/headPic.jpg">
            </div>
            <div :class="{'send':postedMessage.senderId == me.id,'receive':postedMessage.senderId != me.id}" >{{postedMessage.content}}</div>
            <div style="clear: both"></div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "message",
        props:['postedMessage'],
        data(){
          return{
              me:this.$store.getters.getUserInfo
          }
        },
        methods:{
            timestamp13ToTime(timestamp) {
                const date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
                const Y = date.getFullYear() + '-';
                const M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
                const D = date.getDate() + ' ';
                const h = date.getHours() + ':';
                const m = date.getMinutes() + ':';
                const s = date.getSeconds();
                return Y + M + D + h + m + s;
            },
        },
        created() {
        }
    }
</script>

<style scoped>
    .head{
        width: 80px;
        height: 80px;
        float: left;
    }
    .head1{
        width: 80px;
        height: 80px;
        float: right;
    }
    .headpic{
        width: 48px;
        height: 48px;
        margin-left: 15%;
        margin-top: 10px;
        border: #333333 1px solid;
        border-radius: 999px;
    }
    .receive{
        min-width: 50px;
        max-width: 550px;
        min-height: 50px;
        padding-top: 15px;
        background: white;
        border-radius: 0px 10px 10px 10px;
        margin-left: 15px;
        margin-top: 10px;
        float: left;
        text-align: left;
        padding-left: 15px;
        padding-right: 15px;
        padding-bottom: 10px;
        font-style: normal;
    }
    .send{
        min-width: 50px;
        max-width: 550px;
        min-height: 50px;
        padding-top: 15px;
        background: white;
        border-radius: 10px 0px 10px 10px;
        margin-top: 10px;
        float: right;
        padding-right: 15px;
        text-align: left;
        padding-left: 15px;
        padding-right: 15px;
        padding-bottom: 10px;
        font-style: normal;
    }

</style>