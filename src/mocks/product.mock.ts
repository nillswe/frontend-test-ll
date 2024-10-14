import {ProductModel} from '@/types/models/products.model'
import {faker} from '@faker-js/faker'

export const mockProduct = (): ProductModel => {
  return {
    id: faker.number.int(),
    slug: faker.lorem.slug(),
    name: faker.commerce.productName(),
    pictureUrl: faker.image.urlPicsumPhotos(),
    description: faker.commerce.productDescription(),
    rating: faker.helpers.arrayElement([0, 1, 1.3, 2, 2.5, 3, 3.6, 4, 4.7, 5]),
    oldPrice: faker.number.float({min: 99, multipleOf: 0.99, max: 600}),
    price: faker.number.float({min: 99, multipleOf: 2.5, max: 800}),
  }
}
