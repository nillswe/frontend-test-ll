import {RootStoreProvider} from '@/app/_hooks/use-root-store'
import {ProductDetail} from '@/app/product/[slug]/_components/product-detail/product.detail'
import {mockProduct} from '@/mocks/product.mock'
import {formatCentsToCurrency} from '@/utils'
import {render} from '@testing-library/react'

const makeSut = () => {
  const defaultProduct = mockProduct()

  const sut = render(
    <RootStoreProvider>
      <ProductDetail product={defaultProduct} />
    </RootStoreProvider>,
  )

  return {
    sut,
    defaultProduct,
  }
}

describe('<ProductDetail />', () => {
  it('Ensure to render component with all elements', () => {
    const {sut, defaultProduct} = makeSut()

    const image = sut.getByRole('img') as HTMLImageElement
    const name = sut.getByRole('heading', {level: 1})
    const description = sut.getByRole('paragraph')
    const rating = sut.getByTestId('stars-rating-container')
    const oldPrice = sut.getByTestId('product-detail-old-price')
    const price = sut.getByTestId('product-detail-price')
    const buyButton = sut.getByText('Comprar')
    const cartButton = sut.getByText('Adicionar ao carrinho')
    const wishlistButton = sut.getByTestId('toggle-wishlist-button')

    expect(decodeURIComponent(image.src)).toContain(defaultProduct.image)
    expect(name.textContent).toBe(defaultProduct.name)
    expect(description.textContent).toBe(defaultProduct.details_description)
    expect(rating).toBeVisible()
    expect(oldPrice.textContent).toBe(formatCentsToCurrency(defaultProduct.price_in_cents))
    expect(price.textContent).toBe(formatCentsToCurrency(defaultProduct.sale_price_in_cents))
    expect(buyButton).toBeVisible()
    expect(cartButton).toBeVisible()
    expect(wishlistButton).toBeVisible()
  })
})
