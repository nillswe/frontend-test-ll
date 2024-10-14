import {StarsRating} from '@/app/_components/ui/stars-rating/stars-rating'
import {faker} from '@faker-js/faker'
import {render} from '@testing-library/react'

const makeSut = () => {
  const rating = faker.helpers.arrayElement([0, 1, 1.3, 2, 2.5, 3, 3.6, 4, 4.7, 5])
  const sut = render(<StarsRating rating={rating} />)

  return {
    sut,
    rating,
  }
}

describe('<StarsRating />', () => {
  it('Should render with correct amount of stars', async () => {
    const {sut, rating} = makeSut()

    const ratingText = sut.getByText(rating)
    const ratingIconsContainer = sut.getByTestId('stars-rating')
    const ratingStarsAmount = ratingIconsContainer.childNodes.length

    expect(ratingText).toBeVisible()
    expect(ratingStarsAmount).toBe(Math.round(rating))
  })
})
