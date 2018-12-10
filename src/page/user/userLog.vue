<template>
  <div>
    <div>
      <div class="bg bg-blur">
        <!--<img src="../assets/images/用户背景.jpg"/>-->
      </div>
      <div class="content-front">
        <p style="font-size: 30px">Sign up</p>
        <p>let children study with
          robot</p>
      </div>
    </div>
    <switch-status></switch-status>
    <!--<signup></signup>-->
    <!--<signonstyle></signonstyle>-->

  </div>
</template>

<script>

import Signup from './signup'
import SwitchStatus from './switchStatus'
import Signonstyle from './signon'
export default {
  name: 'userLog',
  components: {Signonstyle, SwitchStatus, Signup}
}
</script>

<style scoped>
  .bg {
    background: url('../../assets/images/登录背景.jpg');
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
    -webkit-filter: blur(2px);
    -moz-filter: blur(2px);
    -o-filter: blur(2px);
    -ms-filter: blur(2px);
    filter: blur(2px);
  }
  .content-front {
    position:absolute;
    left: 10px;
    right: 10px;
    top:80px;
    /*height:300px;*/
    /*line-height: 200px;*/
    text-align: center;
    color: #fff;
    font-size: 24px;
    /*font-weight: bold;*/
  }

</style>
