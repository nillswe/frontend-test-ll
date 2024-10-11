import {Breadcrumb, Header} from '@/app/_components'

export default function Home() {
  return (
    <main className='flex h-auto w-full flex-col'>
      <Header />
      <div className='mx-auto flex w-full max-w-[1300px] items-center justify-between'>
        <Breadcrumb />
      </div>
    </main>
  )
}
