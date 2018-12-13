<template>
  <div>
    <div style="color: #2c3e50;margin-top: 310px;font-size: 20px">
      <button class="signOnStyle" v-on:click="signOnClick" v-bind:class="{ active: isActiveOne }">登录</button>
      <button class="signUpStyle" v-on:click="signUpClick"  v-bind:class="{ active: isActiveTwo }">注册</button>
    </div>
    <signonstyle v-show="isActiveOne"></signonstyle>
    <signup v-show="isActiveTwo"></signup>
  </div>
</template>

<script>
import Signonstyle from './signon'
import Signup from './signup'
export default {
  name: 'switchStatus',
  components: {Signup, Signonstyle},
  data () {
    return {
      isActiveOne: true,
      isActiveTwo: false
    }
  },
  methods: {
    signOnClick: function () {
      this.isActiveOne = true
      this.isActiveTwo = false
      // console.log(this.isActiveOne)
      // console.log(this.isActiveTwo)
    },
    signUpClick: function () {
      this.isActiveOne = false
      this.isActiveTwo = true
      // console.log(this.isActiveOne)
      // console.log(this.isActiveTwo)
    }
  }
}
</script>

<style scoped>
  .signOnStyle{
    width: 50%;
    float: left;
    border-style:none ;
    border-bottom: solid 1px #FFF;
    background-color: #FFF;
    font-size: 20px;
    color:#000;
  }
  .signUpStyle{
    width: 50%;
    float: right;
    border-style:none ;
    border-bottom: solid 1px #FFF;
    background-color: #FFF;
    font-size: 20px;
    color:#000;
  }
  .active{
    width: 50%;
    float: left;
    border-style:none ;
    border-bottom: solid 1px #2391FF  ;
    background-color: #fff;
    font-size: 20px;
    color:#2391FF  ;
  }
</style>
