<template>
    <div>
        <div style="width: 100%; ">
            <div>2020-02-02 20:20</div>
            <div class="head">
                <img class="headpic" src="../../assets/headPic.jpg">
            </div>
            <div class="receive">你好！那就是， 总结的来说， 既然如何， 这种事实对本人来说意义重大，相信对这个世界也是有一定意义的。 既然如何， 西班牙在不经意间这样说过，自己的鞋子，自己知道紧在哪里。这不禁令我深思。 歌德曾经说过，意志坚强的人能把世界放
                在手中像泥块一样任意揉捏。我希望诸位也能好好地体会这句话。</div>
            <div style="clear: both"></div>
        </div>

        <div>
            <div>2020-02-02 20:20</div>
            <div class="head1">
                <img class="headpic" src="../../assets/headPic.jpg">
            </div>
            <div class="send">
                hello!
            </div>
            <div style="clear: both"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "message"
    }
</script>

<style scoped>
    .head{
        width: 80px;
        height: 80px;
        float: left;
    }
    .head1{
        width: 80px;
        height: 80px;
        float: right;
    }
    .headpic{
        width: 48px;
        height: 48px;
        margin-left: 15%;
        margin-top: 10px;
        border: #333333 1px solid;
        border-radius: 999px;
    }
    .receive{
        min-width: 50px;
        max-width: 550px;
        min-height: 50px;
        padding-top: 15px;
        background: white;
        border-radius: 0px 10px 10px 10px;
        margin-left: 15px;
        margin-top: 10px;
        float: left;
        text-align: left;
        padding-left: 15px;
        padding-right: 15px;
        padding-bottom: 10px;
        font-style: normal;
    }
    .send{
        min-width: 50px;
        max-width: 550px;
        min-height: 50px;
        padding-top: 15px;
        background: white;
        border-radius: 10px 0px 10px 10px;
        margin-top: 10px;
        float: right;
        padding-right: 15px;
        text-align: left;
        padding-left: 15px;
        padding-right: 15px;
        padding-bottom: 10px;
        font-style: normal;
    }

</style>