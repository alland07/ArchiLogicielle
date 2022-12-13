import { Product } from '../entities/product'

export interface ProductGateway {
  /**
   * List all products
   */
  listAll(): Promise<Array<Product>>

  /**
   * Search one product by id
   * @param id
   * @throws {ProductNotFound} if product not found
   */
  findOne(id: string): Promise<Product>
}
