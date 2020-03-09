<template>
    <div>
        <!-- 表单开始 -->
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="login-form" size="medium ">

            <el-form-item prop="username" class="item-form">
                <label>账号</label>
                <el-input type="text" v-model="ruleForm.account" autocomplete="off" maxlength="16"></el-input>
            </el-form-item>

            <el-form-item prop="password" class="item-form">
                <label>密码</label>
                <el-input type="password" v-model="ruleForm.password" autocomplete="off" minlength="6" maxlength="20"></el-input>
            </el-form-item>

            <el-form-item prop="code" class="item-form">
                <label>验证码</label>
                <el-row :gutter="10">
                    <el-col :span="16">
                        <el-input v-model.number="ruleForm.code" minlength="6" maxlength="6"></el-input>
                    </el-col>
                    <el-col :span="8">
                        <el-button type="success" class="block2">验证码</el-button>
                    </el-col>
                </el-row>
            </el-form-item>

            <el-form-item>
                <el-button type="danger" @click="submitForm" class="login-btn block1">提交</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import router from "../../router";

    export default {
        name:'login',
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

            // 验证 验证码
            var validateCode = (rule, value, callback) => {
                let reg = /^[a-z0-9]{6}$/
                if (value === '') {
                    callback(new Error('请输入验证码'));
                }else if(!reg.test(value)){
                    callback(new Error('验证码格式有误'))
                }else {
                    callback(); // 返回 true
                }
            };

            return{
                // 表单数据
                ruleForm: {
                    account: '',
                    password: '',
                    Code: ''
                },
                rules: {
                    account: [
                        { validator: validateUsername, trigger: 'blur' }
                    ],
                    password: [
                        { validator: validatePassword, trigger: 'blur' }
                    ],
                    code: [
                        { validator: validateCode, trigger: 'blur' }
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

                var url = "/login"


                this.axios.post(
                    url,
                    data).then((res)=> {
                    window.console.log(res.data)
                    if(res.data == true){
                        this.$store.commit("updateIsLogin")
                        router.push("/bIndex")
                    }else {
                        window.alert('登录失败')
                    }

                })

            }
        }
    }
</script>

<style lang="scss" scoped>
    .login-form{
        label {
            font-size: 14px;
            color: #000000;
        }
        .item-form{
            margin-bottom: 13px;
            margin-left: 25px;
            margin-right: 25px;
        }
        .block1{
            width: 310px;
            display: block;
        }
        .block2{
            width: 97px;
            display: block;
        }
        .login-btn{
            margin-top: 10px;
            margin-left: 25px;
            margin-right: 25px;
        }
    }
    .radio{
        margin-left: 110px;
        margin-bottom: 5px;
    }
</style>