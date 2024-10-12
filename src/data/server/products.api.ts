import {serverHttp} from '@/data/server/server-http'
import {ProductModel} from '@/types/models/products.model'

export const getHomeProducts = async () => {
  const {body: products} = await serverHttp.api.get<ProductModel[]>('/products')
  return products
}
