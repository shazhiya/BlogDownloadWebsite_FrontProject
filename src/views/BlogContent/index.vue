<template>
    <div>
        <el-container>
            <el-header style="padding: 0">
                <navigation/>
            </el-header>
            <el-container>
                <el-main>
                    <el-row>
                        <el-col :span="5"><div class="grid-content bg-purple-light">
                            <blog-like/>
                        </div></el-col>
                        <el-col :span="14"><div class="grid-content bg-purple">
                            <blog-content/>
                            <blog-discuss/>
                        </div></el-col>
                        <el-col :span="5"><div class="grid-content bg-purple-light">
                            <blog-author/>
                        </div></el-col>
                    </el-row>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    import navigation from "../../components/navigation";
    import blogAuthor from "../../components/BlogContent/blogAuthor";
    import blogContent from "../../components/BlogContent/blogContent";
    import blogDiscuss from "../../components/BlogContent/blogDiscuss";
    import blogLike from "../../components/BlogContent/blogLike";
    export default {
        name: "index",
        methods:{
            getBlogContent(id){
                this.axios.post(
                    "article/detail",{
                        "id":id
                    }).then((res)=>{
                    window.console.log(res.data)
                    this.$store.commit("updateBlogContent",res.data)
                })
            }

        },
        components:{
            navigation,
            blogContent,
            blogDiscuss,
            blogAuthor,
            blogLike
        },
        created() {
            this.getBlogContent(1)
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
        //background-color: #E9EEF3;
        color: #333;
        text-align: center;
        min-height: 800px;
    }

    body > .el-container {
        margin-bottom: 40px;
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