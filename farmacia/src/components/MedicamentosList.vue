<script setup>
import { useMedicamentosStore } from '@/stores/medicamentos'
import { onMounted } from 'vue'

const medicamentosStore = useMedicamentosStore()

onMounted(() => {
  medicamentosStore.fetchMedicamentos()
})

function handleDelete(id) {
  medicamentosStore.deleteMedicamento(id)
}
</script>
<template>
  <ul>
    <li v-for="medicamento in medicamentosStore.medicamentos" :key="medicamento.id">
      {{ medicamento.nombre }}
      <button @click="handleDelete(medicamento.id)">Eliminar</button>
    </li>
  </ul>
</template>
<style scoped></style>
