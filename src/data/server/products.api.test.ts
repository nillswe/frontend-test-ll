import {getHomeProducts, getProductDetail, getRelatedProducts} from '@/data/server/products.api'
import {serverHttp} from '@/data/server/server-http'
import {mockProduct} from '@/mocks/product.mock'

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

    it('should fail to get the list of products and return an empty array', async () => {
      jest.spyOn(serverHttp.api, 'get').mockRejectedValue({body: null, status: 500})
      const sut = await getHomeProducts()

      expect(sut).toStrictEqual([])
    })
  })

  describe('getProductDetail', () => {
    it('should return a single product', async () => {
      const responseMock = mockProduct()

      jest.spyOn(serverHttp.api, 'get').mockResolvedValue({body: responseMock, status: 200})

      const sut = await getProductDetail('fake-slug')

      expect(sut).toStrictEqual(responseMock)
    })

    it('should fail to get the product and return null', async () => {
      jest.spyOn(serverHttp.api, 'get').mockRejectedValue({body: null, status: 500})
      const sut = await getProductDetail('fake-slug')

      expect(sut).toStrictEqual(null)
    })
  })

  describe('getRelatedProducts', () => {
    it('should return a single product', async () => {
      const responseMock = [mockProduct(), mockProduct()]

      jest.spyOn(serverHttp.api, 'get').mockResolvedValue({body: responseMock, status: 200})

      const sut = await getRelatedProducts()

      expect(sut).toStrictEqual(responseMock)
    })

    it('should fail to get the product and return null', async () => {
      jest.spyOn(serverHttp.api, 'get').mockRejectedValue({body: null, status: 500})
      const sut = await getRelatedProducts()

      expect(sut).toStrictEqual(null)
    })
  })
})
