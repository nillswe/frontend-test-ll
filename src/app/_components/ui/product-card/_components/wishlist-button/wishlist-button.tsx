'use client'

import {X, Heart} from 'lucide-react'
import {observer} from 'mobx-react-lite'

import {useRootStore} from '@/app/_hooks/use-root-store'
import {ProductModel} from '@/types/models/products.model'
import {merge} from '@/utils'

type Props = {
  product: ProductModel
}

export const WishlistButton = observer(({product}: Props) => {
  const {wishlistStore} = useRootStore()
  const isOnWishlist = wishlistStore.checkIsOnWishlist(product.id)

  const toggleWishlist = isOnWishlist
    ? wishlistStore.removeProductFromWishlist.bind(wishlistStore)
    : wishlistStore.addProductToWishlist.bind(wishlistStore)

  return (
    <div
      data-testid='toggle-wishlist-button'
      className={merge([
        'absolute right-3 top-3 rounded-full bg-gray-400 p-2 shadow-md hover:bg-red-400',
        'text-white',
        isOnWishlist && 'bg-red-400',
      ])}
      onClick={() => toggleWishlist(product)}>
      {isOnWishlist ? <X size={18} id='x-icon' /> : <Heart size={18} id='heart-icon' />}
    </div>
  )
})
