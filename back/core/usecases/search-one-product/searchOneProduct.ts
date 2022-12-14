import { ProductGateway } from "../../gateways/productGateway";
import { Product } from "../../entities/product";

/**
 * Search one product by its id
 * @param productGateway
 * @param id
 * @returns {Promise<Product>} The product
 * @throws ProductNotFound when the product is not present
 */
export const searchOneProduct = (productGateway: ProductGateway, id: string): Promise<Product> => {
  return productGateway.findOne(id);
};
