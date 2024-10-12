import {HTMLAttributes, ReactNode} from 'react'

import {merge} from '@/utils'

type Props = {
  children: ReactNode
  className?: HTMLAttributes<HTMLElement>['className']
}

export const ProductsGrid = ({children, className}: Props) => {
  return (
    <section
      className={merge([
        'mb-10 grid w-full grid-cols-1 gap-5',
        'sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
        className,
      ])}>
      {children}
    </section>
  )
}
