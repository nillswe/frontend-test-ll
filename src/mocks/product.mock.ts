import {ProductModel} from '@/types/models/products.model'
import {faker} from '@faker-js/faker'

export const mockProduct = (): ProductModel => {
  return {
    id: faker.number.int(),
    name: faker.word.words(5),
    pictureUrl: faker.image.urlPicsumPhotos(),
    rating: faker.number.float({max: 5, min: 1, multipleOf: 0.25}),
    oldPrice: faker.number.float(),
    price: faker.number.float(),
  }
}
