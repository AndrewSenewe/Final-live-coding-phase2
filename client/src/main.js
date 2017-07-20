// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isLogin: false
  },
  mutations: {
    toFalse(state) {
      state.isLogin = false
    },
    toTrue(state) {
      state.isLogin = true
    }
  }
})

new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})


