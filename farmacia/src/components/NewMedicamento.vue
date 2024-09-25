<script setup>
import { ref } from 'vue'
import { useMedicamentosStore } from '@/stores/medicamentos'

const nombreMedicamento = ref('')
const medicamentosStore = useMedicamentosStore()

function handleAddMedicamento() {
  medicamentosStore.addMedicamento(nombreMedicamento.value)

  nombreMedicamento.value = ''
}
</script>
<template>
  <form @submit.prevent="handleAddMedicamento">
    <label for="nombre-medicamento">Nombre Medicamento</label>
    <input required type="text" id="nombre-medicamento" v-model="nombreMedicamento" />

    <button type="submit">Agregar Medicamento</button>
  </form>
</template>
<style scoped></style>
