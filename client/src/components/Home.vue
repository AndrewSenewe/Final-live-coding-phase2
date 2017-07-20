<template>
  <div class="home">
    <!-- <h1>{{ msg }}</h1> -->
    <div class="columns is-mobile">
      <div class="column is-4 is-offset-1">
        <NoLogin></NoLogin>
      </div>
      <div class="column is-4 is-offset-2">
        <UserPage v-if="loginState"></UserPage>
        <Register v-else></Register>
      </div>
    </div>
  </div>
</template>

<script>
import NoLogin from '@/components/NoLogin'
import Register from '@/components/Register'
import UserPage from '@/components/UserPage'
export default {
  name: 'home',
  data () {
    return {
      msg: 'Home',
      loginState: false
    }
  },
  components: {
    NoLogin,
    Register,
    UserPage
  },
  created () {
    let token = window.localStorage.getItem('token')
    if (token !== null) {
      this.loginState = true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/** {
  background-color: turquoise
}*/
</style>
