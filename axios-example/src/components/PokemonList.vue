<script>
import axios from 'axios'

export default {
  name: 'PokemonList',
  data() {
    return {
      pokemonData: {},
      alert: ''
    }
  },
  methods: {
    async catchThemAll() {
      try {
        const url = 'https://pokeapi.co/api/v2/pokemon'
        const { data } = await axios.get(url)

        this.pokemonData = data
      } catch (error) {
        console.error(error)
        this.alert = 'Lo sentimos no hay pokemones'
      }
    }
  }
}
</script>

<template>
  <h1>Pokemones</h1>

  <button @click="catchThemAll">Obten los pokemones</button>

  <p v-for="pokemon in pokemonData.results" :key="pokemon.name">
    {{ pokemon.name }}
  </p>
</template>
