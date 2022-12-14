export interface Product {
  id: string;
  name: string;
  price: number;
}

export type CreateProduct = Omit<Product, "id">;

export type ProductVM = Omit<Product, "price"> & {
  price: string;
}; // change type of price from number to string
