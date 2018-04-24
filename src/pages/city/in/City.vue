<template>
  <div class="city-page">
    <city-header></city-header>
    <city-search></city-search>
  </div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'

export default {
  name: 'CityIn',
  components: {
    CityHeader,
    CitySearch
  }
}
</script>

<style lang="scss" scoped>

</style>
