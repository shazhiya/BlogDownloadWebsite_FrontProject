<template>
    <div class="blogMng">
    <el-container style="height: 100vh; border: 1px solid #eee">
        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
            <el-menu :default-openeds="['1', '3']">
                <el-submenu index="1">
                    <template slot="title"><i class="el-icon-message"></i>内容管理</template>
                    <el-menu-item-group>
                        <template slot="title">文章</template>
                        <el-menu-item index="1-1">文章管理</el-menu-item>
                        <el-menu-item index="1-2">敬请期待</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="资源">
                        <el-menu-item index="1-3">资源管理</el-menu-item>
                        <el-menu-item index="1-4">敬请期待</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="2">
                    <template slot="title"><i class="el-icon-menu"></i>数据统计</template>
                    <el-menu-item-group>
                        <template slot="title">文章</template>
                        <el-menu-item index="2-1">文章数据</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="资源">
                        <el-menu-item index="2-2">资源数据</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
            </el-menu>
        </el-aside>

        <el-container>
            <el-header style="text-align: right; font-size: 12px">
                <el-dropdown>
                    <i class="el-icon-setting" style="margin-right: 15px"></i>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>查看</el-dropdown-item>
                        <el-dropdown-item>新增</el-dropdown-item>
                        <el-dropdown-item>删除</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <span>小红</span>
            </el-header>

            <el-main>
                <el-table :data="tableData">
                    <el-table-column prop="date" label="日期">
                    </el-table-column>
                    <el-table-column prop="title" label="标题" width="255">
                    </el-table-column>
                    <el-table-column prop="status" label="状态">
                    </el-table-column>
                    <el-table-column prop="type" label="类型">
                    </el-table-column>
                    <el-table-column prop="readNum" label="阅读数">
                    </el-table-column>
                    <el-table-column prop="likeNum" label="点赞数">
                    </el-table-column>
                    <el-table-column prop="collectedNum" label="收藏数">
                    </el-table-column>
                    <el-table-column prop="coinNum" label="硬币数">
                    </el-table-column>
                    <el-table-column label="操作">
                        <el-button type="danger" @click="postDeleteUserMngBlog">删除</el-button>
                    </el-table-column>
                </el-table>
            </el-main>
        </el-container>
    </el-container>
    </div>
</template>

<script>
    export default {
        name: "index",
        created() {
            //this.getUserMngBlogList(3)
            //this.getUserMngResourceList()
            this.postDeleteUserMngBlog(4)
        },
        data() {
            return {
                tableData: this.$store.state.userMngBlogList,
            }
        },
        methods:{
            getUserMngBlogList(id){
                this.axios.post(
                    "myInfo/blogHome",{
                        "id":id,
                    }).then((res)=>{
                    window.console.log(res.data)
                    this.$store.commit("updateUserMngBlogList",res.data.resourceList)
                })
            },
            getUserMngResourceList(){
                this.axios.post(
                    "resource/home",{
                    }).then((res)=>{
                    window.console.log(res.data)
                    this.$store.commit("updateUserMngResourceList",res.data)
                })
            },
            postDeleteUserMngBlog(){
                this.axios.post(
                    "article/delete",{
                        "id":4,
                    }).then((res)=>{
                    window.console.log("postDeleteUserMngBlog:" + res.data)
                    if(res.data == true){
                        window.alert('删除成功')
                    }else {
                        window.alert('删除失败')
                    }
                })
            },
            postDeleteUserMngResource(){
                this.axios.post(
                    "url",{
                        "id":1,
                    }).then((res)=>{
                    window.console.log("postDeleteUserMngResource:" + res.data)
                    if(res.data == true){
                        window.alert('删除成功')
                    }else {
                        window.alert('删除失败')
                    }
                })
            },
        },

    }
</script>

<style scoped>
    .el-header {
        background-color: #B3C0D1;
        color: #333;
        line-height: 60px;
    }

    .el-aside {
        color: #333;
    }

    .blogMng{
        background-color: rgb(238, 241, 246)
    }

</style>