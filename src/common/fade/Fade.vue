<template>
  <transition name="fade">
    <slot></slot>
  </transition>
</template>

<script>
export default {
  name: 'CommonFade'
}
</script>

<style lang="scss" scoped>
@import "~styles/variable.scss";

.fade-enter, .fade-leave-to {
  opacity: 0;
}
.fade-enter-active, .fade-leave-active {
  opacity: .5;
  transition: opacity .5s;
}
</style>
