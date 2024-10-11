import {Breadcrumb, Header} from '@/app/_components'
import {ProductCard} from '@/app/_components/ui'

export default function Home() {
  return (
    <main className='flex h-auto w-full flex-col'>
      <Header />
      <div className='mx-auto flex w-full max-w-[1300px] flex-col items-center justify-between'>
        <Breadcrumb />
        <section className='mb-10 mt-5 grid w-full grid-cols-4 gap-5'>
          {Array.from({length: 8}).map((product, index) => {
            return <ProductCard key={index} product={product as string} />
          })}
        </section>
      </div>
    </main>
  )
}
