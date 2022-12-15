import {Express} from "express";
import {pokemonGateway} from "@/adapters/primary/dependencies";
import {getAllTypes} from "@/core/usecases/get-all-types/getAllTypes";

module.exports = (app: Express) => {
  /**
   * Get a list of all available pokemon types
   */
  app.get("/types", (req, res) => {
    getAllTypes(pokemonGateway)
      .then((data: any) => res.send(data))
      .catch((error: { message: string }) => {
        res.status(400).send(error.message);
      });
  });
};
