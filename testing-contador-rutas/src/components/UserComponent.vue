<template>
  <div>
    <h1>Lista de usuarios</h1>
    <ul>
      <li v-for="user in users" :key="user.id">{{ user.name }}</li>
    </ul>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
const users = ref([])

onMounted(() => {})
/**
 * más logica para poblar la variable
 */
</script>
