<template>
    <div>
        <el-row :gutter="23">
            <!-- 类型下拉框 -->
            <el-col :span="4">
                <div class="label-warp-type">
                    <label>类型：</label>
                    <div class="warp-content">
                        <el-select v-model="type" placeholder="请选择" style="width: 100%;">
                            <el-option
                                    v-for="item in this.resourceType"
                                    :key="item"
                                    :label="item"
                                    :value="item">
                            </el-option>
                        </el-select>
                    </div>
                </div>
            </el-col>
            <!-- 日期选择 -->
            <el-col :span="7">
                <div class="label-warp-date">
                    <label>日期：</label>
                    <div class="warp-content">
                        <el-date-picker
                                style="width: 80%"
                                v-model="searchDate"
                                type="daterange"
                                align="right"
                                unlink-panels
                                range-separator="至"
                                start-placeholder="开始日期"
                                end-placeholder="结束日期"
                        > <!-- :picker-options="pickerOptions" -->
                        </el-date-picker>
                    </div>
                </div>
            </el-col>
            <!-- 关键字下拉框 -->
            <el-col :span="4">
                <div class="label-warp-keyWord">
                    <label>分类：</label>
                    <div class="warp-content">
                        <el-select v-model="resourceClassifyName" style="width: 78%">
                        <el-option
                                v-for="classify in resourceClassify"
                                :key="classify.id"
                                :value="classify.name"
                                :label="classify.name">
                        </el-option>
                    </el-select>
                    </div>
                </div>
            </el-col>
            <!-- 输入框 -->
            <el-col :span="4">
                <el-input v-model="search_keyWord" placeholder="请输入内容" style="width: 100%"></el-input>
            </el-col>
            <!-- 搜索按钮 -->
            <el-col :span="3">
                <el-button type="primary" style="width: 60%">搜索</el-button>
            </el-col>
            <!-- 新增按钮 -->
            <el-col :span="2">
                <router-link to="/bupload">
                    <el-button type="success" style="width: 100%;">新增</el-button>
                </router-link>
            </el-col>
        </el-row>

        <!-- 30px占位 -->
        <div class="black-space-30"></div>

        <!-- 表格数据 -->
        <el-table :data="tableData" border style="width: 100%">
            <el-table-column align="center" type="selection" width="55"></el-table-column>
            <!--            <el-table-column align="center" prop="releaseTime" label="发布日期" width="200px"></el-table-column>-->
            <el-table-column align="center" label="上传日期" width="200px"><template slot-scope="scope">{{timestamp13ToTime(scope.row.releasetime)}}</template></el-table-column>
            <el-table-column align="center" prop="name" label="资源标题" width="300px"></el-table-column>
            <el-table-column align="center" prop="type" label="资源类型" width="80px"></el-table-column>
            <el-table-column align="center" label="文章分类" width="100px"><template slot-scope="scope">{{getClassifyNameById(scope.row.rcid)}}</template></el-table-column>
            <el-table-column align="center" label="上传者">{{user.account}}</el-table-column>
            <el-table-column align="center" label="购买数" width="80px">999</el-table-column>
            <el-table-column align="center" label="下载数" width="80px">999</el-table-column>
            <el-table-column align="center" label="硬币数" width="80px">999</el-table-column>
            <el-table-column align="center" prop="status" label="资源状态" width="80px"></el-table-column>
            <el-table-column align="center" label="操作">
                <template slot-scope="scope">
                    <el-button size="small" type="warning">撤销</el-button>
                    <el-button size="small" type="danger" @click="postDeleteUserMngResource(scope.row.id)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>

        <!-- 30px占位 -->
        <div class="black-space-30"></div>

        <!-- 底部分页 -->
        <el-row>
            <el-col :span="12">
                <el-button size="medium">批量删除</el-button>
            </el-col>
            <el-col :span="12">
                <el-pagination
                        class="right"
                        background
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="100"> <!--:page-size="[10,20,50,100]" -->
                </el-pagination>
            </el-col>
        </el-row>

    </div>
</template>

<script>
    export default {
        name: "resourceConsole",
        data() {
            return {
                resourceType: ['文档', '视频','工具'],
                type: '',
                searchDate: null,
                resourceClassifyName: null,
                search_keyWord: null,
                // test: this.$store.getters.getUserMngResourceList.resourceList,
            }
        },
        computed:{
            user(){
                return this.$store.getters.getUserInfo;
            },
            resourceClassify(){
                return this.$store.getters.getResourceClassifyList;
            },
            tableData(){
                return this.$store.getters.getUserMngResourceList.resourceList;
            },
        },
        methods: {
            handleSizeChange(val) {
                window.console.log(val);
            },
            handleCurrentChange(val) {
                window.console.log(val);
            },
            // 获取当前登录用户的的资源list
            getUserMngResourceList(){
                this.axios.post(
                    "resource/home",{
                    }).then((res)=>{
                    window.console.log(res.data)
                    this.$store.commit("updateUserMngResourceList",res.data)
                })
            },
            // 删除某个id的资源
            postDeleteUserMngResource(rid){
                this.axios.post(
                    "resource/delete",{
                        "id":rid,
                    }).then((res)=>{
                    window.console.log("postDeleteUserMngResource:" + res.data)
                    if (res.data == true) {
                        this.successMessage();
                        this.$router.go(0);
                    } else {
                        this.errorMessage();
                    }
                })
            },
            // 获取资源分类
            getResourceClassifyList(){
                this.axios.post(
                    "resource/classify",{

                    }).then((res)=>{
                    window.console.log(res.data)
                    this.$store.commit("updateResourceClassifyList",res.data)
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
            getClassifyNameById(rcid){
                for(let i=0;i<this.resourceClassify.length;i++){
                    if(rcid === this.resourceClassify[i].id){
                        return this.resourceClassify[i].name;
                    }
                }
            },
            successMessage() {
                this.$message({
                    message: '消息：删除成功',
                    type: 'success'
                });
            },
            errorMessage() {
                this.$message({
                    message: '消息：删除失败',
                    type: 'error'
                });
            },
        },
        created() {
            this.getResourceClassifyList();
            this.getUserMngResourceList();
            window.console.log(this.tableData);
        }
    }
</script>

<style scoped>
    .right {
        float: right;
    }

    .left {
        float: left;
    }

    .label-warp-type label {
        float: left;
        line-height: 40px;
        width: 60px;
    }

    .warp-content {
        margin-left: 60px;
    }

    .label-warp-date label {
        float: left;
        line-height: 40px;
        width: 93px;
        text-align: right;
    }

    .label-warp-keyWord label {
        float: left;
        line-height: 40px;
        width: 99px;
        text-align: right;
    }

    /* el table */
    div.el-table td, div.el-table th {
        /*text-align: center;*/
    }

    .black-space-30 {
        height: 30px;
    }
</style>