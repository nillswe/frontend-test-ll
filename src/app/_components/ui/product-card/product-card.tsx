import {Star} from 'lucide-react'
import Image from 'next/image'

type Props = {
  product?: string // TODO: change later
}

export const ProductCard = ({}: Props) => {
  return (
    <article className='overflow-hidden rounded-md p-3 shadow-md hover:cursor-pointer hover:shadow-lg'>
      <header>
        <Image
          src='/temp/product.webp'
          width={300}
          height={300}
          className='rounded-md object-cover'
          alt='Product'
        />

        <p className='mt-3'>Bermuda Mizuno Root Mesh Masculina</p>
      </header>
      <div className='mt-1'>
        <div className='flex items-center gap-1'>
          <span className='flex'>
            <Star className='text-yellow-500' fill='#ebb305' size={18} />
            <Star className='text-yellow-500' fill='#ebb305' size={18} />
            <Star className='text-yellow-500' fill='#ebb305' size={18} />
            <Star className='text-yellow-500' fill='#ebb305' size={18} />
            <Star className='text-yellow-500' fill='#ebb305' size={18} />
          </span>
          <span>5.0</span>
        </div>

        <div className='mt-2 flex flex-col'>
          <span className='text-sm text-gray-500 line-through'>R$ 299,99</span>
          <span className='text-primary text-xl'>R$ 160,00</span>
        </div>
      </div>
    </article>
  )
}
