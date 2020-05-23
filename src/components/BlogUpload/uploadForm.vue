<template>
    <div class="content">
        <h4 style="text-align: left; padding-left: 15px; margin-top: 15px">
            <i style="color: #2e9ad0" class="el-icon-upload2"/> 上传资源
        </h4>
        <div style="width: 60%; margin: auto">
            <el-form ref="form" :model="form" label-width="80px">
                <el-upload
                        class="upload-demo"
                        drag
                        action="upload/uploadResource"
                        :auto-upload="true"
                        :before-upload="doBeforeUpload"
                        :on-success="onSucces"
                >
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                </el-upload>
                <el-form-item label="资源名称:">
                    <el-input v-model="form.name" placeholder="请填写资源名称"></el-input>
                </el-form-item>
                <el-form-item label="资源类型:">
                    <el-select v-model="form.type" placeholder="请选择资源类型" style="width: 100%">
                        <el-option label="文档" value="文档"></el-option>
                        <el-option label="视频" value="视频"></el-option>
                        <el-option label="工具" value="工具"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="资源分类:">
                    <el-select v-model="form.resourceClassifyId" placeholder="请选择资源分类" style="width: 100%">
                        <el-option
                                v-for="classify in resourceClassify"
                                :key="classify.id"
                                :value="classify.id"
                                :label="classify.name">
                        </el-option>
                    </el-select>
                </el-form-item>
                <!-- 分类下拉框 -->
                <el-form-item label="所需硬币:">
                    <el-input v-model="form.coin"></el-input>
                </el-form-item>
                <el-form-item label="资源标签:" style="text-align: left">
                    <el-tag
                            :key="tag"
                            v-for="tag in tempTags"
                            closable
                            :disable-transitions="false"
                            @close="handleClose(tag)">
                        {{tag}}
                    </el-tag>
                    <el-input
                            class="input-new-tag"
                            v-if="form.inputVisible"
                            v-model="form.inputValue"
                            ref="saveTagInput"
                            size="small"
                            @keyup.enter.native="handleInputConfirm"
                            @blur="handleInputConfirm"
                    >
                    </el-input>
                    <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
                </el-form-item>
                <el-form-item label="资源描述:">
                    <el-input type="textarea" v-model="form.desc" placeholder="请描述一下你的资源信息"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitFileInfo">提交</el-button> <!-- submitFileInfo -->
                    <el-button>取消</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    import BMF from 'browser-md5-file'

    export default {
        name: "uploadForm",
        data() {
            return {
                flag: "12313",
                form: {
                    name: null,
                    coin: '5',
                    delivery: false,
                    resourceClassifyId: null,
                    type: null,
                    tags: [],
                    desc: '',
                    inputVisible: false,
                    inputValue: '',
                    path: null,
                    md5: '123456',
                },
                resourceClassify: this.$store.getters.getResourceClassifyList,
                tempTags:[],
            }
        },
        methods: {
            async doBeforeUpload(file) {
                const bmf = new BMF()
                // window.alert("全局")
                // window.console.log("全局md5:" + this.form.md5);

                 await bmf.md5(file,async (err, md5) => {
                        window.alert("md5方法内");
                        window.console.log('err:', err);
                        window.console.log('md5加密后的string:', md5);
                     window.console.log('全局MD5的string:', this.form.md5);
                     this.form.md5 = md5
                     window.console.log('赋值后全局MD5的string:', this.form.md5);


                     await this.axios.post(
                            "resource/confirmMD5", {
                                "md5": this.form.md5,
                            }).then((res) => {
                            window.console.log(res.data)
                            if (res.data == true) {
                                window.alert('md5在数据库内存在,不会上传【秒传触发】')
                                this.flag = false
                            } else {
                                window.alert('md5在数据库内不存在，会上传')
                                this.flag = true
                            }
                        });
                    }
                );

                window.console.log("会不会上传：" + this.flag);
                return this.flag;
            },
            submitFileInfo() {
                // window.alert("name:" + this.form.name);
                // window.alert("type:" + this.form.type);
                // window.alert("rcid:" + this.form.resourceClassifyId);
                // window.alert("introduction:" + this.form.desc);
                // window.alert("md5:" + this.form.md5);
                // window.alert("path:" + this.form.path);

                this.form.tags =  this.formatTags(this.tempTags);
                window.console.log(this.form.tags);
                this.axios.post(
                    "resource/uploadResource", {
                        'name': this.form.name,
                        'type': this.form.type,
                        'rcid': this.form.resourceClassifyId,
                        // 'coin':this.form.coin,
                        'tags': this.form.tags,
                        'introduction': this.form.desc,
                        'resourceEntity': {
                            'md5': this.form.md5,
                            'realPath': this.form.path,
                        },
                    }
                ).then((res) => {
                    window.console.log(res.data)
                    if (res.data == true) {
                        this.successMessage();
                        this.$router.push({
                                name:'rConsole',
                            }
                        )
                    } else {
                        this.errorMessage();
                    }
                })

            },
            // 获取资源分类
            getResourceClassifyList() {
                this.axios.post(
                    "resource/classify", {}).then((res) => {
                    window.console.log(res.data)
                    this.$store.commit("updateResourceClassifyList", res.data)
                })
            },
            submitUpload() {
                this.$refs.upload.submit();
            },
            onSucces(response) {
                window.console.log(response);
                this.form.path = response.path;
            },
            onSubmit() {
                alert('submit!');
            },
            handleClose(tag) {
                this.form.tags.splice(this.form.tags.indexOf(tag), 1);
            },

            showInput() {
                this.form.inputVisible = true;
                // this.$nextTick(_ => {
                //     this.form.$refs.saveTagInput.$refs.input.focus();
                // });
            },
            handleInputConfirm() {
                let inputValue = this.form.inputValue;
                if (inputValue) {
                    this.tempTags.push(inputValue);
                }
                this.form.inputVisible = false;
                this.form.inputValue = '';
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
                    message: '消息：上传成功',
                    type: 'success'
                });
            },
            errorMessage() {
                this.$message({
                    message: '消息：上传失败',
                    type: 'error'
                });
            },
        },
        created() {
            // this.submitFileInfo()
            this.getResourceClassifyList();
        }
    }
</script>

<style scoped>
    .content {
        width: 100%;
        height: 700px;
        background: white;
        box-shadow: 6px 6px 6px 0 rgba(0, 0, 0, 0.1);
        border: #D3DCE6 1px solid;
    }

    .upload-demo {
        width: 100%;
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