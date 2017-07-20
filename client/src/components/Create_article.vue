<template lang="html">
  <div class="">
    <div class="field">
      <p class="control">
        <input class="input" type="text" placeholder="Title" v-model="title">
      </p>
    </div>
    <div class="field">
      <p class="control">
        <textarea class="textarea" placeholder="Content" v-model="content"></textarea>
      </p>
    </div>
    <div class="submit">
      <button class="button is-primary" @click="submitQuestion" @keyup.enter="submitQuestion">Submit</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: '',
      content: ''
    }
  },
  methods: {
    submitQuestion() {
      var self = this
      axios.post('http://localhost:3000/articles/', {
        title: self.title,
        content: self.content,
        author: window.localStorage.getItem('token')
      })
      .then(response => {
        console.log(response.data);
        this.$router.push('/')
      })
      .catch(err => {
        console.log('masuk error');
        console.log(err);
      })
    }
  }
}
</script>

<style lang="css">
</style>
