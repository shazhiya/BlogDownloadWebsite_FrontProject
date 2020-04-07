<template>
    <div id="blogMng">
        <blog-mng-header/>
        <blog-mng-nav/>
        <blog-mng-main/>
    </div>
</template>

<script>
    import BlogMngHeader from "../../components/BlogMng/blogMngHeader";
    import BlogMngNav from "../../components/BlogMng/blogMngNav";
    import BlogMngMain from "../../components/BlogMng/blogMngMain";
    export default {
        name: "index",
        components: {BlogMngMain, BlogMngNav, BlogMngHeader},
        created() {
            // this.getUserMngBlogList(5)
            // this.postDeleteUserMngBlog(2)
            // this.getUserMngResourceList()
            // this.postDeleteUserMngResource(10)
        },
        data() {
            return {
            }
        },
        methods:{


        },

    }
</script>

<style scoped>
    body{
        font-family: 'Microsoft YaHei';
        font-size: 15px;
    }

    .el-header {
        background-color: #B3C0D1;
        color: #333;
        line-height: 60px;
    }

    .el-aside {
        color: #333;
    }

    #blogMng{
        background-color: #f7f7f7;
    }

</style>