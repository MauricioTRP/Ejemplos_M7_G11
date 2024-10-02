import { mount } from '@vue/test-utils'

/**
 * usamos enrutador real, y un clon que simula una ruta
 */
import { createRouter, createWebHistory } from 'vue-router'
import App from '@/App.vue'
import CounterView from '@/views/CounterView.vue'
import { describe, it, expect } from 'vitest'
// import router from '@/router' // router real

describe("Renderiza CounterView después de navegar a la ruta 'counter'", async () => {
  const routerPruebas = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/counter',
        name: 'counter',
        component: CounterView
      }
    ]
  })

  it('Navega y renderiza la vista correspondiente', async () => {
    /**
     * navega y espera a que se cumpla la navegación
     */
    routerPruebas.push({ name: 'counter' })
    await routerPruebas.isReady()

    const wrapper = mount(App, {
      global: {
        plugins: [routerPruebas]
      }
    })

    expect(wrapper.findComponent(CounterView).exists()).toBeTruthy()
  })
})
