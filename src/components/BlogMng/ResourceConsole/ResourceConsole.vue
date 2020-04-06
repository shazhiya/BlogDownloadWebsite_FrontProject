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
                                    v-for="item in this.articleType"
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
                                v-model="articleDate"
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
                        <el-select v-model="articleClassifyName" style="width: 78%">
                            <el-option
                                    v-for="classify in articleClassify"
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
                <el-button type="success" style="width: 100%;">新增</el-button>
            </el-col>
        </el-row>

        <!-- 30px占位 -->
        <div class="black-space-30"></div>

        <!-- 表格数据 -->
        <el-table :data="tableData" border style="width: 100%">
            <el-table-column align="center" type="selection" width="55"></el-table-column>
            <!--            <el-table-column align="center" prop="releaseTime" label="发布日期" width="200px"></el-table-column>-->
            <el-table-column align="center" prop="date" label="上传日期" width="200px"></el-table-column>
            <el-table-column align="center" prop="title" label="资源标题" width="300px"></el-table-column>
            <el-table-column align="center" prop="type" label="资源类型" width="80px"></el-table-column>
            <el-table-column align="center" prop="classify" label="资源分类" width="100px"></el-table-column>
            <el-table-column align="center" prop="author" label="上传者"></el-table-column>
            <el-table-column align="center" prop="readNum" label="下载数" width="80px"></el-table-column>
            <el-table-column align="center" prop="likeNum" label="点赞数" width="80px"></el-table-column>
            <el-table-column align="center" prop="coinNum" label="硬币数" width="80px"></el-table-column>
            <el-table-column align="center" prop="status" label="资源状态" width="80px"></el-table-column>
            <el-table-column align="center" label="操作">
                <template>
                    <el-button size="small" type="warning">编辑</el-button>
                    <el-button size="small" type="danger">删除</el-button>
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
                user: this.$store.getters.getUserInfo,
                articleClassify: this.$store.getters.getBlogClassifyList,
                tableData:
                    [{
                        date: '2016-04-22 18:05:42 ',
                        title: 'matlab基本操作和语法',
                        type: '文档',
                        classify: 'Java',
                        author: '安小北north',
                        readNum: '19918',
                        likeNum: '36',
                        coinNum: '1800',
                        collectNum: '524',
                        status: '公开',
                    },
                        {
                            date: '2016-04-22 18:05:42 ',
                            title: 'matlab基本操作和语法',
                            type: '文档',
                            classify: 'Java',
                            author: '安小北north',
                            readNum: '19918',
                            likeNum: '36',
                            coinNum: '1800',
                            collectNum: '524',
                            status: '公开',
                        },
                        {
                            date: '2016-04-22 18:05:42 ',
                            title: 'matlab基本操作和语法',
                            type: '文档',
                            classify: 'Java',
                            author: '安小北north',
                            readNum: '19918',
                            likeNum: '36',
                            coinNum: '1800',
                            collectNum: '524',
                            status: '公开',
                        },
                        {
                            date: '2016-04-22 18:05:42 ',
                            title: 'matlab基本操作和语法',
                            type: '文档',
                            classify: 'Java',
                            author: '安小北north',
                            readNum: '19918',
                            likeNum: '36',
                            coinNum: '1800',
                            collectNum: '524',
                            status: '公开',
                        },
                        {
                            date: '2016-04-22 18:05:42 ',
                            title: 'matlab基本操作和语法',
                            type: '转载',
                            classify: 'Matlab',
                            author: '安小北north',
                            readNum: '19918',
                            likeNum: '36',
                            coinNum: '1800',
                            collectNum: '524',
                            status: '公开',
                        },
                    ],
                articleType: ['原创', '转载'],
                type: '',
                articleDate: null,
                articleClassifyName: null,
                search_keyWord: null,
                test: this.$store.getters.getUserMngBlogList,
            }
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
                    if(res.data == true){
                        window.alert('删除成功')
                    }else {
                        window.alert('删除失败')
                    }
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
        },
        created() {
            this.getBlogClass();
            this.getUserMngResourceList();
            // window.console.log(this.test);
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