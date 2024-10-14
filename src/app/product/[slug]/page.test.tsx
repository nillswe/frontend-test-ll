import mockRouter from 'next-router-mock'

import {RootStoreProvider} from '@/app/_hooks/use-root-store'
import Page from '@/app/product/[slug]/page'
import * as productsApi from '@/data/server/products.api'
import {mockProduct} from '@/mocks/product.mock'
import {render} from '@testing-library/react'

jest.mock('@/data/server/products.api')

jest.mock('next/navigation', () => {
  const redirect = jest.fn(param => {
    mockRouter.push(param)
  })
  return {redirect}
})

const makeSut = async () => {
  const defaultSlug = 'some-product'

  const Jsx = await Page({params: {slug: defaultSlug}})

  const sut = render(<RootStoreProvider>{Jsx}</RootStoreProvider>)

  return {
    sut,
    defaultSlug,
  }
}

describe('Product Detail page', () => {
  it('should render page with all sections', async () => {
    jest.spyOn(productsApi, 'getProductDetail').mockResolvedValue(mockProduct())

    jest
      .spyOn(productsApi, 'getRelatedProducts')
      .mockResolvedValue([mockProduct(), mockProduct(), mockProduct()])

    const {sut} = await makeSut()

    const productDetail = sut.getByTestId('product-detail-container')
    const productsSlider = sut.getByTestId('products-slider-container')

    expect(productDetail).toBeVisible()
    expect(productsSlider).toBeVisible()
  })

  it('should redirect to not found page', async () => {
    jest.spyOn(productsApi, 'getProductDetail').mockResolvedValue(null)

    await makeSut()

    expect(mockRouter.pathname).toBe('/not-found')
  })
})
