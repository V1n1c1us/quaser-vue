<template>
  <div>
    <q-infinite-scroll :handler="loadMore">
      <div class="expense" v-for="expense in list" @click="toggle(expense)">
        <p :class="{ done: expense.done}"> {{ expense.data }} - R$ {{ expense.amount }}</p>
        <p :class="{ done: expense.done}"> {{ expense.description }}</p>    
        <a href="#" @click.prevent="remove(expense)" class="removeLink">remover</a>
      </div>
    <q-spinner-dots slot="message" :size="10"></q-spinner-dots>
   </q-infinite-scroll>
  </div>
</template>

<style scoped>
.done {
  text-decoration: line-through;
  color: #999;
  
}
.expense{
  border-bottom: #999 1px solid;
  padding: 20px;
  cursor: pointer;
  position: relative;
}
.removeLink{
  position: absolute;
  color: #c00000;
  bottom: 10px;

}
</style>

<script>
import { setDone } from '../persistence'
export default {
  name: 'lista',
  data () {
    return {

    }
  },
  computed: {
    list () {
      return this.$store.state.Expenses.lista
    }
  },
  methods: {
    remove (expense) {
      this.$store.commit('REMOVE_EXPENSE', expense)
    },
    toggle (expense) {
      expense.done = !expense.done
      setDone(expense)
    },
    loadMore: function(index, done) {
      this.list();
    }
  }
}
</script>
