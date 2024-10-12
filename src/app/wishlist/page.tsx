'use client'

import {Info} from 'lucide-react'
import Link from 'next/link'

import {ProductCard} from '@/app/_components/ui'
import {CACHE_WISHLIST} from '@/config/tokens'
import {localCache} from '@/services/local-cache/local-cache'
import {ProductModel} from '@/types/models/products.model'

export default function Page() {
  const products = localCache.get<ProductModel[]>(CACHE_WISHLIST) ?? []

  return (
    <div className='mt-5  w-full'>
      {products.length === 0 && (
        <div className='flex w-full flex-col items-center gap-4'>
          <p
            role='alert'
            className='mx-auto flex w-full max-w-3xl items-center gap-2 rounded-md bg-blue-300 p-4'>
            <Info size={18} />
            Sua lista de desejos está vazia. Comece adicionando algo agora mesmo!
          </p>

          <Link href='/' className='rounded-md bg-primary px-6 py-3 text-white'>
            Ir para home page
          </Link>
        </div>
      )}

      {products.length > 0 && (
        <section className='mb-10 grid w-full grid-cols-4 gap-5'>
          {products.map((product, index) => {
            return <ProductCard key={index} product={product} />
          })}
        </section>
      )}
    </div>
  )
}
