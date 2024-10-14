import Layout from '@/app/product/[product-slug]/layout'
import {render} from '@testing-library/react'

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
})
