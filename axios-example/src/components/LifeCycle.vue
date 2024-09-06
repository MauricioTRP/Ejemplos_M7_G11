<script>
import axios from 'axios'

export default {
  name: 'LifeCycle',
  setup() {
    /** configuración inicial del componente */
    console.log('setup')
    console.log('this en setup', this)
  },
  beforeCreate() {
    console.log('En ciclo beforeCreate')
    /**
     * que pasa con this?
     */
    console.log('Palabra clave this', this)
    console.log('¿Podemos acceder a la variable "variable de estado"?', this.variableEstado)
  },
  data() {
    console.log('Estamos en data')
    console.log('Palabra clave this', this)

    return {
      variableEstado: 'Nuestro compenente LifeCycle',
      users: []
    }
  },
  created() {
    /**
     * Ya está creado, todavía no está montado
     *
     * podría ser un lugar adecuado para consumir un API
     **/
    console.log('Ciclo hook created')
    console.log('Variable de estado', this.variableEstado)
  },
  beforeMount() {
    console.log('Antes del montado')
  },
  async mounted() {
    console.log('En montado, aquí ya se ve en el documento')
    const url = 'https://randomuser.me/api?results=30'
    const { data } = await axios.get(url)

    this.users = data.results
  },
  computed: {
    userPicture() {
      return this.users.map((user) => user.picture.medium)
    }
  },
  /**
   * Ciclo de actualización
   */
  beforeUpdate() {
    console.log('Antes de la actualización')
  },
  updated() {
    console.log('Ya está actualizado')
  },
  /**
   * fin ciclo actualización
   */
  beforeUnmount() {
    console.log('Antes del desmontado')
  },
  unmounted() {
    console.log('Ya está desmontado')
  }
}
</script>
<template>
  <h1>Ciclo de vida</h1>

  <div class="foto-container" v-if="userPicture.length > 1">
    <div class="foto" v-for="(picture, idx) in userPicture" :key="idx">
      <img :src="picture" />
    </div>
  </div>
</template>
