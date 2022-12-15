import { InMemoryPokemonGateway } from "@/adapters/secondary/inMemoryPokemonGateway";
import {
  clefairy,
  gastly,
  haunter,
  pikachu,
} from "@/core/entities/pokemon.data";
import { PokemonType } from "../../entities/pokemon";

describe("List pokemon by type", () => {
  let pokemonGateway: InMemoryPokemonGateway;
  beforeEach(() => {
    pokemonGateway = new InMemoryPokemonGateway();
  });
  // Tests about the type
  describe("Type does not exist", function () {
    it("should return an error if passing a wrong type", async () => {
      expect(() =>
        pokemonGateway.getPokemonByType("fre" as PokemonType)
      ).toThrow("fre is invalid");
    });
  });
  //Tests with GHOST Type
  describe("test the ghost type research", function () {
    it("should have [] when there is no GHOST pokemon", async () => {
      expect(await pokemonGateway.getPokemonByType(PokemonType.GHOST)).toEqual(
        []
      );
    });
    it("should list all pokemons that belong to the type GHOST", async () => {
      pokemonGateway.feedWith(gastly, pikachu, clefairy, haunter);
      expect(await pokemonGateway.getPokemonByType(PokemonType.GHOST)).toEqual([
        gastly,
        haunter,
      ]);
    });
  });
});
