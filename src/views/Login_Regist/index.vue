<template>
    <div id="login">
        <div class="top"></div>
        <div class="login-wrap">
            <div class="login-card">
                <img src="../../assets/Logo_03.jpg" class="img-logo">
                <ul class="menu-tab">
                    <li class="menu-li" v-for="item in menuTab" :key="item.id" :class="{'current':item.current}" @click="toggleMenu(item)">{{item.txt}}</li>
                </ul>
                <login v-if="menuTab[0].current"></login>
                <regist v-else-if="menuTab[1].current"></regist>
            </div>

        </div>

    </div>
</template>

<script>
    import Regist from "../../components/Regist/regist";
    import Login from "../../components/Login/login";
    export default {
        name: "login_regist",
        components: {Login, Regist},
        data(){
            return{
                menuTab:[
                    { txt:'登录', current:true },
                    { txt:'注册', current:false }
                ],

            }
        },
        methods:{
            // Vue 是 数据驱动视频渲染
            toggleMenu(data){
                //console.log(data)
                this.menuTab.forEach(elem =>{
                    elem.current = false
                })
                data.current = true
            },
        }
    }
</script>

<style scoped>
    #login{
        height: 100vh;
        background-image: url('../../assets/login-bg.png')
    }
    .login-wrap{
        width: 330px;
        margin: auto;
        padding-top: 150px;
    }
    .menu-tab{
        text-align: center;
    }
    .menu-li {
        display: inline-block;
        width: 88px;
        line-height: 36px;
        font-size: 14px;
        color: #000000;
        border-radius: 2px;
        cursor: pointer;
    }
    .current{
        background-color: rgba(0,0,0,.1);
    }
    .login-card{
        background-color: aliceblue;
        width: 360px;
        height: 560px;
        border-radius: 4px;
        box-shadow: 1px 1px 10px #888;
    }
    .img-logo{
        margin-top: 50px;
        margin-bottom: 20px;
        margin-left: 125px;
        margin-right: auto;
    }

</style>