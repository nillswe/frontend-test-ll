import Layout, {generateMetadata} from '@/app/product/[slug]/layout'
import * as productApi from '@/data/server/products.api'
import {mockProduct} from '@/mocks/product.mock'
import {render} from '@testing-library/react'

jest.mock('@/data/server/products.api')

const makeSut = () => {
  const sut = render(
    <Layout>
      <div>children</div>
    </Layout>,
  )

  return {
    sut,
  }
}

describe('Product Layout', () => {
  it('Should ensure to render layout properly', () => {
    const {sut} = makeSut()
    const children = sut.getByText('children')

    expect(children).toBeVisible()
  })

  it('Should ensure to generate the right metadata', async () => {
    const fakeResponse = mockProduct()

    jest.spyOn(productApi, 'getProductDetail').mockResolvedValue(fakeResponse)

    const metadata = await generateMetadata({params: {slug: 'some-product'}})

    expect(metadata).toStrictEqual({
      title: fakeResponse.name,
      description: fakeResponse.details_description,
    })
  })

  it('Should ensure to generate the right metadata when request return null', async () => {
    jest.spyOn(productApi, 'getProductDetail').mockResolvedValue(null)

    const metadata = await generateMetadata({params: {slug: 'some-product'}})

    expect(metadata).toStrictEqual({
      title: 'Detalhe do produto',
      description: '',
    })
  })
})
