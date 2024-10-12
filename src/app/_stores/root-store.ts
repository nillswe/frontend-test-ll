import {WishlistStore} from '@/app/_stores/wishlist-store'
import {ProductModel} from '@/types/models/products.model'

export class RootStore {
  wishlistStore: WishlistStore
  constructor({wishlist}: {wishlist: ProductModel[]}) {
    this.wishlistStore = new WishlistStore(wishlist)
  }
}
