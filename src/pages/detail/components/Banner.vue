<template>
  <div>
    <div class="banner">
      <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/1505/be/be4802e10f3b3107.water.jpg_600x330_9eb9410c.jpg" alt="banner-slide">
      <div class="banner-info">
        <div class="banner-number">
          <span class="iconfont photo-icon">&#xe872;</span>4
        </div>
        <div class="banner-title">
          武隆天坑地缝国家地质公园(AAAAA景区)
          <span class="iconfont arrow-icon">&#xe62d;</span>
        </div>
      </div>
    </div>
    <common-gallary></common-gallary>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'

export default {
  name: 'DetailBanner',
  components: {
    CommonGallary
  }
}
</script>

<style lang="scss" scoped>
@import "~styles/variable.scss";
@import "~styles/mixins.scss";

.banner {
  position: relative;
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;
  .banner-img {
    width: 100%;
  }
  .banner-info {
    display: flex;
    flex-direction: column;
    position: absolute;
    padding-bottom: .06rem;
    bottom: 0;
    left: 0;
    right: 0;
    line-height: .5rem;
    color: #fff;
    font-weight: 500;
    background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, .8));
    .banner-title {
      flex: 1;
      font-size: .3rem;
      padding: 0 .2rem;
      .arrow-icon {
        float: right;
      }
    }
    .banner-number {
      text-align: center;
      width: .4rem;
      height: .34rem;
      padding: 0 .4rem;
      margin: 0 0 .06rem .2rem;
      line-height: .34rem;
      font-size: .24rem;
      border-radius: .2rem;
      background: rgba(0, 0, 0, .6);
    }
  }
}
</style>
