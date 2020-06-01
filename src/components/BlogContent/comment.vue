<template>
  <div>
    <i>
      <parentDiscuss :com = "com" @onSubmit="onSubmit"></parentDiscuss>
    </i>
    <i v-if="com.childrens.length>0" class="el-icon-caret-bottom" />
    <i v-for="child in child" :key="child.id">
      <child-discuss :child="child"></child-discuss>
    </i>
  </div>
</template>

<script>
import parentDiscuss from "./parentDiscuss";
import childDiscuss from "./childDiscuss";
export default {
  components: {
    parentDiscuss,
    childDiscuss
  },
  props:['com','child'],
  methods:{
      onSubmit(){
          this.$emit('onSubmit',this.com.id)
      }
  },
  computed:{
   
  }
};
</script>

<style>
</style>