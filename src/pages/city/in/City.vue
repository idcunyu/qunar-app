<template>
  <div class="city-page">
    <city-header></city-header>
    <city-search></city-search>
    <city-list :city="city" :hotCities="hotCities" :cities="cities"></city-list>
    <city-alphabet :cities="cities"></city-alphabet>
  </div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
import axios from 'axios'

export default {
  name: 'CityIn',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data () {
    return {
      city: '未定位',
      hotCities: [],
      cities: {}
    }
  },
  methods: {
    getCityInfo () {
      axios.get('/api/city.json')
        .then(this.getCityInfoSuccess)
      axios.get('/api/index.json')
        .then(this.getIndexInfoSuccess)
    },
    getCityInfoSuccess (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.hotCities = data.hotCities
        this.cities = data.cities
      }
    },
    getIndexInfoSuccess (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.city = data.city
      }
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>

<style lang="scss" scoped>

</style>
