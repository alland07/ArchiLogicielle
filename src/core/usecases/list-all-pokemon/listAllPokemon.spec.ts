import { InMemoryPokemonGateway } from "@/adapters/secondary/inMemoryPokemonGateway";
import { listAllPokemon } from "./listAllPokemon";
import {bulbasaur, clefairy, haunter, pikachu} from "@/core/entities/pokemon.data";

describe("List all pokemons", () => {
  let pokemonGateway: InMemoryPokemonGateway;

  beforeEach(() => {
    pokemonGateway = new InMemoryPokemonGateway();
  });

  //Tests
  it("should have [] when there is none", async () => {
    expect(await listAllPokemon(pokemonGateway)).toEqual([]);
  });

  it("should list all pokemons when there are some", async () => {
    pokemonGateway.feedWith(bulbasaur, pikachu, clefairy, haunter);
    expect(await listAllPokemon(pokemonGateway)).toEqual([
      bulbasaur,
      pikachu,
      clefairy,
      haunter,
    ]);
  });
  //On this test, we feed in a different order
  it("should list all pokemons retrieves in the good order", async () => {
    pokemonGateway.feedWith(pikachu, bulbasaur, clefairy, haunter);
    expect(await listAllPokemon(pokemonGateway)).toEqual([
      bulbasaur,
      pikachu,
      clefairy,
      haunter,
    ]);
  });
});
