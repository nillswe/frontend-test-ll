import {serverHttp} from '@/data/server/server-http'
import {ProductModel, ProductsResponse} from '@/types/models/products.model'

export const getHomeProducts = async () => {
  try {
    const {body} = await serverHttp.api.get<ProductsResponse>('/products')
    return body.products
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
    const {body} = await serverHttp.api.get<ProductsResponse>(`/products/related`)
    return body.products
  } catch (error) {
    return null
  }
}
