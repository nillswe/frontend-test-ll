'use client'

import {observer} from 'mobx-react-lite'

import {ProductsGrid, ProductCard} from '@/app/_components/ui'
import {useRootStore} from '@/app/_hooks/use-root-store'
import {EmptyWishlist} from '@/app/wishlist/_components'

const Page = observer(() => {
  const {wishlistStore} = useRootStore()
  const products = wishlistStore.wishlist

  return (
    <div className='mt-5 w-full'>
      {products.length === 0 && <EmptyWishlist />}

      {products.length > 0 && (
        <ProductsGrid>
          {products.map((product, index) => {
            return <ProductCard key={index} product={product} />
          })}
        </ProductsGrid>
      )}
    </div>
  )
})
export default Page
