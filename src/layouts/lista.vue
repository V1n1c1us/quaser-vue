<template>
    <div>
      <div class="expense" v-for="expense in list" :key="expense">
          <q-collapsible  icon="local_offer" :label="expense.titulo" :sublabel="expense.data">
            <div>
              <p>Descrição: {{ expense.description }}</p>  
            </div>
          </q-collapsible>
        </div>
    </div>
</template>

<style scoped>
.expense{
  border-bottom: #999 1px solid;
  padding: 20px;
}
</style>

<script>
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
  }
}
</script>
