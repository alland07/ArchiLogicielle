import { Product } from "@/core/entities/product";
import { ProductGateway } from "@/core/gateways/productGateway";
import { ProductStore, useProductStore } from "@/store/productStore";

export const listAllProducts = async (
  productGateway: ProductGateway
): Promise<Array<Product>> => {
  const products: Product[] = await productGateway.listAll();
  const productStore: ProductStore = useProductStore();
  productStore.setItems(products);
  return products;
};
