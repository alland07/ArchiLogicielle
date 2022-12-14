import { Product, ProductVM } from "@/core/entities/product";
import { ProductStore, useProductStore } from "@/store/productStore";

export interface ListAllProductsVMData {
  items: ProductVM[];
}

export const listAllProductsVM = (): ListAllProductsVMData => {
  const productStore: ProductStore = useProductStore();
  return {
    items: productStore.items.map((product: Product) => ({
      id: product.id,
      name: product.name.toUpperCase(),
      price: `${product.price / 100} €`,
    })),
  };
};
