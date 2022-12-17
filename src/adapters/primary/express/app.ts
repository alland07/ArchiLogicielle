import express from "express";
import moduleAlias from "module-alias";
import path from "path";

// This needs to come first for resolving aliases
moduleAlias.addAlias("@", path.join(__dirname, "..", "..", "..", "..", "src"));

const app = express();

const getFolder: string = './routes/get/';

const port = 3001
app.use(express.json());

const HelloWorld = (req: any, res: any)=>{
    res.send("Hello World!");
}
app.get("/", HelloWorld);


//Require All get Folders
require(`${getFolder}getPokemonList`)(app);
require(`${getFolder}getPokemonById`)(app);
require(`${getFolder}getPokemonByTypes`)(app);
require(`${getFolder}getTypesList`)(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})

export default app
