<template>
    <div>
    <navigation/>
    <div class="content">
        <el-row>
            <el-col :span="24"><div class="grid-content bg-purple-dark">
                <blog-home-hander :userId="currentUserId"/>
            </div></el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="8"><div class="grid-content bg-purple">
                <blog-information/>
            </div></el-col>
            <el-col :span="12"><div class="grid-content bg-purple-light">
                <ul style="list-style: none">
                    <template v-for="article in articleList">
                    <li :key="article.id">
                        <blog-list :article="article"/>
                    </li>
                    </template>

                </ul>
            </div></el-col>
        </el-row>
    </div>
    </div>
</template>

<script>
    import blogHomeHander from "../../components/BlogHome/blogHomeHander";
    import blogInformation from "../../components/BlogHome/blogInformation";
    import blogList from "../../components/BlogHome/blogList";
    import Navigation from "../../components/navigation";
    export default {
        name: "index",
        data(){
          return{
              currentUserId: this.$route.query.uid,
          }
        },
        computed:{
            articleList(){
                return this.$store.getters.getBlogInfo.articles;
            }
        },
        methods: {
            getBlogInfo(uid){
                this.axios.post(
                    "article/home",{
                        "id":uid
                    }).then((res)=>{
                    window.console.log(res.data)
                    this.$store.commit("updateBlogInfo",res.data)
                })
            },
        },
        components: {
            Navigation,
            blogHomeHander,
            blogInformation,
            blogList
        },
        created() {
            window.console.log(this.currentUserId);
            this.getBlogInfo(this.currentUserId);
        }
    }
</script>

<style scoped>

    .content{
        width: 80%;
        margin: auto;
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
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }

</style>