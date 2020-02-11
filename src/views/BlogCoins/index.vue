<template>
    <div>
        <el-container>
            <el-header style="padding: 0">
                <navigation/>
            </el-header>
            <el-container>
                <el-main>
                    <el-row>
                        <el-col :span="24"><div class="grid-img">
                            <img style=" width:100%;" src="../../assets/coin.jpg"/>
                        </div></el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
                        <el-col :span="14"><div class="grid-content bg-purple">
                            <coins-detail/>
                        </div></el-col>
                        <el-col :span="6"><div class="grid-content bg-purple-light">
                            <coin-introduction/>
                        </div></el-col>
                    </el-row>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    import navigation from "../../components/navigation";
    import coinIntroduction from "../../components/BlogCoins/coinIntroduction";
    import coinsDetail from "../../components/BlogCoins/coinsDetail";
    export default {
        name: "index",
        components:{
            navigation,
            coinIntroduction,
            coinsDetail
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
        min-height: 960px;
    }
    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
        line-height: 260px;
    }

    .el-container:nth-child(7) .el-aside {
        line-height: 320px;
    }

</style>