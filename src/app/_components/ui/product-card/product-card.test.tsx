import {ProductCard} from '@/app/_components/ui/product-card/product-card'
import {RootStoreProvider} from '@/app/_hooks/use-root-store'
import {ProductModel} from '@/types/models/products.model'
import {formatNumberToCurrency} from '@/utils'
import {faker} from '@faker-js/faker'
import {fireEvent, render} from '@testing-library/react'

const makeSut = (product?: ProductModel) => {
  const defaultProps: ProductModel = {
    id: 1,
    name: faker.commerce.productName(),
    pictureUrl: faker.image.urlPicsumPhotos(),
    price: faker.commerce.price() as unknown as number,
    oldPrice: faker.commerce.price() as unknown as number,
    rating: faker.helpers.arrayElement([0, 1, 1.3, 2, 2.5, 3, 3.6, 4, 4.7, 5]),
  }

  const sut = render(
    <RootStoreProvider wishlist={[]}>
      <ProductCard product={product ?? defaultProps} />
    </RootStoreProvider>,
  )

  return {
    defaultProps,
    sut,
  }
}

describe('<ProductCard />', () => {
  it('Should render component with all info passed via props', async () => {
    const {sut, defaultProps} = makeSut()

    const image = (await sut.getByRole('img')) as HTMLImageElement
    const name = await sut.getByText(defaultProps.name)
    const rating = await sut.getByText(defaultProps.rating)
    const ratingIconsContainer = await sut.getByTestId('rating-stars')
    const ratingStarsAmount = ratingIconsContainer.childNodes.length
    const oldPrice = await sut.getByTestId('product-card-old-price')
    const price = await sut.getByTestId('product-card-price')
    const wishlistButton = await sut.getByTestId('toggle-wishlist-button')

    expect(decodeURIComponent(image.src)).toContain(defaultProps.pictureUrl)
    expect(name).toBeVisible()
    expect(rating).toBeVisible()
    expect(ratingStarsAmount).toBe(Math.round(defaultProps.rating))
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
})
