import Link from 'next/link'

import {merge} from '@/utils'

type Props = {
  path?: string
}

export const Breadcrumb = ({path}: Props) => {
  return (
    <div className='flex w-full gap-1 border-b border-b-gray-200 py-4 text-primary'>
      <Link href='/' className={merge([!path && 'font-bold'])}>
        Home
      </Link>

      {path && (
        <>
          <span>/</span>
          <Link href={path} className={merge([path && 'font-bold'])}>
            {path}
          </Link>
        </>
      )}
    </div>
  )
}
