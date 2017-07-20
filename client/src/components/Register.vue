<template lang="html">
  <div class="register">
    <div class="field">
      <label class="label">Full Name</label>
      <p class="control">
        <input class="input" type="text" placeholder="Full Name" v-model="form.name">
      </p>
    </div>

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
        <label class="label">Email</label>
        <p class="control has-icons-left has-icons-right">
          <input class="input is-danger" type="text" placeholder="Email" v-model="form.email">
          <span class="icon is-small is-left">
            <i class="fa fa-envelope"></i>
          </span>
          <span class="icon is-small is-right">
            <i class="fa fa-warning"></i>
          </span>
        </p>
        <p class="help is-danger">This email is invalid</p>
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
    </form>

  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        username: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    registerUser() {
      var toRegister = this.form;
      // console.log(toRegister);
      axios.post('http://localhost:3000/users/register', {
        name: toRegister.name,
        username: toRegister.username,
        email: toRegister.email,
        password: toRegister.password
      })
      .then(response => {
        console.log(response.data);
        toRegister.name = '',
        toRegister.username = '',
        toRegister.email = '',
        toRegister.password = ''
        this.$router.push('/')
      })
      .catch(err => {
        console.log(err);
      })
    }
  }
}
</script>

<style lang="css">
</style>
