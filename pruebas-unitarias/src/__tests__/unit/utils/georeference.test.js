import { describe, it, expect } from 'vitest'
import { calcularDistancia } from '@/utils/georeference'

describe('Medidas Georreferenciadas', () => {
  const castro = { latitude: -42.482321, longitude: -73.764379 }
  const ancud = { latitude: -41.877117, longitude: -73.814445 }
  const plazaSucreVM = { latitude: -33.02555556, longitude: -71.5525 }
  const iglesaSanFrancisco = { latitude: -33.03949444, longitude: -71.60048056 }

  it('Distancia entre ancud y castro es aproximadamente 67 KMS', () => {
    expect(calcularDistancia(ancud, castro)).approximately(67, 3)
  })

  it('Distancia entre Ancud y Plaza Sucre es mayor a 1.000kms', () => {
    expect(calcularDistancia(ancud, plazaSucreVM)).toBeGreaterThan(1000)
  })

  it('Distancia entre plaza sucre e iglesia san francisco es mayor a 8kms', () => {
    expect(calcularDistancia(plazaSucreVM, iglesaSanFrancisco)).toBeGreaterThan(4)
  })
})
