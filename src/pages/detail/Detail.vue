<template>
  <div class="datail-page">
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <detail-list></detail-list>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'

export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  }
}
</script>

<style lang="scss" scoped></style>
