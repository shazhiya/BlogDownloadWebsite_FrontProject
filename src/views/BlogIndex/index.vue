<template>
    <div>
        <el-container id="blogIndex">
            <el-header style="padding: 0px">
                <navigation></navigation>
            </el-header>
            <el-container>
                <el-aside width="200px">Aside</el-aside>
                <el-container>
                    <el-main>Main</el-main>
                    <el-footer>Footer</el-footer>
                </el-container>
                <el-aside width="200px">Aside</el-aside>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    import navigation from '../../components/navigation'

    export default {
        data() {
            return {

            };
        },
        methods: {
            // handleSelect(key, keyPath) {
            //     console.log(key, keyPath);
            // }
        },
        components:{
            navigation
        }
    }
</script>

<style scoped>
    #blogIndex{
        height: 100vh;
    }

    .el-header, .el-footer {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
    }

    .el-aside {
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
        line-height: 200px;
    }

    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        line-height: 160px;
    }

    body > .el-container {
        margin-bottom: 40px;
    }

    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
        line-height: 260px;
    }

    .el-container:nth-child(7) .el-aside {
        line-height: 320px;
    }

    .logo {
        margin: 0px;
    }

</style>