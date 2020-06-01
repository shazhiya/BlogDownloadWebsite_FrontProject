<template>
    <div id="main-wrap">
        <div class="main-content">
            <div class="content">
                <router-view/>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "blogMngMain"
    }
</script>

<style scoped>
    #main-wrap {
        position: fixed;
        left: 250px;
        top:75px;
        right: 0;
        bottom: 0;
        border: 30px solid #f7f7f7;
        border-bottom: none;
        -webkit-box-sizing: border-box;
    }

    .main-content{
        width: 100%;
        height: 100%;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }

    .content{
        width: 100%;
        height: 100%;
        padding: 30px 30px 0 30px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        background-color: #fff;
        overflow-y: auto;
    }
    .content::-webkit-scrollbar {/*滚动条整体样式*/
        width: 5px;     /*高宽分别对应横竖滚动条的尺寸*/
        height: 1px;
    }
    .content::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
        background: #05b2d2;
    }
    .content::-webkit-scrollbar-track {/*滚动条里面轨道*/
        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
        border-radius: 10px;
        background: #EDEDED;
    }

</style>