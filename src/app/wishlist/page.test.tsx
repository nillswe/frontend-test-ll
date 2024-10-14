import {RootStoreProvider} from '@/app/_hooks/use-root-store'
import Page from '@/app/wishlist/page'
import {mockProduct} from '@/mocks/product.mock'
import {ProductModel} from '@/types/models/products.model'
import {render} from '@testing-library/react'

const makeSut = (initialProducts?: ProductModel[]) => {
  const sut = render(
    <RootStoreProvider wishlist={initialProducts}>
      <Page />
    </RootStoreProvider>,
  )

  return {
    sut,
  }
}

describe('Wishlist Page', () => {
  it('Should render page with wishlist empty', async () => {
    const {sut} = makeSut()

    const emptyWishlist = sut.getByTestId('empty-wishlist-container')
    const productsGrid = sut.queryByTestId('products-grid-container')

    expect(emptyWishlist).toBeVisible()
    expect(productsGrid).toBe(null)
  })

  it('Should render page with wishlist filled with products', async () => {
    const fakeInitialProducts = [mockProduct(), mockProduct(), mockProduct(), mockProduct()]

    const {sut} = makeSut(fakeInitialProducts)

    const emptyWishlist = sut.queryByTestId('empty-wishlist-container')
    const productsGrid = sut.getByTestId('products-grid-container')
    const productsItems = productsGrid.childNodes

    expect(emptyWishlist).toBe(null)
    expect(productsItems.length).toBe(fakeInitialProducts.length)
  })
})
