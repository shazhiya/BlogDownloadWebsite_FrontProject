<template>
    <div>
        <div class="header">
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                <el-menu-item index="1">数据总览</el-menu-item>
            </el-menu>
        </div>
        <div class="content">
            <!-- 数据卡片 -->
            <div>
                <el-row :gutter="20">
                    <el-col :span="6">
                        <el-card class="grid-content bg-purple">
                            <div class="data-name">文章阅读</div>
                            <div class="text-content"><span>{{dataJson.blog_readNum}}</span></div>
                            <div class="data-ystd">
                                <span>昨日</span>
                                <span>{{dataJson.yes_blog_readNum}}</span>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="6">
                        <el-card class="grid-content bg-purple">
                            <div class="data-name">点赞数</div>
                            <div class="text-content"><span>{{dataJson.blog_goodNum}}</span></div>
                            <div class="data-ystd">
                                <span>昨日</span>
                                <span>{{dataJson.yes_blog_goodNum}}</span>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="6">
                        <el-card class="grid-content bg-purple">
                            <div class="data-name">硬币数</div>
                            <div class="text-content"><span>{{dataJson.blog_coinNum}}</span></div>
                            <div class="data-ystd">
                                <span>昨日</span>
                                <span>{{dataJson.yes_blog_coinNum}}</span>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="6">
                        <el-card class="grid-content bg-purple">
                            <div class="data-name">收藏数</div>
                            <div class="text-content"><span>{{dataJson.blog_collectNum}}</span></div>
                            <div class="data-ystd">
                                <span>昨日</span>
                                <span>{{dataJson.yes_blog_collectNum}}</span>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>
                <div class="rowLine"></div>
                <el-row :gutter="20">
                    <el-col :span="6">
                        <el-card class="grid-content bg-purple">
                            <div class="data-name">资源购买</div>
                            <div class="text-content"><span>{{dataJson.res_sellNum}}</span></div>
                            <div class="data-ystd">
                                <span>昨日</span>
                                <span>{{dataJson.yes_res_sellNum}}</span>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="6">
                        <el-card class="grid-content bg-purple">
                            <div class="data-name">下载数</div>
                            <div class="text-content"><span>{{dataJson.res_downloadNum}}</span></div>
                            <div class="data-ystd">
                                <span>昨日</span>
                                <span>{{dataJson.yes_res_downloadNum}}</span>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="6">
                        <el-card class="grid-content bg-purple">
                            <div class="data-name">硬币数</div>
                            <div class="text-content"><span>{{dataJson.res_coinNum}}</span></div>
                            <div class="data-ystd">
                                <span>昨日</span>
                                <span>{{dataJson.yes_res_coinNum}}</span>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="6">
                        <el-card class="grid-content bg-purple">
                            <div class="data-name">评论数</div>
                            <div class="text-content"><span>{{dataJson.res_commentNum}}</span></div>
                            <div class="data-ystd">
                                <span>昨日</span>
                                <span>{{dataJson.yes_res_commentNum}}</span>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>
            </div>

            <div class="rowLine"></div>

            <!-- 数据charts -->
            <div class="allCharts">
                <h3>整体数据趋势</h3>
                <div>
                    <el-row gutter="50">
                        <el-col :span="12">
                            <div class="">
                                <div id="blogChart"></div>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="">
                                <div id="resourceChart"></div>
                            </div>
                        </el-col>
                    </el-row>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "adminDataAnalysis",
        data() {
            return {
                activeIndex: '1',
                dataJson:{
                    blog_readNum: 542,
                    yes_blog_readNum: 381,
                    blog_goodNum: 27,
                    yes_blog_goodNum: 12,
                    blog_coinNum: 84,
                    yes_blog_coinNum: 29,
                    blog_collectNum: 12,
                    yes_blog_collectNum: 3,
                    res_sellNum: 24,
                    yes_res_sellNum: 6,
                    res_downloadNum: 35,
                    yes_res_downloadNum: 12,
                    res_coinNum: this.res_sellNum*5,
                    yes_res_coinNum: this.yes_res_sellNum*5,
                    res_commentNum: 8,
                    yes_res_commentNum: 0,
                }

            }
        },
        mounted() {
            this.drawBlogLine();
            this.drawResourceLine();
        },
        methods: {
            drawBlogLine() {
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(document.getElementById('blogChart'))
                // 绘制图表
                myChart.setOption({
                    title: {text: '博文数据趋势'},
                    tooltip: {},
                    xAxis: {
                        type: 'category',
                        data: ["十月", "十一月", "十二月", "一月", "二月", "三月"]
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [
                        {
                            name: '阅读量',
                            type: 'line',
                            smooth: true,
                            data: [125, 289, 482, 249, 652, 350]
                        },
                        {
                            name: '点赞量',
                            type: 'line',
                            smooth: true,
                            data: [16, 39, 76, 98, 126, 144]
                        },
                        {
                            name: '硬币数',
                            type: 'line',
                            smooth: true,
                            data: [25, 46, 154, 128, 298, 182]
                        },
                        {
                            name: '收藏数',
                            type: 'line',
                            smooth: true,
                            data: [2, 12, 27, 22, 29, 34]
                        },
                    ]
                });
            },
            drawResourceLine() {
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(document.getElementById('resourceChart'))
                // 绘制图表
                myChart.setOption({
                    title: {text: '资源数据趋势'},
                    tooltip: {},
                    xAxis: {
                        type: 'category',
                        data: ["十月", "十一月", "十二月", "一月", "二月", "三月"]
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [
                        {
                            name: '购买量',
                            type: 'line',
                            smooth: true,
                            data: [25,38,34,49,52,45]
                        },
                        {
                            name: '下载量',
                            type: 'line',
                            smooth: true,
                            data: [32,45,41,56,72,62]
                        },
                        {
                            name: '硬币数',
                            type: 'line',
                            smooth: true,
                            data: [125,190,170,245,260,220]
                        },
                        {
                            name: '评论数',
                            type: 'line',
                            smooth: true,
                            data: [2, 12, 27, 22, 29, 34]
                        },
                    ]
                });
            }
        }

    }
</script>

<style scoped>

</style>