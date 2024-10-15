import type {Metadata} from 'next'
import {PropsWithChildren} from 'react'

import {getProductDetail} from '@/data/server/products.api'

export const generateMetadata = async ({params}: {params: {slug: string}}): Promise<Metadata> => {
  const product = await getProductDetail(params.slug)

  return {
    title: product?.name || 'Detalhe do produto',
    description: product?.details_description,
  }
}

export default function Layout({children}: PropsWithChildren) {
  return children
}
