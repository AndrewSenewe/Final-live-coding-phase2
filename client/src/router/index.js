import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Listings from '@/components/Listings'
import Choosen from '@/components/Choosen'
import Create_article from '@/components/Create_article'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/create',
      name: 'Create_article',
      component: Create_article
    },
    {
      path: '/lists',
      name: 'Listings',
      component: Listings
    },
    {
      path: '/articles/:id',
      name: 'Choosen',
      component: Choosen,
    },
    {
      path: '/search/:params',
      name: 'Choosen',
      component: Choosen,
    }
  ]
})
