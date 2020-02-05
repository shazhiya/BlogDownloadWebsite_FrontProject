<template>
    <div>
        <el-container id="blogIndex" style="background-color:#D3DCE6">
            <!-- header -->
            <el-header style="padding: 0px">
                <!-- 导航栏组件 -->
                <navigation></navigation>
            </el-header>
            <!-- container  -->
            <el-container>
                <!-- 左侧aside -->
                <el-aside width="25%">
                    <div style="height: 500px; width: auto;background-color: #333333;margin-left: 52%;margin-top: 10%;border-radius: 4px">
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

                </el-aside>
                <el-container>
                    <el-main style="line-height: 70px;background-color:#B3C0D1;margin-top: 50px;margin-left: 10px;margin-right: 10px;border-radius: 4px">
                        <ul style="list-style: none;">
                            <li>
                                <compArticleList/>
                            </li>
                            <li>
                                <compArticleList/>
                            </li>
                            <li>
                                <compArticleList/>
                            </li>
                            <li>
                                <compArticleList/>
                            </li>
                        </ul>
                    </el-main>

                    <el-footer>
                        Footer
                    </el-footer>
                </el-container>
                <el-aside width="25%">
                    <div style="height: 200px; width: auto;background-color: #333333;margin-right: 52%;margin-top: 10%;border-radius: 4px">

                    </div>
                    <div style="height: 400px; width: auto;background-color: #333333;margin-right: 52%;margin-top: 10%;border-radius: 4px">

                    </div>
                </el-aside>
            </el-container>
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

    .el-header, .el-footer {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
    }

    .el-aside {
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
        line-height: 200px;
    }

    .el-main {
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
        line-height: 160px;
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

</style>