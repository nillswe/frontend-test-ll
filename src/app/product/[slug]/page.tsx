import Image from 'next/image'
import Link from 'next/link'
import {redirect} from 'next/navigation'

import {ProductsSlider, StarsRating, WishlistButton} from '@/app/_components/ui'
import {getProductDetail} from '@/data/server/products.api'
import {mockProduct} from '@/mocks/product.mock'
import {formatNumberToCurrency} from '@/utils'

type Props = {
  params: {
    slug: string
  }
}

const Page = async ({params}: Props) => {
  const product = await getProductDetail(params.slug)

  if (!product) return redirect('not-found')

  const relatedProducts = [mockProduct(), mockProduct(), mockProduct(), mockProduct()]

  return (
    <div className='mt-5 flex w-full flex-col pb-10'>
      <section className='flex flex-col gap-10 md:flex-row'>
        <div className='w-full md:w-4/6'>
          <Image
            src={product.pictureUrl}
            width={700}
            height={700}
            alt='temp image'
            className='max-h-[700px] w-full rounded-md object-cover object-center'
            priority={true}
          />
        </div>

        <aside className='w-full md:w-2/6'>
          <h1 className='mb-4 text-2xl'>{product.name}</h1>

          <p>{product.description}</p>

          <div className='mt-5'>
            <StarsRating rating={product.rating} />
          </div>

          <div className='mt-5 flex flex-col'>
            <span className='text-sm text-gray-500 line-through'>
              {formatNumberToCurrency(product.oldPrice)}
            </span>
            <span className='text-3xl font-medium'>{formatNumberToCurrency(product.price)}</span>
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
              <WishlistButton product={{} as any} size='lg' />
            </div>
          </div>
        </aside>
      </section>

      <div className='border-b-gray-2 00 my-5 border-b'></div>

      <ProductsSlider products={relatedProducts} title='Produtos similares' />
    </div>
  )
}
export default Page
