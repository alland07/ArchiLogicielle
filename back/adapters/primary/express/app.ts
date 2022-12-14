import express from 'express';
import { Product } from "../../../core/entities/product";
import { InMemoryProductGateway } from "../../secondary/inMemoryProductGateway";
import { ProductGateway } from "../../../core/gateways/productGateway";
import { listAllProducts } from "../../../core/usecases/list-all-products/listAllProducts";
import { NodeCryptographyGateway } from "../../secondary/nodeCryptographyGateway";

const app: express.Express = express();

app.get('/products', async (req, res) => {
  const productGateway: ProductGateway = new InMemoryProductGateway(new NodeCryptographyGateway());
  const products: Array<Product> = await listAllProducts(productGateway);
  res.send(products);
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
