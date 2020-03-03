<template>
    <div style="width: 80%; min-width: 1000px; height: 300px;margin: auto; margin-top: 30px; padding-top: 20px; padding-bottom: 15px; margin-bottom: 45px; border: #888888 1px solid; box-shadow: 6px 6px 6px 0 rgba(0, 0, 0, 0.7)">
        <el-row :gutter="20">
            <el-col :span="8"><div class="grid-content bg-purple">
                <img class="headPic" src="../../assets/headPic.jpg"/>
            </div></el-col>
            <el-col :span="8"><div class="grid-content bg-purple">
                <div class="username">冷jing灬</div>
                <div class="blogintro">这是我的个人博客，欢迎来到我的博客，大家一起提高啊</div>
                <div>
                    <el-row>
                        <el-button type="primary">关注</el-button>
                        <el-button type="primary" icon="el-icon-message" title="私信"></el-button>
                    </el-row>

                </div>
            </div></el-col>
            <el-col :span="8"><div class="grid-content bg-purple lastone">
                <el-button style="color: black; float: right; margin-right: 20px;" @click="show()" icon="el-icon-s-custom" circle type="text"></el-button>
<!--                <i class="el-icon-s-custom" style="float: right; margin-right: 20px;" onclick="show()"/>-->
                <div style="margin-top: 20px">
                    <el-tag type="info" size="mini">邮箱</el-tag>
                    <p>123456@qq.com</p>
                    <el-tag type="info" size="mini">性别</el-tag>
                    <p>男</p>
                    <el-tag type="info" size="mini">职业</el-tag>
                    <p>学生</p>
                    <el-tag type="info" size="mini">职位</el-tag>
                    <p>成员</p>
<!--                    <el-tag type="info" size="mini">粉丝数</el-tag>-->
<!--                    <p>111</p>-->
                    <el-tag type="info" size="mini">注册时间</el-tag>
                    <p>2020-01-01</p>
                </div>
            </div></el-col>
        </el-row>
        <dialog id="myDialog" style="margin: auto; border: none; border-radius: 10px">
            <div style="float: left; width: 1000px;height: 550px;">
                <p style="text-align: right"><el-button icon="el-icon-close" circle @click="close" type="text"></el-button></p>
                <el-form label-position="left" label-width="100px" :model="formLabelAlign">
                    <el-form-item label="真实姓名：">
                        <el-input v-model="formLabelAlign.realName"></el-input>
                    </el-form-item>
                    <el-form-item label="性别：">
                        <el-input v-model="formLabelAlign.sex"></el-input>
                    </el-form-item>
                    <el-form-item label="生日:">
                        <el-input v-model="formLabelAlign.birth"></el-input>
                    </el-form-item>
                    <el-form-item label="住址:">
                        <el-input v-model="formLabelAlign.address"></el-input>
                    </el-form-item>
                    <el-form-item label="行业:">
                        <el-input v-model="formLabelAlign.trade"></el-input>
                    </el-form-item>
                    <el-form-item label="职位:">
                        <el-input v-model="formLabelAlign.position"></el-input>
                    </el-form-item>
                    <el-form-item label="个人介绍:">
                        <el-input v-model="formLabelAlign.introduction"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm()" style="float: right; margin-right: 55px">保存</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </dialog>
    </div>
</template>

<script>
    export default {
        name: "blogHomeHander",
        methods:{
            show(){
                document.getElementById("myDialog").showModal();
            },
            close(){
                document.getElementById("myDialog").close();
            },
            submitForm(){
                alert('submit!')
            }
        },
        data() {
            return {
                formLabelAlign: {
                    realName: '',
                    sex: '',
                    birth: '',
                    address: '',
                    trade: '',
                    position: '',
                    introduction: ''
                }
            };
        }
    }
</script>

<style scoped>
    .el-input{
        width: 75%;
    }
    .el-form-item{
        margin-left: 55px;
    }
    .grid-content{
        border-top: white 1px solid;
    }
    .lastone{
        padding-left: 30px;
        border-left: #888888 1px dashed;
        border-top: white 1px solid;
    }
    .username{
        font-size:32px;
        font-weight: bold;
        margin-top: 60px;
        line-height: 60px;
    }
    .blogintro{
        margin-top: 40px;
        font-style: oblique;
        font-size: 10px;
        margin-bottom: 20px;
    }

    p{
        line-height: 30px;
        padding-left: 40px;
    }
    .headPic{
        width: 184px;
        height: 184px;
        border: #333333 3px solid;
        box-shadow: #333333 3px 3px 3px;
        border-radius: 999px;
        margin-top: 10%;
        margin-left: 15%;
    }
    .el-row el-col{
        height: auto;
    }


    .grid-content {
        border-radius: 4px;
        min-height: 300px;
    }

</style>