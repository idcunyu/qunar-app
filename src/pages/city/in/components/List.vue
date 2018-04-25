<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title">当前城市</div>
        <div class="area-city">
          <div class="city-button location-city">{{this.city}}</div>
        </div>
      </div>
      <div class="area">
        <div class="title">热门城市</div>
        <div class="area-city">
          <div class="city-button" v-for="city of hotCities" :key="city.id">{{city.name}}</div>
        </div>
      </div>
      <div class="area">
        <div class="cities">
          <div class="city-character-list" v-for="(val, key) of cities" :key="key">
            <div class="title">{{key}}</div>
            <div class="area-city">
              <div class="city-item border-topbottom" v-for="item of val" :key="item.id">{{item.name}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'CityList',
  props: {
    city: String,
    hotCities: Array,
    cities: Object
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  }
}
</script>

<style lang="scss" scoped>
@import "~styles/variable.scss";

.list {
  overflow: hidden;
  position: absolute;
  top: 2.22rem;
  left: 0;
  right: 0;
  bottom: 0;
  .area {
    .title {
      height:.24rem;
      line-height: .24rem;
      font-size: .26rem;
      padding: .24rem .3rem;
      background: $homeBgColor;
    }
    .area-city {
      padding: .1rem .5rem .1rem .24rem;
      overflow: hidden;
      .location-city {
        background: $bgColor;
        color: #fff;
      }
      .city-button {
        float: left;
        height: .4rem;
        line-height: .4rem;
        font-size: .26rem;
        width:29%;
        text-align: center;
        margin: .1rem;
        border: .02rem solid #ccc;
        border-radius: .06rem;
      }
    }
    .cities {
      .city-character-list {
        .area-city {
          padding: 0;
          .city-item {
            height: .5rem;
            line-height: .5rem;
            font-size: .26rem;
            padding: .1rem .5rem .1rem .34rem;
          }
          .border-topbottom {
            &:bofore {
              border-color: #ccc;
            }
            &:after {
              border-color: #ccc;
            }
          }
        }
      }
    }
  }
}
</style>
