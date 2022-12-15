import { PokemonGateway } from "@/core/gateways/pokemonGateway";
import { Pokemon } from "@/core/entities/pokemon";

export const getOnePokemon = (
  pokemonGateway: PokemonGateway,
  id: number
): Promise<Pokemon> => pokemonGateway.findOne(id);
