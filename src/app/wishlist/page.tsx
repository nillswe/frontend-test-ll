import {ProductCard} from '@/app/_components/ui'

export default function Page() {
  return (
    <section className='mb-10 mt-5 grid w-full grid-cols-4 gap-5'>
      {Array.from({length: 3}).map((product, index) => {
        return <ProductCard key={index} product={product as string} />
      })}
    </section>
  )
}
