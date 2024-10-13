import {autorun, makeAutoObservable} from 'mobx'

import {CACHE_WISHLIST} from '@/config/tokens'
import {localCache} from '@/services/local-cache/local-cache'
import {ProductModel} from '@/types/models/products.model'

export class WishlistStore {
  wishlist: ProductModel[] = []

  constructor(wishlist?: ProductModel[]) {
    makeAutoObservable(this)

    this.wishlist = wishlist ?? []

    autorun(() => {
      localCache.set(CACHE_WISHLIST, this.wishlist)
    })
  }

  private setWishlist(wishlist: ProductModel[]) {
    this.wishlist = wishlist
  }

  public addProductToWishlist(product: ProductModel) {
    this.setWishlist([...this.wishlist, product])
  }

  public removeProductFromWishlist(product: ProductModel) {
    const filteredProducts = this.wishlist.filter(({id}) => id !== product.id)
    this.setWishlist(filteredProducts)
  }

  public checkIsOnWishlist(productId: number) {
    if (this.wishlist.length === 0) return false
    return this.wishlist.some(product => product.id === productId)
  }
}
