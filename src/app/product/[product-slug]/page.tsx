import Image from 'next/image'

import {ProductsSlider, StarsRating, WishlistButton} from '@/app/_components/ui'
import {mockProduct} from '@/mocks/product.mock'
import {formatNumberToCurrency} from '@/utils'
import {faker} from '@faker-js/faker'

const Page = () => {
  const relatedProducts = [mockProduct(), mockProduct(), mockProduct(), mockProduct()]

  return (
    <div className='mt-5 flex w-full flex-col pb-10'>
      <section className='flex flex-col gap-10 md:flex-row'>
        <div className='w-full md:w-4/6'>
          <Image
            src={faker.image.urlPicsumPhotos()}
            width={800}
            height={800}
            alt='temp image'
            className='w-full rounded-md'
            priority={true}
          />
        </div>

        <div className='w-full md:w-2/6'>
          <h1 className='mb-4 text-2xl'>Nome do produto</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur doloremque, rem nam
            voluptas dolore quis accusamus saepe debitis, nisi vel a cum, iure ducimus recusandae
            nemo non aliquam officiis facere.
          </p>

          <div className='mt-5'>
            <StarsRating rating={4.5} />
          </div>

          <div className='mt-5 flex flex-col'>
            <span className='text-sm text-gray-500 line-through'>
              {formatNumberToCurrency(200)}
            </span>
            <span className='text-3xl font-medium'>{formatNumberToCurrency(100)}</span>
          </div>

          <div className='mt-5 flex gap-3'>
            <div className='flex w-full flex-col gap-3'>
              <button className='btn btn-lg bg-primary hover:bg-purple-800'>Comprar</button>

              <button className='btn btn-lg bg-gray-500 hover:bg-black'>
                Adicionar ao carrinho
              </button>
            </div>
            <div className='relative'>
              <WishlistButton product={{} as any} size='lg' />
            </div>
          </div>
        </div>
      </section>

      <div className='border-b-gray-2 00 my-5 border-b'></div>

      <ProductsSlider products={relatedProducts} title='Produtos similares' />
    </div>
  )
}
export default Page
