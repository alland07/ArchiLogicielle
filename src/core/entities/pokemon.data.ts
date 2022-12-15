import { Pokemon, PokemonType } from "@/core/entities/pokemon";

export const bulbasaur: Pokemon = {
  id: 1,
  name: "Bulbasaur",
  types: [PokemonType.GRASS],
  weight: 69,
  description: "",
};
export const pikachu: Pokemon = {
  id: 25,
  name: "Pikachu",
  weight: 60,
  description: "Pika Pika",
  types: [PokemonType.ELECTRIC],
};
export const clefairy: Pokemon = {
  id: 35,
  name: "Clefairy",
  weight: 75,
  description: "Clefairy",
  types: [PokemonType.FAIRY],
};

export const gastly: Pokemon = {
  id: 92,
  name: "Gastly",
  weight: 1,
  description: "gastly",
  types: [PokemonType.POISON, PokemonType.GHOST],
};

export const haunter: Pokemon = {
  id: 93,
  name: "Haunter",
  weight: 1,
  description: "Haunter",
  types: [PokemonType.POISON, PokemonType.GHOST],
};

export const gengar: Pokemon = {
  id: 94,
  name: "Gengar",
  weight: 405,
  description: "gengar",
  types: [PokemonType.POISON, PokemonType.GHOST],
};
