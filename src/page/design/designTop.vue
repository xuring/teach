<template>
  <div class="head">
    <x-header  @on-click-back="back">
      <!--<span style="font-size: 20px;">我的教学设计</span>-->
    </x-header>
  </div>
</template>

<script>
import {XHeader} from 'vux'
// const routes = {
//   '/': Home,
//   '/about': About
// }
export default {
  name: 'designTop',
  components: {
    XHeader
  },
  methods: {
    back: function () {
      // return routes['/'] || NotFound
    }
  }
}
</script>

<style scoped>
  .head{
    margin-top: 0px;
    position: fixed;
    left: 0;
    top:0;
    width: 100%;
    /*background-color: #0086b3;*/
    /*height: 30px;*/
  }
  .vux-header{
    background-color: #3498DB;
  }
  .vux-header-left{
    color:#fff;
  }
</style>
