<template>
  <ul class="list">
    <li class="item"
    v-for="item of characters"
    :key="item"
    :ref="item"
    @click="handleCharacterClick"
    @touchstart="handleTouchStart"
    @touchmove="handleTouchMove"
    @touchend="handleTouchEnd"
    >
      {{item}}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  computed: {
    characters () {
      const characters = []
      for (let i in this.cities) {
        characters.push(i)
      }
      return characters
    }
  },
  data () {
    return {
      touchStatus: false
    }
  },
  methods: {
    handleCharacterClick (e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        const startY = this.$refs['A'][0].offsetTop
        const touchY = e.touches[0].clientY - 74
        const index = Math.floor((touchY - startY) / 20)
        if (index >= 0 && index < this.characters.length) {
          this.$emit('change', this.characters[index])
        }
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
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
    line-height: .4rem;
  }
}
</style>
