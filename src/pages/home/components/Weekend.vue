<template>
  <div class="weekend">
    <div class="weekend-header">周末去哪儿</div>
    <ul class="weekend-list">
      <li class="weekend-item" v-for="item of weekendList" :key="item.id">
        <img class="item-img" :src="item.imgUrl" alt="景点">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      weekendList: [{
        id: '01',
        title: '重庆必游TOP10',
        desc: '重庆，非去不可',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/53/4bcd11cc3a5374.jpg_r_640x214_988a4cee.jpg'
      }, {
        id: '02',
        title: '重庆优质汤泉',
        desc: '细数重庆那些最赞的温泉',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/5f/276ed6784d25ee.jpg_r_640x214_2193082e.jpg'
      }, {
        id: '03',
        title: '踏青好去处',
        desc: '热爱自然，喜欢户外的你千万别错过',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/48/f5bc37dba8b542.jpg_r_640x214_d33cd232.jpg'
      }, {
        id: '04',
        title: '重庆大美古镇',
        desc: '行走重庆最美古镇，让你瞬间穿越千年',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/48/f117e9b3bf582a.jpg_r_640x214_b8145711.jpg'
      }, {
        id: '05',
        title: '本地人带你耍',
        desc: '玩转小面之都，High翻天',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1506/1e/f97881dbd07520.jpg_r_640x214_f8c25916.jpg'
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~styles/variable.scss";
@import "~styles/mixins.scss";
.weekend {
  background: #fff;
  .weekend-header {
    padding-left: .2rem;
    height: .8rem;
    line-height: .8rem;
    background: $homeBgColor;
  }
  .weekend-list {
    .weekend-item {
      .item-img {
        display: block;
        width:100%;
      }
      .item-info {
        padding: .14rem .2rem .2rem .2rem;
        .item-title {
          height: .48rem;
          line-height: .48rem;
          padding-right: 1.4rem;
          font-size: .28rem;
          @include ellipsis;
        }
        .item-desc {
          height: .42rem;
          line-height: .42rem;
          padding-right: 1.4rem;
          font-size: .24rem;
          color: $descTextColor;
          @include ellipsis;
        }
      }
    }
  }
}
</style>
