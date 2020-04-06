<template>
    <el-menu
            class="el-menu-demo"
            mode="horizontal"
            background-color="#FDF9F3"
            text-color="#000"
            active-text-color="#ffd04b">

        <el-row style="margin-left: 100px">
            <!-- 导航栏 单个导航 -->
            <el-col :span="1" :offset="3">
                <el-menu-item index="1">
                    <img src="../assets/Logo.png" height="57%" width="100%" class="logo"/>
                </el-menu-item>
            </el-col>
            <el-col :span="1">
                <router-link to="/bIndex">
                    <el-menu-item index="2">
                        首页
                    </el-menu-item>
                </router-link>
            </el-col>
            <el-col :span="1">
                <router-link to="/bIndex">
                    <el-menu-item index="3">
                        博客
                    </el-menu-item>
                </router-link>
            </el-col>
            <el-col :span="1">
                <router-link to="/resourceIndex">
                    <el-menu-item index="4">
                        下载
                    </el-menu-item>
                </router-link>
            </el-col>
            <!-- 导航栏 搜索框 -->
            <el-col :span="3" :offset="3" style="margin-top: 8px">
                <head-search></head-search>
            </el-col>
            <el-col :span="1" :offset="0" style="margin-top: 8px">
                <el-button type="success" icon="el-icon-search">
                    Search
                </el-button>
            </el-col>
            <!-- 导航栏 用户框 -->
            <el-col :span="3" :offset="3" style="font-size:24px;margin-top: 10px">
                <el-row :gutter="40">
                    <el-col :span="1">
                        <router-link to="/bWrite">
                            <i class="el-icon-edit"></i>
                        </router-link>
                    </el-col>
                    <el-col :span="1">
                        <router-link to="/bmessage">
                            <i class="el-icon-bell"></i>
                        </router-link>
                    </el-col>
                    <el-col :span="1">
                        <router-link to="/bMng">
                            <i class="el-icon-coin"></i>
                        </router-link>
                    </el-col>
                    <el-col :span="1">
                        <el-dropdown>
                            <i class="el-icon-user iconSize"></i>
                            <el-dropdown-menu slot="dropdown" style="width: 160px">
                                <a @click="gotoUserHome">
                                    <el-dropdown-item icon="el-icon-s-home">我的博客</el-dropdown-item>
                                </a>
                                <router-link to="/bMng">
                                    <el-dropdown-item icon="el-icon-s-platform">博客管理</el-dropdown-item>
                                </router-link>
                                <router-link to="/bMng">
                                    <el-dropdown-item icon="el-icon-monitor">资源管理</el-dropdown-item>
                                </router-link>
                                <router-link to="/bcoins">
                                    <el-dropdown-item icon="el-icon-s-order">硬币明细</el-dropdown-item>
                                </router-link>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>


    </el-menu>
</template>

<script>
    import headSearch from './headSearch';

    export default {
        name: "navigation",

        data() {
            return {}
        },
        components: {
            headSearch
        },
        methods:{
            // 跳转到当前登录用户博客主页
            gotoUserHome(){
                this.$router.push({
                        name:'bloghome',
                        query:{
                            uid: this.$store.getters.getUserInfo.id,
                        }
                    }
                )
            }
        }
    }
</script>

<style scoped>
    .router-link-active {
        text-decoration: none;
    }

    a {
        text-decoration: none;
    }

    .iconSize {
        font-size: 24px;
    }
</style>