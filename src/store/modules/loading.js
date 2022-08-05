// store/modules/loading.js

const state = {
  isLoading: false
}

const mutations = {
  SET_LOADING (state, payload) {
    state.isLoading = payload
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
