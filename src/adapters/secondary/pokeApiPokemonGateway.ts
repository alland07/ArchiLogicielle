import { PokemonGateway } from "@/core/gateways/pokemonGateway";
import { Pokemon, PokemonType } from "@/core/entities/pokemon";
import { TypeDoesNotExist } from "@/core/errors/typeDoesNotExist";

export class PokeApiPokemonGateway implements PokemonGateway {
  public findOne(id: number): Promise<Pokemon> {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => response.json())
      .then((data: ApiPokemon) => this.toPokemon(data));
  }

  public async listAll(): Promise<Array<Pokemon>> {
    const pokemonsFromApi: ApiResource[] = await axios.get(
      "https://pokeapi.co/api/v2/pokemon", { headers: { "Accept-Encoding": "gzip,deflate,compress" } }
    )
      .then((response) => response.data)
      .then((data: { results: ApiResource[] }) => data.results.sort((a, b) => a.id - b.id););

    return Promise.all(
      pokemonsFromApi.map((pokemon) =>
        axios.get(pokemon.url, { headers: { "Accept-Encoding": "gzip,deflate,compress" } })
          .then((response) => response.data)
          .then((data: ApiPokemon) => this.toPokemon(data))
      )
    );
  }

  public async getPokemonByType(type: PokemonType): Promise<Array<Pokemon>> {
    const pokemons: Pokemon[] = await this.listAll();
    return pokemons.filter((pokemon) => pokemon.types.includes(type));
  }

  private toPokemon(data: ApiPokemon): Pokemon {
    return {
      id: data.id,
      name: data.name,
      weight: data.weight,
      types: data.types.map(
        (type: ApiPokemonType) => type.type.name as PokemonType
      ),
      description: data.name,
    };
  }
}

interface ApiPokemon {
  id: number;
  name: string;
  weight: number;
  types: ApiPokemonType[];
}
interface ApiPokemonType {
  slot: number;
  type: ApiResource;
}

interface ApiResource {
  name: string;
  url: string;
}
