import express from "express";
import { Pokemon, PokemonType } from "@/core/entities/pokemon";
import { pokemonGateway } from "@/adapters/primary/dependencies";
import { TypeDoesNotExist } from "@/core/errors/typeDoesNotExist";
import { PokemonNotFound } from "@/core/errors/pokemonNotFound";
import { InvalidId } from "@/core/errors/invalidId";

export const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/pokemon", async (req, res) => {
  const pokemon: Pokemon[] = await pokemonGateway.listAll();
  res.send(pokemon);
});

app.get("/pokemon/:id", (req, res) => {
  const id = parseInt(req.params.id);
  pokemonGateway
    .findOne(id)
    .then((pokemon) => res.send(pokemon))
    .catch((error) => {
      if (error instanceof PokemonNotFound) {
        res.status(404).send(error.message);
      } else if (error instanceof InvalidId) {
        res.status(400).send(error.message);
      } else {
        res.status(500).send(error.message);
      }
    });
});

app.get("/pokemon/type/:type", (req, res) => {
  const type = req.params.type;
  pokemonGateway
    .getPokemonByType(type as PokemonType)
    .then((pokemons: Pokemon[]) => res.send(pokemons))
    .catch((error) => {
      if (error instanceof TypeDoesNotExist) {
        res.status(400).send(error.message);
      } else {
        res.status(500).send("Internal server error");
      }
    });
});
