'use client'

import {X, Heart} from 'lucide-react'
import {observer} from 'mobx-react-lite'

import {useRootStore} from '@/app/_hooks/use-root-store'
import {ProductModel} from '@/types/models/products.model'
import {merge} from '@/utils'

type Props = {
  product: ProductModel
  size?: 'sm' | 'md' | 'lg'
}

export const WishlistButton = observer(({product, size = 'sm'}: Props) => {
  const {wishlistStore} = useRootStore()
  const isOnWishlist = wishlistStore.checkIsOnWishlist(product.id)

  const config = {
    sm: {icon: 18, padding: 'p-2'},
    md: {icon: 20, padding: 'p-3'},
    lg: {icon: 22, padding: 'p-4'},
  }

  const toggleWishlist = isOnWishlist
    ? wishlistStore.removeProductFromWishlist.bind(wishlistStore)
    : wishlistStore.addProductToWishlist.bind(wishlistStore)

  return (
    <div
      data-testid='toggle-wishlist-button'
      className={merge([
        'rounded-full bg-gray-400 text-white shadow-md hover:bg-red-400',
        config[size].padding,
        isOnWishlist && 'bg-red-400',
      ])}
      onClick={() => toggleWishlist(product)}>
      {isOnWishlist ? (
        <X size={config[size].icon} id='x-icon' />
      ) : (
        <Heart size={config[size].icon} id='heart-icon' />
      )}
    </div>
  )
})
