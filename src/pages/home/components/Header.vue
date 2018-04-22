<template>
 <div class="header">
  <div class="header-left">
    <span class="iconfont back-icon">&#xe697;</span>
  </div>
  <div class="header-input">
    <span class="iconfont">&#xe693;</span>
    输入城市/景点/游玩主题
  </div>
  <div class="header-right">
    城市
    <span class="iconfont arrow-item">&#xe6dc;</span>
  </div>
 </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="scss" scoped>
@import "~styles/variable.scss";
.header {
  display: flex;
  line-height: .86rem;
  background: $bgColor;
  color: #fff;
 .header-left{
  width: .64rem;
  float: left;
  .back-icon{
   margin-left: .12rem;
   text-align: center;
   font-size: .4rem;
  }
 }
 .header-input{
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
  width: 1.24rem;
  float: right;
  text-align: center;
  .arrow-item{
   margin-left:-.04rem;
   font-size: .23rem;
  }
 }
}
</style>
