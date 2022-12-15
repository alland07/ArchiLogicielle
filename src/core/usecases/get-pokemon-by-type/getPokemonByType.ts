import { Pokemon, PokemonType } from "@/core/entities/pokemon";
import { PokemonGateway } from "@/core/gateways/pokemonGateway";
import {TypeDoesNotExist} from "@/core/errors/typeDoesNotExist";

export const getPokemonByType = async (
  pokemonGateway: PokemonGateway,
  type: PokemonType
): Promise<Array<Pokemon>> =>{
    if (!Object.values(PokemonType).includes(type)) {
        throw new TypeDoesNotExist(type);
    }
    const pokemonList = await (pokemonGateway.getPokemonByType(type))
    return pokemonList.sort((a: any, b: any) => a.id - b.id);
};
