import {getHomeProducts} from '@/data/server/products.api'
import {serverHttp} from '@/data/server/server-http'
import {mockProduct} from '@/mocks/product.mock'
import {faker} from '@faker-js/faker'

jest.mock('@/data/server/server-http')

describe('Products requests', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('getHomeProducts', () => {
    it('should return a list of products', async () => {
      const responseMock = [mockProduct()]

      jest.spyOn(serverHttp.api, 'get').mockResolvedValue({body: responseMock, status: 200})

      const sut = await getHomeProducts()

      expect(sut).toStrictEqual(responseMock)
    })
  })
})
