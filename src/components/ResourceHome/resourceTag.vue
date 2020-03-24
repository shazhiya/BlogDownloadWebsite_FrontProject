<template>
    <div>
        <div class="tags">
            <h3 style="text-align: left; margin-left: 15px; padding-top: 10px"><i class="el-icon-collection-tag"/> 热门搜索</h3>
            <div style="margin-left: 10px; margin-top: 20px; margin-right: 10px">
                <el-tag
                        v-for="tag in tags"
                        :key="tag.name"
                        :type="tag.type">
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
                tags: [
                    { name: '标签一', type: '' },
                    { name: '标签二', type: 'success' },
                    { name: '标签三', type: 'info' },
                    { name: '标签四', type: 'warning' },
                    { name: '标签五', type: 'danger' },
                    { name: '标签6', type: 'info' },
                    { name: '标签7', type: 'warning' },
                    { name: '标签8', type: 'danger' },
                    { name: '标签9', type: '' },
                    { name: '标签10', type: 'success' },
                    { name: '标签11', type: 'info' },
                    { name: '标签2', type: 'warning' },
                    { name: '标签3', type: 'danger' },
                    { name: '标签4', type: 'info' },
                    { name: '标签5', type: 'warning' },
                    { name: '标签1', type: 'danger' }
                ]
            };
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