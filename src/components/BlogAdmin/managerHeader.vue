<template>
    <div class="adminheader">
        <i class="el-icon-more" style="float: left; margin-top: 20px;"/>
        <el-dropdown>
            <div class="authorname">
                <img src="../../assets/headPic.jpg"/>
                <span class="name">李小红</span>
            </div>
            <el-dropdown-menu slot="dropdown" style="width: 160px">
                <div class="dropdowm">

                </div>
                <el-dropdown-item>查看</el-dropdown-item>
                <el-dropdown-item>新增</el-dropdown-item>
                <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
        <div class="rightheader">
            <h3 style="width: 150px; margin-left: 20px">首页</h3>
        </div>
    </div>
</template>

<script>
    export default {
        name: "managerHeader"
    }
</script>

<style scoped>
    .adminheader{
        //background-color: #6680ef;
    }
    img{
        width: 36px;
        height: 36px;
        float: left;
        margin-left: -60px;
        margin-top: 10px;
        border: #333333 1px solid;
        border-radius: 999px;
        box-shadow: #333333 3px 3px 3px;
    }
    .name{
       color: black;
        cursor: pointer;

    }
    .dropdowm{
        background: #2e9ad0;
        width: 160px;
        height: 60px;
    }
    .rightheader{
        width: 100%;
        height: 60px;
        margin: auto;
        background: white;
        //border: #888888 1px solid;
        border-radius: 5px 5px 5px 5px;
        box-shadow: 3px 2px 10px #888888;
        line-height: 60px;
        text-align: left;
    }
</style>