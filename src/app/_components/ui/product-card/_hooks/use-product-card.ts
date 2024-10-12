import {CACHE_WISHLIST} from '@/config/tokens'
import {localCache} from '@/services/local-cache/local-cache'
import {ProductModel} from '@/types/models/products.model'

export const useProductCard = () => {
  const addProductToWishlist = (product: ProductModel) => {
    const cachedProducts = localCache.get<ProductModel[]>(CACHE_WISHLIST)
    if (!cachedProducts) return

    localCache.set(CACHE_WISHLIST, [...cachedProducts, product])
  }

  const removeProductFromWishlist = (product: ProductModel) => {
    const cachedProducts = localCache.get<ProductModel[]>(CACHE_WISHLIST)
    if (!cachedProducts) return

    const filteredProducts = cachedProducts.filter(({id}) => id !== product.id)
    localCache.set(CACHE_WISHLIST, filteredProducts)
  }

  return {
    addProductToWishlist,
    removeProductFromWishlist,
  }
}
