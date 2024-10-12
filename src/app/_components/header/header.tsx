import {Heart, User} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export const Header = () => {
  return (
    <header className='flex h-20 w-full items-center bg-primary'>
      <div className='mx-auto flex w-full max-w-[1300px] items-center justify-between'>
        <Link href='/'>
          <Image src='/assets/brand/netshoes.svg' width={160} height={25} alt='Netshoes logo' />
        </Link>
        <div className='flex gap-10 text-white'>
          <Link href='wishlist' className='flex gap-1'>
            <Heart />
            <span className=''>Wishlist</span>
          </Link>

          <button>
            <User />
          </button>
        </div>
      </div>
    </header>
  )
}
