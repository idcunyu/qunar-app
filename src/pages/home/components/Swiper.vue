<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for = "item of swiperList" :key = "item.id">
        <img class="swiper-img" :src="item.imgUrl">
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [{
        id: '01',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/14/21f410d1016c8702.jpg_640x200_84d0effe.jpg'
      }, {
        id: '02',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/41/1b93b76d7f197c02.jpg_640x200_971065c4.jpg'
      }, {
        id: '03',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/21/a2634871550b0a02.jpg_640x200_a0fa87f9.jpg'
      }, {
        id: '04',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/fb/9140fd5178ae6b02.jpg_640x200_40ef818b.jpg'
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper >>> .swiper-pagination-bullet-active {
  background: #fff;
}
.wrapper {
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 31.25%;
  background: #eee;
  .swiper-img{
    width: 100%;
  }
}

</style>
