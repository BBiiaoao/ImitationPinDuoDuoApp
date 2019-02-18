import Vue from 'vue'
import Vuex from 'vuex'


import state from './state'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

//1.使用vuex
Vue.use(Vuex);

//2.对外输出vuex的store对象
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})



