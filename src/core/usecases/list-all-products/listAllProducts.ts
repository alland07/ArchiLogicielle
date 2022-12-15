import { Product } from "@/core/entities/product";
import { ProductGateway } from "@/core/gateways/productGateway";

export const listAllProducts = (
  productGateway: ProductGateway
): Promise<Array<Product>> => productGateway.listAll();
