import { CreateProduct, Product } from "../../entities/product";
import { ProductGateway } from "../../gateways/productGateway";

export const createOneProduct = (productGT: ProductGateway, product: CreateProduct): Promise<Product> => {
  return productGT.create(product);
};
