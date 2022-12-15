import { Pokemon } from "../entities/pokemon";

export interface PokemonGateway {
  /**
   * List all pokemons
   * @returns {Promise<Array<Pokemon>>} The list of pokemons
   */
  listAll(): Promise<Array<Pokemon>>;

  /**
   * Search one pokemon by id
   * @param id
   * @returns {Promise<Pokemon>} The pokemon found
   * @throws {PokemonNotFound} if pokemon not found
   */
  findOne(id: number): Promise<Pokemon>;
}
