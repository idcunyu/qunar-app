<template>
  <div class="datail-page">
    <detail-banner></detail-banner>
    <detail-header></detail-header>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader
  }
}
</script>

<style lang="scss" scoped></style>
