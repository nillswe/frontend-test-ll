import Image from 'next/image'

import {merge} from '@/utils'

const NotFoundPage = () => {
  return (
    <main className={merge(['flex h-[100%] w-full flex-1 flex-wrap  justify-center'])}>
      <div className='mx-auto max-w-screen-xl px-4 pb-8 lg:px-6 lg:pb-16'>
        <div className='mx-auto max-w-screen-sm text-center'>
          <Image
            src='/assets/404/shopping-cart.jpg'
            alt='Not found image'
            width={500}
            height={500}
          />
          <h1 className='text-primary-600 dark:text-primary-500 -mt-40 mb-4 text-7xl font-extrabold tracking-tight lg:text-9xl'>
            404
          </h1>
          <p className='mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl'>
            Página não encontrada
          </p>
          <p className='mb-4 text-lg font-light text-gray-500 dark:text-gray-400'>
            Veja o que temos em nossa página inicial
          </p>
          <a href='/' className='rounded-md bg-primary px-6 py-3 text-white'>
            Voltar para home page
          </a>
        </div>
      </div>
    </main>
  )
}

export default NotFoundPage
