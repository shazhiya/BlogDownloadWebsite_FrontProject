<template>
    <el-menu
            class="el-menu-demo"
            mode="horizontal"

            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
        <el-menu-item index="1"><img src="../assets/Logo.png" height="32" width="49" class="logo"/></el-menu-item>
        <el-menu-item index="2">首页</el-menu-item>
        <el-menu-item index="3">博客</el-menu-item>
        <el-menu-item index="4">下载</el-menu-item>
        <head-search></head-search>
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