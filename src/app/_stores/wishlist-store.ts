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

  public setWishlist(wishlist: ProductModel[]) {
    this.wishlist = wishlist
  }
}
