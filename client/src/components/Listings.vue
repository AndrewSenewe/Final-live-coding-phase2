<template lang="html">
  <div class="container section">
    <div class="columns" v-for="articles in articlesLists">
      <div class="column is-8 is-offset-2" >
        <router-link :to="{ path: 'articles/'+articles._id }">
          <header class="card-header">
            <p class="card-header-title">
              {{articles.title}}
            </p>
          <!-- <a class="card-header-icon">
            <span class="icon">
              <i class="fa fa-angle-down"></i>
            </span>
          </a> -->
          </header>
        </router-link>
        <div class="card-content">
          <div class="content">
            {{articles.content}}
            <br>
            <br>
            <small>author: {{articles.author.name}}</small>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      articlesLists: []
    }
  },
  created () {
    var self = this
    axios.get('http://localhost:3000/articles/')
    .then(response => {
      // console.log(response.data);
      self.articlesLists = response.data
    })
    .catch(err => {
      console.log(err);
    })
  }
}
</script>

<style lang="css" scoped>
.columns {
  margin-bottom: 30px;
}
</style>
