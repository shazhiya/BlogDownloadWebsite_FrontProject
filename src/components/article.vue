<template>
  <div>
      <label>
          <input v-model="id"/>
      </label>
      <button type="submit" v-on:click='click'>view</button>
      <p>{{message.title}}</p>
      <p v-html='message.content'> </p>
      <p>{{message.releaseTime}}</p>
  </div>
</template>

<script>
  export default {
  methods: {
    click: function(){
      this.axios.get('/test',{params:{'id':this.id}})
      .then(res=>{
        this.message = res.data
      }).catch(err=>{
        window.console.log(err)
        this.message = {'title':'not found'}
      })
    }
  },
  data: function(){
    return {
      id: null,
      message: {}
    }
  }
}
</script>

<style scoped>
p {
  width: 1000px;
  height: 100px;
  background-color: red;
}
</style>