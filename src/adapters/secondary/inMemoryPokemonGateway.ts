import { Pokemon } from "@/core/entities/pokemon";
import { PokemonNotFound } from "@/core/errors/pokemonNotFound";
import { PokemonGateway } from "@/core/gateways/pokemonGateway";
import { InvalidId } from "@/core/errors/invalidId";

export class InMemoryPokemonGateway implements PokemonGateway {
  private pokemon: Array<Pokemon> = [];

  public listAll(): Promise<Array<Pokemon>> {
    return Promise.resolve(this.pokemon);
  }

  feedWith(...pokemon: Array<Pokemon>) {
    this.pokemon = pokemon;
  }

  public findOne(id: number): Promise<Pokemon> {
    if (isNaN(id) || id < 1) {
      throw new InvalidId(id);
    }

    const found: Pokemon | undefined = this.pokemon.find(
      (pokemon: Pokemon) => pokemon.id === id
    );

    if (!found) {
      throw new PokemonNotFound(id);
    }

    return Promise.resolve(found);
  }
}
