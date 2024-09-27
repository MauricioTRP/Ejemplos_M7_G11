<script setup>
import { useProductosStore } from '@/stores/productos'
import { onMounted } from 'vue'

const productosStore = useProductosStore()

onMounted(() => {
  productosStore.fetchProductos()
})
</script>
<template>
  <div>
    <ul>
      <li v-for="producto in productosStore.productos" :key="producto.id">
        {{ producto.nombre }} - ${{ producto.precio }}
      </li>
    </ul>
  </div>
</template>
