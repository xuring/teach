<template>
    <div class="head">
      <x-header :left-options="{showBack: false}" >
        <i class="icon-xuexi1" style="font-size: 24px"> </i>
        <span style="font-size: 20px;">绘本阅读</span>
      </x-header>
    </div>
</template>

<script>
import { XHeader} from 'vux'
export default {
  name: 'topText',
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
    background-color: #0086b3;
    /*height: 30px;*/
  }
  .vux-header{
    background-color: #3498DB;
  }


</style>
