import {ProductCard} from '@/app/_components/ui'
import {getHomeProducts} from '@/data/server/products.api'

export default async function Home() {
  const products = await getHomeProducts()

  return (
    <section className='mb-10 mt-5 grid w-full grid-cols-4 gap-5'>
      {products.map(product => {
        return <ProductCard key={product.id} product={product} />
      })}
    </section>
  )
}
