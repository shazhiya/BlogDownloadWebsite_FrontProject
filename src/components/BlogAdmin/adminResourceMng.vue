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
        <el-table :data="tableData" border>
            <el-table-column prop="date" label="日期" width="140" align="center">
            </el-table-column>
            <el-table-column prop="date" label="标题" fit align="center">
            </el-table-column>
            <el-table-column prop="date" label="状态" width="140" align="center">
            </el-table-column>
            <el-table-column prop="date" label="类型" width="140" align="center">
            </el-table-column>
            <el-table-column prop="date" label="阅读数" width="140" align="center">
            </el-table-column>
            <el-table-column prop="date" label="点赞数" width="140" align="center">
            </el-table-column>
            <el-table-column prop="date" label="收藏数" width="140" align="center">
            </el-table-column>
            <el-table-column prop="date" label="硬币数" width="140" align="center">
            </el-table-column>
            <el-table-column
                    align="center"
                    label="操作"
                    width="100">
                <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                    <el-button type="text" size="small">编辑</el-button>
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
        name: "adminResourceMng",
        methods:{
            handleClick(row) {
                window.console.log(row);
            },
            onSubmit() {
                window.console.log('submit!');
            },
            // 从服务器获取资源
            getAdminResourceList(){
                this.axios.post(
                    "resource/query",{
                        "page":1,
                    }).then((res)=>{
                    window.console.log(res.data)
                    // this.$store.commit("updateBlogList",res.data)
                })
            },
            // 管理员删除资源
            getAdminDeleteResource(){
                this.axios.post(
                    "resource/delete",{
                        "id":1,
                    }).then((res)=>{
                    window.console.log(res.data)
                    // this.$store.commit("updateBlogList",res.data)
                })
            },
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
        }
    }
</script>

<style scoped>

    .adminright{
        width: 1500px;
        margin: 20px auto;
    }

</style>