import {formatNumberToCurrency} from '@/utils/currency'

describe('Currency utils', () => {
  describe('formatNumberToCurrency', () => {
    it('should format a float value to BRL currency format', () => {
      const value = 100.99
      const sut = formatNumberToCurrency(value)

      expect(sut).toBe(decodeURI('R$%C2%A0100,99'))
    })
  })
})
