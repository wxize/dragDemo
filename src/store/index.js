import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    page: {
      id: '',
      tag: '',
      children: []
    },
    selected: null
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
