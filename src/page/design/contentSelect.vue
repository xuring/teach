<template>
  <div>
    <el-row class="tac">
      <el-col :span="12">
        <h5>自定义颜色</h5>
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          v-for="value in menuList">
          <el-menu-item index="1" >
            <i class="el-icon-menu"></i>
            <span slot="title">{{value}}</span>
          </el-menu-item>
          <!--<el-menu-item index="3" disabled>-->
            <!--<i class="el-icon-document"></i>-->
            <!--<span slot="title">导航三</span>-->
          <!--</el-menu-item>-->
          <!--<el-menu-item index="4">-->
            <!--<i class="el-icon-setting"></i>-->
            <!--<span slot="title">导航四</span>-->
          <!--</el-menu-item>-->
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'contentSelect',
  data () {
    return {
      list: [],
      menuList: []
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  },
  mounted () {
    console.log(this.$route.query)
    this.list = this.$route.query.teachList
    console.log(this.list)
    for (var i = 0; i < this.list.length; i++) {
      this.menuList[i] = this.list[i].name
    }
    console.log(this.menuList)
  }
}
</script>

<style scoped>

</style>
