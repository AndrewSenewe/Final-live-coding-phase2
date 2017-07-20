<template lang="html">
  <div class="nologin">
    <h1>NOLOGIN</h1>
    <p v-for="pop in populations">{{pop.title}}</p>

    <div class="">
      <router-link :to="{ name: '', params: {} }">
        <button class="button is-primary">more questions</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      populations: []
    }
  },
  created () {
    var self = this
    axios.get('http://localhost:3000/articles/limited')
    .then(response => {
      self.populations = response.data
    })
    .catch(err => {
      console.log(err);
    })
  }
}
</script>

<style lang="css" scoped>
  /*.nologin {
    background-color: pink
  }*/
</style>
