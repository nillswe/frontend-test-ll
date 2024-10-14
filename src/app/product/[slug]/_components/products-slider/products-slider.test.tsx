import {RootStoreProvider} from '@/app/_hooks/use-root-store'
import {mockProduct} from '@/mocks/product.mock'
import {faker} from '@faker-js/faker'
import {render} from '@testing-library/react'

import {ProductsSlider} from './'

jest.mock('@/data/server/products.api')

const makeSut = () => {
  const defaultProducts = [mockProduct(), mockProduct()]
  const defaultTitle = faker.word.words(3)

  const sut = render(
    <RootStoreProvider>
      <ProductsSlider products={defaultProducts} title={defaultTitle} />
    </RootStoreProvider>,
  )

  return {
    sut,
    defaultProducts,
    defaultTitle,
  }
}

describe('<ProductsSlider />', () => {
  it('Should render products with a title in the section', async () => {
    const {sut, defaultTitle, defaultProducts} = makeSut()

    const sectionTitle = sut.getAllByRole('heading', {level: 1})[0]
    const productsGrid = sut.getByTestId('products-grid-container')
    const productsItems = productsGrid.childNodes

    expect(sectionTitle.textContent).toBe(defaultTitle)
    expect(productsItems.length).toBe(defaultProducts.length)
  })
})
