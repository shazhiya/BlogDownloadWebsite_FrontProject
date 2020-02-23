<template>
    <div style="height: 700px; overflow-y: auto;" class="listleft">
        <div style=" width:100%; text-align: left; padding-left: 15px; font-style: oblique; margin-top: 10px; margin-bottom: 10px">近期信息</div>
        <ul id="tabUL">
            <li v-for="(item,index) in sender" :key="index" :class="[index==currentnum?class2:class1]" @click="tabfun(index)">
                <img class="headpic" :src="item.headpic">
                <div class="author">{{item.name}}</div>
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
                sender: [{
                    headpic:require('../../assets/headPic.jpg'),
                    name:'冷jing灬'
                    },
                    {
                        headpic:require('../../assets/headPic.jpg'),
                        name:'李小红'
                    },
                    {
                        headpic:require('../../assets/headPic.jpg'),
                        name:'张文'
                    },
                    {
                        headpic:require('../../assets/headPic.jpg'),
                        name:'冷jing灬'
                    },
                    {
                        headpic:require('../../assets/headPic.jpg'),
                        name:'冷jing灬'
                    },
                    {
                        headpic:require('../../assets/headPic.jpg'),
                        name:'冷jing灬'
                    },
                    {
                        headpic:require('../../assets/headPic.jpg'),
                        name:'冷jing灬'
                    },
                    {
                        headpic:require('../../assets/headPic.jpg'),
                        name:'冷jing灬'
                    },
                    {
                        headpic:require('../../assets/headPic.jpg'),
                        name: '冷jing灬'
                    }]
            }
        },
        methods:{
            tabfun:function (t) {
                this.currentnum = t
            }
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