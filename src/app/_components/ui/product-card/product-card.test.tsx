import {ProductCard} from '@/app/_components/ui/product-card/product-card'
import {RootStoreProvider} from '@/app/_hooks/use-root-store'
import {mockProduct} from '@/mocks/product.mock'
import {ProductModel} from '@/types/models/products.model'
import {formatNumberToCurrency} from '@/utils'
import {fireEvent, render} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

const makeSut = (product?: ProductModel) => {
  const defaultProps: ProductModel = mockProduct()

  const sut = render(
    <RootStoreProvider wishlist={[]}>
      <ProductCard product={product ?? defaultProps} />
    </RootStoreProvider>,
  )

  return {
    defaultProps,
    sut,
    user: userEvent.setup(),
  }
}

describe('<ProductCard />', () => {
  it('Should render component with all info passed via props', async () => {
    const {sut, defaultProps} = makeSut()

    const image = sut.getByRole('img') as HTMLImageElement
    const name = sut.getByText(defaultProps.name)
    const rating = sut.getByTestId('stars-rating-container')
    const oldPrice = sut.getByTestId('product-card-old-price')
    const price = sut.getByTestId('product-card-price')
    const wishlistButton = sut.getByTestId('toggle-wishlist-button')

    expect(decodeURIComponent(image.src)).toContain(defaultProps.pictureUrl)
    expect(name).toBeVisible()
    expect(rating).toBeVisible()
    expect(oldPrice.textContent).toBe(formatNumberToCurrency(defaultProps.oldPrice))
    expect(price.textContent).toBe(formatNumberToCurrency(defaultProps.price))
    expect(wishlistButton).toBeVisible()
  })

  it('Should perform toggle wishlist on click on the button', async () => {
    const {sut} = makeSut()
    const wishlistButton = await sut.getByTestId('toggle-wishlist-button')

    expect(wishlistButton.children[0].id).toBe('heart-icon')

    fireEvent.click(wishlistButton)

    expect(wishlistButton.children[0].id).toBe('x-icon')

    fireEvent.click(wishlistButton)

    expect(wishlistButton.children[0].id).toBe('heart-icon')
  })

  it('Should all links point to the right page', async () => {
    const {sut, defaultProps} = makeSut()

    const links = (await sut.getAllByRole('link')) as HTMLLinkElement[]
    const imageLink = links[0]
    const nameLink = links[1]

    expect(imageLink.href).toContain(`http://localhost/product/${defaultProps.id}`)
    expect(nameLink.href).toContain(`http://localhost/product/${defaultProps.id}`)
  })
})
