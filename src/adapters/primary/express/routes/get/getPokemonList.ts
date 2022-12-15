
import {Pokemon} from "@/core/entities/pokemon";
import {listAllPokemon} from "@/core/usecases/list-all-pokemon/listAllPokemon";
import {pokemonGateway} from "@/adapters/primary/dependencies";
import app from "@/adapters/primary/express/app";

/**
 * Pokemon list
 */
app.get("/pokemon", async (req, res) => {
    const pokemons: Pokemon[] = await listAllPokemon(pokemonGateway);
    res.send(pokemons);
});

