import {Heart, Star, StarHalf} from 'lucide-react'
import Image from 'next/image'

import {ProductModel} from '@/types/models/products.model'
import {formatNumberToCurrency, merge} from '@/utils'

type Props = {
  product: ProductModel
  isOnWishList?: boolean
}

export const ProductCard = ({product, isOnWishList}: Props) => {
  const fullStars = Math.floor(product.rating)
  const hasHalfStar = product.rating - fullStars >= 0.5

  return (
    <article className='relative overflow-hidden rounded-md p-3 shadow-md hover:cursor-pointer hover:shadow-lg'>
      <div
        className={merge([
          'absolute right-3 top-3 rounded-full bg-gray-400 p-2 shadow-md hover:bg-red-400',
          isOnWishList && 'bg-red-400',
        ])}>
        <Heart size={18} className='text-white' />
      </div>

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
