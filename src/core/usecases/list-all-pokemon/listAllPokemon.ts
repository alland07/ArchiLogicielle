import { Pokemon } from "@/core/entities/pokemon";
import { PokemonGateway } from "@/core/gateways/pokemonGateway";

export const listAllPokemon = (
  pokemonGateway: PokemonGateway
): Promise<Array<Pokemon>> => pokemonGateway.listAll();
