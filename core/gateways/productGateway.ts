import { CreateProduct, Product } from "../entities/product";

export interface ProductGateway {
  /**
   * List all products
   * @returns {Promise<Array<Product>>} The list of products
   */
  listAll(): Promise<Array<Product>>

  /**
   * Search one product by id
   * @param id
   * @returns {Promise<Product>} The product found
   * @throws {ProductNotFound} if product not found
   */
  findOne(id: string): Promise<Product>

  /**
   * Save a product
   * @param product
   * @returns {Promise<Product>} The product saved
   * @throws {ProductAlreadyExists} if product already exists
   */
  create(product: CreateProduct): Promise<Product>
}
