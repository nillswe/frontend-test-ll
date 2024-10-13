import {Star, StarHalf} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

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
    <article className='relative flex flex-col overflow-hidden rounded-md bg-white p-3 shadow-md hover:shadow-lg'>
      <WishlistButton product={product} />

      <header className='mb-1'>
        <Link href={`/${product.id}`}>
          <Image
            src={product.pictureUrl}
            width={300}
            height={300}
            className='w-full rounded-md object-cover'
            alt={product.name}
          />
        </Link>

        <h1 className='mt-3'>
          <Link href={`/${product.id}`}>{product.name}</Link>
        </h1>
      </header>
      <div className='mt-auto flex flex-col '>
        <div className='flex items-center gap-1'>
          <span className='flex' data-testid='rating-stars'>
            {Array.from({length: fullStars}, (_, i) => i + 1).map(key => {
              return <Star key={key} className='text-yellow-500' fill='#ebb305' size={18} />
            })}
            {hasHalfStar && <StarHalf className='text-yellow-500' fill='#ebb305' size={18} />}
          </span>
          <span>{product.rating}</span>
        </div>

        <div className='mt-2 flex flex-col'>
          <span className='text-sm text-gray-500 line-through' data-testid='product-card-old-price'>
            {formatNumberToCurrency(product.oldPrice)}
          </span>
          <span className='text-xl text-primary' data-testid='product-card-price'>
            {formatNumberToCurrency(product.price)}
          </span>
        </div>
      </div>
    </article>
  )
}
