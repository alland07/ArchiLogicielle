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
  "NORMAL" = "Normal",
  "FIRE" = "Feu",
  "WATER" = "Eau",
  "GRASS" = "Plante",
  "ELECTRIC" = "Electrique",
  "ICE" = "Glace",
  "FIGHTING" = "Combat",
  "POISON" = "Poison",
  "GROUND" = "Sol",
  "FLYING" = "Vol",
  "PSYCHIC" = "Psy",
  "BUG" = "Insecte",
  "ROCK" = "Roche",
  "GHOST" = "Spectre",
  "DARK" = "Ténèbre",
  "DRAGON" = "Dragon",
  "STEEL" = "Acier",
  "FAIRY" = "Fée",
}
