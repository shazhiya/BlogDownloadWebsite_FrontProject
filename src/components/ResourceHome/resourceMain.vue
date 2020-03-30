<template>
    <div>
        <div class="chuse">
            <table style="margin-left: 25px">
                <tr>
                    <td>资源分类：</td>
                    <td>
                        <ul>
                            <li :key="classify.index" v-for="classify in classifys" @click="setclassify(classify)" >{{classify}}</li>
                        </ul>
                    </td>
                </tr>
                <tr/>
                <tr>
                    <td>资源类型：</td>
                    <td>
                        <ul>
                            <li :key="type.index" v-for="type in types" @click="settype(type)">{{type}}</li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>关键词：</td>
                    <td>
                        <el-form ref="form">
                            <el-form-item>
                                <el-input class="inp" placeholder="请输入你的关键词" type="textarea"></el-input>
                            </el-form-item>
                            <el-form-item class="submit">
                                <el-button type="primary" @click="onSubmit">搜索</el-button>
                            </el-form-item>
                            <div style="clear: both"></div>
                        </el-form>
                    </td>
                </tr>
            </table> 
        </div>
        <div style="text-align: left; margin-left: 15px; margin-top: 20px;margin-bottom: 50px" v-show="!dynamicTags[0]==' '">
            已选条件：<span>
            <el-tag
                    :key="tag"
                    v-for="tag in dynamicTags"
                    closable
                    @close="handleClose(tag)">
                    {{tag}}
            </el-tag>
        </span>
        </div>
        <div class="resource">

        </div>
    </div>
</template>

<script>
    export default {
        name: "resourceMain",
        data() {
            return {
                dynamicTags: [],
                inputVisible: false,
                inputValue: '',
                classifys: ['java','python','c++','c','php','javaweb','c','大数据','移动开发','安卓开发'],
                types: ['全部','文档类','代码类','工具类','其他']
            };
        },
        methods: {
            handleClose(tag) {
                this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
            },
            onSubmit() {
                alert("submit")
            },
            setclassify(classify){
                this.dynamicTags[0] = classify;
                this.$forceUpdate();
            },
            settype(type){
                this.dynamicTags[1] = type;
                this.$forceUpdate();
            },
            // 从服务器获取资源(分类)
            getResourceClassifyList(){
                this.axios.post(
                    "resource/classify",{}).then((res)=>{
                    window.console.log(res.data)
                    this.$store.commit("updateResourceClassifyList",res.data)
                })
            },
            // 从服务器获取热门标签(tags)
            getResourceHotTagsList(){
                this.axios.post(
                    "resource/topTags",{}).then((res)=>{
                    window.console.log(res.data)
                    this.$store.commit("updateResourceHotTagsList",res.data)
                })
            },
            // 从服务器获取资源list
            getResourceList(){
                this.axios.post(
                    "resource/index",{
                        "resource":{
                            "name": "搜索的内容",
                            "rcid": 1,
                            "type": null,
                            "page": 1,
                        },
                        "tag":{
                            "id": null,
                        },
                    }).then((res)=>{
                    window.console.log(res.data)
                    this.$store.commit("updateResourceList",res.data)
                })
            },
        }
    }
</script>

<style scoped>
    .chuse,.resource{
        width: 100%;
        min-width: 1086px;
        min-height: 200px;
        background: white;
        padding-top: 25px;
        padding-bottom: 15px;
        margin-bottom: 40px;
    }
    .el-tag{
        margin-left: 10px;
    }
    table>tr{
        height: 32px;
        line-height: 32px;
        margin-top: 20px;
    }
    ul li{
        list-style: none;
        float: left;
        margin-left: 15px;
    }
    .el-form-item{
        float: left;
    }
    .inp{
        width: 800px;
        margin: 20px 25px auto;
    }
    .submit{
        margin-top: 25px;
        float: right;
        margin-right: 50px;
    }
</style>