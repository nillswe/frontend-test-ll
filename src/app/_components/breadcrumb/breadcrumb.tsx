'use client'

import Link from 'next/link'
import {usePathname} from 'next/navigation'
import {Fragment, useMemo} from 'react'

import {merge} from '@/utils'

export const Breadcrumb = () => {
  const pathname = usePathname()
  const paths = useMemo(
    () =>
      pathname
        ?.slice(1, pathname.length)
        ?.split('/')
        ?.filter(e => e),
    [pathname],
  )

  return (
    <div
      className='flex w-full gap-1 border-b border-b-gray-200 py-4 text-primary'
      data-testid='breadcrumb-container'>
      <Link href='/' className={merge([pathname === '/' && 'font-bold'])}>
        Home
      </Link>

      {paths?.length > 0 &&
        paths.map(path => {
          return (
            <Fragment key={path}>
              <span>/</span>
              <Link href={pathname} className={merge(['capitalize', path && 'font-bold'])}>
                {path}
              </Link>
            </Fragment>
          )
        })}
    </div>
  )
}
