import { Pokemon, PokemonType } from "../entities/pokemon";

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
   * @throws {InvalidId} if id is not a number or is < 1
   */
  findOne(id: number): Promise<Pokemon>;

  /**
   * Search pokemons by type
   * @param type
   */
  getPokemonByType(type: PokemonType): Promise<Array<Pokemon>>;

  /**
   * List of all Types available
   * @returns listType
   */
  getAllTypes(): Promise<PokemonType>;
}
