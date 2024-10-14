'use client'

import {createContext, ReactNode, useContext} from 'react'

import {RootStore} from '@/app/_stores/root-store'
import {ProductModel} from '@/types/models/products.model'

let rootStore: RootStore

const RootContext = createContext<RootStore | null>(null)

type Props = {
  children: ReactNode
  wishlist?: ProductModel[]
}

export const RootStoreProvider = ({children, wishlist}: Props) => {
  if (process.env.NODE_ENV === 'test') {
    // on automatized tests it should ensure to start a new store on every time the provider is called.
    rootStore = new RootStore({wishlist})
  } else {
    rootStore = rootStore ?? new RootStore({wishlist})
  }

  return <RootContext.Provider value={rootStore}>{children}</RootContext.Provider>
}

export const useRootStore = () => {
  const context = useContext(RootContext)
  if (!context) throw new Error('useRootStore must be used within RootStoreProvider')
  return context
}
