export class TypeDoesNotExist extends Error {
  public constructor(type: string) {
    super(`${type} is invalid`);
    this.name = "TypeDoesNotExist ";
  }
}
