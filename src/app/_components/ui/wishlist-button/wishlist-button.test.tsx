import {WishlistButton} from '@/app/_components/ui/wishlist-button/wishlist-button'
import {RootStoreProvider} from '@/app/_hooks/use-root-store'
import {mockProduct} from '@/mocks/product.mock'
import {ProductModel} from '@/types/models/products.model'
import {fireEvent, render} from '@testing-library/react'

const makeSut = (product?: ProductModel) => {
  const defaultProduct = mockProduct()
  const sut = render(
    <RootStoreProvider>
      <WishlistButton product={defaultProduct ?? product} />
    </RootStoreProvider>,
  )

  return {
    sut,
    defaultProduct,
  }
}

describe('<WishlistButton />', () => {
  it('Should perform toggle wishlist on click on the button', async () => {
    const {sut} = makeSut()
    const wishlistButton = await sut.getByTestId('toggle-wishlist-button')

    expect(wishlistButton.children[0].id).toBe('heart-icon')

    fireEvent.click(wishlistButton)

    expect(wishlistButton.children[0].id).toBe('x-icon')

    fireEvent.click(wishlistButton)

    expect(wishlistButton.children[0].id).toBe('heart-icon')
  })
})
