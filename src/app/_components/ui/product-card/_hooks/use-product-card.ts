import {useRootStore} from '@/app/_hooks/use-root-store'
import {ProductModel} from '@/types/models/products.model'

export const useProductCard = () => {
  const {wishlistStore} = useRootStore()

  const addProductToWishlist = (product: ProductModel) => {
    const cachedProducts = wishlistStore.wishlist
    wishlistStore.setWishlist([...cachedProducts, product])
  }

  const removeProductFromWishlist = (product: ProductModel) => {
    const cachedProducts = wishlistStore.wishlist

    const filteredProducts = cachedProducts.filter(({id}) => id !== product.id)
    wishlistStore.setWishlist(filteredProducts)
  }

  const checkIsOnWishlist = (productId: number) => {
    const cachedProducts = wishlistStore.wishlist
    if (!cachedProducts) return false

    return cachedProducts.some(product => product.id === productId)
  }

  return {
    addProductToWishlist,
    removeProductFromWishlist,
    checkIsOnWishlist,
  }
}
