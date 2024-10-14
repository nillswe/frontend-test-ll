import NotFoundPage from '@/app/not-found'
import {render} from '@testing-library/react'

const makeSut = () => {
  const sut = render(<NotFoundPage />)

  return {
    sut,
  }
}

describe('NotFound page', () => {
  it('should render page properly', () => {
    const {sut} = makeSut()

    const image = sut.getByRole('img') as HTMLImageElement
    const title = sut.getByRole('heading', {level: 1})
    const subTitle = sut.getByRole('paragraph')
    const text = sut.getByRole('alert')
    const homePageLink = sut.getByRole('link') as HTMLAnchorElement

    expect(image).toBeVisible()
    expect(decodeURIComponent(image.src)).toContain('/assets/404/shopping-cart.jpg')

    expect(title).toBeVisible()
    expect(title.textContent).toBe('404')

    expect(subTitle).toBeVisible()
    expect(subTitle.textContent).toBe('Página não encontrada')

    expect(text).toBeVisible()
    expect(text.textContent).toBe('Veja o que temos em nossa página inicial')

    expect(homePageLink).toBeVisible()
    expect(homePageLink.href).toBe('http://localhost/')
    expect(homePageLink.textContent).toBe('Voltar para home page')
  })
})
