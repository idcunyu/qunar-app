<template>
  <div>
    <city-header></city-header>
    <div class="no-data"><span class="iconfont erroe-icon">&#xe649;</span>暂无数据</div>
  </div>
</template>

<script>
import CityHeader from './components/Header'

export default {
  name: 'CityOut',
  components: {
    CityHeader
  }
}
</script>

<style lang="scss" scoped>
@import "~styles/variable.scss";

.no-data {
  width: 100%;
  text-align: center;
  color: $descTextColor;
  padding-top: 1rem;
}
</style>
