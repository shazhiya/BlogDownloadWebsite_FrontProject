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
                        action="update/uploadResource"
                        :auto-upload="false"
                        :before-upload="doBeforeUpload"
                        >
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                </el-upload>
                <el-form-item label="资源名称:">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="资源类型:">
                    <el-select v-model="form.region" placeholder="请选择资源类型" style="width: 100%">
                        <el-option label="文档" value="文档"></el-option>
                        <el-option label="视频" value="视频"></el-option>
                        <el-option label="工具" value="工具"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="所需硬币:">
                    <el-input v-model="form.coin"></el-input>
                </el-form-item>
                <el-form-item label="资源标签:" style="text-align: left">
                    <el-tag
                            :key="tag"
                            v-for="tag in form.tags"
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
                    <el-button type="primary" @click="submitFileInfo">提交</el-button>
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
                form: {
                    name: '',
                    region: '',
                    coin: '',
                    delivery: false,
                    type: [],
                    tags: ['java','python'],
                    desc: '',
                    inputVisible: false,
                    inputValue: '',
                },
                fMD5:''
            }
        },
        methods: {
            doBeforeUpload(file){
                const bmf = new BMF()
                bmf.md5(
                    file,
                    (err,md5) => {
                        window.console.log('err:',err);
                        window.console.log('md5 string:',md5);
                        this.fMD5 = md5

                        this.axios.post(
                            "resource/confirmMD5",{
                                "md5":md5,
                            }).then((res)=> {
                            window.console.log(res.data)
                            if(res.data == true){
                                window.alert('md5在数据库内存在')
                            }else {
                                window.alert('md5在数据库内不存在')
                                this.submitUpload()
                            }
                        })
                    }
                )
            },
            submitFileInfo(){
                    this.$aaa.post(
                        "update/download",{
                            'name':this.form.name,
                            'type':this.form.region,
                            // 'coin':this.form.coin,
                            // 'tags':this.form.tags,
                            'introduction':this.form.desc,
                            // 'resourceEntity': {
                            //     'md5':this.fMD5
                            // }
                        }
                    ).then((res)=>{
                        window.console.log(res.data)
                        if(res.data == true){
                            window.alert('上传成功bbb')
                        }else{
                            window.alert('上传失败bbb')
                        }
                    })

            },
            submitUpload() {
                this.$refs.upload.submit();
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
                    this.form.tags.push(inputValue);
                }
                this.form.inputVisible = false;
                this.form.inputValue = '';
            },
        }
    }
</script>

<style scoped>
    .content{
        width: 100%;
        height: 700px;
        background: white;
        box-shadow: 6px 6px 6px 0 rgba(0, 0, 0, 0.1);
        border: #D3DCE6 1px solid;
    }
    .upload-demo{
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