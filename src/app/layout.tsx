import type {Metadata} from 'next'
import {Roboto} from 'next/font/google'
import './globals.css'

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
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
