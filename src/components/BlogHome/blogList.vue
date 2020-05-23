<template>
    <div class="content">
        <el-card class="box-card" shadow="never">
            <div><el-button style="float: right; padding: 3px 0" type="text" @click="gotoArticle(parentArticle.id)">阅读</el-button>
                <h2 @click="gotoArticle(parentArticle.id)">{{parentArticle.title}}</h2>
            </div>

            <div class="text item">
<!--                {{parentArticle.intro}}-->
                版权声明：本文为原创文章，转载请注明出处。
            </div>
            <div>
                <span class="read tagb">{{parentArticle.readNum}}次阅读</span>
                <span class="time tagb">{{timestamp13ToTime(parentArticle.releaseTime)}}</span>



            </div>
        </el-card>

    </div>
</template>

<script>
    export default {
        name: "blogList",
        props:['article'],
        computed:{
            parentArticle(){
                return this.article;
            },
        },
        methods:{
            gotoArticle(bid) {
                // window.alert("博文id：" + bid);
                this.$router.push({
                        name:'bcontent',
                        query:{
                            id: bid,
                        }
                    }
                )
            },
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
        }
    }
</script>

<style scoped>

    .content{
        width: 100%;
        min-height: 160px;
        background: white;

        /*border: #D3DCE6 1px solid;*/
        margin-top: 10px;
        padding-left: 10%;
        padding-right: 13%;

    }
    .text {
        font-size: 14px;
    }

    .item {
        padding: 18px 0;
    }

    .box-card {
        width: 145%;
        margin-top: 10px;
        margin-left: -14%;
        border: none;
        border-top: #d3dce6 1px dashed;
        box-shadow: 6px 6px 6px 0 rgba(0, 0, 0, 0.1);
    }
    .time{
        float: right;
        margin-right: 10px;
    }
    .tagb{
        font-size: 12px;
        font-style: oblique;
        color: #888888;
    }
</style>