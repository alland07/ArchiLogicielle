import { PokemonGateway } from "@/core/gateways/pokemonGateway";
import { Pokemon } from "@/core/entities/pokemon";
import {InvalidId} from "@/core/errors/invalidId";
import {IdDoesNotExist} from "@/core/errors/IdDoesNotExist";

export const getOnePokemon = (
  pokemonGateway: PokemonGateway,
  id: number
): Promise<Pokemon> => {
    if (isNaN(id) || id < 1) {
        throw new InvalidId(id);
    } else if (id > 901) {
        throw new IdDoesNotExist(id);
    }
    return pokemonGateway.findOne(id);
}
