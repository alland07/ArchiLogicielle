import 'module-alias/register'
import app from "@/adapters/primary/express/app";
import express from "express";
import {Pokemon, PokemonType} from "@/core/entities/pokemon";
import {pokemonGateway} from "@/adapters/primary/dependencies";
import {getAllTypes} from "@/core/usecases/get-all-types/getAllTypes";

app.get("/pokemon/types", (req, res) => {
    getAllTypes(pokemonGateway)
        .then((data: any) => res.send(data))
        .catch((error: { message: string }) => {
            res.status(400).send(error.message);
        });
});