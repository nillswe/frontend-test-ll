'use client'

import {X, Heart} from 'lucide-react'

import {useProductCard} from '@/app/_components/ui/product-card/_hooks/use-product-card'
import {ProductModel} from '@/types/models/products.model'
import {merge} from '@/utils'

type Props = {
  product: ProductModel
}

export const WishlistButton = ({product}: Props) => {
  const {addProductToWishlist, removeProductFromWishlist, checkIsOnWishlist} = useProductCard()
  const isOnWishlist = checkIsOnWishlist(product.id)

  const toggleWishlist = isOnWishlist ? removeProductFromWishlist : addProductToWishlist

  return (
    <div
      className={merge([
        'absolute right-3 top-3 rounded-full bg-gray-400 p-2 shadow-md hover:bg-red-400',
        'text-white',
        isOnWishlist && 'bg-red-400',
      ])}
      onClick={() => toggleWishlist(product)}>
      {isOnWishlist ? <X size={18} /> : <Heart size={18} />}
    </div>
  )
}
