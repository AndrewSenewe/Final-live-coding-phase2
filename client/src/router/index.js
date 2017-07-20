import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Listings from '@/components/Listings'
import Choosen from '@/components/Choosen'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
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
    }
  ]
})
