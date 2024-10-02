<template>
  <div>
    <h2>Contador</h2>
    <p id="contador">{{ contador }}</p>

    <div class="botones">
      <button @click="disminuir" id="disminuir">-1</button>
      <button @click="aumentar" id="aumentar">+1</button>
      <button @click="disminuirxDos" id="disminuir-2">-2</button>
      <button @click="aumentarxDos" id="aumentar-2">+2</button>
    </div>
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

function disminuirxDos() {
  contador.value -= 2
}
function aumentarxDos() {
  contador.value += 2
}
</script>
