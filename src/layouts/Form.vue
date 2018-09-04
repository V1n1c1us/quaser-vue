<template>
    <form>
        <q-input ref="titulo" class="myInput" v-model="expense.titulo" type="text" float-label="Título" />
        <q-input class="myInput" v-model="expense.amount" type="number" float-label="R$" />
        <q-input class="myInput" v-model="expense.description" type="text" float-label="Descrição" />
        <q-input class="myInput" v-model="expense.data" type="data" float-label="Data" />
        <q-btn  @click.prevent="enviar" class="myButton" color="primary" size="md" label="Medium Button" >Salvar</q-btn>
    </form>
</template>

<style scoped>
form{
    padding: 20px;
}
.myInput{
    width: 100%;
    margin-bottom: 20px;
}
.myButton{
    width: 100%;
}
</style>

<script>
import {QField, QInput} from 'quasar'
import moment from 'moment'
import { uid } from 'quasar'

export default {
  name: 'Form',
  data () {
      return {
        expense: {
          id: '',
          titulo: '',
          amount:'',
          description:'',
          data: moment().format('DD/MM/YYYY')
        }
      }
  },
  methods: {
      enviar () {
          const cloned = JSON.parse(JSON.stringify(this.expense))
          //gera id
          cloned.id = uid.id

          this.$store.commit('ADD_EXPENSE', cloned)
          this.reset()
      },
      reset () {
          this.expense.titulo = ''
          this.expense.amount = ''
          this.expense.description = ''
          this.expense.data = moment().format('DD/MM/YYYY')
          this.$refs.amount.focus()
      }
  },
  components: {
      QInput
  }
}
</script>
