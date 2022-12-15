import { InMemoryPokemonGateway } from "@/adapters/secondary/inMemoryPokemonGateway";
import { Pokemon, PokemonType } from "@/core/entities/pokemon";
import { listAllPokemon } from "./listAllPokemon";

describe("List all pokemons", () => {
  let pokemonGateway: InMemoryPokemonGateway;

  beforeEach(() => {
    pokemonGateway = new InMemoryPokemonGateway();
  });

  //Tests
  it("should have [] when there is no items", async () => {
    await listAllPokemon(pokemonGateway);
    expect(await pokemonGateway.listAll()).toEqual([]);
  });

  it("should store pokemons when there is items", async () => {
    const pikachu: Pokemon = {
      id: 25,
      name: "Pikachu",
      weight: 60,
      description: "Pika Pika",
      types: [PokemonType.ELECTRIC],
    };
    const clefairy: Pokemon = {
      id: 35,
      name: "Clefairy",
      weight: 75,
      description: "Clefairy",
      types: [PokemonType.FAIRY],
    };
    const haunter: Pokemon = {
      id: 93,
      name: "Haunter",
      weight: 1,
      description: "Clefairy",
      types: [PokemonType.POISON, PokemonType.GHOST],
    };
    pokemonGateway.feedWith(pikachu, clefairy, haunter);
    await listAllPokemon(pokemonGateway);
    expect(await pokemonGateway.listAll()).toEqual([
      pikachu,
      clefairy,
      haunter,
    ]);
  });
});
