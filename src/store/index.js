import Vue from 'vue'
import Vuex from 'vuex'
import { addExpense } from '../persistence'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Expenses: {
      lista: []
    }
  },
  mutations: {
    ADD_EXPENSE (state, obj) {
      addExpense(obj)
      state.Expenses.lista.unshift(obj)
    }
  }
})
