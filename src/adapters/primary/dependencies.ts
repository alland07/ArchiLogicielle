import 'module-alias/register'
import { PokeApiPokemonGateway } from "@/adapters/secondary/pokeApiPokemonGateway";

export const pokemonGateway: PokeApiPokemonGateway =
  new PokeApiPokemonGateway();
