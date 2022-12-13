export class ProductNotFound extends Error {
  public constructor(message: string) {
    super(`Product not found with id ${message}`);
    this.name = 'ProductNotFound';
  }
}
