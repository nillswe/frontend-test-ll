import {merge} from '@/utils'

type Props = {
  path?: string
}

export const Breadcrumb = ({path}: Props) => {
  return (
    <div className='text-primary flex w-full gap-1 border-b border-b-gray-200 py-4'>
      <span className={merge([!path && 'font-bold'])}>Home</span>

      {path && (
        <>
          <span>/</span>
          <span className={merge([path && 'font-bold'])}>{path}</span>
        </>
      )}
    </div>
  )
}
