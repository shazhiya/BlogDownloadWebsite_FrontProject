<template>
    <div style="width: 100%; height: 960px; background: #d6d6d6; border-top: white 1px solid">
        <div style="width: 1200px; margin: auto; margin-top: 200px; background: white">
            <div style="width: 1200px; height: 500px; box-shadow: 5px 5px 10px #B3C0D1">
                <div class="login">
                    <admin-login/>
                </div>
                <div class="image">
                    <img src="../../assets/login.png">
                </div>
            </div>

        </div>
    </div>

</template>

<script>
    import adminLogin from "../../components/LoginAdmin/adminLogin";
    export default {
        name: "index",
        components:{
            adminLogin
        }
    }
</script>

<style scoped>
    .login{
        width: 450px;
        height: 500px;
        float: left;

    }
    .image{
        width: 750px;
        height: 500px;
        float: left;
    }
</style>