<template>
    <div class="head">
      <x-header>
        <!--<img  src="../assets/images/书本.png" style="width: 20%;height: 80%;">-->
        <span style="font-size: 20px;">我的</span>
      </x-header>
    </div>
</template>

<script>
import { XHeader} from 'vux'
export default {
  name: 'personalTop',
  components: {
    XHeader
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
