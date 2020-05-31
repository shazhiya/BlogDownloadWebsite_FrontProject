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
                            <div class="text-content"><span>542</span></div>
                            <div class="data-ystd">
                                <span>昨日</span>
                                <span>381</span>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="6">
                        <el-card class="grid-content bg-purple">
                            <div class="data-name">点赞数</div>
                            <div class="text-content"><span>27</span></div>
                            <div class="data-ystd">
                                <span>昨日</span>
                                <span>12</span>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="6">
                        <el-card class="grid-content bg-purple">
                            <div class="data-name">硬币数</div>
                            <div class="text-content"><span>84</span></div>
                            <div class="data-ystd">
                                <span>昨日</span>
                                <span>29</span>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="6">
                        <el-card class="grid-content bg-purple">
                            <div class="data-name">收藏数</div>
                            <div class="text-content"><span>12</span></div>
                            <div class="data-ystd">
                                <span>昨日</span>
                                <span>3</span>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>
                <div class="rowLine"></div>
                <el-row :gutter="20">
                    <el-col :span="6">
                        <el-card class="grid-content bg-purple">
                            <div class="data-name">资源购买</div>
                            <div class="text-content"><span>24</span></div>
                            <div class="data-ystd">
                                <span>昨日</span>
                                <span>6</span>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="6">
                        <el-card class="grid-content bg-purple">
                            <div class="data-name">下载数</div>
                            <div class="text-content"><span>35</span></div>
                            <div class="data-ystd">
                                <span>昨日</span>
                                <span>21</span>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="6">
                        <el-card class="grid-content bg-purple">
                            <div class="data-name">硬币数</div>
                            <div class="text-content"><span>120</span></div>
                            <div class="data-ystd">
                                <span>昨日</span>
                                <span>30</span>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="6">
                        <el-card class="grid-content bg-purple">
                            <div class="data-name">评论数</div>
                            <div class="text-content"><span>7</span></div>
                            <div class="data-ystd">
                                <span>昨日</span>
                                <span>0</span>
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

        <!--        </div>-->
    </div>
</template>

<script>
    export default {
        name: "DataAnalysis",
        data() {
            return {
                activeIndex: '1',
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
            //echarts
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
    #blogChart {
        width: 50%;
        height: 450px;
        margin-left: auto;
        margin-right: auto;
    }

    #resourceChart {
        width: 50%;
        height: 450px;
        margin-left: auto;
        margin-right: auto;
    }

    .content {
        margin-top: 30px;
    }

    .rowLine {
        height: 20px;
    }

    .bg-purple {
        background: rgb(235, 248, 252);
    }

    .grid-content {
        border-radius: 4px;
        min-height: 100px;
    }

    .grid-content .data-name {
        font-size: 14px;
        line-height: 18px;
        color: #757575;
    }

    .grid-content .text-content {
        margin-top: 6px;
        margin-bottom: 8px;
        line-height: 22px;
        font-weight: 600;
        font-size: 22px;
        color: #00a1d6;
    }

    .grid-content .data-ystd {
        white-space: nowrap;
        color: #757575;
        font-size: 14px;
        line-height: 18px;
    }

    .grid-content .data-ystd span {
        margin-right: 4px;
    }

    .grid-content .data-ystd span:nth-child(2) {
        color: #00a1d6;
    }

    .allCharts h3{
        margin-bottom: 10px;
    }

</style>