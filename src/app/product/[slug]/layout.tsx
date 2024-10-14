import type {Metadata} from 'next'
import {PropsWithChildren} from 'react'

export const metadata: Metadata = {
  title: '[Fetch product name]',
  description: 'Frontend app',
}

export default function Layout({children}: PropsWithChildren) {
  return children
}
