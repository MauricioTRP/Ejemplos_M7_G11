<script>
export default {
  name: 'UserCard',
  data() {
    return {
      message: '',
      color: ''
    }
  },
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  methods: {
    enviarMensaje() {
      this.$emit('enviar-mensaje', this.message, this.color, this.user.name.first, this.user.side)

      this.message = ''
    }
  },
  emits: ['enviar-mensaje']
}
</script>
<template>
  <div class="user-component">
    <h2>UserCard</h2>
    <div class="card" style="width: 18rem">
      <img :src="user.picture.large" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{{ user.name.first }} {{ user.name.last }}</h5>

        <!-- Acá gestionaremos envio de mensaje -->
        <form @submit.prevent="enviarMensaje">
          <input v-model="color" type="color" />
          <textarea v-model="message"></textarea>
          <button>Enviar</button>
        </form>
      </div>
    </div>
  </div>
</template>
