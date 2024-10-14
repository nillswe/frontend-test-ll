import {Heart, Star} from 'lucide-react'
import Image from 'next/image'

import {ProductCard, ProductsGrid} from '@/app/_components/ui'
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
          />
        </div>

        <div className='w-full md:w-2/6'>
          <h1 className='mb-4 text-2xl'>Nome do produto</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur doloremque, rem nam
            voluptas dolore quis accusamus saepe debitis, nisi vel a cum, iure ducimus recusandae
            nemo non aliquam officiis facere.
          </p>

          <div className='mt-5 flex items-center gap-2'>
            <div className=' flex'>
              <Star size={18} fill='#ebb305' className='text-yellow-500' />
              <Star size={18} fill='#ebb305' className='text-yellow-500' />
              <Star size={18} fill='#ebb305' className='text-yellow-500' />
              <Star size={18} fill='#ebb305' className='text-yellow-500' />
              <Star size={18} fill='#ebb305' className='text-yellow-500' />
            </div>
            <span>5.0</span>
          </div>

          <div className='mt-5 flex flex-col'>
            <span
              className='text-sm text-gray-500 line-through'
              data-testid='product-card-old-price'>
              {formatNumberToCurrency(200)}
            </span>
            <span className='text-3xl ' data-testid='product-card-price'>
              {formatNumberToCurrency(100)}
            </span>
          </div>

          <div className='mt-5 flex gap-3'>
            <button className='w-full rounded-md bg-primary px-3 py-4 text-white hover:bg-purple-800'>
              Comprar
            </button>
            <div className='relative'>
              <button className='rounded-full bg-gray-300 p-4 hover:bg-red-400'>
                <Heart size={22} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className='border-b-gray-2 00 my-5 border-b'></div>

      <section className='mt-5'>
        <header className='mb-5'>
          <h1 className='text-3xl'>Produtos similares</h1>
        </header>

        <ProductsGrid>
          {relatedProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ProductsGrid>
      </section>
    </div>
  )
}
export default Page
