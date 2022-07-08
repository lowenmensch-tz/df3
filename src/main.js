import { createApp, h } from 'vue'

import { BootstrapVue3 } from './plugins/bootstrapVue'
import { FontAwesomeIcon } from './plugins/fontAwesome'

import App from './App.vue'
import router from './router'
import store from './store'

// CSS global
import './assets/css/main.styl'

const app = createApp({
  methods: {
    init () {
      store.dispatch('oauth/getToken', null, { root: true })
    }
  },

  created () {
    this.init()
  },

  render () {
    return h(App)
  }
})

app.component('font-awesome-icon', FontAwesomeIcon)

app.use(store).use(router).use(BootstrapVue3).mount('#app')
