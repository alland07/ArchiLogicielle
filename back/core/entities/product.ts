export interface Product {
  id: string
  name: string
  imgUrl: string
}

export type CreateProduct = Omit<Product, "id">;
