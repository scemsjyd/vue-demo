<template>
    <div class="container">
      <span class="title">{{msg}}</span>
        <p>
        <router-link to='/link1'>GO to link1</router-link>
        <router-link to='/link2'>GO to link2</router-link>
      </p>
      <router-view></router-view>
    </div>
</template>
<script>
export default {
  name: "hello",
  data() {
    return {
      msg: "这是Hello component,this is a demo"
    };
  }
};
</script>
<style>

</style>


