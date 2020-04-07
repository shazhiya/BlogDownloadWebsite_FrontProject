<template>
    <div id="nav-wrap">
        <h1 class="logo">
            <img src="../../assets/Logo.png" height="60" width="100"/>
        </h1>
        <el-menu
                default-active="1-4-1"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                :collapse=false
                background-color="transparent"
                text-color="#fff"
                active-text-color="#fff"
                router>
            <template v-for="(item,index) in routers" :index="index+''">
                <el-submenu :key="item.id" v-if="item.menu">
                    <!-- 一级菜单 -->
                    <template slot="title">
                        <i :class="item.meta.icon"></i>
                        <span slot="title">{{item.meta.name}}</span>
                    </template>
                    <!-- 子级菜单 -->
                    <el-menu-item v-for="subItem in item.children" :key="subItem.id" :index="subItem.path">
                        <i :class="subItem.meta.icon"></i>{{subItem.meta.name}}
                    </el-menu-item>
                </el-submenu>
            </template>
        </el-menu>
    </div>
</template>

<script>
    export default {
        name: "blogMngNav",
        data() {
            return {
                routers: this.$router.options.routes,
            }
        },
        setup(){

        },
        created() {
            // window.console.log(this.routers);
            // window.console.log(this.props.red);
        },
        methods: {
            handleOpen(key, keyPath) {
                window.console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                window.console.log(key, keyPath);
            },
        }
    }
</script>

<style scoped>
    #nav-wrap {
        position: fixed;
        top: 0;
        left: 0;
        width: 250px;
        height: 100vh;
        background-color: #344a5f;
    }
    .logo{
        text-align: center;
    }
    .logo>img{
        margin: 28px auto 25px;
        width: 92px;
    }
</style>