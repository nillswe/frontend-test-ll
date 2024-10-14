import {Heart, User} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import {merge} from '@/utils'

export const Header = () => {
  return (
    <header className='flex h-20 w-full items-center bg-primary px-3'>
      <div className='mx-auto flex w-full max-w-[1300px] items-center justify-between'>
        <Link href='/'>
          <Image src='/assets/brand/netshoes.svg' width={160} height={25} alt='Netshoes logo' />
        </Link>
        <div className='flex items-center gap-10 text-white'>
          <Link href='/wishlist' className='flex gap-1'>
            <Heart />
            <span className=''>Wishlist</span>
          </Link>

          <button className='group relative rounded-md p-3 hover:bg-purple-900'>
            <User />
            <div
              className={merge([
                'absolute top-12 z-10 hidden rounded-md bg-white p-3 text-black shadow-md group-hover:block md:right-0 md:w-[200px]',
                '-right-3 w-screen',
              ])}>
              <ul className='flex flex-col items-start gap-1'>
                <li className='flex w-full'>
                  <Link
                    href='/signin'
                    className='w-full rounded-md px-2 py-1 text-left hover:bg-gray-200'>
                    Entrar
                  </Link>
                </li>
                <li className='flex w-full'>
                  <Link
                    href='/my-account'
                    className='w-full rounded-md px-2 py-1 text-left hover:bg-gray-200'>
                    Minha conta
                  </Link>
                </li>
                <li className='flex w-full'>
                  <Link
                    href='/address'
                    className='w-full rounded-md px-2 py-1 text-left hover:bg-gray-200'>
                    Endereços
                  </Link>
                </li>
                <li className='flex w-full'>
                  <Link
                    href='/my-netshoes'
                    className='w-full rounded-md px-2 py-1 text-left hover:bg-gray-200'>
                    Minha netshoes
                  </Link>
                </li>
              </ul>
            </div>
          </button>
        </div>
      </div>
    </header>
  )
}
