import { expect, it, vi, describe } from 'vitest'
import { funcionUtilitaria } from '@/utils/funcionUtilitaria'

describe('Funcion utilitaria', () => {
  it("responde la función original 'Implementación original'", () => {
    const resultado = funcionUtilitaria()

    expect(resultado).toEqual('Implementación original')
  })

  it("Anteponemos función impostora, y responde 'soy una impostora'", async () => {
    /**
     * Creamos un impostor mock
     */

    /** respuesta falsa */
    const respuestaDummy = 'soy una impostora'

    /**
     * definimos a quien queremos
     * suplantar y qué valor queremos que retorne
     */
    vi.doMock('@/utils/funcionUtilitaria', () => {
      return {
        funcionUtilitaria: vi.fn().mockReturnValue(respuestaDummy)
      }
    })

    /** cómo llamamos a la función impostora */
    const { funcionUtilitaria: funcionUtilitariaMock } = await import('@/utils/funcionUtilitaria')

    /** llamar a la función "impostora" */
    const result = funcionUtilitariaMock()

    expect(result).toEqual('soy una impostora')
  })
})
