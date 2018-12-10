<template>
  <div>
    <div class=" bg bg-blur" >
    </div>
    <div  v-bind:style="{marginLeft:(screenWidth/2-60)+'px'}" class="circle ">
    </div>
    <div  class="content-front" style="color:#fff;font-size: 20px;">用户名：{{userName}}</div>
  </div>

</template>

<script>
export default {
  name: 'userImg',
  data () {
    return {
      userName: 'ring',
      screenWidth: window.screen.availWidth // 屏幕尺寸
    }
  },
  // 钩子函数
  mounted () {
    const that = this
    window.onresize = () => {
      return (() => {
        window.screenWidth = window.screen.availWidth
        that.screenWidth = window.screenWidth
      })()
    }
  }
}
</script>

<style scoped>
  .bg {
    background: url('../../assets/images/用户背景.jpg');
    height:300px;
    text-align: center;
    /*line-height: 300px;*/
    left: 0;
    top:0;
    position: fixed;
  }
  .bg-blur {
    float: left;
    width: 100%;
    height: 300px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    -webkit-filter: blur(3px);
    -moz-filter: blur(3px);
    -o-filter: blur(3px);
    -ms-filter: blur(3px);
    filter: blur(3px);
  }
.circle {
      width: 120px;
      height: 120px;
      /*background: #ccc;*/
      background: url('../../assets/images/用户.png');
      background-size: cover;
      -moz-border-radius: 60px;
      -webkit-border-radius: 60px;
      border-radius: 60px;
      /*margin-left: 32%;*/
      /*margin-top: 100px;*/
      position:absolute;
  }
  .content-front {
    position:absolute;
    left: 10px;
    right: 10px;
    height:250px;
    line-height: 300px;
    text-align: center;
  }
</style>
