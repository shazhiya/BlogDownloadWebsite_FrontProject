<template>
    <div>
        <navigation/>
        <div style="width: 100%; height: 56px; overflow: inherit;">
            <div class="topBox">
                <div class="title"><!--文章标题--> <!-- ！！！编辑器宽度应该与展示页面宽度一致 -->
                    <el-input v-model="writeArticle.title" placeholder="请输入文章标题"></el-input>
                    <span class="textNum"><!--标题字数统计-->
					0/100
                </span>
                </div>
                <div class="btnBox"><!--提交按钮 头像-->
                    <el-button @click="postBlogArticle">发布文章</el-button>
                    <div class="userBox">
                        <div class="userInforBox">
                            <div class="userPic"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 分类 小标签栏 -->
        <div style="margin-left: 1.2%;margin-bottom: 0.5%">
            <el-row>
                <el-col :span="3">
                    <el-select v-model="writeArticle.bcid" placeholder="文章分类">
                        <el-option
                                v-for="item in classify"
                                :key="item.id"
                                :label="item.name"
                                :value="item.id">
                        </el-option>
                    </el-select>
                </el-col>
                <el-col :span="3">
                    <el-select v-model="writeArticle.type" placeholder="文章状态">
                        <el-option
                                v-for="item in type"
                                :key="item"
                                :label="item"
                                :value="item">
                        </el-option>
                    </el-select>
                </el-col>
                <el-col :span="14">
                    <el-tag
                            :key="tag"
                            v-for="tag in dynamicTags"
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
                    <el-button v-else class="button-new-tag" size="small" @click="showInput">
                        + 创建标签
                    </el-button>
                </el-col>
            </el-row>
        </div>

        <!-- 编辑器 -->
        <ck></ck>
    </div>
</template>

<script>
    import Ck from "../../components/CKEditor/ck";
    import Navigation from "../../components/navigation";

    export default {
        name: "index",
        components: {
            Navigation,
            Ck
        },
        computed: {
            classify() {
                return this.$store.getters.getBlogClassifyList;
            }
        },
        data() {
            return {
                writeArticle: {
                    title: '',
                    tags: [],
                    content: '',
                    type: null,
                    bcid: null,
                },
                type: ['原创', '转载'],
                valueTags: '',
                dynamicTags: ['默认标签'],
                inputVisible: false,
                inputValue: ''

            }
        },
        methods: {
            arrayToString(list) {
                let str = ""
                list.forEach(item => {
                    window.alert(item.name)
                    str += item.name + ''
                })
                str = str.substr(0, str.length - 1)
                return str
            },
            handleClose(tag) {
                this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
            },

            showInput() {
                this.inputVisible = true;
                this.$nextTick(() => {
                    this.$refs.saveTagInput.$refs.input.focus();
                });
            },

            handleInputConfirm() {
                let inputValue = this.inputValue;
                if (inputValue) {
                    this.dynamicTags.push(inputValue);
                }
                this.inputVisible = false;
                this.inputValue = '';
            },
            postBlogArticle() { /* tags数据绑定重写arrayToString方法 ！！ */
                // window.console.log(this.writeArticle.tags)
                // window.alert(this.writeArticle.title)
                this.writeArticle.tags = this.formatTags(this.dynamicTags);
                let data = {
                    bcid: this.writeArticle.bcid,
                    title: this.writeArticle.title,
                    tags: this.writeArticle.tags,
                    content: this.writeArticle.content,
                    type: this.writeArticle.type,
                }
                this.axios
                    .post("article/releaseBlog", data)
                    .then(res => {
                        window.console.log("发布博文返回：")
                        window.console.log(res.data)
                        if(res.data){
                            this.successMessage();
                            // 跳转到用户管理页面
                            this.$router.push({
                                    name:'bConsole',
                                }
                            )
                        }else {
                            this.errorMessage();
                        }
                    })
                    .catch(err => {
                        window.console.log(err)
                    })
            },
            // 从服务器获取分类
            getBlogClass() {
                this.axios.post(
                    "article/classifyList", {}).then((res) => {
                    // window.console.log(res.data)
                    this.$store.commit("updateBlogClassifyList", res.data)
                })
            },
            formatTags(tagList) {
                let result = [];
                for (let tag in tagList) {
                    result.push({
                        tag: {
                            name: tagList[tag]
                        }
                    })
                }
                return result;
            },
            successMessage() {
                this.$message({
                    message: '消息：博文发布成功',
                    type: 'success'
                });
            },
            errorMessage() {
                this.$message({
                    message: '消息：博文发布失败',
                    type: 'error'
                });
            },

        },
        created() {
            this.getBlogClass();
        }
    }
</script>

<style scoped>
    /* CSS Document */
    * {
        box-sizing: border-box;
    }

    body {
        background-color: #f4f4f4;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        position: fixed;
        tab-size: 4;
        text-rendering: auto;
        overflow: hidden;
    }

    .bigBox {
        position: absolute;
        width: 100%;
        height: 100%;
    }

    .topBox {
        height: 100%;
        flex-direction: row;
        display: flex;
    }

    .title {
        width: 100%;
        margin: 8px 24px;
        border: 1px solid #ccc;
        border-radius: 4px;
        background-color: #fff;
    }

    .titleInput {
        display: inline-block;
        width: 92%;
        padding: 8px;
        font-size: 18px;
        line-height: 24px;
        background-color: #fff;
        background-image: none;
        border: 0;
        border-radius: 4px;
        height: 36px;
    }

    .textNum {
        float: right;
        line-height: 40px;
        font-size: 20px;
        margin-right: 8px;
        font-weight: 300;
    }

    .btnBox {
        padding: 8px 32px 8px 0;
        width: 232px;
        flex-direction: row;
        display: flex;
        text-rendering: auto;
    }

    .submitBtn {
        padding: 0 16px;
        font-size: 16px;
        color: #fff;
        border: none;
        border-radius: 4px;
        white-space: nowrap;
        background-color: #ca0c16;
        cursor: pointer;
    }

    .userBox {
        position: relative;
        margin-left: 32px;
        margin-top: 4px;
        margin-right: 10px;
    }

    .userInforBox {
        cursor: pointer;
        box-sizing: border-box;
    }

    .userPic {
        position: relative;
        cursor: pointer;
        box-sizing: border-box;
    }

    .userPicImg {
        display: block;
        border-radius: 16px;
        width: 32px;
        height: 32px;
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