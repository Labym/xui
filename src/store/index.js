import Vue from 'vue'
import Vuex from 'vuex'

import commons from './modules/common'
import getters from './getters'

Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    commons,
  },
  getters,
})

export default store