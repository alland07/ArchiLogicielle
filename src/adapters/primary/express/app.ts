import 'module-alias/register'
import express from "express";
import moduleAlias from "module-alias";
import path from "path";
import {Pokemon} from "@/core/entities/pokemon";
import {listAllPokemon} from "@/core/usecases/list-all-pokemon/listAllPokemon";
import {pokemonGateway} from "@/adapters/primary/dependencies";
// This needs to come first for resolving aliases
// moduleAlias.addAlias("@", path.join(__dirname, "..", "..", "..", "..", "src"));

export const app = express();

// require('./pokemon')(app);

const port = 3001
app.use(express.json());

const HelloWrl = (req: any, res: any)=>{
    res.send("Hello World!");
}
app.get("/", HelloWrl);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

export default app
