import {InMemoryPokemonGateway} from "@/adapters/secondary/inMemoryPokemonGateway";
import {clefairy, gastly, gengar, haunter, pikachu,} from "@/core/entities/pokemon.data";
import {PokemonType} from "../../entities/pokemon";
import {getPokemonByType} from "./getPokemonByType"

describe("List pokemon by type", () => {
  let pokemonGateway: InMemoryPokemonGateway;
  beforeEach(() => {
    pokemonGateway = new InMemoryPokemonGateway();
  });
  // Tests about the type
  describe("Type does not exist", function () {
    it("should return an error if passing a wrong type", async () => {
      await expect(() => getPokemonByType(pokemonGateway, "fre" as PokemonType)
      ).rejects.toThrow("fre is invalid");
    });
  });
  //Tests with GHOST Type
  describe("Test the ghost type research", function () {
    it("should have [] when there is no GHOST pokemon", async () => {
      expect(await getPokemonByType(pokemonGateway, PokemonType.GHOST)).toEqual(
        []
      );
    });
    it("should list all pokemons that belong to the type ELECTRIC", async () => {
      pokemonGateway.feedWith(gastly, pikachu, clefairy, haunter);
      expect(await getPokemonByType(pokemonGateway, PokemonType.ELECTRIC)).toEqual([
        pikachu
      ]);
    });
    it("should list all pokemons that belong to the type GHOST", async () => {
      pokemonGateway.feedWith(gastly, pikachu, gengar);
      expect(await getPokemonByType(pokemonGateway, PokemonType.GHOST)).toEqual([
        gastly,
        gengar
      ]);
    });
    it("should retrieve the pokemons in the good order", async () => {
      pokemonGateway.feedWith(gengar, gastly);
      expect(await getPokemonByType(pokemonGateway, PokemonType.GHOST)).toEqual([
        gastly,
        gengar,
      ]);
    });
  });
});
