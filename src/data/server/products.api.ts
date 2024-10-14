import {serverHttp} from '@/data/server/server-http'
import {ProductModel} from '@/types/models/products.model'

export const getHomeProducts = async () => {
  try {
    const {body: products} = await serverHttp.api.get<ProductModel[]>('/products')
    return products
  } catch (error) {
    return []
  }
}

export const getProductDetail = async (slug: string) => {
  try {
    const {body: product} = await serverHttp.api.get<ProductModel | null>(`/products/${slug}`)
    return product
  } catch (error) {
    return null
  }
}

export const getRelatedProducts = async () => {
  try {
    const {body: products} = await serverHttp.api.get<ProductModel[]>(`/products/related`)
    console.log({products})

    return products
  } catch (error) {
    return null
  }
}
