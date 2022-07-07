import { createApp, h } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Traer la librería
import BootstrapVue3 from 'bootstrap-vue-3'

// Traer el css
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

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

// createApp(App).use(store).use(router).use(BootstrapVue3).mount('#app')
app.use(store).use(router).use(BootstrapVue3).mount('#app')
