import Vue from 'vue'
import Vuex from 'vuex'
import { addExpense, removeExpense } from '../persistence'

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
    },
    SET_EXPENSE (state, obj) {
      addExpense(obj)
      state.Expenses.lista = obj
    },
    REMOVE_EXPENSE (state, obj) {
      const index = state.Expenses.lista.indexOf(obj)
      state.Expenses.lista.splice(index, 1)
      removeExpense(obj)
    }
  }
})
