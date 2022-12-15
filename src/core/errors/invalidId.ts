export class InvalidId extends RangeError {
  public constructor(id: number) {
    super(`Invalid id ${id}`);
    this.name = "InvalidId";
  }
}
