import { CreateProduct, Product } from "@/core/entities/product";
import { ProductAlreadyExists } from "@/core/errors/productAlreadyExists";
import { ProductNotFound } from "@/core/errors/productNotFound";
import { CryptographyGateway } from "@/core/gateways/cryptographyGateway";
import { ProductGateway } from "@/core/gateways/productGateway";

export class InMemoryProductGateway implements ProductGateway {
  private products: Array<Product> = [];

  public constructor(private crypto: CryptographyGateway) {}

  public listAll(): Promise<Array<Product>> {
    return Promise.resolve(this.products);
  }

  feedWith(...products: Array<Product>) {
    this.products = products;
  }

  public findOne(id: string): Promise<Product> {
    const found: Product | undefined = this.products.find(
      (product: Product) => product.id === id
    );

    if (!found) {
      throw new ProductNotFound(id);
    }

    return Promise.resolve(found);
  }

  public create(product: CreateProduct): Promise<Product> {
    // Check if product already exists
    const exist: boolean = this.products.some(
      (item: Product) =>
        item.name === product.name && item.price === product.price
    );
    if (exist) {
      throw new ProductAlreadyExists();
    }

    const id: string = this.crypto.createId(
      product.name,
      product.price.toString()
    );
    const newProduct: Product = {
      id,
      name: product.name,
      price: product.price,
    };
    this.products.push(newProduct);
    return Promise.resolve(newProduct);
  }
}
