import {redirect} from 'next/navigation'

import {ProductDetail, ProductsSlider} from '@/app/product/[slug]/_components'
import {getProductDetail, getRelatedProducts} from '@/data/server/products.api'

type Props = {
  params: {
    slug: string
  }
}

const Page = async ({params}: Props) => {
  const product = await getProductDetail(params.slug)
  const relatedProducts = await getRelatedProducts()

  if (!product) return redirect('not-found')

  return (
    <div className='mt-5 flex w-full flex-col pb-10'>
      <ProductDetail product={product} />

      <div className='border-b-gray-2 00 my-5 border-b'></div>

      {relatedProducts && <ProductsSlider products={relatedProducts} title='Produtos similares' />}
    </div>
  )
}
export default Page
