import Image from 'next/image'
import Link from 'next/link'

import {StarsRating, WishlistButton} from '@/app/_components/ui'
import {ProductModel} from '@/types/models/products.model'
import {formatCentsToCurrency} from '@/utils'

type Props = {
  product: ProductModel
}

export const ProductDetail = ({product}: Props) => {
  return (
    <section className='flex flex-col gap-10 md:flex-row' data-testid='product-detail-container'>
      <div className='w-full md:w-4/6'>
        <Image
          src={product.image}
          width={700}
          height={700}
          alt='temp image'
          className='max-h-[700px] w-full rounded-md object-cover object-center'
          priority={true}
        />
      </div>

      <aside className='w-full md:w-2/6'>
        <h1 className='mb-4 text-2xl'>{product.name}</h1>

        <p>{product.details_description}</p>

        <div className='mt-5'>
          <StarsRating rating={product.rating} />
        </div>

        <div className='mt-5 flex flex-col'>
          <span
            className='text-sm text-gray-500 line-through'
            data-testid='product-detail-old-price'>
            {formatCentsToCurrency(product.price_in_cents)}
          </span>
          <span className='text-3xl font-medium' data-testid='product-detail-price'>
            {formatCentsToCurrency(product.sale_price_in_cents)}
          </span>
        </div>

        <div className='mt-5 flex gap-3'>
          <div className='flex w-full flex-col gap-3'>
            <Link href='/checkout' className='btn btn-lg bg-primary hover:bg-purple-800'>
              Comprar
            </Link>

            <Link href='/cart' className='btn btn-lg bg-gray-500 hover:bg-black'>
              Adicionar ao carrinho
            </Link>
          </div>

          <div className='relative'>
            <WishlistButton product={product} size='lg' />
          </div>
        </div>
      </aside>
    </section>
  )
}
