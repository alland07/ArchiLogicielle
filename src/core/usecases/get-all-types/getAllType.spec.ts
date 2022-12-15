import {InMemoryPokemonGateway} from "@/adapters/secondary/inMemoryPokemonGateway";
import {getAllTypes} from "@/core/usecases/get-all-types/getAllTypes";
import {PokemonType} from "@/core/entities/pokemon";

describe('Get a list of types available', function () {
    let pokemonGateway: InMemoryPokemonGateway;
    beforeEach(() => {
        pokemonGateway = new InMemoryPokemonGateway();
    });

    // Test
    describe('List og types', function () {
        it('should return a list of types', async () => {
            expect(await getAllTypes(pokemonGateway)).toEqual(PokemonType);
        })
    });
});