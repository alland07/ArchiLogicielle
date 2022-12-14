export interface Product {
  id: string
  name: string
  price: number
}

export type CreateProduct = Omit<Product, "id">;
