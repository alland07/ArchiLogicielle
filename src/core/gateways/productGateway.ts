import { CreateProduct, Product } from "../entities/product";

export interface ProductGateway {
  /**
   * List all products
   * @returns {Promise<Array<Product>>} The list of products
   */
  listAll(): Promise<Array<Product>>;
  /**
   * Search one product by id
   * @param id
   * @returns {Promise<Product>} The product found
   * @throws {ProductNotFound} if product not found
   */
  findOne(id: string): Promise<Product>;

  create(product: CreateProduct): Promise<Product>;
}
