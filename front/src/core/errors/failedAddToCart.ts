export class FailedAddToCart extends Error {
  public constructor() {
    super("Item does not exist");
    this.name = "FailedAddToCart";
  }
}
