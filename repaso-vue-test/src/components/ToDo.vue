<script setup>
import { ref } from 'vue'

const tareas = ref([])
/**
 * tarea = {
 *    id: number,
 *    todo: string,
 *    completed: boolean,
 *    userId: string
 * }
 */
const nuevaTarea = ref('')

defineProps(['encabezado'])

function handleNuevaTarea() {
  tareas.value.push({
    id: self.crypto.randomUUID(),
    todo: nuevaTarea.value,
    completed: false,
    userId: 1
  })
  nuevaTarea.value = ''
}

function handleCambioEstado(id) {
  let tarea = tareas.value.find((tarea) => tarea.id == id)
  tarea.completed = !tarea.completed
}
</script>
<template>
  <div>
    <h2>{{ encabezado }}</h2>
    <form @submit.prevent="handleNuevaTarea">
      <input type="text" data-test="nueva-tarea" v-model="nuevaTarea" />
      <button type="submit">Agregar nueva tarea</button>
    </form>
    <ul>
      <li
        v-for="tarea in tareas"
        :key="tarea.id"
        data-test="tarea"
        :class="tarea.completed ? 'completed' : ''"
      >
        {{ tarea.todo }}
        <input type="checkbox" @click="handleCambioEstado(tarea.id)" />
      </li>
    </ul>
  </div>
</template>
<style>
.completed {
  text-decoration: line-through;
}
</style>
