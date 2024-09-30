import { describe, expect, it, vi } from 'vitest'
import { fetchQuote } from '@/services/quote.service'

/**
 * vi -> helper de vitest
 */

describe('fetchQuote', () => {
  /**
   * haremos la solicitud real de red
   * y obtendremos un quote Random
   */
  /**
   * Poner un espía en la función fetch 👁️👁️
   */
  const espiaFetch = vi.spyOn(globalThis, 'fetch').mockResolvedValue({
    ok: true,
    statusText: 'OK',
    json: async () => ({
      id: 14,
      quote: 'Huena huena, data falsa',
      author: 'Chaplin',
      img: 'https://i.imgflip.com/956jy3.jpg'
    })
  })

  it('El api fue consumido una vez', async () => {
    /** hacemos el llamado de la función "real" */
    await fetchQuote()

    /** especificaciones de comportamiento de la función fetch */
    expect(espiaFetch).toHaveBeenCalledWith('https://dummyjson.com/quotes/random')
  })

  it('La cita random es: "Huena huena, data falsa"', async () => {
    const response = await fetchQuote()
    /** especificaciones de resultado */
    expect(response.quote).toBe('Huena huena, data falsa')
  })
})
