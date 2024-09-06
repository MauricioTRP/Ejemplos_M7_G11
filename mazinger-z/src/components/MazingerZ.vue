<script>
import axios from 'axios'
import ChatBoard from '@/components/ChatBoard.vue'
import UserCard from '@/components/UserCard.vue'

export default {
  name: 'MazingerZ',
  components: {
    ChatBoard,
    UserCard
  },
  data() {
    return {
      userLeft: {},
      userRight: {},
      messages: []
    }
  },
  async created() {
    try {
      const url = 'https://randomuser.me/api/?results=2'
      const { data } = await axios.get(url)

      this.userLeft = { ...data.results[0], side: 'left' }
      this.userRight = { ...data.results[1], side: 'right' }
    } catch (error) {
      console.error(error)
    }
  },
  methods: {
    enviarMensaje(message, color, name, side) {
      this.messages.push({ message, color, name, side })
    }
  }
}
</script>
<template>
  <h1>Chat Mazinger</h1>

  <div class="chat-app-container container">
    <div class="row">
      <UserCard
        :user="userLeft"
        @enviar-mensaje="enviarMensaje"
        class="col-4"
        v-if="Object.keys(userLeft).length > 0"
      />
      <ChatBoard class="col-4" :messages="messages" />
      <UserCard
        :user="userRight"
        class="col-4"
        @enviar-mensaje="enviarMensaje"
        v-if="Object.keys(userRight).length > 0"
      />
    </div>
  </div>
</template>
<style></style>
