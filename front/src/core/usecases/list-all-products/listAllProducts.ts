import { ProductGateway } from "../../gateways/productGateway";
import { Product } from "../../entities/product";
import { ProductStore, useProductStore } from "../../../store/productStore";

export const listAllProducts = async (productGateway: ProductGateway): Promise<Array<Product>> => {
  const products: Product[] = await productGateway.listAll();
  const productStore: ProductStore = useProductStore();
  productStore.setItems(products);
  return products;
};
