import {WishlistStore} from '@/app/_stores/wishlist-store'
import {mockProduct} from '@/mocks/product.mock'
import {ProductModel} from '@/types/models/products.model'

const makeSut = (defaultProducts?: ProductModel[]) => {
  const sut = new WishlistStore(defaultProducts)

  return {
    sut,
  }
}

describe('WishlistStore', () => {
  describe('constructor', () => {
    it('should instantiate wishlist without default products', () => {
      const {sut} = makeSut()
      expect(sut.wishlist).toStrictEqual([])
    })

    it('should instantiate wishlist with default products', () => {
      const defaultProducts = [mockProduct(), mockProduct()]

      const {sut} = makeSut(defaultProducts)

      expect(sut.wishlist.length).toBe(defaultProducts.length)
      expect(sut.wishlist).toStrictEqual(defaultProducts)
    })
  })

  describe('addProductToWishlist', () => {
    it('should call addProductToWishlist adding a product', () => {
      const fakeProduct = mockProduct()
      const {sut} = makeSut()

      expect(sut.wishlist).toStrictEqual([])

      sut.addProductToWishlist(fakeProduct)

      expect(sut.wishlist).toStrictEqual([fakeProduct])
    })
  })

  describe('removeProductFromWishlist', () => {
    it('should call removeProductFromWishlist removing a product', () => {
      const fakeInitialData = [mockProduct(), mockProduct()]
      const {sut} = makeSut(fakeInitialData)

      expect(sut.wishlist).toStrictEqual(fakeInitialData)

      sut.removeProductFromWishlist(fakeInitialData[0])

      expect(sut.wishlist).toStrictEqual([fakeInitialData[1]])
    })

    it('should call removeProductFromWishlist with a wrong product, returning the list untouched', () => {
      const fakeInitialData = [mockProduct(), mockProduct()]
      const fakeWrongProduct = mockProduct()

      const {sut} = makeSut(fakeInitialData)
      sut.removeProductFromWishlist(fakeWrongProduct)

      expect(sut.wishlist).toStrictEqual(fakeInitialData)
    })
  })

  describe('checkIsOnWishlist', () => {
    it('Should return false when wishlist is empty', () => {
      const fakeWrongProduct = mockProduct()
      const {sut} = makeSut()
      const isPresent = sut.checkIsOnWishlist(fakeWrongProduct.id)

      expect(sut.wishlist.length).toBe(0)
      expect(isPresent).toBe(false)
    })

    it('Should not find product in the wishlist', () => {
      const fakeInitialData = [mockProduct(), mockProduct()]
      const fakeWrongProduct = mockProduct()

      const {sut} = makeSut(fakeInitialData)

      const isPresent = sut.checkIsOnWishlist(fakeWrongProduct.id)

      expect(isPresent).toBeFalsy()
    })

    it('Should find product in the wishlist', () => {
      const fakeInitialData = [mockProduct(), mockProduct()]

      const {sut} = makeSut(fakeInitialData)

      const isPresent = sut.checkIsOnWishlist(fakeInitialData[0].id)

      expect(isPresent).toBeTruthy()
    })
  })
})
