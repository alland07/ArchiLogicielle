import { CreateProduct, Product } from "@/core/entities/product";
import { ProductGateway } from "@/core/gateways/productGateway";

export const createProduct = (
  productGT: ProductGateway,
  product: CreateProduct
): Promise<Product> => productGT.create(product);
