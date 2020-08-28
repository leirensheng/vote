<template>
  <div id="app">
    <router-view :windowWidth="windowWidth" :windowHeight="windowHeight"></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      windowHeight: '',
      windowWidth: ''
    }
  },
  methods: {
    handleResize () {
      this.windowWidth = window.innerWidth
      this.windowHeight = window.innerHeight
      const val = window.innerWidth / 375 * 14
      document.documentElement.style.fontSize = val + 'px'
    }
  },
  mounted () {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  }
}
</script>

<style lang="scss">
 #app{
   width: 100%;
   height: 100%;
 }
</style>
