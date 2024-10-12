'use client'

import dynamic from 'next/dynamic'
import {ReactNode} from 'react'

import {CACHE_WISHLIST} from '@/config/tokens'
import {localCache} from '@/services/local-cache/local-cache'
import {ProductModel} from '@/types/models/products.model'

const RootStoreProvider = dynamic(
  () => import('@/app/_hooks/use-root-store').then(c => c.RootStoreProvider),
  {ssr: false},
)

type Props = {
  children: ReactNode
}

export const Providers = ({children}: Props) => {
  const products = localCache.get<ProductModel[]>(CACHE_WISHLIST) ?? []

  return <RootStoreProvider wishlist={products}>{children}</RootStoreProvider>
}
