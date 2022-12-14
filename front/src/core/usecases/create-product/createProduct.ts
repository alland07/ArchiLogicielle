import { CreateProduct, Product } from "../../entities/product";
import { ProductGateway } from "../../gateways/productGateway";
import { ProductStore, useProductStore } from "../../../store/productStore";

export const createProduct = async (productGT: ProductGateway, product: CreateProduct): Promise<Product> => {
  const created = await productGT.create(product);
  const productStore: ProductStore = useProductStore();
  productStore.addItem(created);
  return created;
};
