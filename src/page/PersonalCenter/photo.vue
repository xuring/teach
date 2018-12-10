<template>
  <div>
    <div v-for="src in list" style="background-color:#fff;text-align:center;">
      <span style="font-size:20px;">Loading</span>
      <x-img :src="src" :webp-src="`${src}?type=webp`" @on-success="success" @on-error="error" class="ximg-demo" error-class="ximg-error" :offset="-100" container="#vux_view_box_body"></x-img>
    </div>
  </div>
</template>

<script>
  import { XImg } from 'vux'
export default {
  name: 'photo',
  components: {
    XImg
  },
  methods: {
    success (src, ele) {
      console.log('success load', src)
      const span = ele.parentNode.querySelector('span')
      ele.parentNode.removeChild(span)
    },
    error (src, ele, msg) {
      console.log('error load', msg, src)
      const span = ele.parentNode.querySelector('span')
      span.innerText = 'load error'
    }
  },
  data () {
    return {
      list: [
        'http://pic.qiantucdn.com/58pic/14/05/05/45D58PICZpb_1024.jpg',
      ]
    }
  }

}
</script>

<style scoped>
  .ximg-demo {
    width: 100%;
    height: auto;
  }
  .ximg-error {
    background-color: yellow;
  }
  .ximg-error:after {
    content: '加载失败';
    color: red;
  }
  .element.style {
    background-color: #fff;
    text-align: center;
  }
</style>
