<template>
  <div id="frame">
    <div id="leftFrame">
      <img src='../assets/gg.jpg' alt="login pictrue">
    </div>
    <div id="rightFrame">
      <form action="login" method="get">
        <input type="text" name="account">
        <p></p>
        <input type="text" name="password">
        <p></p>
        <input type="submit">
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignUp'
}
</script>

<style scoped>
* {
  border: 1px red solid;
  margin: auto;
}
#frame {
  width: 1005px;
  height: 500px;
}
#leftFrame{
  float: left;
  width: 500px;
  height: 500px;
  position: relative;
}
#rightFrame {
  width: 500px;
  height: 500px;
  float: left;
}



</style>