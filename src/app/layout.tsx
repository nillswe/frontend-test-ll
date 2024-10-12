import type {Metadata} from 'next'
import {Roboto} from 'next/font/google'

import './globals.css'
import {Header, Breadcrumb, Providers} from '@/app/_components'

const roboto = Roboto({subsets: ['latin'], preload: true, weight: ['400', '700']})

export const metadata: Metadata = {
  title: 'Luizalabs',
  description: 'Frontend app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='pt-br' className='light'>
      <body className={roboto.className}>
        <Providers>
          <main className='flex h-auto w-full flex-col'>
            <Header />
            <div className='mx-auto flex w-full max-w-[1300px] flex-col justify-between px-3'>
              <Breadcrumb />
              {children}
            </div>
          </main>
        </Providers>
      </body>
    </html>
  )
}
