import {PokemonGateway} from "@/core/gateways/pokemonGateway";
import {Pokemon} from "@/core/entities/pokemon";

export const listAllPokemon = async (
  pokemonGateway: PokemonGateway
): Promise<Array<Pokemon>> => {
    const pokemonList: Array<Pokemon> = await pokemonGateway.listAll();
    return pokemonList.sort((a: any, b: any) => a.id - b.id);
}
