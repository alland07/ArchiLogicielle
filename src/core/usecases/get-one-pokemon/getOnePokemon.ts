import { PokemonGateway } from "@/core/gateways/pokemonGateway";
import { Pokemon } from "@/core/entities/pokemon";
import {InvalidId} from "@/core/errors/invalidId";

export const getOnePokemon = (
  pokemonGateway: PokemonGateway,
  id: number
): Promise<Pokemon> => {
    if (isNaN(id) || id < 1) {
        throw new InvalidId(id);
    }
    return pokemonGateway.findOne(id);
}
