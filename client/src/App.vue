<template>
  <div id="app">
    <Myheader></Myheader>
    <img src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>
import Myheader from '@/components/Myheader'
export default {
  name: 'app',
  components: {
    Myheader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  /*margin-top: 60px;*/
}
</style>
