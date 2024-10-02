import { describe, it, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import UserComponent from '@/components/UserComponent.vue'

describe('UserComponent', () => {
  /**
   * montar el componente
   * con variable de estado users
   */
  const wrapper = mount(UserComponent, {
    data() {
      return {
        users: [
          { id: 1, name: 'Juan Juan' },
          { id: 2, name: 'Juan Juan Juan' },
          { id: 3, name: 'Juan Juan Juan Juan' }
        ]
      }
    }
  })
  it('EL HTML se mantiene en las pruebas', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
  test('Tiene una lista de usuarios, con el texto "user.name"', () => {
    const li = wrapper.findAll('li')

    expect(li[0].text()).toBe('Juan Juan')
    expect(li).toHaveLength(3)
  })
})
