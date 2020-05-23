<template>
    <div>
        <el-container id="blogIndex" style="background-color:#f9f9fa">
            <!-- header -->
            <el-header style="padding: 0px">
                <!-- 导航栏组件 -->
                <navigation></navigation>
            </el-header>
            <el-main>
                <el-row style="margin-top:0.8%">
                    <el-col :span="8">
                        <div style="height: 500px; width: 44%;margin-left: 52%;border-radius: 2px;box-shadow: 1px 1px 5px #888888">
                            <el-menu
                                    default-active="1"
                                    class="el-menu-vertical-demo"
                                    style="border-radius: 4px">
                                <el-menu-item index="1">
                                    <i class="el-icon-magic-stick"></i>
                                    <span slot="title">随便看看</span>
                                </el-menu-item>
                                <template v-for="classify in blogClassifyList">
                                    <el-menu-item :key="classify.id">
                                        <i class="el-icon-arrow-right"></i>
                                        <span slot="title">{{classify.name}}</span>
                                    </el-menu-item>
                                </template>


                            </el-menu>
                        </div>
                    </el-col>
                    <el-col :span="8">
                        <div style="margin-top: -2%">
                            <template v-for="article in blogClass">
                                <compArticleList :key="article.id" :article="article"/>
                            </template>
                        </div>

                    </el-col>
                    <el-col :span="8">
                        <div style="height: 200px; width: 200px;background-color: #333333;margin-left: 10%;border-radius: 4px">
                            <img src="../../assets/adv_1.jpg" height="200" width="200" style="border-radius: 4px;cursor: pointer"/>
                        </div>
                        <div style="height: 150px; width: 200px;background-color: #333333;margin-left: 10%;border-radius: 4px;margin-top:20px">
                            <img src="../../assets/adv_2.jpg" height="100%" width="100%" style="border-radius: 4px;cursor: pointer"/></div>
                    </el-col>
                </el-row>
            </el-main>

        </el-container>
    </div>
</template>

<script>
    import navigation from '../../components/navigation'
    import compArticleList from '../../components/compArticleList'

    export default {
        data() {
            return {
            };
        },
        computed:{
            blogClassifyList(){
                return this.$store.getters.getBlogClassifyList;
            },
            blogClass(){
                return this.$store.getters.getBlogList;
            },
            userInfo(){
                return this.$store.getters.getUserInfo;
            }
        },
        methods: {
            // handleSelect(key, keyPath) {
            //     console.log(key, keyPath);
            // }

            // 从服务器获取博文(推荐分类)
            getRecommendBlogList() {
                this.axios.post(
                    "article/recommend", {
                        "page": 1,
                    }).then((res) => {
                    window.console.log(res.data)
                    this.$store.commit("updateBlogList", res.data)
                })
            },

            // 从服务器获取博文(普通分类)
            getBlogList(cid) {
                this.axios.post(
                    "article/classify", {
                        "id": cid,
                        "page": 1,
                    }).then((res) => {
                    window.console.log(res.data)
                    this.$store.commit("updateBlogList", res.data)
                })
            },

            // 从服务器获取分类
            getBlogClass() {
                this.axios.post(
                    "article/classifyList", {}).then((res) => {
                    // window.console.log(res.data)
                    this.$store.commit("updateBlogClassifyList", res.data)
                })
            },

            test1() {
                // window.console.log("user:" + this.$store.getters.getUserInfo);
                window.console.log(this.$store.getters.getBlogClassifyList);
            }

        },
        components: {
            compArticleList,
            navigation
        },
        created() {
            this.getBlogClass();
            this.getRecommendBlogList();
        },
        mounted() {
            if (this.$store.state.isLogin) {
                this.axios.post(
                    "/myInfo/view", {}
                ).then((res) => {
                    window.console.log(res.data)
                    this.$store.commit("updateUser", res.data)
                }).catch((err) => {
                    window.console.log(err.data)
                }).finally(() => {
                    window.console.log("无论如何都会执行")
                })
            }
        }
    }
</script>

<style scoped>
    #blogIndex {
        height: 100vh;
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

    .el-row {
        margin-bottom: 20px;
    }

    .el-col {
        border-radius: 4px;
    }

    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }

    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }

</style>