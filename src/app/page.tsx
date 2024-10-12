import {ProductsGrid, ProductCard} from '@/app/_components/ui'
import {getHomeProducts} from '@/data/server/products.api'

export default async function Home() {
  const products = await getHomeProducts()

  return (
    <ProductsGrid className='mt-5'>
      {products.map(product => {
        return <ProductCard key={product.id} product={product} />
      })}
    </ProductsGrid>
  )
}
