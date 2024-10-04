<script setup>
import ToDo from '@/components/ToDo.vue'
</script>
<template>
  <div class="about">
    <h1>Todo</h1>
    <ToDo :encabezado="'El encabezado del componente'" />
  </div>
</template>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
