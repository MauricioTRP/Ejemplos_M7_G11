import axios from 'axios'
import { ref } from 'vue'

class WeatherService {
  constructor() {
    /**
     * análogo a
     * data() {
     *  return {
     *    weatherReportCountry: []
     *  }
     * }
     */
    this.weatherReportCountry = ref([]) // variable de estado reactiva vacía declarada con ref()
  }

  async fetchWeatherCountry() {
    try {
      const url = 'https://api.gael.cloud/general/public/clima'
      const { data } = await axios.get(url)

      /**
       * .value permite actualizar asignar data a la variable de estado
       */
      this.weatherReportCountry.value = data // actualizar nuestra variable de estado reactiva
    } catch (error) {
      console.error(error)
    }
  }
}

export default WeatherService
