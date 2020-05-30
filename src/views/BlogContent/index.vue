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
                            <blog-content :article="this.article"/>
                            <blog-discuss :comment="this.comment"/>
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
        data(){
          return{
              // currentArticleId: this.$route.query.id,
              // article: this.$store.getters.getBlogContent,
              // comment: this.$store.getters.getBlogContent.comment,
          }
        },
        computed:{
            currentArticleId(){
                return this.$route.query.id;
            },
            article(){
                return this.$store.getters.getBlogContent;
            },
            comment(){
                return this.$store.getters.getBlogContent.comment;
            }
        },
        methods:{
            getBlogContent(id){
                this.axios.post(
                    "article/detail",{
                        "id":id
                    }).then((res)=>{
                    window.console.log(res.data.comment)
                    this.$store.commit("updateBlogContent",res.data)
                })
            },
            // 发送博文评论
            postBlogComment(aid){
                this.axios.post(
                    "article/sendComment",{
                        "blogArticle":{
                            "id": aid,
                        },
                        "content": "这是评论博文",
                    }).then(()=>{
                    // this.$store.commit("updateBlogList",res.data)
                })
            },
            // 发送评论的评论
            postBlogCommentComment(blogId,commentId){
                this.axios.post(
                    "article/sendComment",{
                        "blogArticle":{
                            "id": blogId,
                        },
                        "parentComment":{
                            "id": commentId,
                        },
                        "content": "借一部说话",
                    }).then((res)=>{
                    window.console.log(res.data)
                    // this.$store.commit("updateBlogList",res.data)
                })
            },

        },
        components:{
            navigation,
            blogContent,
            blogDiscuss,
            blogAuthor,
            blogLike
        },
        created() {
            this.getBlogContent(this.currentArticleId);
        },
        mounted() {

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