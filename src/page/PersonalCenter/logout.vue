<template>
  <div>
    <div style="font-size: 17px;text-align: left;border-bottom: solid 1px #D5D8DC;padding-bottom: 10px" >
         <span style="padding-left:20px;">
           <i class="icon-mima1" style="color:#808B96;padding-right: 10px"></i>修改密码
         </span>
      <i class="icon-xiangyou" style="float: right"></i>
    </div>
    <a href="#volet" aria-hidden="true" class="ouvrir" style="text-decoration: none;color:#2c3e50">
      <div on-click="logoutUser"  style="font-size: 17px;text-align: left;margin-top: 10px;border-bottom: solid 1px #D5D8DC;padding-bottom: 10px" >
           <span style="padding-left:20px;">
             <i class="icon-tuichu" style="color:#808B96;padding-right: 10px"></i>退出登录
           </span>
        <i class="icon-xiangyou" style="float: right"></i>
      </div>
    </a>
    <div id="exitPage" v-bind:style="{width:screenWidth+'px'}" style="left: 0px;right:0px;position: fixed;">
      <div id="volet_clos">
        <div id="volet">
          <div v-bind:style="{width:screenWidth+'px'}" style="text-align: center">
            <div style="border-bottom: solid 0px #fff;padding: 10px 0px 10px 0px;">退出登录</div>
            <!--<router-link :to="{path:'/accountMangement'}">-->
              <a href="#volet_clos" aria-hidden="true" style="text-decoration: none;color:#2c3e50">
                <div class="yes"  v-on:click="logout()">是</div>
              </a>
            <!--</router-link>-->
            <a href="#volet_clos" aria-hidden="true" style="text-decoration: none;color:#2c3e50">
              <div class="no" >否</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'logout',
  data () {
    return {
      screenWidth: window.screen.availWidth // 屏幕尺寸
    }
  },
  methods: {
    // 退出登录
    logout: function () {

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
  .yes{
    border-bottom: solid 2px #fff;
    padding: 10px 0px;
    background-color:#E5E7E9;
    color: #969896;
  }
  .yes:hover{
    background-color: #F2F3F4;
  }
  .no{
    padding: 10px 0px 10px 0px;
    background-color:#E5E7E9;
    bottom: 0px;
    color: #969896;
  }
  .no:hover{
    background-color: #F2F3F4;
  }
  #volet {
    width: 100%;
    /*position: relative;*/
    /*padding: 0px;*/
    left: 0px;
    background: #3498DB; color: #fff;
  }

  #volet a.ouvrir,
  #volet a.fermer {
    padding: 10px 25px;
    background: #555;
    color: #fff;
    text-decoration: none;
  }

  #volet {
    position: relative;
    bottom: -200px;  /* test fixed + scroll, on retire la position top */
    -webkit-transition: all .5s ease-in;
    -moz-transition: all .5s ease-in;
    transition: all .5s ease-in;
  }
  #volet a.ouvrir,
  #volet a.fermer {
    position: absolute;
    right: -88px;
    top: 150px;
    -webkit-transform: rotate(270deg);
    -moz-transform: rotate(270deg);
    -o-transform: rotate(270deg);
    -ms-transform: rotate(270deg);
    -moz-radius: 0 0 8px 8px;
    border-radius: 0 0 8px 8px;
  }
  #volet a.fermer {
    display: none;
  }
  #volet:target {
    bottom: 0px;
  }

  /* code pour la fermeture */

  #volet:target a.fermer {
    display: block;
  }
  #volet:target a.ouvrir {
    display: none;
  }
  #volet_clos:target #volet {
    bottom: -270px;
  }

  /* test fixed + scroll */
  #volet_clos {
    position: fixed;
    /*top: 55px;*/
    bottom: 0;
  }
</style>
