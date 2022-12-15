export class PokemonNotFound extends Error {
  public constructor(id: number) {
    super(`Pokemon not found with id ${id}`);
    this.name = "PokemonNotFound";
  }
}
