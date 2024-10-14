import {ProductModel} from '@/types/models/products.model'
import {faker} from '@faker-js/faker'

export const mockProduct = (): ProductModel => {
  return {
    id: faker.number.int(),
    name: faker.word.words(5),
    pictureUrl: faker.image.urlPicsumPhotos(),
    rating: faker.helpers.arrayElement([0, 1, 1.3, 2, 2.5, 3, 3.6, 4, 4.7, 5]),
    oldPrice: faker.number.float(),
    price: faker.number.float(),
  }
}
