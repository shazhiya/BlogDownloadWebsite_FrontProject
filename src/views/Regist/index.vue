<template>
    <div id="regist">
        <div class="top"></div>
        <div class="regist-wrap">
            <ul class="menu-tab">
                <li v-for="item in menuTab" :key="item.id" :class="{'current':item.current}" @click="toggleMenu(item)">{{item.txt}}</li>
            </ul>
            <!-- 表单开始 -->
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="regist-form" size="medium ">

                <el-form-item prop="username" class="item-form">
                    <label>账号</label>
                    <el-input type="text" v-model="ruleForm.account" autocomplete="off" maxlength="16"></el-input>
                </el-form-item>

                <el-form-item prop="password" class="item-form">
                    <label>密码</label>
                    <el-input type="password" v-model="ruleForm.password" autocomplete="off" minlength="6" maxlength="20"></el-input>
                </el-form-item>

                <el-form-item prop="repassword" class="item-form">
                    <label>验证密码</label>
                    <el-input type="repassword" v-model="ruleForm.repassword" autocomplete="off" minlength="6" maxlength="20"></el-input>
                </el-form-item>

                <el-form-item prop="code" class="item-form">
                    <label>验证码</label>
                    <el-row :gutter="10">
                        <el-col :span="16">
                            <el-input v-model.number="ruleForm.code" minlength="6" maxlength="6"></el-input>
                        </el-col>
                        <el-col :span="8">
                            <el-button type="success" class="block">获取验证码</el-button>
                        </el-col>
                    </el-row>

                </el-form-item>

                <el-form-item>
                    <el-button type="danger" @click="submitForm" class="login-btn block">提交</el-button>
                </el-form-item>
            </el-form>
        </div>

    </div>
</template>

<script>
    export default {
        name:'index',
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
                }
                else if (!reg.test(value)) {
                    callback(new Error('密码为6至20位数字+字母'));
                } else {
                    callback();
                }
            };

            // 验证两次密码是否一致
            var validateRepassword = (rule, value, callback) => {
                // 密码 正则
                let reg = /^(?!\D+$)(?![^a-zA-Z]+$)\S{6,20}$/;
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value != this.ruleForm.password) {
                    callback(new Error('两次输入密码不一致'));
                } else if (!reg.test(value)) {
                    callback(new Error('密码为6至20位数字+字母'));
                }  else {
                    callback();
                }
            }

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
                menuTab:[
                    { txt:'登录', current:false },
                    { txt:'注册', current:true }
                ],

                // 表单数据
                ruleForm: {
                    account: '',
                    password: '',
                    repassword: '',
                    Code: ''
                },
                rules: {
                    account: [
                        { validator: validateUsername, trigger: 'blur' }
                    ],
                    password: [
                        { validator: validatePassword, trigger: 'blur' }
                    ],
                    repassword: [
                        { validator: validateRepassword, trigger: 'blur' }
                    ],
                    code: [
                        { validator: validateCode, trigger: 'blur' }
                    ]
                }

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
            toggleMenu(data){
                //console.log(data)
                this.menuTab.forEach(elem =>{
                    elem.current = false
                })
                data.current = true
            },

            submitForm() {
                let data = {
                    account:this.ruleForm.account,
                    password:this.ruleForm.password
                }
                this.axios.post("/regist",data).then(function (res) {
                    window.console.log(res)
                })
            },
        }
    }
</script>

<style lang="scss" scoped>
    #regist{
        height: 100vh;
        background-color: cadetblue;
    }
    .regist-wrap{
        width: 330px;
        margin: auto;
    }
    .menu-tab{
        text-align: center;
        li {
            display: inline-block;
            width: 88px;
            line-height: 36px;
            font-size: 14px;
            color: #fff;
            border-radius: 2px;
            cursor: pointer;
        }
        .current{
            background-color: rgba(0,0,0,.1);
        }

    }
    .regist-form{
        label {
            display: block;
            font-size: 14px;
            color: #fff;
        }
        .item-form{
            margin-bottom: 13px;
        }
        .block{
            width: 100%;
            display: block;
        }
        .login-btn{
            margin-top: 10px;
        }
    }
</style>