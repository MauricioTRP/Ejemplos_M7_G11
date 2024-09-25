import { $db } from '@/firebaseApp'
import { collection, onSnapshot, addDoc, deleteDoc, doc } from 'firebase/firestore'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMedicamentosStore = defineStore('medicamentos', () => {
  const medicamentos = ref([])

  async function fetchMedicamentos() {
    try {
      const medicamentosRef = collection($db, 'medicamentos')

      onSnapshot(medicamentosRef, (snapshot) => {
        medicamentos.value = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      })
    } catch (error) {
      console.error(error)
    }
  }

  async function addMedicamento(data) {
    try {
      const medicamentoRef = collection($db, 'medicamentos')
      await addDoc(medicamentoRef, { nombre: data })
    } catch (error) {
      console.error(error)
    }
  }

  async function deleteMedicamento(id) {
    try {
      const medicamentoRef = doc($db, 'medicamentos', id)

      await deleteDoc(medicamentoRef)
    } catch (error) {
      console.error(error)
    }
  }

  return {
    medicamentos,
    fetchMedicamentos,
    addMedicamento,
    deleteMedicamento
  }
})
