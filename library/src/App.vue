<template>
  <div id="app">
    <header-nav></header-nav>
    <router-view></router-view>
    <footer-nav class="blue"></footer-nav>
  </div>
</template>

<script>
import Header from '@/components/header'
import Footer from '@/components/footer'
export default {
  name: 'App',
  components: {
    headerNav: Header,
    footerNav: Footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.blue{
  background-color: #49709c;
}
</style>
