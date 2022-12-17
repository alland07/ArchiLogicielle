export class IdDoesNotExist extends RangeError {
  public constructor(id: number) {
    super(`ID not in the pokedex : ${id}`);
    this.name = "IdDoesNotExist";
  }
}