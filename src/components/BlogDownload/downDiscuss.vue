<template>
    <div class="discusscontent">
        <h3 style="margin-left: 15px; margin-top: 15px;">评论</h3>
        <i><discuss-content/></i>
        <i><discuss-content/></i>
    </div>
</template>

<script>
    import discussContent from "./discussContent";
    export default {
        name: "downDiscuss",
        components:{
            discussContent
        }
    }
</script>

<style scoped>

    .discusscontent{
        width: 98%;
        margin: auto;
        margin-top: 40px;
        padding-bottom: 15px;
        min-height: 280px;
        background: white;
        text-align: left;
        box-shadow: 6px 6px 6px 0 rgba(0, 0, 0, 0.1);
        border: #D3DCE6 1px solid;
        border-radius: 5px;
    }

</style>