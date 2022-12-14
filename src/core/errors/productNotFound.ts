export class ProductNotFound extends Error {
  public constructor(id: string) {
    super(`Product not found with id ${id}`);
    this.name = "ProductNotFound";
  }
}
