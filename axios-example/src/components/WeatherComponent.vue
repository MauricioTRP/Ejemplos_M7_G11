<script>
import axios from 'axios'

export default {
  name: 'WeatherComponent',
  /**
   * partimos con data reactiva "vacía"
   * respetamos el tipo de dato que trae el API
   */
  data() {
    return {
      countryWeather: [] // acá se almacena la info
    }
  },
  methods: {
    /**
     * Método se llama al evento click
     * y actualiza la variable de estado countryWeather
     * de forma asíncrona
     */
    async weatherReport() {
      try {
        const url = 'https://api.gael.cloud/general/public/clima'
        const { data } = await axios.get(url)

        this.countryWeather = data
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>
<template>
  <h1>Consumiendo API del Clima</h1>

  <button @click="weatherReport">Obtener información climática</button>

  <p v-for="estacion in countryWeather" :key="estacion.Codigo">
    Temperatura: {{ estacion.Temp }} - Comuna: {{ estacion.Estacion }}
  </p>
</template>
