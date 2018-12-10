<template>
  <div>
        <!-- swiper -->
        <swiper :options="swiperOption" >
          <swiper-slide><img src="../../assets/images/小王子.jpg" style="width: 100%"></swiper-slide>
          <swiper-slide><img src="../../assets/images/小画家.jpg" style="width: 100%"></swiper-slide>
          <swiper-slide><img src="../../assets/images/小公主.jpg" style="width: 100%"></swiper-slide>
          <swiper-slide><img src="../../assets/images/小猫.jpg" style="width: 100%"></swiper-slide>
          <!--<swiper-slide>Slide 5</swiper-slide>-->
          <!--<swiper-slide>Slide 6</swiper-slide>-->
          <!--<swiper-slide>Slide 7</swiper-slide>-->
          <!--<swiper-slide>Slide 8</swiper-slide>-->
          <!--<swiper-slide>Slide 9</swiper-slide>-->
          <!--<swiper-slide>Slide 10</swiper-slide>-->
          <div class="swiper-scrollbar" slot="scrollbar"></div>
        </swiper>
  </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css'    //在全局没引入，这里记得要！
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'imgSwiper',
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOption: {
        scrollbar: {
          el: '.swiper-scrollbar',
          hide: false
        },
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        }
      }
    }
  }
}
</script>

<style scoped>
  .swiper-slide {
    width: 250px;
  }
</style>
