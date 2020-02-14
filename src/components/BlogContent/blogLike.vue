<template>
    <div class="likebody">
        <div class="icons">
            <div class="icon" title="点赞">
                <FAIcon :icon="['far','thumbs-up']"/>
            </div>
            <div class="num">11</div>
        </div>

        <div class="icons" title="投币">
            <div class="icon">
                <FAIcon :icon="['fas','donate']"/>
            </div>
            <div class="num">11</div>
        </div>

        <div class="icons" title="收藏">
            <div class="icon">
                <FAIcon :icon="['far','star']"/>
            </div>
            <div class="num">11</div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "blogLike"
    }
</script>

<style scoped>
    .likebody{
        position: relative;
        color: red;
        //background: white;
        min-width: 160px;
        width: 10%;
        min-height: 250px;
        height: 30%;
        margin: auto;
        //box-shadow: 6px 6px 6px 0 rgba(0, 0, 0, 0.1);
        //border: #D3DCE6 1px solid;
        position:fixed;
        left:12%;
        //top:15%;
        //border-top: white 1px solid;
    }
    .icons{
        //background: red;
        width: 60%;
        height: 25%;
        //margin-left: 30%;
        margin-top: 5%;
        cursor: pointer;

    }
    .icon{
        width: 50px;
        height: 50px;
        line-height: 50px;
        margin-left: 45%;
        border: red 1px solid;
        border-radius: 999px;
        font-size: 36px;
        //background: aqua;
    }
    .num{
        position: absolute;
        width: 20px;
        height: 20px;
        line-height: 20px;
        margin-top: -40px;
        margin-left: 60%;
    }

</style>