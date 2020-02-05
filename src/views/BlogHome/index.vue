<template>
    <div class="content">
        <el-row>
            <el-col :span="24"><div class="grid-content bg-purple-dark">
                <blog-home-hander/>
            </div></el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="8"><div class="grid-content bg-purple">
                <blog-information/>
            </div></el-col>
            <el-col :span="12"><div class="grid-content bg-purple-light">
                <ul style="list-style: none">
                    <li>
                        <blog-list/>
                    </li>
                    <li>
                        <blog-list/>
                    </li>
                    <li>
                        <blog-list/>
                    </li>
                    <li>
                        <blog-list/>
                    </li>
                </ul>
            </div></el-col>
        </el-row>
    </div>
</template>

<script>
    import blogHomeHander from "../../components/BlogHome/blogHomeHander";
    import blogInformation from "../../components/BlogHome/blogInformation";
    import blogList from "../../components/BlogHome/blogList";
    export default {
        name: "index",
        data(){
          return{

          }
        },
        methods: {

        },
        components: {
            blogHomeHander,
            blogInformation,
            blogList
        }
    }
</script>

<style scoped>

    .content{
        width: 80%;
        margin: auto;
    }
    .bg-purple-dark {
        //background: #99a9bf;
    }
    .bg-purple {
        //background: #d3dce6;
    }
    .bg-purple-light {

        //background: #e5e9f2;
    }
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }
</style>