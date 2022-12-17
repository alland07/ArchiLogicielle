export interface Pokemon {
  /**
   * The Pokemon's id in the pokedex
   */
  id: number;
  name: string;
  weight: number;
  description: string;
  types: PokemonType[];
}

export enum PokemonType {
  "NORMAL" = "normal",
  "FIRE" = "fire",
  "WATER" = "water",
  "GRASS" = "grass",
  "ELECTRIC" = "electric",
  "ICE" = "glace",
  "FIGHTING" = "fighting",
  "POISON" = "poison",
  "GROUND" = "ground",
  "FLYING" = "flying",
  "PSYCHIC" = "psychic",
  "BUG" = "bug",
  "ROCK" = "rock",
  "GHOST" = "ghost",
  "DARK" = "dark",
  "DRAGON" = "dragon",
  "STEEL" = "steel",
  "FAIRY" = "fairy",
}
