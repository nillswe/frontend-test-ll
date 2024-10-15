export interface ProductModel {
  id: number
  code: string
  name: string
  image: string
  details_description: string
  rating: number
  price_in_cents: number
  sale_price_in_cents: number
  stock_available: number
  available: number
  visible: number
  details_name: string
}

export interface ProductsResponse {
  total: number
  pageSize: number
  totalPages: number
  products: ProductModel[]
}
