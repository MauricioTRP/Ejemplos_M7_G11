<script setup>
import { $auth } from '@/firebaseApp'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { ref } from 'vue'
import SignWithGoogle from '@/components/SignWithGoogle.vue'

const email = ref('')
const password = ref('')

async function handleRegister() {
  try {
    await createUserWithEmailAndPassword($auth, email.value, password.value)
    email.value = ''
    password.value = ''
  } catch (error) {
    console.error(error)
  }
}
</script>
<template>
  <div class="signup">
    <form @submit.prevent="handleRegister" class="registro">
      <h2>Regístrate</h2>
      <label for="email">Ingresa Correo</label>
      <input required type="email" name="" id="email" v-model="email" />
      <label for="password">Ingrese Contraseña</label>
      <input required type="text" id="password" v-model="password" />
      <button type="submit">Registrarse</button>
    </form>
    <SignWithGoogle />
  </div>
</template>
