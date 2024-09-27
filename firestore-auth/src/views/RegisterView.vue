<script setup>
import { ref } from 'vue'
import { $auth } from '@/firebaseApp'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const email = ref('')
const password = ref('')

async function handleRegister() {
  try {
    const userCredential = await createUserWithEmailAndPassword($auth, email.value, password.value)

    console.log(userCredential.user)
    email.value = ''
    password.value = ''
  } catch (error) {
    console.error(error)
  }
}
</script>
<template>
  <form @submit.prevent="handleRegister" class="registro">
    <h2>Registrate</h2>
    <label for="email">Ingresa Correo</label>
    <input required type="email" id="email" v-model="email" />
    <label for="password">Ingrese Contraseña</label>
    <input required type="text" id="password" v-model="password" />

    <button type="submit">Registrarse</button>
  </form>
</template>
