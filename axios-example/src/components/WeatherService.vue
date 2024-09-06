<script>
import WeatherService from '@/services/WeatherService'

export default {
  name: 'WeatherService',
  data() {
    return {
      countryWeather: []
    }
  },
  methods: {
    async weatherReport() {
      const weatherService = new WeatherService()
      await weatherService.fetchWeatherCountry()

      this.countryWeather = weatherService.weatherReportCountry
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
