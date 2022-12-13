import { ProductGateway } from "../../core/gateways/productGateway";
import { Product } from "../../core/entities/product";
import { ProductNotFound } from "../../core/errors/productNotFound";

export class InMemoryProductGateway implements ProductGateway {
  private products: Array<Product> = [];

  listAll(): Promise<Array<Product>> {
    return Promise.resolve(this.products);
  }

  feedWith(...products: Array<Product>) {
    this.products = products;
  }

  findOne(id: string): Promise<Product> {
    const found: Product|undefined = this.products.find((product: Product) => product.id === id);

    if (!found) {
      throw new ProductNotFound(id);
    }

    return Promise.resolve(found);
  }
}
