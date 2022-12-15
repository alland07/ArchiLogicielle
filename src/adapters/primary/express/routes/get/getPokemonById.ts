import 'module-alias/register'
import {pokemonGateway} from "@/adapters/primary/dependencies";
import {PokemonNotFound} from "@/core/errors/pokemonNotFound";
import {InvalidId} from "@/core/errors/invalidId";
import app from "@/adapters/primary/express/app";
import {getOnePokemon} from "@/core/usecases/get-one-pokemon/getOnePokemon";
import {Express} from "express";

module.exports = (app: Express) => {
  /**
   * Get a pokemon with his id
   */
  app.get("/pokemon/:id", (req, res) => {
    const id = parseInt(req.params.id);
    getOnePokemon(pokemonGateway, id)
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
};
