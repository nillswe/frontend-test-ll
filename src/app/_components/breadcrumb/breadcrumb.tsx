'use client'

import Link from 'next/link'
import {usePathname} from 'next/navigation'

import {merge} from '@/utils'

export const Breadcrumb = () => {
  const pathname = usePathname()
  const cleanPathName = pathname ? pathname.replace('/', '') : null

  return (
    <div className='flex w-full gap-1 border-b border-b-gray-200 py-4 text-primary'>
      <Link href='/' className={merge([!cleanPathName && 'font-bold'])}>
        Home
      </Link>

      {cleanPathName && (
        <>
          <span>/</span>
          <Link href={pathname} className={merge(['capitalize', cleanPathName && 'font-bold'])}>
            {cleanPathName}
          </Link>
        </>
      )}
    </div>
  )
}
