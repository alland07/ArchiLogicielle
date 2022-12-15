import {PokemonGateway} from "@/core/gateways/pokemonGateway";
import { PokemonType} from "@/core/entities/pokemon";

export const getAllTypes = (
    pokemonGateway: PokemonGateway,
): Promise<PokemonType> => {
    return pokemonGateway.getAllTypes();
};
