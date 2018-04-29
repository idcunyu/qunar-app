<!-- 景点详情页 -->
<template>
  <div class="datail-page">
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'

export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      list: []
    }
  },
  methods: {
    getDetailInfo () {
      axios.get('/api/detail.json')
        .then(this.getDetailInfoSuccess)
    },
    getDetailInfoSuccess (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.list = data.priceType
      }
    }
  },
  mounted () {
    this.getDetailInfo()
  }
}
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
  height: 20rem;
}
</style>
