import {ProductModel} from '@/types/models/products.model'
import {faker} from '@faker-js/faker'

export const mockProduct = (): ProductModel => {
  return {
    id: faker.number.int(),
    code: faker.lorem.slug(),
    name: faker.commerce.productName(),
    image: faker.image.urlPicsumPhotos(),
    details_description: faker.commerce.productDescription(),
    rating: faker.helpers.arrayElement([0, 1, 1.3, 2, 2.5, 3, 3.6, 4, 4.7, 5]),
    price_in_cents: faker.number.float({min: 99, multipleOf: 0.99, max: 600}),
    sale_price_in_cents: faker.number.float({min: 99, multipleOf: 2.5, max: 800}),
    available: faker.number.int(),
    details_name: faker.commerce.productName(),
    stock_available: faker.number.int(),
    visible: faker.number.int(),
  }
}

export const mockProductResponse = (product: ProductModel[]) => {
  return {
    total: 0,
    pageSize: 0,
    totalPages: 0,
    products: product,
  }
}
