import {WishlistStore} from '@/app/_stores/wishlist-store'
import {ProductModel} from '@/types/models/products.model'

type InitialValuesProps = {
  wishlist?: ProductModel[]
}

export class RootStore {
  wishlistStore: WishlistStore
  constructor({wishlist}: InitialValuesProps) {
    this.wishlistStore = new WishlistStore(wishlist)
  }
}
