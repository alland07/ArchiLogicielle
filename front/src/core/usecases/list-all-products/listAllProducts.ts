import { ProductGateway } from "../../gateways/productGateway";
import { Product } from "../../entities/product";
import { ProductStore } from "./productStore";

export const listAllProducts = async (productGateway: ProductGateway, productStore: ProductStore): Promise<Array<Product>> => {
  const products: Product[] = await productGateway.listAll();
  productStore.items = products;
  return products;
};
