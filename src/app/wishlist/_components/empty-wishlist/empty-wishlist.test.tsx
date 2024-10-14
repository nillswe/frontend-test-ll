import {EmptyWishlist} from '@/app/wishlist/_components'
import {render} from '@testing-library/react'

const makeSut = () => {
  const sut = render(<EmptyWishlist />)

  return {
    sut,
  }
}

describe('<EmptyWishlist />', () => {
  it('should render EmptyWishlist properly', () => {
    const {sut} = makeSut()

    const text = sut.getByRole('alert')
    const homePageBtn = sut.getByRole('link') as HTMLAnchorElement

    expect(text.textContent).toBe(
      'Sua lista de desejos está vazia. Comece adicionando algo agora mesmo!',
    )
    expect(homePageBtn.href).toBe('http://localhost/')
  })
})
