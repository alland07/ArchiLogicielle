import { Pokemon, PokemonType } from "@/core/entities/pokemon";
import { PokemonGateway } from "@/core/gateways/pokemonGateway";

export const getPokemonByType = (
  pokemonGateway: PokemonGateway,
  type: PokemonType
): Promise<Array<Pokemon>> => pokemonGateway.getPokemonByType(type);
