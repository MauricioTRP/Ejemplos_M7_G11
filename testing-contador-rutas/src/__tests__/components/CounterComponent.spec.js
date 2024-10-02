import { describe, it, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'

import CounterComponent from '@/components/CounterComponent.vue'

describe('CounterComponent', () => {
  const wrapper = mount(CounterComponent)

  it('El HTML se mantiene en las pruebas', () => {
    /**
     * Verificaremos que el marcado HTML
     * se mantenga estable entre prueba y prueba
     *
     * (cuando vuelvo a correr las pruebas)
     */
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('Tiene un botón para aumentar contador con texto "+1"', () => {
    const btnAumentar = wrapper.find('#aumentar')

    expect(btnAumentar.text()).toBe('+1')
  })

  test('Tiene un botón para dismiuir contador con texto "-1"', () => {
    const btnDisminuir = wrapper.find('#disminuir')

    expect(btnDisminuir.text()).toBe('-1')
  })

  it('Aumenta el contador en uno al hacer clic en "+1"', async () => {
    /** análogo a "document.querySelector("#contador").innerText */
    const contadorAntesClick = Number(wrapper.find('#contador').text())

    /**
     * buscamos botón #aumentar
     * hacemos click
     * contrastamos valor de #contador, antes contra despues del click
     */
    const btnAumentar = wrapper.find('#aumentar')
    await btnAumentar.trigger('click')

    const contadorDespuesClick = Number(wrapper.find('#contador').text())

    expect(contadorAntesClick).toBeLessThan(contadorDespuesClick)
  })

  it('Disminuye el contador en uno al hacer clic en "-1"', async () => {
    /** análogo a "document.querySelector("#contador").innerText */
    const contadorAntesClick = Number(wrapper.find('#contador').text())

    /**
     * buscamos botón #aumentar
     * hacemos click
     * contrastamos valor de #contador, antes contra despues del click
     */
    const btnDisminuir = wrapper.find('#disminuir')
    await btnDisminuir.trigger('click')

    const contadorDespuesClick = Number(wrapper.find('#contador').text())

    expect(contadorDespuesClick).toBeLessThan(contadorAntesClick)
  })

  it('Existe un botón para aumentar 2 en 2', () => {
    const btnAumentar = wrapper.find('#aumentar-2')

    expect(btnAumentar.text()).toBe('+2')
  })
  it('Existe un botón para disminuir 2 en 2', () => {
    const btnDisminuir = wrapper.find('#disminuir-2')

    expect(btnDisminuir.text()).toBe('-2')
  })
  it('Disminuye el contador en dos al hacer click en el "-2"', async () => {
    const contadorAntesClick = Number(wrapper.find('#contador').text())
    const btnDisminuir2 = wrapper.find('#disminuir-2')
    await btnDisminuir2.trigger('click')
    const contadorDespuesClick = Number(wrapper.find('#contador').text())

    expect(contadorDespuesClick).toEqual(contadorAntesClick - 2)
  })
  it('Aumenta en 2 al hacer click en +2', async () => {
    const contadorAntesClick = Number(wrapper.find('#contador').text())
    const btnAumentar2 = wrapper.find('#aumentar-2')
    await btnAumentar2.trigger('click')
    const contadorDespuesClick = Number(wrapper.find('#contador').text())

    expect(contadorDespuesClick).toEqual(contadorAntesClick + 2)
  })
})
