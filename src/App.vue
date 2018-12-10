<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view></router-view>
    <!--<bottom></bottom>-->
  </div>
</template>

<script>
import Bottom from "./page/bottom";
export default {
  name: 'App',
  components: {Bottom}
}
</script>

<style>
  @import '/assets/font/iconfont.css';

  #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
