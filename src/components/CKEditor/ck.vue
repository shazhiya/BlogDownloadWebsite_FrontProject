<template>
    <div>
        <textarea :id="id"></textarea>
    </div>
</template>
<script>
    export default {
        name: 'ck',
        props: [
            'value'
        ],
        mounted: function() {
            const self = this

            // 渲染编辑器
            self.ckeditor = window.CKEDITOR.replace(self.id,{ height: '800px' })

            // 设置初始内容
            self.ckeditor.setData(self.value)

            // 监听内容变更事件
            self.ckeditor.on('change', ()=>{
                this.$parent.writeArticle.content = this.ckeditor.getData();
            })

            //self.ckeditor.setData("")

        },
        data: function() {
            return {
                id: parseInt(Math.random() * 10000).toString(),
                ckeditor: null,
            }
        },
        watch: {
            // 监听prop的变化，更新ckeditor中的值
            value: function() {
                if (this.value !== this.ckeditor.getData()) {
                    this.ckeditor.setData(this.value)
                }
            }
        },
        // 销毁组件前，销毁编辑器
        // beforeDestroy: function() {
        //     self.ckeditor.destroy()
        // },
    }
</script>
<style>
</style>
