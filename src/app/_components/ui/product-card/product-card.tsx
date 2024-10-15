import Image from 'next/image'
import Link from 'next/link'

import {ProductModel} from '@/types/models/products.model'
import {formatCentsToCurrency} from '@/utils'

import {StarsRating} from '../stars-rating'
import {WishlistButton} from '../wishlist-button'

type Props = {
  product: ProductModel
  isOnWishList?: boolean
}

export const ProductCard = ({product}: Props) => {
  return (
    <article className='relative flex flex-col overflow-hidden rounded-md bg-white p-3 shadow-md hover:shadow-lg'>
      <div className='absolute right-3 top-3'>
        <WishlistButton product={product} />
      </div>

      <header className='mb-1'>
        <Link href={`/product/${product.code}`}>
          <Image
            src={product.image}
            width={300}
            height={300}
            className='w-full rounded-md object-cover'
            alt={product.name}
          />
        </Link>

        <h1 className='mt-3'>
          <Link href={`/product/${product.code}`}>{product.name}</Link>
        </h1>
      </header>

      <div className='mt-auto flex flex-col '>
        <StarsRating rating={product.rating} />

        <div className='mt-2 flex flex-col'>
          <span className='text-sm text-gray-500 line-through' data-testid='product-card-old-price'>
            {formatCentsToCurrency(product.price_in_cents)}
          </span>
          <span className='text-xl text-primary' data-testid='product-card-price'>
            {formatCentsToCurrency(product.sale_price_in_cents)}
          </span>
        </div>
      </div>
    </article>
  )
}
