import { createStore } from 'vuex'
import oauth from '@/store/modules/oauth'

export default new createStore({
  modules: {
    oauth
  }
})
