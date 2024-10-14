import {RootStoreProvider} from '@/app/_hooks/use-root-store'
import Page from '@/app/page'
import * as productsApi from '@/data/server/products.api'
import {mockProduct} from '@/mocks/product.mock'
import {ProductModel} from '@/types/models/products.model'
import {render} from '@testing-library/react'

jest.mock('@/data/server/products.api')

const makeSut = async (initialProducts?: ProductModel[]) => {
  const Jsx = await Page()
  const sut = render(<RootStoreProvider wishlist={initialProducts}>{Jsx}</RootStoreProvider>)

  return {
    sut,
  }
}

describe('Home Page', () => {
  it('Should render page products', async () => {
    jest
      .spyOn(productsApi, 'getHomeProducts')
      .mockResolvedValue([mockProduct(), mockProduct(), mockProduct()])

    const {sut} = await makeSut()

    const productsGrid = sut.getByTestId('products-grid-container')
    const productsItems = productsGrid.childNodes

    expect(productsItems.length).toBe(3)
  })
})
