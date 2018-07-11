import Vue from 'vue'
import Vuex from 'vuex'

import commons from './modules/common'
import user from './modules/user'
import getters from './getters'

Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    commons,
      user
  },
  getters,
})

export default store