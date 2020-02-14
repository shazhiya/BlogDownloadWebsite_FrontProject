<template>
    <div class="recomcontent">
        <i><recommend/></i>
        <i><recommend/></i>
        <i><recommend/></i>
        <i><recommend/></i>
        <i><recommend/></i>
        <i><recommend/></i>
    </div>
</template>

<script>
    import recommend from "./recommend";
    export default {
        name: "downloadRecommended",
        components:{
            recommend
        }
    }
</script>

<style scoped>
    .recomcontent{
        width: 98%;
        margin: auto;
        margin-top: 40px;
        min-height: 280px;
        background: white;
        text-align: left;
        box-shadow: 6px 6px 6px 0 rgba(0, 0, 0, 0.1);
        border: #D3DCE6 1px solid;
        border-radius: 5px;
    }

</style>