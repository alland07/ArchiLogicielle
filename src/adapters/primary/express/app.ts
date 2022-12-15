import express from "express";
import { createServer } from "http";
import { Pokemon, PokemonType } from "@/core/entities/pokemon";
import { pokemonGateway } from "@/adapters/primary/dependencies";

const app = express();
const server = createServer(app);

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/pokemons", async (req, res) => {
  const pokemons: Pokemon[] = await pokemonGateway.listAll();
  res.send(pokemons);
});

app.get("/pokemons/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id) || id <= 0) {
    res.status(400).send("Invalid id");
  }

  const pokemon = await pokemonGateway.findOne(id);
  res.send(pokemon);
});

app.get("/pokemons/type/:type", async (req, res) => {
  const type = req.params.type;
  if (!Object.values(PokemonType).includes(type as PokemonType)) {
    res.status(400).send("Invalid type");
  }

  const pokemons = await pokemonGateway.getPokemonByType(type as PokemonType);
  res.send(pokemons);
});
