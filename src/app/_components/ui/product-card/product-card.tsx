import {Star, StarHalf} from 'lucide-react'
import Image from 'next/image'

import {WishlistButton} from '@/app/_components/ui/product-card/_components'
import {ProductModel} from '@/types/models/products.model'
import {formatNumberToCurrency} from '@/utils'

type Props = {
  product: ProductModel
  isOnWishList?: boolean
}

export const ProductCard = ({product}: Props) => {
  const fullStars = Math.floor(product.rating)
  const hasHalfStar = product.rating - fullStars >= 0.5

  return (
    <article className='relative overflow-hidden rounded-md p-3 shadow-md hover:cursor-pointer hover:shadow-lg'>
      <WishlistButton product={product} />

      <header>
        <Image
          src={product.pictureUrl}
          width={300}
          height={300}
          className='rounded-md object-cover'
          alt={product.name}
        />

        <p className='mt-3'>{product.name}</p>
      </header>
      <div className='mt-1'>
        <div className='flex items-center gap-1'>
          <span className='flex'>
            {Array.from({length: fullStars}, (_, i) => i + 1).map(key => {
              return <Star key={key} className='text-yellow-500' fill='#ebb305' size={18} />
            })}
            {hasHalfStar && <StarHalf className='text-yellow-500' fill='#ebb305' size={18} />}
          </span>
          <span>{product.rating}</span>
        </div>

        <div className='mt-2 flex flex-col'>
          <span className='text-sm text-gray-500 line-through'>
            {formatNumberToCurrency(product.oldPrice)}
          </span>
          <span className='text-xl text-primary'>{formatNumberToCurrency(product.price)}</span>
        </div>
      </div>
    </article>
  )
}
