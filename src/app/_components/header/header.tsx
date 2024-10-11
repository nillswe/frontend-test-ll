import {Heart, User} from 'lucide-react'
import Image from 'next/image'

export const Header = () => {
  return (
    <header className='bg-primary flex h-20 w-full items-center'>
      <div className='mx-auto flex w-full max-w-[1300px] items-center justify-between'>
        <Image src='/assets/brand/netshoes.svg' width={160} height={25} alt='Netshoes logo' />
        <div className='flex gap-10 text-white'>
          <button className='flex gap-1'>
            <Heart />
            <span className=''>Wishlist</span>
          </button>

          <button>
            <User />
          </button>
        </div>
      </div>
    </header>
  )
}
