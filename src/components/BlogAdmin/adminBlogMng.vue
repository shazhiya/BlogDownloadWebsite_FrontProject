<template>
    <div class="adminright">
            <div>
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                    <el-form-item label="分类">
                        <el-select v-model="formInline.region" style="width: 100px">
                            <el-option label="ID" value="shanghai"/>
                            <el-option label="Name" value="beijing"/>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="日期">
                        <el-col :span="11">
                            <el-date-picker type="date" placeholder="开始时间" v-model="formInline.date1"
                                            style="width: 100%;"/>

                        </el-col>
                        <el-col class="line" :span="1">-</el-col>
                        <el-col :span="11">
                            <el-date-picker placeholder="结束时间" v-model="formInline.date2" style="width: 100%;"/>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="关键字搜索">
                        <el-select v-model="formInline.region" style="width: 100px">
                            <el-option label="ID" value="shanghai"/>
                            <el-option label="Name" value="beijing"/>
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-input v-model="formInline.user" placeholder="请输入内容"/>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">查询</el-button>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit" style="margin-left: 250px">新增</el-button>
                    </el-form-item>
                </el-form>
            </div>
<!--        日期   标题  状态  类型   阅读数   点赞数   收藏数   硬币数   操作  -->
        <el-table :data="adminBlogList" border>
            <el-table-column align="center" label="发布日期" width="200px"><template slot-scope="scope">{{timestamp13ToTime(scope.row.releaseTime)}}</template></el-table-column>
            <el-table-column align="center" prop="title" label="文章标题" width="300px"></el-table-column>
            <el-table-column align="center" prop="ttype" label="文章类型" width="80px"></el-table-column>
            <el-table-column align="center" prop="classifyName" label="文章分类" width="100px"></el-table-column>
            <el-table-column align="center" prop="account" label="文章作者"></el-table-column>
            <el-table-column align="center" prop="readNum" label="阅读数" width="80px"></el-table-column>
            <el-table-column align="center" prop="likeNUm" label="点赞数" width="80px"></el-table-column>
            <el-table-column align="center" prop="coinNum" label="硬币数" width="80px"></el-table-column>
            <el-table-column align="center" prop="favoriteNum" label="收藏数" width="80px"></el-table-column>
            <el-table-column align="center" prop="status" label="文章状态" width="80px"></el-table-column>
            <el-table-column align="center" label="操作">
                <template slot-scope="scope">
                    <el-button size="small" type="warning">编辑</el-button>
                    <el-button size="small" type="danger" @click="postAdminDeleteBlog(scope.row.id)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination
                style="text-align: right; margin-top: 30px"
                background
                layout="prev, pager, next"
                :total="1000">
        </el-pagination>
    </div>
</template>

<script>
    export default {
        name: "adminBlogMng",
        computed:{
            adminBlogList(){
                return this.$store.getters.getAdminBlogList;
            },
        },
        methods:{
            handleClick(row) {
                window.console.log(row);
            },
            onSubmit() {
                window.console.log('submit!');
            },
            // 从服务器获取博文
            getAdminBlogList(){
                this.admin.post(
                    "article/query",{
                        "page":1,
                    }).then((res)=>{
                    window.console.log(res.data)
                    this.$store.commit("updateAdminBlogList",res.data)
                })
            },
            // 管理员删除博文
            postAdminDeleteBlog(bid){
                this.admin.post(
                    "article/delete",{
                        "id":bid,
                    }).then((res)=>{
                    window.console.log(res.data)
                    if(res.data == true){
                        this.$message({
                            message: '消息：删除成功',
                            type: 'success'
                        });
                        this.$router.go(0);
                    }else {
                        this.$message({
                            message: '消息：删除失败',
                            type: 'error'
                        });
                    }
                })
            },
            timestamp13ToTime(timestamp) {
                const date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
                const Y = date.getFullYear() + '-';
                const M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
                const D = date.getDate() + ' ';
                const h = date.getHours() + ':';
                const m = date.getMinutes() + ':';
                const s = date.getSeconds();
                return Y + M + D + h + m + s;
            },
            getClassifyNameById(bcid){
                for(let i=0;i<this.articleClassify.length;i++){
                    if(bcid === this.articleClassify[i].id){
                        return this.articleClassify[i].name;
                    }
                }
            }
        },
        data() {
            const item = {
                date: '2016-05-02'
            };
            return {
                tableData: Array(10).fill(item),
                formInline: {
                    user: '',
                    region: '',
                    date1: '',
                    date2: ''
                }
            }
        },
        created() {
            this.getAdminBlogList();
            // this.postAdminDeleteBlog(6);
        }
    }
</script>

<style scoped>

    .adminright{
        width: 1500px;
        margin: 20px auto;
    }

</style>