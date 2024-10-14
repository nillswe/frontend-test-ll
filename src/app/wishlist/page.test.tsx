import {RootStoreProvider} from '@/app/_hooks/use-root-store'
import Page from '@/app/wishlist/page'
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
    const productGrid = sut.queryByTestId('products-grid-container')

    expect(emptyWishlist).toBeVisible()
    expect(productGrid).toBe(null)
  })
})
