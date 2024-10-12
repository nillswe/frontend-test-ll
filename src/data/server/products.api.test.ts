import {getHomeProducts} from '@/data/server/products.api'
import {serverHttp} from '@/data/server/server-http'
import {faker} from '@faker-js/faker'

jest.mock('@/data/server/server-http')

describe('Products requests', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('getHomeProducts', () => {
    it('should return a list of products', async () => {
      const responseMock = [
        {
          id: faker.number.int(),
          name: faker.word.words(5),
          pictureUrl: faker.image.url(),
          rating: faker.number.float(),
          oldPrice: faker.number.float(),
          price: faker.number.float(),
        },
      ]

      jest.spyOn(serverHttp.api, 'get').mockResolvedValue({body: responseMock, status: 200})

      const sut = await getHomeProducts()

      expect(sut).toStrictEqual(responseMock)
    })
  })
})
