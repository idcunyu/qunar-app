<template>
  <div class="recommend">
    <div class="recommend-header">
      <img class="header-img" src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" alt="猜你喜欢">
      <span class="header-title">猜你喜欢</span>
    </div>
    <ul class="recommend-list">
      <li class="recommend-item" v-for="item of recommendList" :key="item.id">
        <img class="item-img" :src="item.imgUrl" alt="景点">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-address">{{item.address}}</p>
          <p class="item-price">
            <span class="price-icon">￥</span><span class="price-number">{{item.price}}</span>起
          </p>
        </div>
        <button class="item-more">查看详情</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [{
        id: '01',
        title: '武隆天坑地缝国家地质公园武隆天坑地缝国家地质公园武隆天坑地缝国家地质公园',
        address: '重庆市武隆县',
        price: '57',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1505/be/be4802e10f3b3107.water.jpg_200x200_0e98aabe.jpg'
      }, {
        id: '02',
        title: '重庆柏联温泉',
        address: '重庆市北碚区',
        price: '288',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/201401/29/8e60d7bb448bc8d4652efb382324076f.jpg_200x200_45d36d9b.jpg'
      }, {
        id: '03',
        title: '梦幻奥陶纪',
        address: '重庆市万盛区',
        price: '90',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1707/c5/c568c1adf9b18efa3.img.jpg_200x200_803087d7.jpg'
      }, {
        id: '04',
        title: '酉阳桃花源',
        address: '重庆市酉阳县',
        price: '74',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1708/ef/ef538bb8d9911483a3.img.jpg_200x200_dd73d5c7.jpg'
      }, {
        id: '05',
        title: '黑山谷',
        address: '重庆市万盛区',
        price: '90',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/201305/08/8638c7dbd656cafac8d65eac.jpg_200x200_4824cf98.jpg'
      }, {
        id: '06',
        title: '重庆欢乐谷',
        address: '重庆市渝北区',
        price: '58',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1709/7b/7bf5984d7e6a3c2da3.img.jpg_200x200_5fb349d9.jpg'
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~styles/variable.scss";
@import "~styles/mixins.scss";
.recommend {
  background: #fff;
  margin-top: .2rem;
  padding-left: .2rem;
  .recommend-header {
    height: .47rem;
    line-height: .47rem;
    padding: .24rem 0;
    .header-img {
      height: 70%;
      vertical-align: top;
    }
    .header-title {
      text-align: left;
      font-size: .3rem;
      margin-left: .04rem;
    }
  }
  .recommend-list {
    .recommend-item {
      position: relative;
      display: flex;
      height: 2rem;
      width: 100%;
      padding: .2rem 0;
      .item-img {
        display: inline-block;
        height: 100%;
      }
      .item-info {
        flex: 1;
        min-width: 0;
        padding-left: .22rem;
        .item-title {
          margin-top: .28rem;
          font-size: .32rem;
          @include ellipsis;
        }
        .item-address {
          margin-top: .22rem;
          font-size: .24rem;
          color: #616161;
          @include ellipsis;
        }
        .item-price {
          margin-top: .26rem;
          color: #616161;
          .price-icon {
            color: #ff8300;
            vertical-align: bottom;
            font-size: .24rem;
          }
          .price-number {
            color: #ff8300;
            font-size: .4rem;
          }
        }
      }
      .item-more {
        position: absolute;
        background: $bgColor;
        height: .3rem;
        line-height: .3rem;
        font-size: .18rem;
        border-radius: .04rem;
        padding: 0 .1rem;
        color: #fff;
        bottom: .24rem;
        right: .24rem;
      }
    }
  }
}
</style>
