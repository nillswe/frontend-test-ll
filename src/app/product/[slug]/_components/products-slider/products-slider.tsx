import {ProductCard, ProductsGrid} from '@/app/_components/ui'
import {ProductModel} from '@/types/models/products.model'

type Props = {
  title: string
  products: ProductModel[]
}

export const ProductsSlider = ({title, products}: Props) => {
  return (
    <section>
      <header className='mb-5'>
        <h1 className='text-3xl'>{title}</h1>
      </header>

      <ProductsGrid>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductsGrid>
    </section>
  )
}
