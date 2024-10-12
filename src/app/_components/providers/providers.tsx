'use client'

import {RootStoreProvider} from '@/app/_hooks/use-root-store'
import {CACHE_WISHLIST} from '@/config/tokens'
import {localCache} from '@/services/local-cache/local-cache'
import {ProductModel} from '@/types/models/products.model'
import {ReactNode} from 'react'

type Props = {
  children: ReactNode
}

export const Providers = ({children}: Props) => {
  const products = localCache.get<ProductModel[]>(CACHE_WISHLIST) ?? []

  return <RootStoreProvider wishlist={products}>{children}</RootStoreProvider>
}
