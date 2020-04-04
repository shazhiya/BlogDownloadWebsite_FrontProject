<template>
    <div class="adminleft">
        <div class="leftheader">
            给个图标
        </div>
        <el-menu :default-openeds="['1', '3']" style="height: 855px">
            <el-menu-item-group>
                <el-menu-item index="1-3"><i class="el-icon-s-home"/> 首页</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
                <template slot="title">博文版块</template>
                <el-menu-item index="1-1"><i class="el-icon-s-grid"/>博文管理</el-menu-item>
                <el-menu-item index="1-2"><i class="el-icon-s-management"/>博文审核</el-menu-item>
            </el-menu-item-group>

            <el-menu-item-group>
                <template slot="title">资源版块</template>
                <el-menu-item index="2-1"><i class="el-icon-s-ticket"/> 资源管理</el-menu-item>
                <el-menu-item index="2-2"><i class="el-icon-s-management"/> 资源审核</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="用户版块">
                <el-menu-item index="2-3"><i class="el-icon-user-solid"/> 用户管理</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
                <template slot="title">数据分析</template>
                <el-menu-item index="3-1"><i class="el-icon-s-data"/> 统计总览</el-menu-item>
                <el-menu-item index="3-2"><i class="el-icon-s-marketing"/> 统计排名</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
                <el-menu-item index="3-3" style="margin-left: 0">
                    <div style="background:  #6680ef; color: white; margin-top: 30px; border-radius: 15px; text-align: center" @click="show()">
                        <i class="el-icon-s-promotion" style="margin-left: -10px;"/> 关键词屏蔽设置
                    </div>
                </el-menu-item>
            </el-menu-item-group>
        </el-menu>
        <dialog id="keywords" style="margin: auto; border: none; border-radius: 10px">
            <div style="float: left; width: 1000px;height: 550px;">
                <p style="text-align: right"><el-button icon="el-icon-close" circle @click="close" type="text"></el-button></p>
                <div class="keywords" style="width: 90%; height: 70%; margin: auto; padding: 20px 20px; border: #99a9bf 1px dashed; border-radius: 5px">
                    <el-tag
                            :key="tag"
                            v-for="tag in keyword"
                            closable
                            :disable-transitions="false"
                            @close="handleClose(tag)">
                        {{tag}}
                    </el-tag>
                    <el-input
                            class="input-new-tag"
                            v-if="inputVisible"
                            v-model="inputValue"
                            ref="saveTagInput"
                            size="small"
                            @keyup.enter.native="handleInputConfirm"
                            @blur="handleInputConfirm"
                    >
                    </el-input>
                    <el-button v-else class="button-new-tag" size="small" @click="showInput">+ 新增</el-button>

                </div>
                <el-button type="primary" style="float: right; margin-right: 25px; margin-top: 20px" @click="submit">保存</el-button>
            </div>
        </dialog>
    </div>
</template>

<script>
    export default {
        name: "managerlLeft",
        data(){
            return{
                keyword:['卧槽','政府'],
                inputVisible: false,
                inputValue: ''
            }
        },
        methods:{
            show(){
                document.getElementById("keywords").showModal();
            },
            close(){
                document.getElementById("keywords").close();
            },
            submit(){
                alert('submit!')
            },
            handleClose(tag) {
                this.keyword.splice(this.keyword.indexOf(tag), 1);
            },

            showInput() {
                this.inputVisible = true;
                // this.$nextTick(() => {
                //     this.$refs.saveTagInput.$refs.input.focus();
                // });
            },

            handleInputConfirm() {
                let inputValue = this.inputValue;
                if (inputValue) {
                    this.keyword.push(inputValue);
                }
                this.inputVisible = false;
                this.inputValue = '';
            }
        }
    }
</script>

<style scoped>
    .leftheader{
        height: 100px;
        background: white;
        line-height: 100px;
        text-align: center;
    }
    .adminleft{
        height: 950px;
    }
    .el-menu-item{
        //padding-left: 40px;
    }
    i{
        padding-right: 10px;
    }
    .keywords{
        min-width: 620px;
        height: 508px;
        overflow-y: auto;
    }
    .keywords::-webkit-scrollbar {/*滚动条整体样式*/
        width: 5px;     /*高宽分别对应横竖滚动条的尺寸*/
        height: 1px;
    }
    .keywords::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
        background: #05b2d2;
    }
    .keywords::-webkit-scrollbar-track {/*滚动条里面轨道*/
        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
        border-radius: 10px;
        background: #EDEDED;
    }
    .el-tag{
        margin-right: 5px;
    }
    .el-tag + .el-tag {
        margin-left: 10px;
    }
    .button-new-tag {
        margin-left: 10px;
        height: 32px;
        line-height: 30px;
        padding-top: 0;
        padding-bottom: 0;
    }
    .input-new-tag {
        width: 90px;
        margin-left: 10px;
        vertical-align: bottom;
    }
</style>