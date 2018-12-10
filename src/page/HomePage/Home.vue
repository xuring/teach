<template>
    <div class="home">
      <top-text></top-text>
      <!--轮播图-->
      <img-swiper></img-swiper>
      <start></start>
      <bottom></bottom>
    </div>
</template>

<script>
import Photo from '../PersonalCenter/photo'
import Bottom from '../bottom'
import TopText from './topText'
import Start from './start'
import ImgSwiper from './imgSwiper'

export default {
  name: 'Home',
  components: {ImgSwiper, Start, TopText, Bottom, Photo}
}
</script>

<style scoped>
.home{
  width: 100%;
  margin-top: 0px;
}
</style>
