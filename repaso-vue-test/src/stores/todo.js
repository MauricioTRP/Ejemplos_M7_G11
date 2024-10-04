import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useTodoStore = defineStore('todos', () => {
  const todos = ref([])
  const filter = ref('all')
  const nextId = ref(0)
  const error = ref(null)
  const isLoading = ref(false)

  const completedTodos = computed(() => todos.value.filter((todo) => todo.completed))
  const unfinishedTodos = computed(() => todos.value.filter((todo) => !todo.completed))

  const filteredTodos = computed(() => {
    if (filter.value == 'finished') {
      return completedTodos
    } else if (filter.value == 'unfinished') {
      return unfinishedTodos
    } else {
      return todos
    }
  })

  function addTodo(task) {
    todos.value.push({ id: nextId.value++, todo: task, completed: false, userId: '' })
  }

  async function fetchTodos() {
    isLoading.value = true

    try {
      const response = await fetch('https://dummyjson.com/todos')

      if (!response.ok) {
        error.value = 'No pudimos traer los Todos'
      }

      const data = await response.json()
      todos.value = data.todos
    } catch (err) {
      error.value = err
    } finally {
      isLoading.value = false
    }
  }

  return {
    filteredTodos,
    isLoading,
    error,
    filter,
    addTodo,
    fetchTodos
  }
})
