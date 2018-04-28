<template>
 <div class="header">
  <div class="header-left">
    <span class="iconfont back-icon">&#xe61f;</span>
  </div>
  <div class="header-input">
    <span class="iconfont">&#xe693;</span>
    输入城市/景点/游玩主题
  </div>
  <router-link to='/city/in'>
    <div class="header-right">
      {{this.city}}
      <span class="iconfont arrow-item">&#xe6dc;</span>
    </div>
  </router-link>
 </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city'])
  }
}
</script>

<style lang="scss" scoped>
@import "~styles/variable.scss";
.header {
  display: flex;
  line-height: .86rem;
  background: $bgColor;
  color: #fff;
  .header-left {
    width: .64rem;
    float: left;
    .back-icon {
      margin-left: .12rem;
      text-align: center;
      font-size: .4rem;
    }
  }
  .header-input {
    flex: 1;
    height:.64rem;
    line-height: .64rem;
    margin-top: .12rem;
    margin-left: .2rem;
    padding-left: .2rem;
    border-radius: .1rem;
    background: #fff;
    color: #ccc;
  }
  .header-right{
    min-width: 1.04rem;
    padding: 0 .1rem;
    float: right;
    text-align: center;
    color: #fff;
    .arrow-item{
      margin-left:-.04rem;
      font-size: .23rem;
    }
  }
}
</style>
