import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import ToDo from '../ToDo.vue'

describe('ToDo.vue', () => {
  it('No muestra tareas al iniciar', () => {
    const wrapper = shallowMount(ToDo)

    const listaTarea = wrapper.findAll('[data-test="tarea"]')
    console.log(listaTarea)
    expect(listaTarea).toHaveLength(0)
  })
  it('Agrega una nueva tarea', async () => {
    const wrapper = shallowMount(ToDo)

    const listaTareaInicial = wrapper.findAll('[data-test="tarea"]')
    expect(listaTareaInicial).toHaveLength(0)

    // comportamiento
    await wrapper.find('[data-test="nueva-tarea"]').setValue('Nueva Tarea')
    await wrapper.find('form').trigger('submit')

    expect(wrapper.findAll('[data-test="tarea"]')).toHaveLength(1)
  })

  it('Marca una tarea como completada', async () => {
    const wrapper = shallowMount(ToDo)

    // Agregamos tarea
    await wrapper.find('[data-test="nueva-tarea"]').setValue('Nueva Tarea 1')
    await wrapper.find('form').trigger('submit')
    await wrapper.find('[data-test="nueva-tarea"]').setValue('Nueva Tarea 2')
    await wrapper.find('form').trigger('submit')

    const listaTareas = wrapper.findAll('[data-test="tarea"]')

    const primeraTarea = listaTareas[0]
    const checkInput = primeraTarea.find('[type="checkbox"]')

    await checkInput.trigger('click')
    console.log(primeraTarea.html())
    expect(primeraTarea.classes()).toContain('completed')
  })

  it('Renderiza un h2 con props', () => {
    const wrapper = shallowMount(ToDo, {
      props: {
        encabezado: 'Lista de tareas'
      }
    })

    expect(wrapper.find('h2').text()).toBe('Lista de tareas')
  })
})
