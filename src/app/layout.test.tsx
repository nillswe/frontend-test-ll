import Layout from '@/app/layout'
import {render, waitFor} from '@testing-library/react'

const makeSut = () => {
  const sut = render(
    <Layout>
      <div>children</div>
    </Layout>,
    {
      container: document.body, // not recommended. Fixed on react 19
    },
  )

  return {
    sut,
  }
}

describe('Root Layout', () => {
  it('Should ensure to render layout properly', async () => {
    const {sut} = makeSut()

    await waitFor(async () => {
      const children = await sut.findByText('children')

      expect(children).toBeVisible()
    })
  })
})
