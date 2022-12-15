import express from "express";

const app = express();

const getFolder: string = './routes/get/';

//Require All get Folders
require(`${getFolder}getPokemonList`)(app);
require(`${getFolder}getPokemonById`)(app);
require(`${getFolder}getPokemonByTypes`)(app);
require(`${getFolder}getTypesList`)(app);

const port = 3001
app.use(express.json());

const HelloWorld = (req: any, res: any)=>{
    res.send("Hello World!");
}
app.get("/", HelloWorld);

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})

export default app
