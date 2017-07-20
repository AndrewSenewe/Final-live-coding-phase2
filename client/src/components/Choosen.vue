<template lang="html">
  <div class="container section">
    <div class="columns">
      <div class="column is-8 is-offset-2" >
        <header class="card-header">
          <p class="card-header-title">
            {{singleQuestion.title}}
          </p>
        </header>
        <div class="card-content">
          <div class="content">
            {{singleQuestion.content}}
            <br>
            <br>
            <small>
              <!-- author: {{singleQuestion.author.name}} -->
            </small>
          </div>
        </div>
        <footer class="card-footer">
          <a class="card-footer-item">Answer</a>
          <a class="card-footer-item">Edit</a>
          <a class="card-footer-item">Delete</a>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      singleQuestion: ''
    }
  },
  created () {
    var self = this
    console.log(this.$route.params,'ini params');
    axios.get('http://localhost:3000/articles/'+self.$route.params.id)
    .then(response => {
      console.log(response.data);
      self.singleQuestion = response.data
      // self.overall = response.data.
    })
    .catch(err => {
      console.log(err);
    })
  },
  methods: {
    like () {
      var self = this
      console.log(self.$route.params.id);
      axios.put('http://localhost:3000/articles/'+self.$route.params.id+'/like', {
        author: window.localStorage.getItem('token')
      })
      .then(response => {
        self.singleQuestion = response.data
        console.log(self.singleQuestion,'response di like question');
      })
      .catch(err => {
        console.log(err);
      })
    }
  }
}
</script>

<style lang="css" scooped>
#overall {
  height: 30px;
  margin-top: 14px;
}
</style>
