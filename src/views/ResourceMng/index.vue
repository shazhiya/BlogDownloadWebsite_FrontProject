<template>
    <div>
        <el-container>
            <el-aside>123</el-aside>
            <el-main>456</el-main>
        </el-container>
    </div>
</template>

<script>
    export default {
        name: "index",
        methods:{
            getUserMngBlogList(id){
                this.axios.post(
                    "myInfo/blogHome",{
                        "id":id,
                    }).then((res)=>{
                    window.console.log(res.data)
                    this.$store.commit("updateUserMngBlogList",res.data.resourceList)
                })
            },
        },
        created() {
        },
    }
</script>

<style scoped>

</style>