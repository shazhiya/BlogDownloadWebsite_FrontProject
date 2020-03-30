<template>
    <div style="width: 90%; height: 100%; margin: auto; border-top: white 1px solid">
        <div class="logo">
            LOGO
        </div>
        <div style="margin-left: 30px; margin-top: 10px">
            <h3>欢迎使用LIBD后台管理系统</h3>
            <p style="font-size: 12px; font-style: oblique; margin-top: 5px">我们提供的低价而不廉价的服务</p>
        </div>
        <div>
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="login-form" size="medium ">

                <el-form-item prop="username" class="item-form">
                    <label>账号</label>
                    <el-input type="text" v-model="ruleForm.account" autocomplete="off" maxlength="16"></el-input>
                </el-form-item>

                <el-form-item prop="password" class="item-form">
                    <label>密码</label>
                    <el-input type="password" v-model="ruleForm.password" autocomplete="off" minlength="6" maxlength="20"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="text" class="forget">忘记密码？</el-button>
                    <el-button type="primary" @click="submitForm" class="login-btn block1">提交</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    import router from "../../router";

    export default {
        name: "adminLogin",
        data(){
            // 验证用户名
            var validateUsername = (rule, value, callback) => {
                //let reg = /^[0-9a-zA-Z_.-]+[@][0-9a-zA-Z_.-]+([.][a-zA-Z]+){1,2}$/; // 邮箱 正则
                let reg=/^\w{4,16}$/; // 账号 6~16 正则
                if (value === '') {
                    callback(new Error('请输入账号'));
                }else if(!reg.test(value)){
                    callback(new Error('账号应由4至16的数字、子母、下划线组成'));
                }else {
                    callback(); // 验证通过 返回true
                }
            };

            // 验证密码
            var validatePassword = (rule, value, callback) => {
                // 密码 正则
                let reg = /^(?!\D+$)(?![^a-zA-Z]+$)\S{6,20}$/;
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else if (!reg.test(value)) {
                    callback(new Error('密码为6至20位数字+字母'));
                } else {
                    callback();
                }
            };

            return{
                // 表单数据
                ruleForm: {
                    account: '',
                    password: ''
                },
                rules: {
                    account: [
                        { validator: validateUsername, trigger: 'blur' }
                    ],
                    password: [
                        { validator: validatePassword, trigger: 'blur' }
                    ]
                },

            }
        },
        // 创建完成后
        created() {
        },
        // 挂载完成后
        mounted() {
        },
        // 写函数的地方
        methods:{
            // Vue 是 数据驱动视频渲染
            submitForm() {
                let data = {
                    account:this.ruleForm.account,
                    password:this.ruleForm.password,
                }

                var url = "sign/login"


                this.axios.post(
                    url,
                    data).then((res)=> {
                    window.console.log(res.data)
                    if(res.data == true){
                        // this.$store.commit("updateIsLogin")
                        router.push("/admin")
                    }else {
                        window.alert('登录失败')
                    }

                })

            }
        }
    }
</script>

<style scoped>
    .logo{
        width: 100px;
        height: 100px;
        background: darkturquoise;
        margin-left: 50px;
        margin-top: 30px;
        line-height: 100px;
        text-align: center;
        color: white;
        border-radius: 999px
    }
    label {
        font-size: 14px;
        color: #000000;
    }
    .item-form{
        margin-bottom: 13px;
        margin-left: 25px;
        margin-right: 25px;
        margin-top: 30px;
    }
    .forget{
        font-size: 12px;
        float: left;
        margin-left: 30px;
        margin-top: 10px;
    }
    .block1{
        width: 110px;
        display: block;
        float: right;
    }
    .login-btn{
        margin-top: 10px;
        margin-left: 25px;
        margin-right: 25px;
    }

</style>