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
                    <div style="background:  #6680ef; color: white; margin-top: 30px; border-radius: 15px; text-align: center">
                        <i class="el-icon-s-promotion" style="margin-left: -10px;"/> 关键词屏蔽设置
                    </div>
                </el-menu-item>
            </el-menu-item-group>

        </el-menu>
    </div>
</template>

<script>
    export default {
        name: "managerlLeft"
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
</style>