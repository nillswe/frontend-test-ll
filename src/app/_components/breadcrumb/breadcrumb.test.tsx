import mockRouter from 'next-router-mock'

import {Breadcrumb} from '@/app/_components/breadcrumb/breadcrumb'
import {render} from '@testing-library/react'

jest.mock('next/router', () => jest.requireActual('next-router-mock'))

jest.mock('next/navigation', () => {
  const usePathname = () => mockRouter.pathname
  return {usePathname}
})

const makeSut = () => {
  const sut = render(<Breadcrumb />)

  return {
    sut,
  }
}

describe('<Breadcrumb />', () => {
  it('Should render breadcrumb on home page', () => {
    const {sut} = makeSut()

    const container = sut.getByTestId('breadcrumb-container')
    const homeLink = sut.getByRole('link')

    expect(container.childNodes.length).toBe(1)
    expect(homeLink.textContent).toBe('Home')
  })

  it('Should render breadcrumb on a second page', () => {
    mockRouter.push('/not-found')

    const {sut} = makeSut()

    const container = sut.getByTestId('breadcrumb-container')
    const links = sut.getAllByRole('link')

    expect(container.childNodes.length).toBe(3)
    expect(links[0].textContent).toBe('Home')
    expect(links[1].textContent).toBe('not-found')
  })
})
