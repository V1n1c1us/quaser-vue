<template>
  <q-layout>
    <div class="container">
      <cc-form></cc-form>
      <hr v-show="list.length > 0">
      <cc-lista></cc-lista>
    </div>
  </q-layout>
</template>

<style>
</style>

<script>
import CcForm from 'layouts/Form.vue'
import CcLista from 'layouts/lista.vue'
export default {
  name: 'PageIndex',
  components: {
    CcForm,
    CcLista
  },
    computed: {
    list () {
      return this.$store.state.Expenses.lista
    }
  }
}
</script>
