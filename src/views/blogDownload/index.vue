<template>
    <div>
        <el-container>
            <el-header style="padding: 0">
                <navigation/>
            </el-header>
            <el-container>
                <el-main>
                    <el-row>
                        <el-col :span="24"><div class="grid-img">
                            <img style=" width:100%;" src="../../assets/coin.jpg"/>
                        </div></el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
                        <el-col :span="14"><div class="grid-content bg-purple">
                            <blog-download/>
                            <down-discuss/>
                            <download-recommended/>
                        </div></el-col>
                        <el-col :span="6"><div class="grid-content bg-purple-light">
                            <upload-user/>
                            <div class="adcertise">
                                这里显示广告
                            </div>
                        </div></el-col>
                    </el-row>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    import navigation from "../../components/navigation";
    import blogDownload from "../../components/BlogDownload/blogDownload";
    import uploadUser from "../../components/BlogDownload/uploadUser";
    import downDiscuss from "../../components/BlogDownload/downDiscuss";
    import downloadRecommended from "../../components/BlogDownload/downloadRecommended";
    export default {
        name: "index",
        components:{
            navigation,
            blogDownload,
            uploadUser,
            downDiscuss,
            downloadRecommended
        },
        methods:{
            // 请求资源对象
            getResourceDetail(){
                this.axios.post(
                    "resource/resourceDetail",{
                        "id":2,
                    }).then((res)=>{
                    window.console.log(res.data)
                    // this.$store.commit("updateBlogList",res.data)
                })
            },
            // 发送购买资源请求
            postResourcePayment(){
                this.axios.post(
                    "resource/buyLicense",{
                        "id":101,
                        "resourceDetail":{
                            "id": 2,
                        },
                    }).then((res)=>{
                    window.console.log(res.data)
                    // this.$store.commit("updateBlogList",res.data)
                })
            },
            // 发送评论
            postResourceComment(){
                this.axios.post(
                    "resource/sendComment",{
                        "resourceDetail":{
                            "id": 2,
                        },
                        "content": "借一部说话",
                    }).then((res)=>{
                    window.console.log(res.data)
                    // this.$store.commit("updateBlogList",res.data)
                })
            },
        },
        created() {
            // this.getResourceDetail()
            // this.postResourcePayment()
            // this.postResourceComment()
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
    .bg-purple-dark {
    //background: #99a9bf;
    }
    .bg-purple {
    //background: #d3dce6;
    }
    .bg-purple-light {
    //background: #e5e9f2;
    }
    .grid-img{
        min-height: 36px;
        margin-bottom: 25px;
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

    .adcertise{
        width: 70%;
        background: white;
        height: 260px;
        margin-top: 30px;
        margin-left: 25px;
    }
</style>