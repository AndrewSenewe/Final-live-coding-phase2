<template lang="html">
  <div class="register columns">
    <div class="column">
      <form>
      <div class="field">
        <label class="label">Username</label>
        <p class="control has-icons-left has-icons-right">
          <input class="input is-success" type="text" placeholder="Username" v-model="form.username">
          <span class="icon is-small is-left">
            <i class="fa fa-user"></i>
          </span>
          <span class="icon is-small is-right">
            <i class="fa fa-check"></i>
          </span>
        </p>
        <p class="help is-success">This username is available</p>
      </div>

      <div class="field">
        <label class="label">Password</label>
        <p class="control">
          <input class="input" type="password" placeholder="Password" v-model="form.password">
        </p>
      </div>

      <div class="field is-grouped">
        <p class="control">
          <button class="button is-primary" @click="registerUser" @keyup.enter="registerUser">Submit</button>
        </p>
      </div>
      <p>{{ warning }}</p>
    </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: '',
        password: ''
      },
      warning: ''
    }
  },
  methods: {
    registerUser() {
      var toRegister = this.form;
      var self = this
      // console.log(toRegister);
      axios.post('http://localhost:3000/users/login', {
        username: toRegister.username,
        password: toRegister.password
      })
      .then(response => {
        if (response.data === 'email or password incorrect') {
          self.warning = response.data
        } else {
          window.localStorage.setItem('token', response.data)
          toRegister.username = ''
          toRegister.password = ''
          console.log('masuk', response.data);
          this.$router.push('/')
        }
      })
      .catch(err => {
        self.warning = response.data
        console.log(err);
      })
    }
  }
}
</script>

<style lang="css">
</style>
