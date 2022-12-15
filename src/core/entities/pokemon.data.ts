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
export const haunter: Pokemon = {
  id: 93,
  name: "Haunter",
  weight: 1,
  description: "Clefairy",
  types: [PokemonType.POISON, PokemonType.GHOST],
};
