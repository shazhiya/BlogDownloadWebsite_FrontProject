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
                                    <el-menu-item index="2">
                                        <i class="el-icon-arrow-right"></i>
                                        <span slot="title">Java</span>
                                    </el-menu-item>
                                    <el-menu-item index="3">
                                        <i class="el-icon-arrow-right"></i>
                                        <span slot="title">C/C++</span>
                                    </el-menu-item>
                                    <el-menu-item index="4">
                                        <i class="el-icon-arrow-right"></i>
                                        <span slot="title">Python</span>
                                    </el-menu-item>
                                    <el-menu-item index="5">
                                        <i class="el-icon-arrow-right"></i>
                                        <span slot="title">PHP</span>
                                    </el-menu-item>
                                    <el-menu-item index="6">
                                        <i class="el-icon-arrow-right"></i>
                                        <span slot="title">C#</span>
                                    </el-menu-item>
                                    <el-menu-item index="7">
                                        <i class="el-icon-arrow-right"></i>
                                        <span slot="title">JavaScript</span>
                                    </el-menu-item>
                                    <el-menu-item index="8">
                                        <i class="el-icon-arrow-right"></i>
                                        <span slot="title">Vue</span>
                                    </el-menu-item>
                                    <el-menu-item index="9">
                                        <i class="el-icon-arrow-right"></i>
                                        <span slot="title">SQL</span>
                                    </el-menu-item>
                                </el-menu>
                            </div>
                    </el-col>
                    <el-col :span="8">
                        <div style="margin-top: -2%">
                            <compArticleList/>
                            <compArticleList/>
                            <compArticleList/>
                            <compArticleList/>
                            <compArticleList/>

                        </div>

                    </el-col>
                    <el-col :span="8">
                        <div style="height: 200px; width: 200px;background-color: #333333;margin-left: 10%;border-radius: 4px">

                        </div>
                        <div style="height: 400px; width: 200px;background-color: #333333;margin-left: 10%;margin-top:5%;border-radius: 4px">
                        </div>
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
        methods: {
            // handleSelect(key, keyPath) {
            //     console.log(key, keyPath);
            // }
        },
        components:{
            compArticleList,
            navigation
        }
    }
</script>

<style scoped>
    #blogIndex{
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