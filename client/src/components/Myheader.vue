<template>
  <nav class="navbar ">
    <div class="navbar-brand">
      <a class="navbar-item" href="http://bulma.io">
        <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
      </a>

      <a class="navbar-item is-hidden-desktop" href="https://github.com/jgthms/bulma" target="_blank">
        <span class="icon" style="color: #333;">
          <i class="fa fa-github"></i>
        </span>
      </a>

      <a class="navbar-item is-hidden-desktop" href="https://twitter.com/jgthms" target="_blank">
        <span class="icon" style="color: #55acee;">
          <i class="fa fa-twitter"></i>
        </span>
      </a>

      <div class="navbar-burger burger" data-target="navMenuExample">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div id="navMenuExample" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item " href="http://bulma.io/">
          Home
        </a>
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link  is-active" href="/documentation/overview/start/">
            Docs
          </a>
          <div class="navbar-dropdown ">
            <a class="navbar-item " href="/documentation/overview/start/">
              Overview
            </a>
            <a class="navbar-item " href="http://bulma.io/documentation/modifiers/syntax/">
              Modifiers
            </a>
            <a class="navbar-item " href="http://bulma.io/documentation/grid/columns/">
              Grid
            </a>
            <a class="navbar-item " href="http://bulma.io/documentation/elements/box/">
              Elements
            </a>

              <a class="navbar-item is-active" href="http://bulma.io/documentation/components/breadcrumb/">
                Components
              </a>

            <a class="navbar-item " href="http://bulma.io/documentation/layout/container/">
              Layout
            </a>
            <hr class="navbar-divider">
            <div class="navbar-item">
              <div>version <p class="has-text-info">0.4.3</p></div>
            </div>
          </div>
        </div>
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link " href="http://bulma.io/blog/">
            Blog
          </a>
          <div id="blogDropdown" class="navbar-dropdown " data-style="width: 18rem;">

              <a class="navbar-item" href="/2017/03/10/new-field-element/">
                <div class="navbar-content">
                  <p>
                    <small class="has-text-info">10 Mar 2017</small>
                  </p>
                  <p>New field element (for better controls)</p>
                </div>
              </a>

              <a class="navbar-item" href="/2016/04/11/metro-ui-css-grid-with-bulma-tiles/">
                <div class="navbar-content">
                  <p>
                    <small class="has-text-info">11 Apr 2016</small>
                  </p>
                  <p>Metro UI CSS grid with Bulma tiles</p>
                </div>
              </a>

              <a class="navbar-item" href="/2016/02/09/blog-launched-new-responsive-columns-new-helpers/">
                <div class="navbar-content">
                  <p>
                    <small class="has-text-info">09 Feb 2016</small>
                  </p>
                  <p>Blog launched, new responsive columns, new helpers</p>
                </div>
              </a>

            <a class="navbar-item" href="http://bulma.io/blog/">
              More posts
            </a>
            <hr class="navbar-divider">
            <div class="navbar-item">
              <div class="navbar-content">
                <div class="level is-mobile">
                  <div class="level-left">
                    <div class="level-item">
                      <strong>Stay up to date!</strong>
                    </div>
                  </div>
                  <div class="level-right">
                    <div class="level-item">
                      <a class="button is-rss is-small" href="http://bulma.io/atom.xml">
                        <span class="icon is-small">
                          <i class="fa fa-rss"></i>
                        </span>
                        <span>Subscribe</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="panel-block">
        <p class="control has-icons-left">
          <input class="input is-small" type="text" placeholder="Search">
          <span class="icon is-small is-left">
            <i class="fa fa-search"></i>
          </span>
        </p>
      </div>

      <div class="navbar-end">
        <a class="navbar-item" href="https://github.com/jgthms/bulma" target="_blank">
          Github
        </a>
        <a class="navbar-item" href="https://twitter.com/jgthms" target="_blank">
          Twitter
        </a>
        <div class="navbar-item" v-if="isLogin">
          <div class="field is-grouped">
            <p class="control">
              <a id="twitter"
                class="button"
                data-target="modal-login" @click="logout">
                <!-- <span class="icon">
                  <i class="fa fa-twitter"></i>
                </span> -->
                <span>logout</span>
              </a>
            </p>
          </div>
        </div>
        <div class="navbar-item" v-else>
          <div class="field is-grouped">
            <p class="control">
              <a id="twitter"
                class="button"
                data-target="modal-login" @click="popLogin">
                <!-- <span class="icon">
                  <i class="fa fa-twitter"></i>
                </span> -->
                <span>Login</span>
              </a>
            </p>
          </div>
        </div>
        <div id="modal-login" :class="login">
          <div class="modal-background" @click="unPop"></div>
          <div class="modal-card">
            <header class="modal-card-head">
              <p class="modal-card-title">Modal title</p>
              <button class="delete" @click="unPop"></button>
            </header>
            <section class="modal-card-body">
              <Login></Login>
            </section>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import Login from '@/components/Login'
export default {
  name: 'header',
  data () {
    return {
      login : 'modal',
      isLogin: false
    }
  },
  methods: {
    popLogin () {
      this.login = 'modal is-active'
      return
    },
    unPop () {
      this.login = 'modal'
      return
    },
    logout () {
      localStorage.clear()
      this.isLogin = false
    }
  },
  components: {
    Login
  },
  created () {
    // console.log(this.tesLogin);
    this.login = 'modal'
    if (localStorage.getItem('token') !== null) {
      this.isLogin = true
    }
  },
  computed: {
    tesLogin () {
      return this.$store.state.isLogin
    }
  },
  watch: {
    isLogin
  }
}
</script>

<style scooped>
#header {
  background-color: ivory
}
</style>
