<template>
    <div class="content">
        <el-tabs value="coin" style="text-align: left; margin-left: 15px; margin-right: 15px; padding-bottom: 25px">
            <el-tab-pane label="我的硬币" name="coin">
                <h3 style="padding-bottom: 10px">硬币记录<span style=" color: #99a9bf; font-size: 8px; font-style: oblique; margin-left: 20px">您最近的变化情况</span></h3>
                <el-table
                        :data="tableData"
                        stripe
                        border
                        fit
                        style="width: 100%;">
                    <el-table-column
                            prop="time"
                            label="时间"
                            align="center">
                    </el-table-column>
                    <el-table-column
                            prop="number"
                            label="变化"
                            align="center">
                    </el-table-column>
                    <el-table-column
                            prop="cause"
                            label="原因"
                            align="center">
                    </el-table-column>
                </el-table>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    export default {
        name: "coinsDetail",
        data() {
            return {
                tableData: [{
                    time: '2020-05-02 10:50:06',
                    number: '2',
                    cause: '登录奖励'
                }, {
                    time: '2020-05-03 10:50:06',
                    number: '2',
                    cause: '登录奖励'
                }, {
                    time: '2020-05-04 10:50:06',
                    number: '2',
                    cause: '登录奖励'
                }, {
                    time: '2020-05-05 10:50:06',
                    number: '2',
                    cause: '登录奖励'
                }, {
                    time: '2020-05-05 10:50:06',
                    number: '2',
                    cause: '登录奖励'
                }, {
                    time: '2020-05-05 10:50:06',
                    number: '2',
                    cause: '登录奖励'
                }, {
                    time: '2020-05-05 10:50:06',
                    number: '2',
                    cause: '登录奖励'
                }, {
                    time: '2020-05-05 10:50:06',
                    number: '2',
                    cause: '登录奖励'
                }, {
                    time: '2020-05-05 10:50:06',
                    number: '2',
                    cause: '登录奖励'
                }, {
                    time: '2020-05-05 10:50:06',
                    number: '2',
                    cause: '登录奖励'
                }, {
                    time: '2020-05-05 10:50:06',
                    number: '2',
                    cause: '登录奖励'
                }]
            }
        }
    }
</script>

<style scoped>

    .content{
        width: 98%;
        margin: auto;
        min-height: 480px;
        background: white;
        text-align: left;
        box-shadow: 6px 6px 6px 0 rgba(0, 0, 0, 0.1);
        border: #D3DCE6 1px solid;
    }
</style>