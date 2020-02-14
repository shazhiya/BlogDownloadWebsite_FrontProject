<template>
    <div class="content">
        <h2>硬币余额：<span class="coinNum">145</span></h2>
        <div>
            <h4>硬币有什么作用?</h4>
            <div style="margin-left: 15px; margin-top: 5px; margin-right: 20px">
                <p><i class="el-icon-arrow-right"/> 硬币是libd世界中非常重要的物品</p>

                <p><i class="el-icon-arrow-right"/> 硬币用于对优秀的博文作品进行投币支持，这是对博客主的一种肯定</p>

                <p><i class="el-icon-arrow-right"/> 硬币还可用于购买资源、参与活动等</p>
            </div>
        </div>
        <div>
            <h4>如何获取硬币?</h4>
            <div style="margin-left: 15px; margin-top: 5px; margin-right: 20px">
                <p><i class="el-icon-arrow-right"/> 每天登录后可领取登录硬币奖励</p>

                <p><i class="el-icon-arrow-right"/>博客主可通过撰写博客来获得更多硬币（读者投币的一部分将作为博客主的硬币收入奖励）</p>

                <p><i class="el-icon-arrow-right"/>上传资源可获得硬币奖励，销售资源的硬币将作为你的奖励</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "coinIntroduction"
    }
</script>

<style scoped>
    .content{
        width: 80%;
        margin-left: 20px;
        min-height: 400px;
        //background: white;
        text-align: left;
    }
    h2,h4{
        margin-left: 15px;
        padding-top: 15px;
    }
    .coinNum{
        margin-left: 20px;
        color: darkturquoise;
    }

</style>