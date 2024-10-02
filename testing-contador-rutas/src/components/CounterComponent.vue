<template>
  <div>
    <h2>Contador</h2>
    <p id="contador">{{ contador }}</p>

    <button @click="disminuir" id="disminuir">-1</button>
    <button @click="aumentar" id="aumentar">+1</button>
  </div>
</template>
<script setup>
import { ref } from 'vue'

const contador = ref(0)

function aumentar() {
  contador.value++
}

function disminuir() {
  contador.value--
}
</script>
