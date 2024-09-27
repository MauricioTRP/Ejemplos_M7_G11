import { defineStore } from 'pinia'
import { $db } from '@/firebaseApp'
import { ref } from 'vue'
import { collection, onSnapshot } from 'firebase/firestore'

export const useProductosStore = defineStore('productos', () => {
  const productos = ref([])
  const productosRef = collection($db, 'productos')

  async function fetchProductos() {
    try {
      onSnapshot(productosRef, (snapshot) => {
        productos.value = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))
      })
    } catch (error) {
      console.error(error)
    }
  }

  return {
    productos,
    fetchProductos
  }
})
