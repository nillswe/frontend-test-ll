import type {Metadata} from 'next'
import {PropsWithChildren} from 'react'

export const metadata: Metadata = {
  title: 'Lista de desejos',
  description: 'Frontend app',
}

export default function RootLayout({children}: PropsWithChildren) {
  return children
}
