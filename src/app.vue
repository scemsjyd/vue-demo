<template>
    <div>
        <div id="app">{{text}}</div>
        <hello></hello>
    </div>
</template>

<script>
import Hello from "./hello.vue"
export default {
  name: "app",
  components: {
    'hello': Hello
  },
  data() {
    return {
      text: "vue demo thisasfasdfasdfasdfasdfa"
    };
  }
};
</script>

<style>
#app {
  color: red;
}
</style>

    
