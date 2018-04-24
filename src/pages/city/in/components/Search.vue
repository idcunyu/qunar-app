<template>
  <div class="search">
    <input class="search-input" type="text" placeholder="输入城市名或拼音">
  </div>
</template>

<script>
export default {
  name: 'CitySearch'
}
</script>

<style lang="scss" scoped>
@import "~styles/variable.scss";

.search {
  height: .54rem;
  line-height: .54rem;
  text-align: center;
  background: $bgColor;
  padding: .1rem;
  .search-input {
    box-sizing: border-box;
    padding: 0 .1rem;
    text-align: center;
    width: 100%;
    height: .5rem;
    border-radius: .08rem;
    font-size: .22rem;
  }
}
</style>
