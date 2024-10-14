import {Info} from 'lucide-react'
import Link from 'next/link'

export const EmptyWishlist = () => {
  return (
    <div className='flex w-full flex-col items-center gap-4' data-testid='empty-wishlist-container'>
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
  )
}
