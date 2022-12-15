import 'module-alias/register'
import {getPokemonByType} from "@/core/usecases/get-pokemon-by-type/getPokemonByType";
import {pokemonGateway} from "@/adapters/primary/dependencies";
import {Pokemon, PokemonType} from "@/core/entities/pokemon";
import {TypeDoesNotExist} from "@/core/errors/typeDoesNotExist";
import app from "@/adapters/primary/express/app";
import express from "express";

/**
 * Get the pokemon with current type
 */
app.get("/pokemon/type/:type", (req, res) => {
    const type = req.params.type;
    getPokemonByType(pokemonGateway, type as PokemonType)
        .then((pokemons: Pokemon[]) => res.send(pokemons))
        .catch((error) => {
            if (error instanceof TypeDoesNotExist) {
                res.status(400).send(error.message);
            } else {
                res.status(500).send("Internal server error");
            }
        });
});