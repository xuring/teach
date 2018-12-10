<template>
  <div class="foot">
    <tabbar  >
      <tabbar-item   link="/" >
        <img slot="icon" src="../../assets/images/首页-dh.png">
        <span class="bottomText" slot="label" style="text-decoration: none;">首页</span>
      </tabbar-item>
      <tabbar-item show-dot link="/study">
        <img slot="icon" src="../../assets/images/学习.png">
        <span slot="label">学习乐园</span>
      </tabbar-item>
      <tabbar-item selected show-dot link="/personal">
        <img slot="icon" src="../../assets/images/个人中心.png">
        <span slot="label">个人中心</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem, Group, Cell } from 'vux'
export default {
  name: 'Pbottom',
  components: {
    Tabbar,
    TabbarItem,
    Group,
    Cell
  }
}
</script>

<style scoped>
  .foot{
    width: 100%;
    /*height:50px;*/
    /*background: #c5c5c5;*/
    position: fixed;
    left: 0;
    bottom: 0px;
  }
</style>
