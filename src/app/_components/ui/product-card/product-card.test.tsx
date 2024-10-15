import {ProductCard} from '@/app/_components/ui/product-card/product-card'
import {RootStoreProvider} from '@/app/_hooks/use-root-store'
import {mockProduct} from '@/mocks/product.mock'
import {ProductModel} from '@/types/models/products.model'
import {formatCentsToCurrency} from '@/utils'
import {render} from '@testing-library/react'
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

    expect(decodeURIComponent(image.src)).toContain(defaultProps.image)
    expect(name).toBeVisible()
    expect(rating).toBeVisible()
    expect(oldPrice.textContent).toBe(formatCentsToCurrency(defaultProps.price_in_cents))
    expect(price.textContent).toBe(formatCentsToCurrency(defaultProps.sale_price_in_cents))
    expect(wishlistButton).toBeVisible()
  })

  it('Should all links point to the right page', async () => {
    const {sut, defaultProps} = makeSut()

    const links = sut.getAllByRole('link') as HTMLLinkElement[]
    const imageLink = links[0]
    const nameLink = links[1]

    expect(imageLink.href).toContain(`http://localhost/product/${defaultProps.code}`)
    expect(nameLink.href).toContain(`http://localhost/product/${defaultProps.code}`)
  })
})
