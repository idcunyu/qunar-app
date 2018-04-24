<template>
  <div class="city-page">
    <city-header></city-header>
    <city-search></city-search>
    <city-list></city-list>
  </div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'

export default {
  name: 'CityIn',
  components: {
    CityHeader,
    CitySearch,
    CityList
  }
}
</script>

<style lang="scss" scoped>

</style>
