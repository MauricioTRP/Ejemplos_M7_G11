import { describe, it, expect } from 'vitest'
import { suma } from '@/utils/suma'

describe('suma', () => {
  it('Suma 2 + 2 = 4', () => {
    expect(suma(2, 2)).toEqual(4)
  })

  it('Suma 2 + (-2) = 0', () => {
    expect(suma(2, -2)).toEqual(0)
  })

  it('Responde con NaN si los argumentos no son digitos o convertibles a digitos', () => {
    expect(suma('azucar', 'cafe')).toBeNaN()
  })

  it('Suma 1 + 2 + 3 + 4 + 5 = 15', () => {
    expect(suma(1, 2, 3, 4, 5)).toEqual(15)
  })
})
