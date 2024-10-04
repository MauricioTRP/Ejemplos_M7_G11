import { beforeEach, describe, expect, it, vi, afterEach } from 'vitest'
import { useTodoStore } from './todo'
import { setActivePinia, createPinia } from 'pinia'

describe('useTodoStore', () => {
  // Activamos entorno del plugin antes de cada prueba
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  /**
   * limpiaremos fetch de respuestas falsas
   * después de cada prueba
   */
  afterEach(() => {
    vi.resetAllMocks()
  })

  // 👁️👁️ fetch
  const dummyTodo = [
    { id: 1, todo: 'Description ToDo1', completed: false, userId: '' },
    { id: 2, todo: 'Description ToDo2', completed: true, userId: '' },
    { id: 3, todo: 'Description ToDo3', completed: true, userId: '' },
    { id: 4, todo: 'Description ToDo4', completed: false, userId: '' }
  ]

  /**
   * Pondremos un espía en fetch 👁️👁️
   * para inyectar nuestras respuestas falsas
   */
  const mockedFetch = vi.spyOn(globalThis, 'fetch')

  it('crea una tarea sin completar', () => {
    // Crea la instancia del store
    const todoStore = useTodoStore()

    // Obtiene el listado de tareas antes de hacer la acción
    const [...tareasAntesDe] = todoStore.filteredTodos.value
    // Agrega una nueva tarea, con el texto 'Nueva Tarea'
    todoStore.addTodo('Nueva Tarea')
    // Obtiene el listado de tareas después de la acción
    const [...tareasDespuesDe] = todoStore.filteredTodos.value
    console.log(tareasAntesDe)
    console.log(tareasDespuesDe)

    // La cantidad de tareas aumentó
    expect(tareasDespuesDe.length).toBeGreaterThan(tareasAntesDe.length)
    // La tarea nueva tiene completed = false
    expect(tareasDespuesDe[0].completed).toBe(false)
  })
  it('filtra por tareas incompletas', async () => {
    // Crea la instancia del store
    const todoStore = useTodoStore()

    /**
     * Inyectamos nuestra data falta a fetch
     */
    mockedFetch.mockResolvedValue({
      ok: true,
      json: () => new Promise((res) => res({ todos: dummyTodo }))
    })

    // Trae los datos del API
    await todoStore.fetchTodos()

    const [...todasLasTareas] = todoStore.filteredTodos.value

    // cambiamos el filtro 'finished' | 'all'  | 'unfinished'
    todoStore.filter = 'finished'

    const [...tareasFiltradas] = todoStore.filteredTodos.value

    console.log(todasLasTareas)
    console.log(tareasFiltradas)
    expect(tareasFiltradas.filter((tarea) => !tarea.completed)).toHaveLength(0)
  })
  it('filtra por tareas completas', () => {})
  it('bonus test consumo API', () => {})
})
