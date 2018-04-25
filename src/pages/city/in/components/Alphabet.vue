<template>
  <ul class="list">
    <li class="item">A</li>
    <li class="item">B</li>
    <li class="item">C</li>
    <li class="item">D</li>
    <li class="item">E</li>
    <li class="item">F</li>
  </ul>
</template>

<script>
export default {
  name: 'CityList'
}
</script>

<style lang="scss" scoped>
@import "~styles/variable.scss";

.list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  position: absolute;
  top: 1.58rem;
  bottom: 0;
  right: 0;
  width: .4rem;
  font-size: .24rem;
  font-weight: bold;
  .item {
    color: $bgColor;
    line-height: .36rem;
  }
}
</style>
