<template>
    <div>
        <el-container style="height: 960px; border: 1px solid #eee">
            <el-aside width="240px" style="background-color: white">
                <managerl-left/>
            </el-aside>

            <el-container>
                <el-header style="text-align: right; font-size: 12px;" height="100px">
                    <manager-header/>
                </el-header>

                <el-main>
                    <admin-manager/>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    import adminManager from "../../components/BlogAdmin/adminBlogMng";
    import managerlLeft from "../../components/BlogAdmin/managerlLeft";
    import managerHeader from "../../components/BlogAdmin/managerHeader";
    export default {
        name: "index",
        components:{
            adminManager,
            managerHeader,
            managerlLeft
        }
    }
</script>

<style scoped>
    .el-header {
        background-color: #6680ef;
        color: #333;
        line-height: 60px;
    }

    .el-aside {
        color: #333;
    }
</style>