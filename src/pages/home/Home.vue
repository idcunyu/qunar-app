<template>
  <div class="home-page">
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-recommend></home-recommend>
    <home-weekend></home-weekend>
    <div class="app-bottom">Qunar Web 触屏版</div>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  }
}
</script>

<style lang="scss">
@import "~styles/variable.scss";
.home-page {
  background: $homeBgColor;
}
.app-bottom {
  color: $descTextColor;
  padding: .2rem;
  text-align: center;
}
</style>
