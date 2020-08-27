<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  mounted () {
    const val = window.innerWidth / 375 * 14
    document.documentElement.style.fontSize = val + 'px'
  }
}
</script>

<style lang="scss">
 #app{
   width: 100%;
   height: 100%;
 }
</style>
