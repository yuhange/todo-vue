import Vue from 'vue'
import Vuex from 'vuex'
// import { state, mutations, actions } from './mutations'
import todo from './modules/todo'

Vue.use(Vuex)

export default new Vuex.Store({
  // state,
  // mutations,
  // actions,
  modules: {
    todo
  }
})
