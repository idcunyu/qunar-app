<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl" alt="icon">
          </div>
          <p class="icon-title">{{item.title}}</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination'
      },
      iconList: [{
        id: '01',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        title: '景点门票'
      }, {
        id: '02',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/96/c70f1e85ae4a4f02.png',
        title: '自然风光'
      }, {
        id: '03',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
        title: '必游榜单'
      }, {
        id: '04',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png',
        title: '踏青赏花'
      }, {
        id: '05',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
        title: '一日游'
      }, {
        id: '06',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/89/55083b0f1951f302.png',
        title: '游船游艇'
      }, {
        id: '07',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/96/c70f1e85ae4a4f02.png',
        title: '神秘武隆'
      }, {
        id: '08',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/e3/67df61427c8e1302.png',
        title: '演出'
      }, {
        id: '09',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
        title: '动植'
      }, {
        id: '10',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/80/416c6ab3368d1f02.png',
        title: '全部'
      }]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~styles/variable.scss";
@import "~styles/mixins.scss";
.icons {
  position: relative;
  overflow: hidden;
  height: 0;
  padding-bottom: 50%;
  margin-top: .1rem;
  .icon {
    border: none;
    position: relative;
    overflow: hidden;
    float: left;
    width: 25%;
    padding-bottom: 25%;
    height: 0;
    .icon-img {
      position: absolute;
      top: 0;
      right: 0;
      bottom: .44rem;
      left: 0;
      box-sizing: border-box;
      padding: .1rem;
      .icon-img-content {
        display: block;
        margin: 0 auto;
        height: 100%;
      }
    }
    .icon-title {
      display: block;
      position: absolute;
      text-align: center;
      bottom: 0;
      left: 0;
      right: 0;
      height: .44rem;
      line-height: .44rem;
      color: $normalTextColor;
      @include ellipsis;
    }
  }
}
</style>
