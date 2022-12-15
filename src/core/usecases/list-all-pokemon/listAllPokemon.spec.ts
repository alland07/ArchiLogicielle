import { InMemoryPokemonGateway } from "@/adapters/secondary/inMemoryPokemonGateway";
import { listAllPokemon } from "./listAllPokemon";
import { clefairy, haunter, pikachu } from "@/core/entities/pokemon.data";

describe("List all pokemons", () => {
  let pokemonGateway: InMemoryPokemonGateway;

  beforeEach(() => {
    pokemonGateway = new InMemoryPokemonGateway();
  });

  //Tests
  it("should have [] when there is none", async () => {
    await listAllPokemon(pokemonGateway);
    expect(await pokemonGateway.listAll()).toEqual([]);
  });

  it("should list all pokemons when there are some", async () => {
    pokemonGateway.feedWith(pikachu, clefairy, haunter);
    await listAllPokemon(pokemonGateway);
    expect(await pokemonGateway.listAll()).toEqual([
      pikachu,
      clefairy,
      haunter,
    ]);
  });
});
