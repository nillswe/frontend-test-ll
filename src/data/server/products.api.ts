import {serverHttp} from '@/data/server/server-http'

export const getHomeProducts = async () => {
  const {body: products} = await serverHttp.api.get('/products')
  return products
}
