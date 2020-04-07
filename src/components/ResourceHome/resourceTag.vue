<template>
    <div>
        <div class="tags">
            <h3 style="text-align: left; margin-left: 15px; padding-top: 10px"><i class="el-icon-collection-tag"/> 热门搜索</h3>
            <div style="margin-left: 10px; margin-top: 20px; margin-right: 10px">
                <el-tag
                        v-for="tag in tags"
                        :key="tag.id">
                    {{tag.name}}
                </el-tag>
            </div>
        </div>
        <div class="user">

        </div>
        <div style="clear: both"></div>
    </div>
</template>

<script>
    export default {
        name: "resourceTag",
        data() {
            return {
                tags: this.$store.getters.getResourceHotTagsList,
            };
        },
        methods:{
            // 获取热门标签
            getResourceHotTagsList(){
                this.axios.post(
                    "resource/topTags",{

                    }).then((res)=>{
                    window.console.log(res.data)
                    this.$store.commit("updateResourceHotTagsList",res.data)
                })
            },
        },
        created() {
            this.getResourceHotTagsList();
        }
    }
</script>

<style scoped>
    .tags{
        width: 300px;
        height: 240px;
        margin-left: 100px;
        background: white;
    }
    .user{
        width: 300px;
        height: 240px;
        background: white;
        margin-left: 100px;
        margin-top: 50px;
    }
    .el-tag{
        margin-left: 10px;
        margin-top: 5px;
    }
</style>