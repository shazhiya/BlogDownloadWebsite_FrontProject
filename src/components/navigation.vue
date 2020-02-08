<template>
    <el-menu
            class="el-menu-demo"
            mode="horizontal"
            background-color="#FDF9F3"
            text-color="#000"
            active-text-color="#ffd04b">

            <el-row style="margin-left: 100px">
                <!-- 导航栏 单个导航 -->
                <el-col :span="1" :offset="3">
                    <el-menu-item index="1">
                        <img src="../assets/Logo.png" height="57%" width="100%" class="logo"/>
                    </el-menu-item>
                </el-col>
                <el-col :span="1">
                    <el-menu-item index="2">
                        首页
                    </el-menu-item>
                </el-col>
                <el-col :span="1">
                    <el-menu-item index="3">
                        博客
                    </el-menu-item>
                </el-col>
                <el-col :span="1">
                    <el-menu-item index="4">
                        下载
                    </el-menu-item>
                </el-col>
                <!-- 导航栏 搜索框 -->
                <el-col :span="3" :offset="3" style="margin-top: 8px">
                    <head-search></head-search>
                </el-col>
                <el-col :span="1" :offset="0" style="margin-top: 8px">
                    <el-button type="success">
                        Search
                    </el-button>
                </el-col>
                <!-- 导航栏 用户框 -->
                <el-col :span="3" :offset="3" style="font-size:24px;margin-top: 10px">
                    <el-row :gutter="40">
                        <el-col :span="1">
                            <i class="el-icon-edit"></i>
                        </el-col>
                        <el-col :span="1">
                            <i class="el-icon-bell"></i>
                        </el-col>
                        <el-col :span="1">
                            <i class="el-icon-coin"></i>
                        </el-col>
                        <el-col :span="1">
                            <i class="el-icon-user"></i>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>



    </el-menu>
</template>

<script>
    import headSearch from './headSearch';
    export default {
        name: "navigation",

        data() {
            return {

            }
        },
        components:{
            headSearch
        }
    }
</script>

<style scoped>

</style>