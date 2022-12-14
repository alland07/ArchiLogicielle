export class ProductAlreadyExists extends Error {
  public constructor() {
    super("Product already exists");
  }
}
