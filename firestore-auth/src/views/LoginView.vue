<script setup>
import { $auth } from '@/firebaseApp'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { ref } from 'vue'

const email = ref('')
const password = ref('')

async function handleLogin() {
  try {
    const { user } = await signInWithEmailAndPassword($auth, email.value, password.value)

    console.log(user)
  } catch (error) {
    console.error(error)
  }
}
</script>
<template>
  <div>
    <h2>Inicia Sesión</h2>
    <form @submit.prevent="handleLogin">
      <label for="email">Ingresa Email</label>
      <input type="email" id="email" v-model="email" />
      <label for="password">Ingresa Password</label>
      <input type="password" id="password" v-model="password" />

      <button type="submit">Iniciar Sesión</button>
    </form>
  </div>
</template>
