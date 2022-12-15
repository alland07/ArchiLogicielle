import {PokemonGateway} from "@/core/gateways/pokemonGateway";
import {Pokemon} from "@/core/entities/pokemon";

export const listAllPokemon = (
  pokemonGateway: PokemonGateway
): Promise<Array<Pokemon>> => {
    return pokemonGateway.listAll().sort((a: any, b: any) => a.id - b.id);
}
